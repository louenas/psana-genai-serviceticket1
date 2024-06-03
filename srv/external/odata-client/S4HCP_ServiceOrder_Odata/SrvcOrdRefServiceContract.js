"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SrvcOrdRefServiceContract = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "A_SrvcOrdRefServiceContract" of service "API_SERVICE_ORDER_SRV".
 */
class SrvcOrdRefServiceContract extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
    }
}
exports.SrvcOrdRefServiceContract = SrvcOrdRefServiceContract;
/**
 * Technical entity name for SrvcOrdRefServiceContract.
 */
SrvcOrdRefServiceContract._entityName = 'A_SrvcOrdRefServiceContract';
/**
 * Default url path for the according service.
 */
SrvcOrdRefServiceContract._defaultBasePath = '/sap/opu/odata/sap/API_SERVICE_ORDER_SRV';
/**
 * All key fields of the SrvcOrdRefServiceContract entity
 */
SrvcOrdRefServiceContract._keys = ['ServiceOrder', 'ReferenceServiceContract'];
//# sourceMappingURL=SrvcOrdRefServiceContract.js.map