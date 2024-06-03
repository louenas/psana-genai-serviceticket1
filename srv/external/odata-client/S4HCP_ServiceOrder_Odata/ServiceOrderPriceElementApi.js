"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceOrderPriceElementApi = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const ServiceOrderPriceElement_1 = require("./ServiceOrderPriceElement");
const ServiceOrderPriceElementRequestBuilder_1 = require("./ServiceOrderPriceElementRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class ServiceOrderPriceElementApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = ServiceOrderPriceElement_1.ServiceOrderPriceElement;
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new ServiceOrderPriceElementApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {};
        return this;
    }
    requestBuilder() {
        return new ServiceOrderPriceElementRequestBuilder_1.ServiceOrderPriceElementRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(ServiceOrderPriceElement_1.ServiceOrderPriceElement, this.deSerializers);
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
                 * Static representation of the {@link pricingProcedureStep} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRICING_PROCEDURE_STEP: fieldBuilder.buildEdmTypeField('PricingProcedureStep', 'Edm.String', false),
                /**
                 * Static representation of the {@link pricingProcedureCounter} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRICING_PROCEDURE_COUNTER: fieldBuilder.buildEdmTypeField('PricingProcedureCounter', 'Edm.String', false),
                /**
                 * Static representation of the {@link conditionType} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CONDITION_TYPE: fieldBuilder.buildEdmTypeField('ConditionType', 'Edm.String', true),
                /**
                 * Static representation of the {@link conditionRateValue} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CONDITION_RATE_VALUE: fieldBuilder.buildEdmTypeField('ConditionRateValue', 'Edm.Decimal', true),
                /**
                 * Static representation of the {@link conditionCurrency} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CONDITION_CURRENCY: fieldBuilder.buildEdmTypeField('ConditionCurrency', 'Edm.String', true),
                /**
                 * Static representation of the {@link conditionQuantity} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CONDITION_QUANTITY: fieldBuilder.buildEdmTypeField('ConditionQuantity', 'Edm.Decimal', true),
                /**
                 * Static representation of the {@link conditionQuantityUnit} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CONDITION_QUANTITY_UNIT: fieldBuilder.buildEdmTypeField('ConditionQuantityUnit', 'Edm.String', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', ServiceOrderPriceElement_1.ServiceOrderPriceElement)
            };
        }
        return this._schema;
    }
}
exports.ServiceOrderPriceElementApi = ServiceOrderPriceElementApi;
//# sourceMappingURL=ServiceOrderPriceElementApi.js.map