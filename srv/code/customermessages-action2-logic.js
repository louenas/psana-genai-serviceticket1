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
    const { serviceOrderApi, serviceOrderTextApi, serviceOrderItemApi, serviceOrderPersonRespApi } = serviceOrderService();

    var toTextEntity = serviceOrderTextApi
    .entityBuilder()
    .language('EN')
    .longText('Test longText1')
    .build();

    var toItemDurationEntity = serviceOrderItemApi
    .entityBuilder()
    .serviceOrderItemDescription('Louenas item desc test1')
    .product('SRV_01')
    .serviceDuration(1)
    .serviceDurationUnit('HR')
    .build();

    var toItemQuantityEntity = serviceOrderItemApi
    .entityBuilder()
    .serviceOrderItemDescription('Louenas item desc test1')
    .product('SRV_02')
    .quantity(1)
    .quantityUnit('EA')
    .build();

    var toPersonRespEntity = serviceOrderPersonRespApi
    .entityBuilder()
    .personResponsible('9980003640')
    .build();

    var serviceOrderEntiry = serviceOrderApi
    .entityBuilder()
    .serviceOrderType('SVO1')
    .serviceOrderDescription('Louenas Test Service Order1')
    .language('EN')
    .serviceDocumentPriority('5')
    .salesOrganization('1710')
    .distributionChannel('10')
    .division('00')
    .soldToParty('17100002')
    .toText([toTextEntity])
    .toPersonResponsible([toPersonRespEntity])
    .toItem([toItemDurationEntity, toItemQuantityEntity])
    .build();

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