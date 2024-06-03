"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SrvcOrdItmProdRefObject = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "A_SrvcOrdItmProdRefObject" of service "API_SERVICE_ORDER_SRV".
 */
class SrvcOrdItmProdRefObject extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
    }
}
exports.SrvcOrdItmProdRefObject = SrvcOrdItmProdRefObject;
/**
 * Technical entity name for SrvcOrdItmProdRefObject.
 */
SrvcOrdItmProdRefObject._entityName = 'A_SrvcOrdItmProdRefObject';
/**
 * Default url path for the according service.
 */
SrvcOrdItmProdRefObject._defaultBasePath = '/sap/opu/odata/sap/API_SERVICE_ORDER_SRV';
/**
 * All key fields of the SrvcOrdItmProdRefObject entity
 */
SrvcOrdItmProdRefObject._keys = [
    'ServiceOrder',
    'ServiceOrderItem',
    'ServiceReferenceProduct'
];
//# sourceMappingURL=SrvcOrdItmProdRefObject.js.map