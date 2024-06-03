const lLMProxy = require('./genAIHubProxyDirect');
const { s4HcpServiceOrderOdata } = require('../external/odata-client/S4HCP_ServiceOrder_Odata');

/**
 * Create Service Order in S/4HANA Cloud
 * @On(event = { "Action2" }, entity = "productSupportSrv.CustomerMessages")
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
      fullMessageTextCustomerLanguage: fullMessageOriginal,
      title: titleEnglish,
      fullMessageTextEnglish,
      suggestedResponseTextEnglish
    } = customerMessage;

    // Destructure service order APIs from the S4HCP service
    const { serviceOrderApi, serviceOrderTextApi, serviceOrderItemApi, serviceOrderPersonRespApi } = s4HcpServiceOrderOdata();

    // Build text entities for the service order
    const toTextEntityInitial = serviceOrderTextApi
      .entityBuilder()
      .language('EN')
      .longText(fullMessageTextEnglish)
      .build();

    const toTextEntityAnswer = serviceOrderTextApi
      .entityBuilder()
      .language('EN')
      .longText(suggestedResponseTextEnglish)
      .build();

    // Build item entities for the service order
    const toItemDurationEntity = serviceOrderItemApi
      .entityBuilder()
      .serviceOrderItemDescription('Service Order duration')
      .product('SRV_01')
      .serviceDuration(1)
      .serviceDurationUnit('HR')
      .build();

    const toItemQuantityEntity = serviceOrderItemApi
      .entityBuilder()
      .serviceOrderItemDescription('Service Order number')
      .product('SRV_02')
      .quantity(1)
      .quantityUnit('EA')
      .build();

    // Build person responsible entity for the service order
    const toPersonRespEntity = serviceOrderPersonRespApi
      .entityBuilder()
      .personResponsible('9980003640')
      .build();

    // Build the main service order entity
    const serviceOrderEntity = serviceOrderApi
      .entityBuilder()
      .serviceOrderType('SVO1')
      .serviceOrderDescription(titleEnglish)
      .language('EN')
      .serviceDocumentPriority('5')
      .salesOrganization('1710')
      .distributionChannel('10')
      .division('00')
      .soldToParty('17100002')
      .toText([toTextEntityInitial, toTextEntityAnswer])
      .toPersonResponsible([toPersonRespEntity])
      .toItem([toItemDurationEntity, toItemQuantityEntity])
      .build();

    // Create the service order in S/4HANA Cloud
    const result = await serviceOrderApi
      .requestBuilder()
      .create(serviceOrderEntity)
      .execute({ destinationName: 'S4HCP-ServiceOrder-Odata_Clone' });

    // Extract the service order ID from the result
    const soResult = result.toJSON();
    const soId = soResult.serviceOrder;
    console.log(`Created Service Order with ID: ${soId}`);

    // Update the customer message with the new service order ID
    await UPDATE('productSupport.CustomerMessages')
      .set({ a_ServiceOrder_ServiceOrder: soId })
      .where({ ID: ID });

    console.log(`CustomerMessage with ID ${ID} updated.`);
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