const { serviceOrderService } = require("@sap/cloud-sdk-vdm-service-order-service");
const lLMProxy = require('./genAIHubProxyDirect');

/**
 * generate troubleshooting response out of FAQ embeeding and a template
 * @On(event = { "Action1" }, entity = "productSupportSrv.CustomerMessages")
 * @param {Object} request - User information, tenant-specific CDS model, headers and query parameters
*/
module.exports = async function (request) {
    try {
        const ID = request._params[0];

        const customerMessage = await SELECT.one.from('productSupport.CustomerMessages').where({ ID: ID });
        const attachedSO = customerMessage.a_ServiceOrder_ServiceOrder;
        let soContext = "";

        if (attachedSO) {
            const { serviceOrderApi } = serviceOrderService();
            //const result = await serviceOrderApi.requestBuilder().getAll().top(5).execute({ destinationName: 'S4HCP-ServiceOrder-Odata' });
            //const result = await serviceOrderApi.requestBuilder().getAll().top(5).execute({ destinationName: 'S4HCP-ServiceOrder-Odata_Clone' });
            const result = await serviceOrderApi.requestBuilder().getByKey(attachedSO).select(
                serviceOrderApi.schema.ALL_FIELDS,
                serviceOrderApi.schema.TO_TEXT
            ).execute({ destinationName: 'S4HCP-ServiceOrder-Odata_Clone' });

            soContext = result.toText.map(item =>
                `${item.longText}`).join(' ');
        }

        const fullMessageCustomerLang = customerMessage.fullMessageTextCustomerLanguage;
        const customerMessageCategory = customerMessage.category;
        const customerMessageSentiment = customerMessage.sentiment;
        let replyPrompt = "";
        let messageType = "";

        switch (customerMessageCategory) {
            case "Technical":
                messageType = "a helpfull message including the troubleshooting procedure"
                let fullMessageCustomerLangEmbedding = await lLMProxy.embed(request, fullMessageCustomerLang, process.env.textEmbeddingAda002Endpoint);
                let fullMessageCustomerLangEmbeddingStr = JSON.stringify(fullMessageCustomerLangEmbedding);
                let releventFAQs = await SELECT`id, issue, question, answer`.from('productSupport.ProductFAQ').where`cosine_similarity(embedding, to_real_vector(${fullMessageCustomerLangEmbeddingStr})) > 0.7`;
                console.log(`similar FAQs: ${releventFAQs[0]?.issue} ${releventFAQs[0]?.question}`);

                replyPrompt = `generate ${messageType} to the newCustomerMessage based on previousCustomerMessages and releventFAQItem: newCustomerMessage: ${fullMessageCustomerLang}`;
                if (soContext) replyPrompt += `previousCustomerMessages: ${soContext}`;
                replyPrompt += `releventFAQItem: ${releventFAQs[0]?.question + " " + releventFAQs[0]?.answer}`;

                break;

            default:
                if (customerMessageSentiment == "Negative") {
                    messageType = "a 'we are sorry' note"
                } else {
                    messageType = "a gratitude note"
                }

                replyPrompt = `generate ${messageType} to the newCustomerMessage based on previousCustomerMessages: newCustomerMessage: ${fullMessageCustomerLang}`;
                if (soContext) replyPrompt += `previousCustomerMessages: ${soContext}`;

                break;
        }

        const replyBoby = await lLMProxy.completion(request, replyPrompt, process.env.gpt35TurboEndpoint);

        await UPDATE('productSupport.CustomerMessages')
            .set({ suggestedResponseTextEnglish: replyBoby })
            .where({ ID: ID });

        console.log(`CustomerMessages with ID ${ID} updated with a reply to the customer.`);

    } catch (err) {
        console.error(JSON.stringify(err));

        message = err.rootCause?.message;
        request.error({
            code: "",
            message: message,
            target: "",
            status: 500,
        });
    }
}