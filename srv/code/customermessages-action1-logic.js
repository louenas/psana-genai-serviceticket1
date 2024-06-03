const { s4HcpServiceOrderOdata } = require('../external/odata-client/S4HCP_ServiceOrder_Odata');
const lLMProxy = require('./genAIHubProxyDirect');

/**
 * Function to generate a troubleshooting response from FAQ embedding and a template
 * @On(event = { "Action1" }, entity = "productSupportSrv.CustomerMessages")
 * @param {Object} request - User information, tenant-specific CDS model, headers and query parameters
*/
module.exports = async function (request) {
    try {
        // Extract the customer message ID from the request parameters
        const ID = request._params[0];

        // Fetch the customer message from the database using the ID
        const customerMessage = await SELECT.one.from('productSupport.CustomerMessages').where({ ID: ID });
        const attachedSO = customerMessage.a_ServiceOrder_ServiceOrder;
        let soContext = "";

        // If there is an attached service order, fetch its details
        if (attachedSO) {
            const { serviceOrderApi } = s4HcpServiceOrderOdata();
            const result = await serviceOrderApi
                .requestBuilder()
                .getByKey(attachedSO)
                .select(
                    serviceOrderApi.schema.ALL_FIELDS,
                    serviceOrderApi.schema.TO_TEXT
                )
                .execute({ destinationName: 'S4HCP-ServiceOrder-Odata_Clone' });

            // Extract the long text from the service order and join it into a single string
            soContext = result.toText.map(item => `${item.longText}`).join(' ');
        }

        const fullMessageCustomerLang = customerMessage.fullMessageTextCustomerLanguage;
        const customerMessageCategory = customerMessage.category;
        const customerMessageSentiment = customerMessage.sentiment;
        let replyPrompt = "";
        let messageType = "";

        // Determine the type of message to generate based on the category and sentiment
        switch (customerMessageCategory) {
            case "Technical":
                messageType = "a helpful message including the troubleshooting procedure";
                // Embed the customer message to find relevant FAQs
                let fullMessageCustomerLangEmbedding = await lLMProxy.embed(request, fullMessageCustomerLang, process.env.textEmbeddingAda002Endpoint);
                let fullMessageCustomerLangEmbeddingStr = JSON.stringify(fullMessageCustomerLangEmbedding);
                let relevantFAQs = await SELECT`id, issue, question, answer`.from('productSupport.ProductFAQ').where`cosine_similarity(embedding, to_real_vector(${fullMessageCustomerLangEmbeddingStr})) > 0.7`;
                console.log(`similar FAQs: ${relevantFAQs[0]?.issue} ${relevantFAQs[0]?.question}`);

                replyPrompt = `generate ${messageType} to the newCustomerMessage based on previousCustomerMessages and relevantFAQItem: newCustomerMessage: ${fullMessageCustomerLang}`;
                if (soContext) replyPrompt += `previousCustomerMessages: ${soContext}`;
                replyPrompt += `relevantFAQItem: ${relevantFAQs[0]?.question + " " + relevantFAQs[0]?.answer}`;
                break;

            default:
                // Generate a different prompts type based on the sentiment
                if (customerMessageSentiment == "Negative") {
                    messageType = "a 'we are sorry' note";
                } else {
                    messageType = "a gratitude note";
                }

                replyPrompt = `generate ${messageType} to the newCustomerMessage based on previousCustomerMessages: newCustomerMessage: ${fullMessageCustomerLang}`;
                if (soContext) replyPrompt += `previousCustomerMessages: ${soContext}`;
                break;
        }

        // Generate the reply body
        const replyBody = await lLMProxy.completion(request, replyPrompt, process.env.gpt35TurboEndpoint);

        // Update the customer message in the database with the generated reply
        await UPDATE('productSupport.CustomerMessages')
            .set({ suggestedResponseTextEnglish: replyBody })
            .where({ ID: ID });

        console.log(`CustomerMessages with ID ${ID} updated with a reply to the customer.`);

    } catch (err) {
        console.error(JSON.stringify(err));

        let message = err.rootCause?.message;
        request.error({
            code: "",
            message: message,
            target: "",
            status: 500,
        });
    }
}