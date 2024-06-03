"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceOrdItemUserStatusApi = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const ServiceOrdItemUserStatus_1 = require("./ServiceOrdItemUserStatus");
const ServiceOrdItemUserStatusRequestBuilder_1 = require("./ServiceOrdItemUserStatusRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class ServiceOrdItemUserStatusApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = ServiceOrdItemUserStatus_1.ServiceOrdItemUserStatus;
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new ServiceOrdItemUserStatusApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {};
        return this;
    }
    requestBuilder() {
        return new ServiceOrdItemUserStatusRequestBuilder_1.ServiceOrdItemUserStatusRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(ServiceOrdItemUserStatus_1.ServiceOrdItemUserStatus, this.deSerializers);
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
                 * Static representation of the {@link srvcOrdItemUserStatus} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SRVC_ORD_ITEM_USER_STATUS: fieldBuilder.buildEdmTypeField('SrvcOrdItemUserStatus', 'Edm.String', false),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', ServiceOrdItemUserStatus_1.ServiceOrdItemUserStatus)
            };
        }
        return this._schema;
    }
}
exports.ServiceOrdItemUserStatusApi = ServiceOrdItemUserStatusApi;
//# sourceMappingURL=ServiceOrdItemUserStatusApi.js.map