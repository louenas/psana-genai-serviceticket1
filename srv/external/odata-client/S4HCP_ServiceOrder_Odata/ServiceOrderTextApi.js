"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceOrderTextApi = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const ServiceOrderText_1 = require("./ServiceOrderText");
const ServiceOrderTextRequestBuilder_1 = require("./ServiceOrderTextRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class ServiceOrderTextApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = ServiceOrderText_1.ServiceOrderText;
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new ServiceOrderTextApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {};
        return this;
    }
    requestBuilder() {
        return new ServiceOrderTextRequestBuilder_1.ServiceOrderTextRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(ServiceOrderText_1.ServiceOrderText, this.deSerializers);
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
                 * Static representation of the {@link language} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LANGUAGE: fieldBuilder.buildEdmTypeField('Language', 'Edm.String', false),
                /**
                 * Static representation of the {@link longTextId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LONG_TEXT_ID: fieldBuilder.buildEdmTypeField('LongTextID', 'Edm.String', false),
                /**
                 * Static representation of the {@link longText} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LONG_TEXT: fieldBuilder.buildEdmTypeField('LongText', 'Edm.String', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', ServiceOrderText_1.ServiceOrderText)
            };
        }
        return this._schema;
    }
}
exports.ServiceOrderTextApi = ServiceOrderTextApi;
//# sourceMappingURL=ServiceOrderTextApi.js.map