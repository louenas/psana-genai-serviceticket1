"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SrvcOrdItemAppointment = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "A_SrvcOrdItemAppointment" of service "API_SERVICE_ORDER_SRV".
 */
class SrvcOrdItemAppointment extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
    }
}
exports.SrvcOrdItemAppointment = SrvcOrdItemAppointment;
/**
 * Technical entity name for SrvcOrdItemAppointment.
 */
SrvcOrdItemAppointment._entityName = 'A_SrvcOrdItemAppointment';
/**
 * Default url path for the according service.
 */
SrvcOrdItemAppointment._defaultBasePath = '/sap/opu/odata/sap/API_SERVICE_ORDER_SRV';
/**
 * All key fields of the SrvcOrdItemAppointment entity
 */
SrvcOrdItemAppointment._keys = ['ServiceOrder', 'ServiceOrderItem', 'SrvcDocAppointmentType'];
//# sourceMappingURL=SrvcOrdItemAppointment.js.map