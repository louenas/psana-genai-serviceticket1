"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceOrderRefObject = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "A_ServiceOrderRefObject" of service "API_SERVICE_ORDER_SRV".
 */
class ServiceOrderRefObject extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
    }
}
exports.ServiceOrderRefObject = ServiceOrderRefObject;
/**
 * Technical entity name for ServiceOrderRefObject.
 */
ServiceOrderRefObject._entityName = 'A_ServiceOrderRefObject';
/**
 * Default url path for the according service.
 */
ServiceOrderRefObject._defaultBasePath = '/sap/opu/odata/sap/API_SERVICE_ORDER_SRV';
/**
 * All key fields of the ServiceOrderRefObject entity
 */
ServiceOrderRefObject._keys = [
    'ServiceOrder',
    'ServiceReferenceEquipment',
    'ServiceRefFunctionalLocation'
];
//# sourceMappingURL=ServiceOrderRefObject.js.map