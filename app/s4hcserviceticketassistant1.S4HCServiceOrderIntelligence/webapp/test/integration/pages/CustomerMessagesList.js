sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 's4hcserviceticketassistant1.S4HCServiceOrderIntelligence',
            componentId: 'CustomerMessagesList',
            contextPath: '/CustomerMessages'
        },
        CustomPageDefinitions
    );
});