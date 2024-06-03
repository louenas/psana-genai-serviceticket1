"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SrvcOrdItmPartnerAddress = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "A_SrvcOrdItmPartnerAddress" of service "API_SERVICE_ORDER_SRV".
 */
class SrvcOrdItmPartnerAddress extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
    }
}
exports.SrvcOrdItmPartnerAddress = SrvcOrdItmPartnerAddress;
/**
 * Technical entity name for SrvcOrdItmPartnerAddress.
 */
SrvcOrdItmPartnerAddress._entityName = 'A_SrvcOrdItmPartnerAddress';
/**
 * Default url path for the according service.
 */
SrvcOrdItmPartnerAddress._defaultBasePath = '/sap/opu/odata/sap/API_SERVICE_ORDER_SRV';
/**
 * All key fields of the SrvcOrdItmPartnerAddress entity
 */
SrvcOrdItmPartnerAddress._keys = [
    'ServiceOrder',
    'ServiceOrderItem',
    'CustMgmtPartnerFunction',
    'CustMgmtBusinessPartner'
];
//# sourceMappingURL=SrvcOrdItmPartnerAddress.js.map