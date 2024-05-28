const lLMProxy = require('./genAIHubProxyDirect');

/**
 * 
 * @On(event = { "Action3" }, entity = "productSupportSrv.CustomerMessages")
 * @param {Object} request - User information, tenant-specific CDS model, headers and query parameters
*/
module.exports = async function (request) {
    try {
        //request._params[0]
        const ID = request._params[0];
        const customerMessages = await SELECT.one.from('productSupport.CustomerMessages').where({ ID: ID });

        const titleOriginal = customerMessages.messageTitleCustomerLanguage;
        const summaryOriginal = customerMessages.summaryCustomerLanguage;
        const fullMessageOriginal = customerMessages.fullMessageTextCustomerLanguage;


        const promt = `Translate titleOriginal and summaryOriginal and fullMessageOriginal to English and return the result in the provided JSON template below:
                        titleOriginal: ${titleOriginal}
                        summaryOriginal: ${summaryOriginal}
                        fullMessageOriginal: ${fullMessageOriginal}
                        JSON template: {titleEnglish: Text, summaryEnglish: Text, fullMessageEnglish: Text}`;

        const translationRaw = await lLMProxy.completion(request, promt, process.env.gpt35TurboEndpoint);
        const translationJSON = JSON.parse(translationRaw);
        const titleEnglish = translationJSON["titleEnglish"];
        console.log(`titleEnglish: ${titleEnglish}`)
        const summaryEnglish = translationJSON["summaryEnglish"];
        console.log(`summaryEnglish: ${summaryEnglish}`)
        const fullMessageEnglish = translationJSON["fullMessageEnglish"];
        console.log(`fullMessageEnglish: ${fullMessageEnglish}`)

        if (customerMessages) {
            await UPDATE('productSupport.CustomerMessages')
                .set({ title: titleEnglish })
                .set({ summary: summaryEnglish })
                .set({ fullMessageTextEnglish: fullMessageEnglish })
                .where({ ID: ID });
            console.log(`CustomerMessages with ID ${ID} updated`);
        } else {
            console.error(`No CustomerMessages entity found with the provided ID: ${ID}`);
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