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
        if (results && results.length > 1) { //fid a good way to know if this is for a list or for one so
            try {
                //generate embeddings for FAQ 
                let productFAQ = await SELECT.from('productSupport.ProductFAQ').forUpdate();

                for (const faq of productFAQ) {
                    const ID = faq.ID;
                    const issue = faq.issue;
                    const question = faq.question;
                    const answer = faq.answer;
                    let embedding = await lLMProxy.embed(request, issue + " " + question + " " + answer, process.env.textEmbeddingAda002Endpoint);
                    //await UPDATE("productSupport.ProductFAQ",ID).with({embedding:`TO_REAL_VECTOR(${embedding})`});
                    //await UPDATE("productSupport.ProductFAQ",ID).with({embedding:`TO_REAL_VECTOR('${embedding}')`});
                    // let embeddingStr = JSON.stringify(embedding);
                    // await UPDATE("productSupport.ProductFAQ",ID).with({embedding:`TO_REAL_VECTOR(${embeddingStr})`});
                    await UPDATE("productSupport.ProductFAQ", ID).with({ embedding: utils.array2VectorBuffer(embedding) });
                }

            } catch (error) {
                console.error('Error:', error.message);
                throw error;
            }

            try {
                // categorize, classify urgency and sentiment, summarize full text
                for (i = 0; i < results.length; i++) {
                    const oneMessage = results[i];

                    const ID = oneMessage["ID"];

                    const CustomerMessages = await SELECT.one.from('productSupportSrv.CustomerMessages').where({ ID: ID });

                    const fullMessageTextCustomerLanguage = CustomerMessages.fullMessageTextCustomerLanguage;

                    const promt = `Categorize the fullMessageText into one of (Technical, Delivery, Service, Billing). 
                  Classify urgency of the fullMessageText into one of (High, Medium, Low). 
                  Classify sentiment of the fullMessageText into one of (Negative, Positive, Neutral). 
                  Summarize fullMessageText into 20 words max and keep the original language i.e. if fullMessageText is provided in French then produce the messageSummary in French as well. 
                  Return the result in the provided JSON template below:
                  fullMessageText: ${fullMessageTextCustomerLanguage}
                  JSON template: {messageSummary: Text, category : Text, urgency: Text, sentiment: Text}
                  `;

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

                    if (CustomerMessages) {
                        await UPDATE('productSupportSrv.CustomerMessages')
                            .set({ summaryCustomerLanguage: messageSummary })
                            .set({ category: category })
                            .set({ urgency: urgency })
                            .set({ sentiment: sentiment })
                            .where({ ID: ID });

                        console.log(`CustomerMessages with ID ${ID} updated`);
                    } else {
                        console.error('No CustomerMessages entity found with the provided ID');
                    }
                }
            } catch (error) {
                console.error('Error:', error.message);
                throw error;
            }
        } else {
            console.log(`A customer message has been read.`);
        }
    } catch (error) {
        console.error('Error:', error.message);
        request.error(error.code, error.message);
    }
}