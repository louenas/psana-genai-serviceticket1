"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceOrderApi = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const ServiceOrder_1 = require("./ServiceOrder");
const ServiceOrderRequestBuilder_1 = require("./ServiceOrderRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class ServiceOrderApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = ServiceOrder_1.ServiceOrder;
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new ServiceOrderApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            TO_APPOINTMENT: new odata_v2_1.Link('to_Appointment', this, linkedApis[0]),
            TO_CONFIRMATION: new odata_v2_1.Link('to_Confirmation', this, linkedApis[1]),
            TO_DEFECT: new odata_v2_1.Link('to_Defect', this, linkedApis[2]),
            TO_DURATION: new odata_v2_1.Link('to_Duration', this, linkedApis[3]),
            TO_ITEM: new odata_v2_1.Link('to_Item', this, linkedApis[4]),
            TO_PARTNER: new odata_v2_1.Link('to_Partner', this, linkedApis[5]),
            TO_PERSON_RESPONSIBLE: new odata_v2_1.Link('to_PersonResponsible', this, linkedApis[6]),
            TO_PRICING_ELEMENT: new odata_v2_1.Link('to_PricingElement', this, linkedApis[7]),
            TO_PRODUCT_REFERENCE_OBJECT: new odata_v2_1.Link('to_ProductReferenceObject', this, linkedApis[8]),
            TO_REFERENCE_OBJECT: new odata_v2_1.Link('to_ReferenceObject', this, linkedApis[9]),
            TO_REFERENCE_SERVICE_CONTRACT: new odata_v2_1.Link('to_ReferenceServiceContract', this, linkedApis[10]),
            TO_SERVICE_ORD_USER_STATUS: new odata_v2_1.Link('to_ServiceOrdUserStatus', this, linkedApis[11]),
            TO_TEXT: new odata_v2_1.Link('to_Text', this, linkedApis[12])
        };
        return this;
    }
    requestBuilder() {
        return new ServiceOrderRequestBuilder_1.ServiceOrderRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(ServiceOrder_1.ServiceOrder, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link serviceOrder} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SERVICE_ORDER: fieldBuilder.buildEdmTypeField('ServiceOrder', 'Edm.String', false),
                /**
                 * Static representation of the {@link serviceOrderType} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SERVICE_ORDER_TYPE: fieldBuilder.buildEdmTypeField('ServiceOrderType', 'Edm.String', true),
                /**
                 * Static representation of the {@link serviceOrderUuid} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SERVICE_ORDER_UUID: fieldBuilder.buildEdmTypeField('ServiceOrderUUID', 'Edm.Guid', true),
                /**
                 * Static representation of the {@link serviceOrderDescription} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SERVICE_ORDER_DESCRIPTION: fieldBuilder.buildEdmTypeField('ServiceOrderDescription', 'Edm.String', true),
                /**
                 * Static representation of the {@link serviceObjectType} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SERVICE_OBJECT_TYPE: fieldBuilder.buildEdmTypeField('ServiceObjectType', 'Edm.String', true),
                /**
                 * Static representation of the {@link language} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LANGUAGE: fieldBuilder.buildEdmTypeField('Language', 'Edm.String', true),
                /**
                 * Static representation of the {@link serviceDocumentPriority} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SERVICE_DOCUMENT_PRIORITY: fieldBuilder.buildEdmTypeField('ServiceDocumentPriority', 'Edm.String', true),
                /**
                 * Static representation of the {@link requestedServiceStartDateTime} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                REQUESTED_SERVICE_START_DATE_TIME: fieldBuilder.buildEdmTypeField('RequestedServiceStartDateTime', 'Edm.DateTimeOffset', true),
                /**
                 * Static representation of the {@link requestedServiceEndDateTime} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                REQUESTED_SERVICE_END_DATE_TIME: fieldBuilder.buildEdmTypeField('RequestedServiceEndDateTime', 'Edm.DateTimeOffset', true),
                /**
                 * Static representation of the {@link erlstRequestedDeliveryDateTime} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ERLST_REQUESTED_DELIVERY_DATE_TIME: fieldBuilder.buildEdmTypeField('ErlstRequestedDeliveryDateTime', 'Edm.DateTimeOffset', true),
                /**
                 * Static representation of the {@link serviceDocChangedDateTime} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SERVICE_DOC_CHANGED_DATE_TIME: fieldBuilder.buildEdmTypeField('ServiceDocChangedDateTime', 'Edm.DateTimeOffset', true),
                /**
                 * Static representation of the {@link serviceDocumentTemplateType} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SERVICE_DOCUMENT_TEMPLATE_TYPE: fieldBuilder.buildEdmTypeField('ServiceDocumentTemplateType', 'Edm.String', true),
                /**
                 * Static representation of the {@link purchaseOrderByCustomer} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PURCHASE_ORDER_BY_CUSTOMER: fieldBuilder.buildEdmTypeField('PurchaseOrderByCustomer', 'Edm.String', true),
                /**
                 * Static representation of the {@link customerPurchaseOrderDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CUSTOMER_PURCHASE_ORDER_DATE: fieldBuilder.buildEdmTypeField('CustomerPurchaseOrderDate', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link serviceOrderIsReleased} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SERVICE_ORDER_IS_RELEASED: fieldBuilder.buildEdmTypeField('ServiceOrderIsReleased', 'Edm.String', true),
                /**
                 * Static representation of the {@link serviceOrderIsCompleted} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SERVICE_ORDER_IS_COMPLETED: fieldBuilder.buildEdmTypeField('ServiceOrderIsCompleted', 'Edm.String', true),
                /**
                 * Static representation of the {@link serviceOrderIsRejected} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SERVICE_ORDER_IS_REJECTED: fieldBuilder.buildEdmTypeField('ServiceOrderIsRejected', 'Edm.String', true),
                /**
                 * Static representation of the {@link salesOrganization} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SALES_ORGANIZATION: fieldBuilder.buildEdmTypeField('SalesOrganization', 'Edm.String', true),
                /**
                 * Static representation of the {@link distributionChannel} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                DISTRIBUTION_CHANNEL: fieldBuilder.buildEdmTypeField('DistributionChannel', 'Edm.String', true),
                /**
                 * Static representation of the {@link division} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                DIVISION: fieldBuilder.buildEdmTypeField('Division', 'Edm.String', true),
                /**
                 * Static representation of the {@link salesOffice} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SALES_OFFICE: fieldBuilder.buildEdmTypeField('SalesOffice', 'Edm.String', true),
                /**
                 * Static representation of the {@link salesGroup} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SALES_GROUP: fieldBuilder.buildEdmTypeField('SalesGroup', 'Edm.String', true),
                /**
                 * Static representation of the {@link soldToParty} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SOLD_TO_PARTY: fieldBuilder.buildEdmTypeField('SoldToParty', 'Edm.String', true),
                /**
                 * Static representation of the {@link shipToParty} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SHIP_TO_PARTY: fieldBuilder.buildEdmTypeField('ShipToParty', 'Edm.String', true),
                /**
                 * Static representation of the {@link billToParty} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BILL_TO_PARTY: fieldBuilder.buildEdmTypeField('BillToParty', 'Edm.String', true),
                /**
                 * Static representation of the {@link payerParty} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PAYER_PARTY: fieldBuilder.buildEdmTypeField('PayerParty', 'Edm.String', true),
                /**
                 * Static representation of the {@link contactPerson} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CONTACT_PERSON: fieldBuilder.buildEdmTypeField('ContactPerson', 'Edm.String', true),
                /**
                 * Static representation of the {@link serviceDocGrossAmount} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SERVICE_DOC_GROSS_AMOUNT: fieldBuilder.buildEdmTypeField('ServiceDocGrossAmount', 'Edm.Decimal', true),
                /**
                 * Static representation of the {@link serviceDocNetAmount} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SERVICE_DOC_NET_AMOUNT: fieldBuilder.buildEdmTypeField('ServiceDocNetAmount', 'Edm.Decimal', true),
                /**
                 * Static representation of the {@link serviceDocTaxAmount} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SERVICE_DOC_TAX_AMOUNT: fieldBuilder.buildEdmTypeField('ServiceDocTaxAmount', 'Edm.Decimal', true),
                /**
                 * Static representation of the {@link transactionCurrency} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TRANSACTION_CURRENCY: fieldBuilder.buildEdmTypeField('TransactionCurrency', 'Edm.String', true),
                /**
                 * Static representation of the {@link referenceServiceRequest} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                REFERENCE_SERVICE_REQUEST: fieldBuilder.buildEdmTypeField('ReferenceServiceRequest', 'Edm.String', true),
                /**
                 * Static representation of the {@link referenceServiceContract} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                REFERENCE_SERVICE_CONTRACT: fieldBuilder.buildEdmTypeField('ReferenceServiceContract', 'Edm.String', true),
                /**
                 * Static representation of the {@link refServiceOrderTemplate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                REF_SERVICE_ORDER_TEMPLATE: fieldBuilder.buildEdmTypeField('RefServiceOrderTemplate', 'Edm.String', true),
                /**
                 * Static representation of the {@link referenceServiceOrder} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                REFERENCE_SERVICE_ORDER: fieldBuilder.buildEdmTypeField('ReferenceServiceOrder', 'Edm.String', true),
                /**
                 * Static representation of the {@link shippingCondition} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SHIPPING_CONDITION: fieldBuilder.buildEdmTypeField('ShippingCondition', 'Edm.String', true),
                /**
                 * Static representation of the {@link respyMgmtServiceTeam} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                RESPY_MGMT_SERVICE_TEAM: fieldBuilder.buildEdmTypeField('RespyMgmtServiceTeam', 'Edm.String', true),
                /**
                 * Static representation of the {@link respyMgmtServiceTeamName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                RESPY_MGMT_SERVICE_TEAM_NAME: fieldBuilder.buildEdmTypeField('RespyMgmtServiceTeamName', 'Edm.String', true),
                /**
                 * Static representation of the {@link respyMgmtGlobalTeamId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                RESPY_MGMT_GLOBAL_TEAM_ID: fieldBuilder.buildEdmTypeField('RespyMgmtGlobalTeamID', 'Edm.String', true),
                /**
                 * Static representation of the {@link srvcOrdCreditStatus} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SRVC_ORD_CREDIT_STATUS: fieldBuilder.buildEdmTypeField('SrvcOrdCreditStatus', 'Edm.String', true),
                /**
                 * Static representation of the {@link srvcOrdExecutionStatus} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SRVC_ORD_EXECUTION_STATUS: fieldBuilder.buildEdmTypeField('SrvcOrdExecutionStatus', 'Edm.String', true),
                /**
                 * Static representation of the {@link paymentTerms} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PAYMENT_TERMS: fieldBuilder.buildEdmTypeField('PaymentTerms', 'Edm.String', true),
                /**
                 * Static representation of the {@link paymentMethod} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PAYMENT_METHOD: fieldBuilder.buildEdmTypeField('PaymentMethod', 'Edm.String', true),
                /**
                 * Static representation of the {@link sepaMandate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SEPA_MANDATE: fieldBuilder.buildEdmTypeField('SEPAMandate', 'Edm.String', true),
                /**
                 * Static representation of the {@link srvcSepaMandateRelevance} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SRVC_SEPA_MANDATE_RELEVANCE: fieldBuilder.buildEdmTypeField('SrvcSEPAMandateRelevance', 'Edm.String', true),
                /**
                 * Static representation of the {@link wbsElementExternalId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                WBS_ELEMENT_EXTERNAL_ID: fieldBuilder.buildEdmTypeField('WBSElementExternalID', 'Edm.String', true),
                /**
                 * Static representation of the {@link salesOrganizationOrgUnitId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SALES_ORGANIZATION_ORG_UNIT_ID: fieldBuilder.buildEdmTypeField('SalesOrganizationOrgUnitID', 'Edm.String', true),
                /**
                 * Static representation of the {@link serviceOrganization} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SERVICE_ORGANIZATION: fieldBuilder.buildEdmTypeField('ServiceOrganization', 'Edm.String', true),
                /**
                 * Static representation of the {@link salesOfficeOrgUnitId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SALES_OFFICE_ORG_UNIT_ID: fieldBuilder.buildEdmTypeField('SalesOfficeOrgUnitID', 'Edm.String', true),
                /**
                 * Static representation of the {@link salesGroupOrgUnitId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SALES_GROUP_ORG_UNIT_ID: fieldBuilder.buildEdmTypeField('SalesGroupOrgUnitID', 'Edm.String', true),
                /**
                 * Static representation of the {@link fsmServiceCall} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                FSM_SERVICE_CALL: fieldBuilder.buildEdmTypeField('FSMServiceCall', 'Edm.String', true),
                /**
                 * Static representation of the {@link serviceOrderRejectionReason} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SERVICE_ORDER_REJECTION_REASON: fieldBuilder.buildEdmTypeField('ServiceOrderRejectionReason', 'Edm.String', true),
                /**
                 * Static representation of the {@link referenceInHouseRepair} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                REFERENCE_IN_HOUSE_REPAIR: fieldBuilder.buildEdmTypeField('ReferenceInHouseRepair', 'Edm.String', true),
                /**
                 * Static representation of the {@link referenceInHouseRepairItem} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                REFERENCE_IN_HOUSE_REPAIR_ITEM: fieldBuilder.buildEdmTypeField('ReferenceInHouseRepairItem', 'Edm.String', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', ServiceOrder_1.ServiceOrder)
            };
        }
        return this._schema;
    }
}
exports.ServiceOrderApi = ServiceOrderApi;
//# sourceMappingURL=ServiceOrderApi.js.map