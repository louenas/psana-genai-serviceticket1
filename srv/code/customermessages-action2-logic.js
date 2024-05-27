const lLMProxy = require('./genAIHubProxyDirect');
const { serviceOrderService } = require("@sap/cloud-sdk-vdm-service-order-service");

/**
 * Create Service Order in S/4HANA Cloud
 * @On(event = { "Action2" }, entity = "productSupportSrv.CustomerMessages")
 * @param {Object} request - User information, tenant-specific CDS model, headers and query parameters
*/
module.exports = async function (request) {
  try {
    const ID  = request._params[0];

    const customerMessage = await SELECT.one.from('productSupportSrv.CustomerMessages').where({ ID: ID });

    const titleOriginal = customerMessage.messageTitleCustomerLanguage;
    const summaryOriginal = customerMessage.summaryCustomerLanguage;
    const fullMessageOriginal = customerMessage.fullMessageTextCustomerLanguage;

    const titleEnglish = customerMessage.title;
    const fullMessageTextEnglish = customerMessage.fullMessageTextEnglish;
    const suggestedResponseTextEnglish = customerMessage.suggestedResponseTextEnglish;

    const { serviceOrderApi, serviceOrderTextApi, serviceOrderItemApi, serviceOrderPersonRespApi } = serviceOrderService();

    var toTextEntityIntial = serviceOrderTextApi
      .entityBuilder()
      .language('EN')
      .longText(fullMessageTextEnglish)
      .build();

    var toTextEntityAnswer = serviceOrderTextApi
      .entityBuilder()
      .language('EN')
      .longText(suggestedResponseTextEnglish)
      .build();

    var toItemDurationEntity = serviceOrderItemApi
      .entityBuilder()
      .serviceOrderItemDescription('Service Order duration')
      .product('SRV_01')
      .serviceDuration(1)
      .serviceDurationUnit('HR')
      .build();

    var toItemQuantityEntity = serviceOrderItemApi
      .entityBuilder()
      .serviceOrderItemDescription('Service Order number')
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
      .serviceOrderDescription(titleEnglish)
      .language('EN')
      .serviceDocumentPriority('5')
      .salesOrganization('1710')
      .distributionChannel('10')
      .division('00')
      .soldToParty('17100002')
      .toText([toTextEntityIntial, toTextEntityAnswer])
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

      await UPDATE('productSupportSrv.CustomerMessages')
        .set({ a_ServiceOrder_ServiceOrder: soId })
        .where({ ID: ID });

      console.log(`Service Order ${soId} created. CustomerMessage with ID ${ID} updated.`);

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
    request.error({
      code: "Error creating Service Order and/or updating customer message",
      message: err.message,
      target: "",
      status: 500,
    });
  }
}