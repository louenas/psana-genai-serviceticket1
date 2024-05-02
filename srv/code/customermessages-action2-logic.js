const lLMProxy = require('./genAIHubProxyDirect');

/**
 * 
 * @On(event = { "Action2" }, entity = "productSupportSrv.CustomerMessages")
 * @param {Object} request - User information, tenant-specific CDS model, headers and query parameters
*/
module.exports = async function(request) {
    const { ID } = request._params[0];
    const CustomerMessages = await SELECT.one.from('productSupportSrv.CustomerMessages').where({ ID: ID });

    const titleOriginal = CustomerMessages.messageTitleCustomerLanguage;
    const summaryOriginal = CustomerMessages.summaryCustomerLanguage;
    const fullMessageOriginal = CustomerMessages.fullMessageTextCustomerLanguage;

    try {
       
    } catch (error) {
        console.error('Error:', error.message);
        request.error(error.code, error.message);
    }
}