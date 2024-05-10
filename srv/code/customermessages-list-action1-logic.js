const lLMProxy = require('./genAIHubProxyDirect');

/**
 * 
 * @On(event = { "Action3" }, entity = "productSupportSrv.CustomerMessages")
 * @param {Object} request - User information, tenant-specific CDS model, headers and query parameters
*/
module.exports = async function(request) {
    const { ID } = request._params[0];
    const CustomerMessages = await SELECT.one.from('productSupportSrv.CustomerMessages').where({ ID: ID });

    const titleOriginal = CustomerMessages.messageTitleCustomerLanguage;
    const summaryOriginal = CustomerMessages.summaryCustomerLanguage;
    const fullMessageOriginal = CustomerMessages.fullMessageTextCustomerLanguage;

    try {
        const promt = `Translate titleOriginal and summaryOriginal and fullMessageOriginal to English and return the result in the provided JSON template below:
        titleOriginal: ${titleOriginal}
        summaryOriginal: ${summaryOriginal}
        fullMessageOriginal: ${fullMessageOriginal}
        JSON template: {titleEnglish: Text, summaryEnglish: Text, fullMessageEnglish: Text}
        `;

        const tranlationJSON = await lLMProxy.completion(request, promt, process.env.gpt35TurboEndpoint);

        const titleEnglish = tranlationJSON["titleEnglish"];
        console.log(`titleEnglish ${titleEnglish}`)
        const summaryEnglish = tranlationJSON["summaryEnglish"];
        console.log(`summaryEnglish ${summaryEnglish}`)
        const fullMessageEnglish = tranlationJSON["fullMessageEnglish"];
        console.log(`fullMessageEnglish ${fullMessageEnglish}`)

        if (CustomerMessages) {
            await UPDATE('productSupportSrv.CustomerMessages')
                .set({ title: titleEnglish })
                .set({ summary: summaryEnglish })
                .set({ fullMessageTextEnglish: fullMessageEnglish})
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