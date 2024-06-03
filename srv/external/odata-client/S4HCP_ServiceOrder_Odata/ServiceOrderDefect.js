"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceOrderDefect = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "A_ServiceOrderDefect" of service "API_SERVICE_ORDER_SRV".
 */
class ServiceOrderDefect extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
    }
}
exports.ServiceOrderDefect = ServiceOrderDefect;
/**
 * Technical entity name for ServiceOrderDefect.
 */
ServiceOrderDefect._entityName = 'A_ServiceOrderDefect';
/**
 * Default url path for the according service.
 */
ServiceOrderDefect._defaultBasePath = '/sap/opu/odata/sap/API_SERVICE_ORDER_SRV';
/**
 * All key fields of the ServiceOrderDefect entity
 */
ServiceOrderDefect._keys = [
    'ServiceOrder',
    'SrvcDocTypeDefectCodeProfType',
    'ServiceDefectSequence'
];
//# sourceMappingURL=ServiceOrderDefect.js.map