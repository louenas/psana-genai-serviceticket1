"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceOrderPersonRespApi = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const ServiceOrderPersonResp_1 = require("./ServiceOrderPersonResp");
const ServiceOrderPersonRespRequestBuilder_1 = require("./ServiceOrderPersonRespRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class ServiceOrderPersonRespApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = ServiceOrderPersonResp_1.ServiceOrderPersonResp;
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new ServiceOrderPersonRespApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {};
        return this;
    }
    requestBuilder() {
        return new ServiceOrderPersonRespRequestBuilder_1.ServiceOrderPersonRespRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(ServiceOrderPersonResp_1.ServiceOrderPersonResp, this.deSerializers);
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
                 * Static representation of the {@link personResponsible} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PERSON_RESPONSIBLE: fieldBuilder.buildEdmTypeField('PersonResponsible', 'Edm.String', false),
                /**
                 * Static representation of the {@link custMgmtPartnerIsMainPartner} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CUST_MGMT_PARTNER_IS_MAIN_PARTNER: fieldBuilder.buildEdmTypeField('CustMgmtPartnerIsMainPartner', 'Edm.Boolean', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', ServiceOrderPersonResp_1.ServiceOrderPersonResp)
            };
        }
        return this._schema;
    }
}
exports.ServiceOrderPersonRespApi = ServiceOrderPersonRespApi;
//# sourceMappingURL=ServiceOrderPersonRespApi.js.map