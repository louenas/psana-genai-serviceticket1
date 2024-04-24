sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 's4hcserviceticketassistant1.S4HCServiceOrderIntelligence',
            componentId: 'CustomerMessagesObjectPage',
            contextPath: '/CustomerMessages'
        },
        CustomPageDefinitions
    );
});