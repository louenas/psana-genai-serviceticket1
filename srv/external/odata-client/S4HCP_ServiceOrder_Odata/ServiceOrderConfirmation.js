"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceOrderConfirmation = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "A_ServiceOrderConfirmation" of service "API_SERVICE_ORDER_SRV".
 */
class ServiceOrderConfirmation extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
    }
}
exports.ServiceOrderConfirmation = ServiceOrderConfirmation;
/**
 * Technical entity name for ServiceOrderConfirmation.
 */
ServiceOrderConfirmation._entityName = 'A_ServiceOrderConfirmation';
/**
 * Default url path for the according service.
 */
ServiceOrderConfirmation._defaultBasePath = '/sap/opu/odata/sap/API_SERVICE_ORDER_SRV';
/**
 * All key fields of the ServiceOrderConfirmation entity
 */
ServiceOrderConfirmation._keys = ['ServiceOrder', 'ServiceConfirmation'];
//# sourceMappingURL=ServiceOrderConfirmation.js.map