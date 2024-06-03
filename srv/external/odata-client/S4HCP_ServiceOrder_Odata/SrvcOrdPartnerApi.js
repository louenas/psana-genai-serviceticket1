"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SrvcOrdPartnerApi = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const SrvcOrdPartner_1 = require("./SrvcOrdPartner");
const SrvcOrdPartnerRequestBuilder_1 = require("./SrvcOrdPartnerRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class SrvcOrdPartnerApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = SrvcOrdPartner_1.SrvcOrdPartner;
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new SrvcOrdPartnerApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            TO_ADDRESS: new odata_v2_1.OneToOneLink('to_Address', this, linkedApis[0])
        };
        return this;
    }
    requestBuilder() {
        return new SrvcOrdPartnerRequestBuilder_1.SrvcOrdPartnerRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(SrvcOrdPartner_1.SrvcOrdPartner, this.deSerializers);
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
                 * Static representation of the {@link custMgmtPartnerFunction} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CUST_MGMT_PARTNER_FUNCTION: fieldBuilder.buildEdmTypeField('CustMgmtPartnerFunction', 'Edm.String', false),
                /**
                 * Static representation of the {@link custMgmtBusinessPartner} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CUST_MGMT_BUSINESS_PARTNER: fieldBuilder.buildEdmTypeField('CustMgmtBusinessPartner', 'Edm.String', false),
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
                ALL_FIELDS: new odata_v2_1.AllFields('*', SrvcOrdPartner_1.SrvcOrdPartner)
            };
        }
        return this._schema;
    }
}
exports.SrvcOrdPartnerApi = SrvcOrdPartnerApi;
//# sourceMappingURL=SrvcOrdPartnerApi.js.map