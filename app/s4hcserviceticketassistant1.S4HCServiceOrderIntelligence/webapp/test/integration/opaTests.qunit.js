sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        's4hcserviceticketassistant1/S4HCServiceOrderIntelligence/test/integration/FirstJourney',
		's4hcserviceticketassistant1/S4HCServiceOrderIntelligence/test/integration/pages/CustomerMessagesList',
		's4hcserviceticketassistant1/S4HCServiceOrderIntelligence/test/integration/pages/CustomerMessagesObjectPage'
    ],
    function(JourneyRunner, opaJourney, CustomerMessagesList, CustomerMessagesObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('s4hcserviceticketassistant1/S4HCServiceOrderIntelligence') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheCustomerMessagesList: CustomerMessagesList,
					onTheCustomerMessagesObjectPage: CustomerMessagesObjectPage
                }
            },
            opaJourney.run
        );
    }
);