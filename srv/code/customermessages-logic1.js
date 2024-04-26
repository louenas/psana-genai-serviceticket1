/**
 * 
 * @After(event = { "READ" }, entity = "productSupportSrv.CustomerMessages")
 * @param {(Object|Object[])} results - For the After phase only: the results of the event processing
 * @param {Object} request - User information, tenant-specific CDS model, headers and query parameters
*/
module.exports = async function (results, request) {
    if (results && results.length > 1) {
        console.log(`The list of customer messages has been shown.`);
    } else {
        console.log(`A customer message has been read.`);
    }
}