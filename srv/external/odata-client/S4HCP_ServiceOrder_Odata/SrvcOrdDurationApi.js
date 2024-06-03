"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SrvcOrdDurationApi = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const SrvcOrdDuration_1 = require("./SrvcOrdDuration");
const SrvcOrdDurationRequestBuilder_1 = require("./SrvcOrdDurationRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class SrvcOrdDurationApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = SrvcOrdDuration_1.SrvcOrdDuration;
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new SrvcOrdDurationApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {};
        return this;
    }
    requestBuilder() {
        return new SrvcOrdDurationRequestBuilder_1.SrvcOrdDurationRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(SrvcOrdDuration_1.SrvcOrdDuration, this.deSerializers);
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
                 * Static representation of the {@link srvcDocDurationType} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SRVC_DOC_DURATION_TYPE: fieldBuilder.buildEdmTypeField('SrvcDocDurationType', 'Edm.String', false),
                /**
                 * Static representation of the {@link srvcDocDurationValue} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SRVC_DOC_DURATION_VALUE: fieldBuilder.buildEdmTypeField('SrvcDocDurationValue', 'Edm.Decimal', true),
                /**
                 * Static representation of the {@link srvcDocDurationUnit} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SRVC_DOC_DURATION_UNIT: fieldBuilder.buildEdmTypeField('SrvcDocDurationUnit', 'Edm.String', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', SrvcOrdDuration_1.SrvcOrdDuration)
            };
        }
        return this._schema;
    }
}
exports.SrvcOrdDurationApi = SrvcOrdDurationApi;
//# sourceMappingURL=SrvcOrdDurationApi.js.map