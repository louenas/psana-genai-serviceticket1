"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SrvcOrdProdRefObjectApi = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const SrvcOrdProdRefObject_1 = require("./SrvcOrdProdRefObject");
const SrvcOrdProdRefObjectRequestBuilder_1 = require("./SrvcOrdProdRefObjectRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class SrvcOrdProdRefObjectApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = SrvcOrdProdRefObject_1.SrvcOrdProdRefObject;
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new SrvcOrdProdRefObjectApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {};
        return this;
    }
    requestBuilder() {
        return new SrvcOrdProdRefObjectRequestBuilder_1.SrvcOrdProdRefObjectRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(SrvcOrdProdRefObject_1.SrvcOrdProdRefObject, this.deSerializers);
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
                 * Static representation of the {@link serviceReferenceProduct} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SERVICE_REFERENCE_PRODUCT: fieldBuilder.buildEdmTypeField('ServiceReferenceProduct', 'Edm.String', false),
                /**
                 * Static representation of the {@link srvcRefObjIsMainObject} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SRVC_REF_OBJ_IS_MAIN_OBJECT: fieldBuilder.buildEdmTypeField('SrvcRefObjIsMainObject', 'Edm.Boolean', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', SrvcOrdProdRefObject_1.SrvcOrdProdRefObject)
            };
        }
        return this._schema;
    }
}
exports.SrvcOrdProdRefObjectApi = SrvcOrdProdRefObjectApi;
//# sourceMappingURL=SrvcOrdProdRefObjectApi.js.map