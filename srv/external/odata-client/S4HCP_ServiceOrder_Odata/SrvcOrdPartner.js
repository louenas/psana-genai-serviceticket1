"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SrvcOrdPartner = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "A_SrvcOrdPartner" of service "API_SERVICE_ORDER_SRV".
 */
class SrvcOrdPartner extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
    }
}
exports.SrvcOrdPartner = SrvcOrdPartner;
/**
 * Technical entity name for SrvcOrdPartner.
 */
SrvcOrdPartner._entityName = 'A_SrvcOrdPartner';
/**
 * Default url path for the according service.
 */
SrvcOrdPartner._defaultBasePath = '/sap/opu/odata/sap/API_SERVICE_ORDER_SRV';
/**
 * All key fields of the SrvcOrdPartner entity
 */
SrvcOrdPartner._keys = [
    'ServiceOrder',
    'CustMgmtPartnerFunction',
    'CustMgmtBusinessPartner'
];
//# sourceMappingURL=SrvcOrdPartner.js.map