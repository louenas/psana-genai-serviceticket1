"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceOrderItemConfirmation = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "A_ServiceOrderItemConfirmation" of service "API_SERVICE_ORDER_SRV".
 */
class ServiceOrderItemConfirmation extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
    }
}
exports.ServiceOrderItemConfirmation = ServiceOrderItemConfirmation;
/**
 * Technical entity name for ServiceOrderItemConfirmation.
 */
ServiceOrderItemConfirmation._entityName = 'A_ServiceOrderItemConfirmation';
/**
 * Default url path for the according service.
 */
ServiceOrderItemConfirmation._defaultBasePath = '/sap/opu/odata/sap/API_SERVICE_ORDER_SRV';
/**
 * All key fields of the ServiceOrderItemConfirmation entity
 */
ServiceOrderItemConfirmation._keys = [
    'ServiceOrder',
    'ServiceOrderItem',
    'ServiceConfirmation',
    'ServiceConfirmationItem'
];
//# sourceMappingURL=ServiceOrderItemConfirmation.js.map