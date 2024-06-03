"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceOrderItemConfirmationApi = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const ServiceOrderItemConfirmation_1 = require("./ServiceOrderItemConfirmation");
const ServiceOrderItemConfirmationRequestBuilder_1 = require("./ServiceOrderItemConfirmationRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class ServiceOrderItemConfirmationApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = ServiceOrderItemConfirmation_1.ServiceOrderItemConfirmation;
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new ServiceOrderItemConfirmationApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {};
        return this;
    }
    requestBuilder() {
        return new ServiceOrderItemConfirmationRequestBuilder_1.ServiceOrderItemConfirmationRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(ServiceOrderItemConfirmation_1.ServiceOrderItemConfirmation, this.deSerializers);
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
                 * Static representation of the {@link serviceConfirmation} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SERVICE_CONFIRMATION: fieldBuilder.buildEdmTypeField('ServiceConfirmation', 'Edm.String', false),
                /**
                 * Static representation of the {@link serviceConfirmationItem} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SERVICE_CONFIRMATION_ITEM: fieldBuilder.buildEdmTypeField('ServiceConfirmationItem', 'Edm.String', false),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', ServiceOrderItemConfirmation_1.ServiceOrderItemConfirmation)
            };
        }
        return this._schema;
    }
}
exports.ServiceOrderItemConfirmationApi = ServiceOrderItemConfirmationApi;
//# sourceMappingURL=ServiceOrderItemConfirmationApi.js.map