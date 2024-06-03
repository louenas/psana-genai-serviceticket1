"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceOrderItemApi = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const ServiceOrderItem_1 = require("./ServiceOrderItem");
const ServiceOrderItemRequestBuilder_1 = require("./ServiceOrderItemRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class ServiceOrderItemApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = ServiceOrderItem_1.ServiceOrderItem;
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new ServiceOrderItemApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            TO_APPOINTMENT: new odata_v2_1.Link('to_Appointment', this, linkedApis[0]),
            TO_CONFIRMATION: new odata_v2_1.Link('to_Confirmation', this, linkedApis[1]),
            TO_DURATION: new odata_v2_1.Link('to_Duration', this, linkedApis[2]),
            TO_PARTNER: new odata_v2_1.Link('to_Partner', this, linkedApis[3]),
            TO_PRICING_ELEMENT: new odata_v2_1.Link('to_PricingElement', this, linkedApis[4]),
            TO_PRODUCT_REFERENCE_OBJECT: new odata_v2_1.Link('to_ProductReferenceObject', this, linkedApis[5]),
            TO_REFERENCE_OBJECT: new odata_v2_1.Link('to_ReferenceObject', this, linkedApis[6]),
            TO_SERVICE_ORDER: new odata_v2_1.OneToOneLink('to_ServiceOrder', this, linkedApis[7]),
            TO_SRVC_ORD_ITEM_USER_STATUS: new odata_v2_1.Link('to_SrvcOrdItemUserStatus', this, linkedApis[8]),
            TO_TEXT: new odata_v2_1.Link('to_Text', this, linkedApis[9])
        };
        return this;
    }
    requestBuilder() {
        return new ServiceOrderItemRequestBuilder_1.ServiceOrderItemRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(ServiceOrderItem_1.ServiceOrderItem, this.deSerializers);
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
                 * Static representation of the {@link serviceOrderItem} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SERVICE_ORDER_ITEM: fieldBuilder.buildEdmTypeField('ServiceOrderItem', 'Edm.String', false),
                /**
                 * Static representation of the {@link serviceOrderItemUuid} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SERVICE_ORDER_ITEM_UUID: fieldBuilder.buildEdmTypeField('ServiceOrderItemUUID', 'Edm.Guid', true),
                /**
                 * Static representation of the {@link serviceDocumentItemCharUuid} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SERVICE_DOCUMENT_ITEM_CHAR_UUID: fieldBuilder.buildEdmTypeField('ServiceDocumentItemCharUUID', 'Edm.Guid', true),
                /**
                 * Static representation of the {@link serviceOrderItemDescription} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SERVICE_ORDER_ITEM_DESCRIPTION: fieldBuilder.buildEdmTypeField('ServiceOrderItemDescription', 'Edm.String', true),
                /**
                 * Static representation of the {@link serviceObjectType} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SERVICE_OBJECT_TYPE: fieldBuilder.buildEdmTypeField('ServiceObjectType', 'Edm.String', true),
                /**
                 * Static representation of the {@link serviceDocumentItemObjectType} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SERVICE_DOCUMENT_ITEM_OBJECT_TYPE: fieldBuilder.buildEdmTypeField('ServiceDocumentItemObjectType', 'Edm.String', true),
                /**
                 * Static representation of the {@link language} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LANGUAGE: fieldBuilder.buildEdmTypeField('Language', 'Edm.String', true),
                /**
                 * Static representation of the {@link product} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRODUCT: fieldBuilder.buildEdmTypeField('Product', 'Edm.String', true),
                /**
                 * Static representation of the {@link quantity} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                QUANTITY: fieldBuilder.buildEdmTypeField('Quantity', 'Edm.Decimal', true),
                /**
                 * Static representation of the {@link quantityUnit} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                QUANTITY_UNIT: fieldBuilder.buildEdmTypeField('QuantityUnit', 'Edm.String', true),
                /**
                 * Static representation of the {@link srvcOrdItmResvnIsExisting} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SRVC_ORD_ITM_RESVN_IS_EXISTING: fieldBuilder.buildEdmTypeField('SrvcOrdItmResvnIsExisting', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link srvcOrdItemReservedQuantity} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SRVC_ORD_ITEM_RESERVED_QUANTITY: fieldBuilder.buildEdmTypeField('SrvcOrdItemReservedQuantity', 'Edm.Decimal', true),
                /**
                 * Static representation of the {@link serviceDuration} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SERVICE_DURATION: fieldBuilder.buildEdmTypeField('ServiceDuration', 'Edm.Decimal', true),
                /**
                 * Static representation of the {@link serviceDurationUnit} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SERVICE_DURATION_UNIT: fieldBuilder.buildEdmTypeField('ServiceDurationUnit', 'Edm.String', true),
                /**
                 * Static representation of the {@link serviceOrderItemCategory} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SERVICE_ORDER_ITEM_CATEGORY: fieldBuilder.buildEdmTypeField('ServiceOrderItemCategory', 'Edm.String', true),
                /**
                 * Static representation of the {@link serviceOrdItemRejectionReason} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SERVICE_ORD_ITEM_REJECTION_REASON: fieldBuilder.buildEdmTypeField('ServiceOrdItemRejectionReason', 'Edm.String', true),
                /**
                 * Static representation of the {@link billableControl} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BILLABLE_CONTROL: fieldBuilder.buildEdmTypeField('BillableControl', 'Edm.String', true),
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
                 * Static representation of the {@link contactPersonBusinessPartnerId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CONTACT_PERSON_BUSINESS_PARTNER_ID: fieldBuilder.buildEdmTypeField('ContactPersonBusinessPartnerId', 'Edm.String', true),
                /**
                 * Static representation of the {@link personResponsible} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PERSON_RESPONSIBLE: fieldBuilder.buildEdmTypeField('PersonResponsible', 'Edm.String', true),
                /**
                 * Static representation of the {@link executingServiceEmployee} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                EXECUTING_SERVICE_EMPLOYEE: fieldBuilder.buildEdmTypeField('ExecutingServiceEmployee', 'Edm.String', true),
                /**
                 * Static representation of the {@link servicePerformer} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SERVICE_PERFORMER: fieldBuilder.buildEdmTypeField('ServicePerformer', 'Edm.String', true),
                /**
                 * Static representation of the {@link serviceOrderItemIsReleased} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SERVICE_ORDER_ITEM_IS_RELEASED: fieldBuilder.buildEdmTypeField('ServiceOrderItemIsReleased', 'Edm.String', true),
                /**
                 * Static representation of the {@link serviceOrderItemIsCompleted} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SERVICE_ORDER_ITEM_IS_COMPLETED: fieldBuilder.buildEdmTypeField('ServiceOrderItemIsCompleted', 'Edm.String', true),
                /**
                 * Static representation of the {@link serviceOrderItemIsRejected} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SERVICE_ORDER_ITEM_IS_REJECTED: fieldBuilder.buildEdmTypeField('ServiceOrderItemIsRejected', 'Edm.String', true),
                /**
                 * Static representation of the {@link referenceServiceContract} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                REFERENCE_SERVICE_CONTRACT: fieldBuilder.buildEdmTypeField('ReferenceServiceContract', 'Edm.String', true),
                /**
                 * Static representation of the {@link referenceServiceContractItem} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                REFERENCE_SERVICE_CONTRACT_ITEM: fieldBuilder.buildEdmTypeField('ReferenceServiceContractItem', 'Edm.String', true),
                /**
                 * Static representation of the {@link refServiceOrderTemplate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                REF_SERVICE_ORDER_TEMPLATE: fieldBuilder.buildEdmTypeField('RefServiceOrderTemplate', 'Edm.String', true),
                /**
                 * Static representation of the {@link refServiceOrderTemplateItem} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                REF_SERVICE_ORDER_TEMPLATE_ITEM: fieldBuilder.buildEdmTypeField('RefServiceOrderTemplateItem', 'Edm.String', true),
                /**
                 * Static representation of the {@link referenceServiceRequest} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                REFERENCE_SERVICE_REQUEST: fieldBuilder.buildEdmTypeField('ReferenceServiceRequest', 'Edm.String', true),
                /**
                 * Static representation of the {@link referenceServiceRequestItem} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                REFERENCE_SERVICE_REQUEST_ITEM: fieldBuilder.buildEdmTypeField('ReferenceServiceRequestItem', 'Edm.String', true),
                /**
                 * Static representation of the {@link parentServiceOrderItem} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PARENT_SERVICE_ORDER_ITEM: fieldBuilder.buildEdmTypeField('ParentServiceOrderItem', 'Edm.String', true),
                /**
                 * Static representation of the {@link plannedServiceStartDateTime} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PLANNED_SERVICE_START_DATE_TIME: fieldBuilder.buildEdmTypeField('PlannedServiceStartDateTime', 'Edm.DateTimeOffset', true),
                /**
                 * Static representation of the {@link plannedServiceEndDateTime} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PLANNED_SERVICE_END_DATE_TIME: fieldBuilder.buildEdmTypeField('PlannedServiceEndDateTime', 'Edm.DateTimeOffset', true),
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
                 * Static representation of the {@link srvcDocItemSlaDueByDateTime} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SRVC_DOC_ITEM_SLA_DUE_BY_DATE_TIME: fieldBuilder.buildEdmTypeField('SrvcDocItemSLADueByDateTime', 'Edm.DateTimeOffset', true),
                /**
                 * Static representation of the {@link erlstRequestedDeliveryDateTime} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ERLST_REQUESTED_DELIVERY_DATE_TIME: fieldBuilder.buildEdmTypeField('ErlstRequestedDeliveryDateTime', 'Edm.DateTimeOffset', true),
                /**
                 * Static representation of the {@link actualServiceDuration} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ACTUAL_SERVICE_DURATION: fieldBuilder.buildEdmTypeField('ActualServiceDuration', 'Edm.Decimal', true),
                /**
                 * Static representation of the {@link actualServiceDurationUnit} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ACTUAL_SERVICE_DURATION_UNIT: fieldBuilder.buildEdmTypeField('ActualServiceDurationUnit', 'Edm.String', true),
                /**
                 * Static representation of the {@link srvcContrDetnIsSpprsd} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SRVC_CONTR_DETN_IS_SPPRSD: fieldBuilder.buildEdmTypeField('SrvcContrDetnIsSpprsd', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link referenceServiceOrderItem} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                REFERENCE_SERVICE_ORDER_ITEM: fieldBuilder.buildEdmTypeField('ReferenceServiceOrderItem', 'Edm.String', true),
                /**
                 * Static representation of the {@link shippingCondition} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SHIPPING_CONDITION: fieldBuilder.buildEdmTypeField('ShippingCondition', 'Edm.String', true),
                /**
                 * Static representation of the {@link srvcDocItmPartReferenceItem} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SRVC_DOC_ITM_PART_REFERENCE_ITEM: fieldBuilder.buildEdmTypeField('SrvcDocItmPartReferenceItem', 'Edm.String', true),
                /**
                 * Static representation of the {@link srvcDocItmApptReferenceItem} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SRVC_DOC_ITM_APPT_REFERENCE_ITEM: fieldBuilder.buildEdmTypeField('SrvcDocItmApptReferenceItem', 'Edm.String', true),
                /**
                 * Static representation of the {@link srvcDocItmApptRefObjectUuid} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SRVC_DOC_ITM_APPT_REF_OBJECT_UUID: fieldBuilder.buildEdmTypeField('SrvcDocItmApptRefObjectUUID', 'Edm.Guid', true),
                /**
                 * Static representation of the {@link srvcOrdItemIsUnplanned} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SRVC_ORD_ITEM_IS_UNPLANNED: fieldBuilder.buildEdmTypeField('SrvcOrdItemIsUnplanned', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link fsmServiceActivity} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                FSM_SERVICE_ACTIVITY: fieldBuilder.buildEdmTypeField('FSMServiceActivity', 'Edm.String', true),
                /**
                 * Static representation of the {@link timeSheetOvertimeCategory} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TIME_SHEET_OVERTIME_CATEGORY: fieldBuilder.buildEdmTypeField('TimeSheetOvertimeCategory', 'Edm.String', true),
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
                 * Static representation of the {@link profitCenter} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PROFIT_CENTER: fieldBuilder.buildEdmTypeField('ProfitCenter', 'Edm.String', true),
                /**
                 * Static representation of the {@link srvcOrdItemCreditStatus} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SRVC_ORD_ITEM_CREDIT_STATUS: fieldBuilder.buildEdmTypeField('SrvcOrdItemCreditStatus', 'Edm.String', true),
                /**
                 * Static representation of the {@link srvcOrdItemExecutionStatus} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SRVC_ORD_ITEM_EXECUTION_STATUS: fieldBuilder.buildEdmTypeField('SrvcOrdItemExecutionStatus', 'Edm.String', true),
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
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', ServiceOrderItem_1.ServiceOrderItem)
            };
        }
        return this._schema;
    }
}
exports.ServiceOrderItemApi = ServiceOrderItemApi;
//# sourceMappingURL=ServiceOrderItemApi.js.map