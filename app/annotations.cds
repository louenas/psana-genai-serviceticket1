using { productSupportSrv } from '../srv/service.cds';

annotate productSupportSrv.CustomerMessages with @UI.HeaderInfo: { TypeName: 'Customer Message', TypeNamePlural: 'Customer Messages' };
annotate productSupportSrv.CustomerMessages with @UI.DataPoint #title: {
  Value: title,
  Title: 'Title (English)',
};
annotate productSupportSrv.CustomerMessages with @UI.DataPoint #customerName: {
  Value: customerName,
  Title: 'Customer Name',
};
annotate productSupportSrv.CustomerMessages with @UI.DataPoint #productName: {
  Value: productName,
  Title: 'Product Name',
};
annotate productSupportSrv.CustomerMessages with {
  title @title: 'Title (English)';
  customerName @title: 'Customer Name';
  productName @title: 'Product Name';
  summary @title: 'Summary (English)';
  category @title: 'Message Category';
  urgency @title: 'Message Urgency';
  sentiment @title: 'Message Sentiment';
  messageTitleCustomerLanguage @title: 'Title (Customer Language)';
  customerId @title: 'Customer ID';
  productId @title: 'Product ID';
  summaryCustomerLanguage @title: 'Summary (Customer Language)';
  originatingCountry @title: 'Originating Country';
  sourceLanguage @title: 'Source Language';
  fullMessageTextCustomerLanguage @title: 'Full Message Text (Customer Language)';
  fullMessageTextEnglish @title: 'Full Message Text (English)';
  suggestedResponseTextEnglish @title: 'Suggested Response Text (English)';
  suggestedResponseTextCustomerLanguage @title: 'Suggested Response Text (Customer Language)'
};

annotate productSupportSrv.CustomerMessages with @UI.LineItem: [
    { $Type: 'UI.DataField', Value: title },
    { $Type: 'UI.DataField', Value: customerName },
    { $Type: 'UI.DataField', Value: productName },
    { $Type: 'UI.DataField', Value: summary },
    { $Type: 'UI.DataField', Value: category },
    { $Type: 'UI.DataField', Value: urgency },
    { $Type: 'UI.DataField', Value: sentiment },
    { $Type: 'UI.DataField', Value: messageTitleCustomerLanguage },
    { $Type: 'UI.DataField', Value: customerId },
    { $Type: 'UI.DataField', Value: productId },
    { $Type: 'UI.DataField', Value: summaryCustomerLanguage },
    { $Type: 'UI.DataField', Value: originatingCountry },
    { $Type: 'UI.DataField', Value: sourceLanguage },
    { $Type: 'UI.DataField', Value: fullMessageTextCustomerLanguage },
    { $Type: 'UI.DataField', Value: fullMessageTextEnglish },
    { $Type: 'UI.DataField', Value: suggestedResponseTextEnglish },
    { $Type: 'UI.DataField', Value: suggestedResponseTextCustomerLanguage }
];

annotate productSupportSrv.CustomerMessages with @UI.FieldGroup #Main: {
  $Type: 'UI.FieldGroupType', Data: [
    { $Type: 'UI.DataField', Value: title },
    { $Type: 'UI.DataField', Value: customerName },
    { $Type: 'UI.DataField', Value: productName },
    { $Type: 'UI.DataField', Value: summary },
    { $Type: 'UI.DataField', Value: category },
    { $Type: 'UI.DataField', Value: urgency },
    { $Type: 'UI.DataField', Value: sentiment },
    { $Type: 'UI.DataField', Value: messageTitleCustomerLanguage },
    { $Type: 'UI.DataField', Value: customerId },
    { $Type: 'UI.DataField', Value: productId },
    { $Type: 'UI.DataField', Value: summaryCustomerLanguage },
    { $Type: 'UI.DataField', Value: originatingCountry },
    { $Type: 'UI.DataField', Value: sourceLanguage },
    { $Type: 'UI.DataField', Value: fullMessageTextCustomerLanguage },
    { $Type: 'UI.DataField', Value: fullMessageTextEnglish },
    { $Type: 'UI.DataField', Value: suggestedResponseTextEnglish },
    { $Type: 'UI.DataField', Value: suggestedResponseTextCustomerLanguage }
  ]
};

annotate productSupportSrv.CustomerMessages with @UI.HeaderFacets: [
 { $Type : 'UI.ReferenceFacet', Target : '@UI.DataPoint#title' },
 { $Type : 'UI.ReferenceFacet', Target : '@UI.DataPoint#customerName' },
 { $Type : 'UI.ReferenceFacet', Target : '@UI.DataPoint#productName' }
];

annotate productSupportSrv.CustomerMessages with @UI.Facets: [
  { $Type: 'UI.ReferenceFacet', ID: 'Main', Label: 'General Information', Target: '@UI.FieldGroup#Main' }
];

