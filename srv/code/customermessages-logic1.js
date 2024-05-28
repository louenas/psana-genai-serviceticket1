const lLMProxy = require('./genAIHubProxyDirect');
const utils = require('./utils');

/**
 * @After(event = { "READ" }, entity = "productSupportSrv.CustomerMessages")
 * @param {(Object|Object[])} results - For the After phase only: the results of the event processing
 * @param {Object} request - User information, tenant-specific CDS model, headers and query parameters
*/
module.exports = async function (results, request) {
    try {
        //TODO find the right place for this
        if (results && results.length > 1) { //find a good way to know if this is for a list or for one so
            try {
                //generate embeddings for FAQ 
                let productFAQ = await SELECT.from('productSupport.ProductFAQ').forUpdate();

                for (const faq of productFAQ) {
                    const ID = faq.ID;
                    const issue = faq.issue;
                    const question = faq.question;
                    const answer = faq.answer;
                    const storedEmbedding = faq.embedding;
                    if (!storedEmbedding) {
                        let embedding = await lLMProxy.embed(request, issue + " " + question + " " + answer, process.env.textEmbeddingAda002Endpoint);
                        //await UPDATE("productSupport.ProductFAQ",ID).with({embedding:`TO_REAL_VECTOR(${embedding})`});
                        //await UPDATE("productSupport.ProductFAQ",ID).with({embedding:`TO_REAL_VECTOR('${embedding}')`});
                        // let embeddingStr = JSON.stringify(embedding);
                        // await UPDATE("productSupport.ProductFAQ",ID).with({embedding:`TO_REAL_VECTOR(${embeddingStr})`});
                        await UPDATE("productSupport.ProductFAQ", ID).with({ embedding: utils.array2VectorBuffer(embedding) });
                    }
                }

            } catch (err) {
                console.error(JSON.stringify(err));
            }

            try {
                // categorize, classify urgency and sentiment, summarize full text
                for (const oneMessage of results) {

                    const ID = oneMessage["ID"];

                    const customerMessage = await SELECT.one.from('productSupport.CustomerMessages').where({ ID: ID });
                    if (customerMessage) {
                        const existingFullMessageTextCustomerLanguage = customerMessage.fullMessageTextCustomerLanguage;
                        const existingMessageSummary = customerMessage.summary;
                        const existingCategory = customerMessage.category;
                        const existingUrgency = customerMessage.urgency;
                        const existingSentiment = customerMessage.sentiment;
                        if (!existingMessageSummary || !existingCategory || !existingUrgency || !existingSentiment) {
                            const promt = `Categorize the fullMessageText into one of (Technical, Delivery, Service, Billing). 
                                            Classify urgency of the fullMessageText into one of (High, Medium, Low). 
                                            Classify sentiment of the fullMessageText into one of (Negative, Positive, Neutral). 
                                            Summarize fullMessageText into 20 words max and keep the original language i.e. if fullMessageText is provided in French then produce the messageSummary in French as well. 
                                            Return the result in the provided JSON template below:
                                            fullMessageText: ${existingFullMessageTextCustomerLanguage}
                                            JSON template: {messageSummary: Text, category : Text, urgency: Text, sentiment: Text}`;

                            const resultRaw = await lLMProxy.completion(request, promt, process.env.gpt35TurboEndpoint);
                            const resultJSON = JSON.parse(resultRaw);
                            const messageSummary = resultJSON["messageSummary"];
                            console.log(`messageSummary: ${messageSummary}`);
                            const category = resultJSON["category"];
                            console.log(`category: ${category}`);
                            const urgency = resultJSON["urgency"];
                            console.log(`urgency: ${urgency}`);
                            const sentiment = resultJSON["sentiment"];
                            console.log(`sentiment: ${sentiment}`);

                            await UPDATE('productSupport.CustomerMessages')
                                .set({ summaryCustomerLanguage: messageSummary })
                                .set({ category: category })
                                .set({ urgency: urgency })
                                .set({ sentiment: sentiment })
                                .where({ ID: ID });

                            console.log(`CustomerMessages with ID ${ID} updated`);
                        } else {
                            console.log(`CustomerMessage ${ID} already summarized, categorized, classified, sentiment analyzed`);
                        }
                    } else {
                        console.error(`No CustomerMessages entity found with the provided ${ID}`);
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

        message = err.rootCause?.message;
        request.error({
            code: "",
            message: message,
            target: "",
            status: 500,
        });
    }
}