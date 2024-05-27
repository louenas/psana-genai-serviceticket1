using { S4HCP_ServiceOrder_Odata } from './external/S4HCP_ServiceOrder_Odata.cds';

using { productSupport } from '../db/schema.cds';

@path : '/service/productSupport'
service productSupportSrv
{
    @odata.draft.enabled
    entity CustomerMessages as
        projection on productSupport.CustomerMessages
        actions
        {
            action Action1
            (
            )
            returns String;

            action Action2
            (
            )
            returns String;

            action Action3
            (
            )
            returns String;
        };

    entity A_ServiceOrder as projection on S4HCP_ServiceOrder_Odata.A_ServiceOrder
    {
        ServiceOrder,
        ServiceOrderDescription
    };
}

annotate productSupportSrv with @requires :
[
    'authenticated-user'
];
