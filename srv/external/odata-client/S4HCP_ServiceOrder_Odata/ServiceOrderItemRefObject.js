"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceOrderItemRefObject = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "A_ServiceOrderItemRefObject" of service "API_SERVICE_ORDER_SRV".
 */
class ServiceOrderItemRefObject extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
    }
}
exports.ServiceOrderItemRefObject = ServiceOrderItemRefObject;
/**
 * Technical entity name for ServiceOrderItemRefObject.
 */
ServiceOrderItemRefObject._entityName = 'A_ServiceOrderItemRefObject';
/**
 * Default url path for the according service.
 */
ServiceOrderItemRefObject._defaultBasePath = '/sap/opu/odata/sap/API_SERVICE_ORDER_SRV';
/**
 * All key fields of the ServiceOrderItemRefObject entity
 */
ServiceOrderItemRefObject._keys = [
    'ServiceOrder',
    'ServiceOrderItem',
    'ServiceReferenceEquipment',
    'ServiceRefFunctionalLocation'
];
//# sourceMappingURL=ServiceOrderItemRefObject.js.map