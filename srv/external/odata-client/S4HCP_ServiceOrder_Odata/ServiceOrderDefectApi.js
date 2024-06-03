"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceOrderDefectApi = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const ServiceOrderDefect_1 = require("./ServiceOrderDefect");
const ServiceOrderDefectRequestBuilder_1 = require("./ServiceOrderDefectRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class ServiceOrderDefectApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = ServiceOrderDefect_1.ServiceOrderDefect;
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new ServiceOrderDefectApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {};
        return this;
    }
    requestBuilder() {
        return new ServiceOrderDefectRequestBuilder_1.ServiceOrderDefectRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(ServiceOrderDefect_1.ServiceOrderDefect, this.deSerializers);
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
                 * Static representation of the {@link srvcDocTypeDefectCodeProfType} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SRVC_DOC_TYPE_DEFECT_CODE_PROF_TYPE: fieldBuilder.buildEdmTypeField('SrvcDocTypeDefectCodeProfType', 'Edm.String', false),
                /**
                 * Static representation of the {@link serviceDefectSequence} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SERVICE_DEFECT_SEQUENCE: fieldBuilder.buildEdmTypeField('ServiceDefectSequence', 'Edm.Int16', false),
                /**
                 * Static representation of the {@link srvcDocTypeDefectCodeProfile} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SRVC_DOC_TYPE_DEFECT_CODE_PROFILE: fieldBuilder.buildEdmTypeField('SrvcDocTypeDefectCodeProfile', 'Edm.String', true),
                /**
                 * Static representation of the {@link serviceDefectCodeCatalog} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SERVICE_DEFECT_CODE_CATALOG: fieldBuilder.buildEdmTypeField('ServiceDefectCodeCatalog', 'Edm.String', true),
                /**
                 * Static representation of the {@link serviceDefectCodeGroup} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SERVICE_DEFECT_CODE_GROUP: fieldBuilder.buildEdmTypeField('ServiceDefectCodeGroup', 'Edm.String', true),
                /**
                 * Static representation of the {@link serviceDefectCode} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SERVICE_DEFECT_CODE: fieldBuilder.buildEdmTypeField('ServiceDefectCode', 'Edm.String', true),
                /**
                 * Static representation of the {@link serviceDefectSchema} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SERVICE_DEFECT_SCHEMA: fieldBuilder.buildEdmTypeField('ServiceDefectSchema', 'Edm.String', true),
                /**
                 * Static representation of the {@link serviceDefectCategory} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SERVICE_DEFECT_CATEGORY: fieldBuilder.buildEdmTypeField('ServiceDefectCategory', 'Edm.String', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', ServiceOrderDefect_1.ServiceOrderDefect)
            };
        }
        return this._schema;
    }
}
exports.ServiceOrderDefectApi = ServiceOrderDefectApi;
//# sourceMappingURL=ServiceOrderDefectApi.js.map