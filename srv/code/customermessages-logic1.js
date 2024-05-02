const { foreach } = require('@sap/cds');
const lLMProxy = require('./genAIHubProxyDirect');

/**
 * @After(event = { "READ" }, entity = "productSupportSrv.CustomerMessages")
 * @param {(Object|Object[])} results - For the After phase only: the results of the event processing
 * @param {Object} request - User information, tenant-specific CDS model, headers and query parameters
*/
module.exports = async function (results, request) {
    if (results && results.length > 1) {
        for (i = 0; i < results.length; i++) {
            const oneMessage = results[i];

            const ID = oneMessage["ID"];
            const summaryCustomerLanguage = oneMessage["summaryCustomerLanguage"];

            if (summaryCustomerLanguage == null || summaryCustomerLanguage.length == 0) {

                const CustomerMessages = await SELECT.one.from('productSupportSrv.CustomerMessages').where({ ID: ID });

                const fullMessageTextCustomerLanguage = CustomerMessages.fullMessageTextCustomerLanguage;

                try {
                    const promt = `Categorize the fullMessageText into one of (Technical, Delivery, Service, Billing). 
                Classify urgency of the fullMessageText into one of (High, Medium, Low). 
                Classify sentiment of the fullMessageText into one of (Negative, Positive, Neutral). 
                Summarize fullMessageText into 20 words max and keep the original language i.e. if fullMessageText is provided in French then produce the messageSummary in French as well. 
                Return the result in the provided JSON template below:
                fullMessageText: ${fullMessageTextCustomerLanguage}
                JSON template: {messageSummary: Text, category : Text, urgency: Text, sentiment: Text}
                `;

                    const resultJSON = await lLMProxy(request, promt);

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
                } catch (error) {
                    console.error('Error:', error.message);
                    request.error(error.code, error.message);
                }
            }
        }
    } else {
        console.log(`A customer message has been read.`);
    }
}