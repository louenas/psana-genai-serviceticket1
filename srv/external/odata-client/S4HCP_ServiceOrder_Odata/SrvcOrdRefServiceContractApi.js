"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SrvcOrdRefServiceContractApi = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const SrvcOrdRefServiceContract_1 = require("./SrvcOrdRefServiceContract");
const SrvcOrdRefServiceContractRequestBuilder_1 = require("./SrvcOrdRefServiceContractRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class SrvcOrdRefServiceContractApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = SrvcOrdRefServiceContract_1.SrvcOrdRefServiceContract;
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new SrvcOrdRefServiceContractApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {};
        return this;
    }
    requestBuilder() {
        return new SrvcOrdRefServiceContractRequestBuilder_1.SrvcOrdRefServiceContractRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(SrvcOrdRefServiceContract_1.SrvcOrdRefServiceContract, this.deSerializers);
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
                 * Static representation of the {@link referenceServiceContract} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                REFERENCE_SERVICE_CONTRACT: fieldBuilder.buildEdmTypeField('ReferenceServiceContract', 'Edm.String', false),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', SrvcOrdRefServiceContract_1.SrvcOrdRefServiceContract)
            };
        }
        return this._schema;
    }
}
exports.SrvcOrdRefServiceContractApi = SrvcOrdRefServiceContractApi;
//# sourceMappingURL=SrvcOrdRefServiceContractApi.js.map