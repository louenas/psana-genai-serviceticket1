const axios = require('axios');

const openAiApiUrl = 'https://api.openai.com/v1/chat/completions';
const apiKey = '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';

const headers = {
    'Authorization': `Bearer ${apiKey}`,
    'Content-Type': 'application/json',
};

/**
 * 
 * @On(event = { "Action1" }, entity = "productSupportSrv.CustomerMessages")
 * @param {Object} request - User information, tenant-specific CDS model, headers and query parameters
*/
module.exports = async function (request) {
    const { ID } = request._params[0];
    const CustomerMessages = await SELECT.one.from('productSupportSrv.CustomerMessages').where({ ID: ID });

    summuryOriginal = CustomerMessages.summaryCustomerLanguage

    const data = {
        model: "gpt-3.5-turbo",
        prompt: 'Translate the following text to English: ' + summuryOriginal,
        max_tokens: 150,
        temperature: 0.1
    };

    try {
        const response = await axios.post(openAiApiUrl, data, { headers });
        console.log('Response:', JSON.stringify(response.data.choices[0]));
        const summaryEnglish = response.data.choices[0].message.content;
        if (CustomerMessages) {
            await UPDATE('productSupportSrv.CustomerMessages')
                .set({ summary: summaryEnglish })
                .where({ ID: ID });
        } else {
            console.error('No CustomerMessages entity found with the provided ID');
        }
    } catch (error) {
        console.error('Error:', error.message);
    }

}