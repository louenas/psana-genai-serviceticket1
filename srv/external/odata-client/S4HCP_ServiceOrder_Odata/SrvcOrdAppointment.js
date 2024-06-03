"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SrvcOrdAppointment = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "A_SrvcOrdAppointment" of service "API_SERVICE_ORDER_SRV".
 */
class SrvcOrdAppointment extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
    }
}
exports.SrvcOrdAppointment = SrvcOrdAppointment;
/**
 * Technical entity name for SrvcOrdAppointment.
 */
SrvcOrdAppointment._entityName = 'A_SrvcOrdAppointment';
/**
 * Default url path for the according service.
 */
SrvcOrdAppointment._defaultBasePath = '/sap/opu/odata/sap/API_SERVICE_ORDER_SRV';
/**
 * All key fields of the SrvcOrdAppointment entity
 */
SrvcOrdAppointment._keys = ['ServiceOrder', 'SrvcDocAppointmentType'];
//# sourceMappingURL=SrvcOrdAppointment.js.map