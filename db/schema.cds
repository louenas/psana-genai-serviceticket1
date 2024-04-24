namespace productSupport;

using { S4HCP_ServiceOrder_Odata } from '../srv/external/S4HCP_ServiceOrder_Odata.cds';

entity CustomerMessages
{
    key ID : UUID;
    title : String(100);
    customerName : String(100);
    productName : String(100);
    summary : String(500);
    category : String(50);
    urgency : String(20);
    sentiment : String(20);
    messageTitleCustomerLanguage : String(100);
    customerId : String(50);
    productId : String(50);
    summaryCustomerLanguage : String(500);
    originatingCountry : String(50);
    sourceLanguage : String(50);
    fullMessageTextCustomerLanguage : String(1000);
    fullMessageTextEnglish : String(1000);
    suggestedResponseTextEnglish : String(1000);
    suggestedResponseTextCustomerLanguage : String(1000);
    a_ServiceOrder : Association to one S4HCP_ServiceOrder_Odata.A_ServiceOrder;
}
