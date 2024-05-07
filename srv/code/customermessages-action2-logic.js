const lLMProxy = require('./genAIHubProxyDirect');
const { serviceOrderService } = require("@sap/cloud-sdk-vdm-service-order-service");

/**
 * 
 * @On(event = { "Action2" }, entity = "productSupportSrv.CustomerMessages")
 * @param {Object} request - User information, tenant-specific CDS model, headers and query parameters
*/
module.exports = async function (request) {
  const { ID } = request._params[0];
  const CustomerMessages = await SELECT.one.from('productSupportSrv.CustomerMessages').where({ ID: ID });

  const titleOriginal = CustomerMessages.messageTitleCustomerLanguage;
  const summaryOriginal = CustomerMessages.summaryCustomerLanguage;
  const fullMessageOriginal = CustomerMessages.fullMessageTextCustomerLanguage;

  try {
    const { serviceOrderApi, serviceOrderTextApi } = serviceOrderService();

    //const result = await serviceOrderApi.requestBuilder().getAll().top(5).execute({ destinationName: 'S4HCP-ServiceOrder-Odata' });
    // const result = await serviceOrderApi.requestBuilder().getAll().top(5).execute({ destinationName: 'S4HCP-ServiceOrder-Odata_Clone' });
    // console.log(result);

    var toTextEntity = serviceOrderTextApi.entityBuilder().language('EN').longText('Test longText1').build();

    var serviceOrderEntiry = serviceOrderApi.entityBuilder().serviceOrderType('SVO1').serviceOrderDescription('Louenas Test Service Order1').language('EN').serviceDocumentPriority('5')
      .salesOrganization('1710').distributionChannel('10').division('00').soldToParty('17100002').toText([toTextEntity]).build();

    try {
      const result = await serviceOrderApi
        .requestBuilder()
        .create(serviceOrderEntiry)
        .execute({ destinationName: 'S4HCP-ServiceOrder-Odata_Clone' });

      const soResult = result.toJSON();
      const soId = soResult.serviceOrder;
      console.log("Sales Order Id: ", soId);
    } catch (oDataErr) {
      console.error(JSON.stringify(oDataErr));

      message = oDataErr.rootCause?.message;
      request.error({
        code: "Error in S4HC Sales Order OData Call",
        message: message,
        target: "",
        status: 500,
      });
    }
  } catch (err) {
    console.error(err.message);
    request.error(err.code, err.message);
  }
}