const lLMProxy = require('./genAIHubProxyDirect');
const utils = require('./utils');

/**
 * @After(event = { "READ" }, entity = "productSupportSrv.CustomerMessages")
 * @param {(Object|Object[])} results - For the After phase only: the results of the event processing
 * @param {Object} request - User information, tenant-specific CDS model, headers and query parameters
*/
module.exports = async function (results, request) {
    try {
        // Check if results contain multiple messages
        if (results && results.length > 1) {
            try {
                // Generate embeddings for FAQ if not already stored
                let productFAQ = await SELECT.from('productSupport.ProductFAQ').forUpdate();
                for (const faq of productFAQ) {
                    const { ID, issue, question, answer, embedding: storedEmbedding } = faq;
                    if (!storedEmbedding) {
                        let embedding = await lLMProxy.embed(request, issue + " " + question + " " + answer, process.env.textEmbeddingAda002Endpoint);
                        await UPDATE("productSupport.ProductFAQ", ID).with({ embedding: utils.array2VectorBuffer(embedding) });
                    }
                }
            } catch (err) {
                console.error(JSON.stringify(err));
            }

            try {
                // Process each customer message in the results
                for (const oneMessage of results) {
                    const ID = oneMessage.ID;
                    const customerMessage = await SELECT.one.from('productSupport.CustomerMessages').where({ ID: ID });

                    if (customerMessage) {
                        const { fullMessageTextCustomerLanguage: fullMessage, summary, category, urgency, sentiment } = customerMessage;
                        
                        // Check if the message needs processing
                        if (!summary || !category || !urgency || !sentiment) {
                            const prompt = `Categorize the fullMessageText into one of (Technical, Delivery, Service, Billing). 
                                            Classify urgency of the fullMessageText into one of (High, Medium, Low). 
                                            Classify sentiment of the fullMessageText into one of (Negative, Positive, Neutral). 
                                            Summarize fullMessageText into 20 words max and keep the original language. 
                                            Return the result in the provided JSON template below:
                                            fullMessageText: ${fullMessage}
                                            JSON template: {messageSummary: Text, category : Text, urgency: Text, sentiment: Text}`;

                            const resultRaw = await lLMProxy.completion(request, prompt, process.env.gpt35TurboEndpoint);
                            const resultJSON = JSON.parse(resultRaw);
                            const { messageSummary, category, urgency, sentiment } = resultJSON;

                            await UPDATE('productSupport.CustomerMessages')
                                .set({ summaryCustomerLanguage: messageSummary, category, urgency, sentiment })
                                .where({ ID: ID });

                            console.log(`CustomerMessages with ID ${ID} updated`);
                        } else {
                            console.log(`CustomerMessage ${ID} already processed`);
                        }
                    } else {
                        console.error(`No CustomerMessages entity found with ID: ${ID}`);
                    }
                }
            } catch (err) {
                console.error(JSON.stringify(err));
            }
        } else {
            console.log(`A customer message details has been read.`);
        }
    } catch (err) {
        console.error(JSON.stringify(err));

        const message = err.rootCause?.message;
        request.error({
            code: "",
            message: message,
            target: "",
            status: 500,
        });
    }
}