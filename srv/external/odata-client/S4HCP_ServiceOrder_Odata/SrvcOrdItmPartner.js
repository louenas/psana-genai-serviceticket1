"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SrvcOrdItmPartner = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "A_SrvcOrdItmPartner" of service "API_SERVICE_ORDER_SRV".
 */
class SrvcOrdItmPartner extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
    }
}
exports.SrvcOrdItmPartner = SrvcOrdItmPartner;
/**
 * Technical entity name for SrvcOrdItmPartner.
 */
SrvcOrdItmPartner._entityName = 'A_SrvcOrdItmPartner';
/**
 * Default url path for the according service.
 */
SrvcOrdItmPartner._defaultBasePath = '/sap/opu/odata/sap/API_SERVICE_ORDER_SRV';
/**
 * All key fields of the SrvcOrdItmPartner entity
 */
SrvcOrdItmPartner._keys = [
    'ServiceOrder',
    'ServiceOrderItem',
    'CustMgmtPartnerFunction',
    'CustMgmtBusinessPartner'
];
//# sourceMappingURL=SrvcOrdItmPartner.js.map