const { foreach } = require('@sap/cds');
const { serviceOrderService } = require("@sap/cloud-sdk-vdm-service-order-service");
const lLMProxy = require('./genAIHubProxyDirect');
const { select } = require('@sap/cds/libx/_runtime/hana/execute');

const array2VectorBuffer = (data) => {
    const sizeFloat = 4; // each float takes 4 bytes
    const sizeDimensions = 4; // size of the dimensions data in bytes
    const bufferSize = data.length * sizeFloat + sizeDimensions;

    const buffer = Buffer.allocUnsafe(bufferSize); // allocate buffer
    // Write the size (number of dimensions) into the buffer
    buffer.writeUInt32LE(data.length, 0);
    data.forEach((value, index) => {
        buffer.writeFloatLE(value, index * sizeFloat + sizeDimensions);
    });
    return buffer;
};

/**
 * @On(event = { "Action1" }, entity = "productSupportSrv.CustomerMessages")
 * @param {Object} request - User information, tenant-specific CDS model, headers and query parameters
*/
module.exports = async function (request) {
    const { ID } = request._params[0];
    try {
        
        const { serviceOrderApi, serviceOrderTextApi, serviceOrderItemApi, serviceOrderPersonRespApi } = serviceOrderService();

        //const result = await serviceOrderApi.requestBuilder().getAll().top(5).execute({ destinationName: 'S4HCP-ServiceOrder-Odata' });
        const result = await serviceOrderApi.requestBuilder().getByKey('8000000122').select(
            serviceOrderApi.schema.ALL_FIELDS,
            serviceOrderApi.schema.TO_ITEM,
            serviceOrderApi.schema.TO_TEXT,
            serviceOrderApi.schema.TO_PERSON_RESPONSIBLE
        ).execute({ destinationName: 'S4HCP-ServiceOrder-Odata_Clone' });
        console.log(result);

        let concatenatedHeader = result.serviceOrder +" "+ result.serviceOrderType +" "+ result.purchaseOrderByCustomer +" "+ result.serviceOrderDescription;

        const concatenatedDescriptions = result.toText.map(item => `${item.serviceOrderItemDescription}`).join(' ');

        result.toText[0].language +" "+ result.toText[0].longTextID +" "+ result.toText[0].longText;

        const concatenatedText = result.toText.map(item => `${item.language} ${item.longTextID} ${item.longText}`).join(' ');

        const info = concatenatedHeader +" "+ concatenatedDescriptions +" "+ concatenatedText;

        let embedding = await lLMProxy.embed(request, info , process.env.textEmbeddingAda002Endpoint);

        const embeddingBinnary = array2VectorBuffer(embedding);
        await INSERT({soid: result.serviceOrder, sotitle: result.serviceOrderDescription, soinfo: info, embedding: embeddingBinnary, }).into('productSupport.ServiceOrderData');
        //await UPDATE ("productSupport.ServiceOrderData").set({SOID:result.serviceOrder, SOTITLE: result.serviceOrderDescription, SOINFO: info, embedding: embeddingBinnary, }).where({SOID: result.serviceOrder})

        let prompt = "8000000122 SVO1 WHIR-LW-176532";
        let promptEmbedding = await lLMProxy.embed(request, prompt, process.env.textEmbeddingAda002Endpoint);
        let promptEmbeddingStr = JSON.stringify(promptEmbedding);
        let similarSO = await SELECT `soid, sotitle` .from('productSupport.ServiceOrderData') .where `cosine_similarity(embedding, to_real_vector(${promptEmbeddingStr})) > 0.2`;
        console.log(`similar SO: ${similarSO[0].soid} ${similarSO[0].sotitle}`);

        console.log("done");
        //let similarBooks = await SELECT.from('productSupport.Books').where`cosine_similarity(embedding, to_real_vector(${embedding})) > 0.9`

    } catch (error) {
        console.error('Error:', error.message);
        request.error(error.code, error.message);
    }
}