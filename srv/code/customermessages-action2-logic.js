const cds = require("@sap/cds");
const lLMProxy = require('./genAIHubProxyDirect');
const { serviceOrderService } = require("@sap/cloud-sdk-vdm-service-order-service");

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
        const { serviceOrderApi } = serviceOrderService()
        //const result = await serviceOrderApi.requestBuilder().getAll().top(5).execute({ destinationName: 'S4HCP-ServiceOrder-Odata' });
        const result = await serviceOrderApi.requestBuilder().getAll().top(5).execute({ destinationName: 'S4HCP-ServiceOrder-Odata_Clone' });
        console.log(result);
    
      } catch (error) {
        console.error('Error:', error);
      }
}