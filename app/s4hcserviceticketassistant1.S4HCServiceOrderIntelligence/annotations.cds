using productSupportSrv as service from '../../srv/service';
using from '../annotations';
annotate service.CustomerMessages with {
    a_ServiceOrder @Common.ValueList : {
        $Type : 'Common.ValueListType',
        CollectionPath : 'A_ServiceOrder',
        Parameters : [
            {
                $Type : 'Common.ValueListParameterInOut',
                LocalDataProperty : a_ServiceOrder_ServiceOrder,
                ValueListProperty : 'ServiceOrder',
            },
            {
                $Type : 'Common.ValueListParameterDisplayOnly',
                ValueListProperty : 'ServiceOrderDescription',
            },
        ],
    }
};

annotate service.CustomerMessages with @(
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Value : messageTitleCustomerLanguage,
        },
        {
            $Type : 'UI.DataField',
            Value : title,
        },
        {
            $Type : 'UI.DataField',
            Value : summaryCustomerLanguage,
        },
        {
            $Type : 'UI.DataField',
            Value : summary,
        },
        {
            $Type : 'UI.DataField',
            Value : customerName,
        },
        {
            $Type : 'UI.DataField',
            Value : productName,
        },
        {
            $Type : 'UI.DataField',
            Value : category,
        },
        {
            $Type : 'UI.DataField',
            Value : urgency,
        },
        {
            $Type : 'UI.DataField',
            Value : sentiment,
        },
        {
            $Type : 'UI.DataFieldForAction',
            Action : 'productSupportSrv.Action3',
            Label : 'To English',
        },
        {
            $Type : 'UI.DataField',
            Value : fullMessageTextEnglish,
            ![@UI.Hidden],
        },
        {
            $Type : 'UI.DataField',
            Value : fullMessageTextCustomerLanguage,
            ![@UI.Hidden],
        },
    ]
);
annotate service.CustomerMessages with @(
    UI.FieldGroup #Main : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Value : ID,
                Label : 'ID',
            },
            {
                $Type : 'UI.DataField',
                Value : title,
            },
            {
                $Type : 'UI.DataField',
                Value : customerName,
            },
            {
                $Type : 'UI.DataField',
                Value : productName,
            },
            {
                $Type : 'UI.DataField',
                Value : summary,
            },
            {
                $Type : 'UI.DataField',
                Value : category,
            },
            {
                $Type : 'UI.DataField',
                Value : urgency,
            },
            {
                $Type : 'UI.DataField',
                Value : sentiment,
            },
            {
                $Type : 'UI.DataField',
                Value : messageTitleCustomerLanguage,
            },
            {
                $Type : 'UI.DataField',
                Value : customerId,
            },
            {
                $Type : 'UI.DataField',
                Value : productId,
            },
            {
                $Type : 'UI.DataField',
                Value : summaryCustomerLanguage,
            },
            {
                $Type : 'UI.DataField',
                Value : originatingCountry,
            },
            {
                $Type : 'UI.DataField',
                Value : sourceLanguage,
            },
            {
                $Type : 'UI.DataField',
                Value : fullMessageTextCustomerLanguage,
            },
            {
                $Type : 'UI.DataField',
                Value : fullMessageTextEnglish,
            },
            {
                $Type : 'UI.DataField',
                Value : suggestedResponseTextEnglish,
            },
            {
                $Type : 'UI.DataField',
                Value : suggestedResponseTextCustomerLanguage,
            },
            {
                $Type : 'UI.DataField',
                Value : a_ServiceOrder_ServiceOrder,
                Label : 'a_ServiceOrder_ServiceOrder',
            }
        ],
    }
);
annotate service.CustomerMessages with @(
    UI.Identification : [
        {
            $Type : 'UI.DataFieldForAction',
            Action : 'productSupportSrv.Action1',
            Label : 'To English',
            Criticality : #Positive,
        },
        {
            $Type : 'UI.DataFieldForAction',
            Action : 'productSupportSrv.Action2',
            Label : 'Action2',
            Criticality : #Positive,
        },
    ]
);
