"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SrvcOrdItemDuration = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "A_SrvcOrdItemDuration" of service "API_SERVICE_ORDER_SRV".
 */
class SrvcOrdItemDuration extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
    }
}
exports.SrvcOrdItemDuration = SrvcOrdItemDuration;
/**
 * Technical entity name for SrvcOrdItemDuration.
 */
SrvcOrdItemDuration._entityName = 'A_SrvcOrdItemDuration';
/**
 * Default url path for the according service.
 */
SrvcOrdItemDuration._defaultBasePath = '/sap/opu/odata/sap/API_SERVICE_ORDER_SRV';
/**
 * All key fields of the SrvcOrdItemDuration entity
 */
SrvcOrdItemDuration._keys = ['ServiceOrder', 'ServiceOrderItem', 'SrvcDocDurationType'];
//# sourceMappingURL=SrvcOrdItemDuration.js.map