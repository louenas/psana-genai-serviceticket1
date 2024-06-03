"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SrvcOrdAppointmentApi = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const SrvcOrdAppointment_1 = require("./SrvcOrdAppointment");
const SrvcOrdAppointmentRequestBuilder_1 = require("./SrvcOrdAppointmentRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class SrvcOrdAppointmentApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = SrvcOrdAppointment_1.SrvcOrdAppointment;
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new SrvcOrdAppointmentApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {};
        return this;
    }
    requestBuilder() {
        return new SrvcOrdAppointmentRequestBuilder_1.SrvcOrdAppointmentRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(SrvcOrdAppointment_1.SrvcOrdAppointment, this.deSerializers);
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
                 * Static representation of the {@link srvcDocAppointmentType} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SRVC_DOC_APPOINTMENT_TYPE: fieldBuilder.buildEdmTypeField('SrvcDocAppointmentType', 'Edm.String', false),
                /**
                 * Static representation of the {@link srvcDocApptStartDateTime} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SRVC_DOC_APPT_START_DATE_TIME: fieldBuilder.buildEdmTypeField('SrvcDocApptStartDateTime', 'Edm.DateTimeOffset', true),
                /**
                 * Static representation of the {@link srvcDocApptEndDateTime} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SRVC_DOC_APPT_END_DATE_TIME: fieldBuilder.buildEdmTypeField('SrvcDocApptEndDateTime', 'Edm.DateTimeOffset', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', SrvcOrdAppointment_1.SrvcOrdAppointment)
            };
        }
        return this._schema;
    }
}
exports.SrvcOrdAppointmentApi = SrvcOrdAppointmentApi;
//# sourceMappingURL=SrvcOrdAppointmentApi.js.map