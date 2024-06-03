"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SrvcOrdPartnerAddress = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "A_SrvcOrdPartnerAddress" of service "API_SERVICE_ORDER_SRV".
 */
class SrvcOrdPartnerAddress extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
    }
}
exports.SrvcOrdPartnerAddress = SrvcOrdPartnerAddress;
/**
 * Technical entity name for SrvcOrdPartnerAddress.
 */
SrvcOrdPartnerAddress._entityName = 'A_SrvcOrdPartnerAddress';
/**
 * Default url path for the according service.
 */
SrvcOrdPartnerAddress._defaultBasePath = '/sap/opu/odata/sap/API_SERVICE_ORDER_SRV';
/**
 * All key fields of the SrvcOrdPartnerAddress entity
 */
SrvcOrdPartnerAddress._keys = [
    'ServiceOrder',
    'CustMgmtPartnerFunction',
    'CustMgmtBusinessPartner'
];
//# sourceMappingURL=SrvcOrdPartnerAddress.js.map