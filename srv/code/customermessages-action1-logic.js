const { foreach } = require('@sap/cds');
const lLMProxy = require('./genAIHubProxyDirect');

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
        //let books = await SELECT.from('productSupport.Books')
        //console.log(books);

        // const booksJson = [
        //     { title: "The Art of Product Support", description: "A comprehensive guide to mastering product support strategies and techniques covering everything from troubleshooting to customer satisfaction.", embedding: 0 },
        //     { title: "Effective Product Support", description: "Solutions Discover proven methodologies and best practices for delivering efficient and effective product support services, enhancing user experiences.", embedding: 0 },
        //     { title: "Advanced Product Support", description: "Techniques Explore advanced techniques and innovative approaches in product support, designed to optimize workflows and maximize customer success.", embedding: 0 }
        // ]

        // booksJson.forEach(async (book) => {
        //     const inputText = book.titile + " " + book.description;
        //     const embedding = await lLMProxy.embed(request, inputText, process.env.textEmbeddingAda002Endpoint);
        //     const embeddingBinnary = array2VectorBuffer(embedding);
        //     book.embedding = embeddingBinnary;
        //     await INSERT(book).into('productSupport.Books');
        // });

        let prompt = "mastering product support strategies";
        let promptEmbedding = await lLMProxy.embed(request, prompt, process.env.textEmbeddingAda002Endpoint);
        let promptEmbeddingStr = JSON.stringify(promptEmbedding);
        let similarBooks = await SELECT `title, description` .from('productSupport.Books') .where `cosine_similarity(embedding, to_real_vector(${promptEmbeddingStr})) > 0.9`;
        console.log("similar book", similarBooks);

        // books.forEach(async (book) => {
        //     let embedding = await lLMProxy.embed(request, book.title + book.description, process.env.textEmbeddingAda002Endpoint);
        //     const embeddingBinnary = array2VectorBuffer(embedding);
        //     await UPDATE ("productSupport.Books").set({embedding: embeddingBinnary}).where({title: book.title})
        //     // You can use the embedding here or perform other tasks with it
        // });

        console.log("done");
        //let similarBooks = await SELECT.from('productSupport.Books').where`cosine_similarity(embedding, to_real_vector(${embedding})) > 0.9`

    } catch (error) {
        console.error('Error:', error.message);
        request.error(error.code, error.message);
    }
}