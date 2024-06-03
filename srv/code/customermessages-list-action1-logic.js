const lLMProxy = require('./genAIHubProxyDirect');

/**
 * 
 * @On(event = { "Action3" }, entity = "productSupportSrv.CustomerMessages")
 * @param {Object} request - User information, tenant-specific CDS model, headers and query parameters
*/
module.exports = async function (request) {
    try {
        // Extract the customer message ID from the request parameters
        const ID = request._params[0];

        // Fetch the customer message from the database using the ID
        const customerMessage = await SELECT.one.from('productSupport.CustomerMessages').where({ ID: ID });

        // Extract necessary information from the customer message
        const { 
            messageTitleCustomerLanguage: titleOriginal, 
            summaryCustomerLanguage: summaryOriginal, 
            fullMessageTextCustomerLanguage: fullMessageOriginal 
        } = customerMessage;

        // Create a prompt for translation
        const prompt = `Translate titleOriginal and summaryOriginal and fullMessageOriginal to English and return the result in the provided JSON template below:
                        titleOriginal: ${titleOriginal}
                        summaryOriginal: ${summaryOriginal}
                        fullMessageOriginal: ${fullMessageOriginal}
                        JSON template: {titleEnglish: Text, summaryEnglish: Text, fullMessageEnglish: Text}`;

        // Get the translation using the AI proxy
        const translationRaw = await lLMProxy.completion(request, prompt, process.env.gpt35TurboEndpoint);
        const translationJSON = JSON.parse(translationRaw);
        const { titleEnglish, summaryEnglish, fullMessageEnglish } = translationJSON;

        console.log(`titleEnglish: ${titleEnglish}`);
        console.log(`summaryEnglish: ${summaryEnglish}`);
        console.log(`fullMessageEnglish: ${fullMessageEnglish}`);

        // Update the customer message with the translated text if it exists
        if (customerMessage) {
            await UPDATE('productSupport.CustomerMessages')
                .set({ title: titleEnglish, summary: summaryEnglish, fullMessageTextEnglish: fullMessageEnglish })
                .where({ ID: ID });

            console.log(`CustomerMessages with ID ${ID} updated`);
        } else {
            console.error(`No CustomerMessages entity found with the provided ID: ${ID}`);
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