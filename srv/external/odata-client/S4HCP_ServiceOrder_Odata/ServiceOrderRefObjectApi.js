"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceOrderRefObjectApi = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const ServiceOrderRefObject_1 = require("./ServiceOrderRefObject");
const ServiceOrderRefObjectRequestBuilder_1 = require("./ServiceOrderRefObjectRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class ServiceOrderRefObjectApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = ServiceOrderRefObject_1.ServiceOrderRefObject;
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new ServiceOrderRefObjectApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {};
        return this;
    }
    requestBuilder() {
        return new ServiceOrderRefObjectRequestBuilder_1.ServiceOrderRefObjectRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(ServiceOrderRefObject_1.ServiceOrderRefObject, this.deSerializers);
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
                 * Static representation of the {@link serviceReferenceEquipment} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SERVICE_REFERENCE_EQUIPMENT: fieldBuilder.buildEdmTypeField('ServiceReferenceEquipment', 'Edm.String', false),
                /**
                 * Static representation of the {@link serviceRefFunctionalLocation} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SERVICE_REF_FUNCTIONAL_LOCATION: fieldBuilder.buildEdmTypeField('ServiceRefFunctionalLocation', 'Edm.String', false),
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
                ALL_FIELDS: new odata_v2_1.AllFields('*', ServiceOrderRefObject_1.ServiceOrderRefObject)
            };
        }
        return this._schema;
    }
}
exports.ServiceOrderRefObjectApi = ServiceOrderRefObjectApi;
//# sourceMappingURL=ServiceOrderRefObjectApi.js.map