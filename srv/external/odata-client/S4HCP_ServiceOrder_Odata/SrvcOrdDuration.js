"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SrvcOrdDuration = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "A_SrvcOrdDuration" of service "API_SERVICE_ORDER_SRV".
 */
class SrvcOrdDuration extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
    }
}
exports.SrvcOrdDuration = SrvcOrdDuration;
/**
 * Technical entity name for SrvcOrdDuration.
 */
SrvcOrdDuration._entityName = 'A_SrvcOrdDuration';
/**
 * Default url path for the according service.
 */
SrvcOrdDuration._defaultBasePath = '/sap/opu/odata/sap/API_SERVICE_ORDER_SRV';
/**
 * All key fields of the SrvcOrdDuration entity
 */
SrvcOrdDuration._keys = ['ServiceOrder', 'SrvcDocDurationType'];
//# sourceMappingURL=SrvcOrdDuration.js.map