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
    fullMessageTextCustomerLanguage : String(5000);
    fullMessageTextEnglish : String(5000);
    suggestedResponseTextEnglish : String(5000);
    suggestedResponseTextCustomerLanguage : String(5000);
    a_ServiceOrder : Association to one S4HCP_ServiceOrder_Odata.A_ServiceOrder;
}

entity ProductFAQ
{
    key ID : Integer;
    issue : LargeString;
    question : LargeString;
    answer : LargeString;
    embedding : Vector(1536); // vector space w/ 1536 dimensions
}
