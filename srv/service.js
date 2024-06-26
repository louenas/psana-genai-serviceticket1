/**
 * Code is auto-generated by Application Logic, DO NOT EDIT.
 * @version(2.0)
 */
const LCAPApplicationService = require('@sap/low-code-event-handler');

const customermessages_Logic1 = require('./code/customermessages-logic1');
const customermessages_Logic2 = require('./code/customermessages-logic2');
const customermessages_Action1_Logic = require('./code/customermessages-action1-logic');
const customermessages_Action2_Logic = require('./code/customermessages-action2-logic');
const customermessages_List_Action1_Logic = require('./code/customermessages-list-action1-logic');

class productSupportSrv extends LCAPApplicationService {
    async init() {

        this.after('READ', 'CustomerMessages', async (results, request) => {
            await customermessages_Logic1(results, request);
            //TODO why no next()
        });

        this.on(['CREATE', 'DELETE', 'UPDATE'], 'CustomerMessages', async (request, next) => {
            await customermessages_Logic2(request);
            // what is next(). should it be be passed to the handler
            return next();
        });

        this.on('Action1', 'CustomerMessages', async (request, next) => {
            await customermessages_Action1_Logic(request);
            return next();
        });

        this.on('Action2', 'CustomerMessages', async (request, next) => {
            await customermessages_Action2_Logic(request);
            return next();
        });

        this.on('Action3', 'CustomerMessages', async (request, next) => {
            await customermessages_List_Action1_Logic(request);
            return next();
        });

        return super.init();
    }
}


module.exports = {
    productSupportSrv
};