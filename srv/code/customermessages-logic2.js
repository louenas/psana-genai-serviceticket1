/**
 * 
 * @On(event = { "CREATE","UPDATE","DELETE" }, entity = "productSupportSrv.CustomerMessages")
 * @param {Object} request - User information, tenant-specific CDS model, headers and query parameters
*/
module.exports = async function(request) {
	switch (request.event) {
        case 'CREATE':
            console.log(`A new customer message with ID ${request.data.ID} has been created.`);
            break;
        case 'UPDATE':
            console.log(`A customer message with ID ${request.data.ID} has been updated.`);
            break;
        case 'DELETE':
            console.log(`A customer message with ID ${request.data.ID} has been deleted.`);
            break;
        default:
            console.error('Unknown event');
            request.error({
                code: "",
                message: "Unknown event",
                target: "",
                status: 500,
            });
    }
}