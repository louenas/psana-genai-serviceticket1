"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceOrder = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "A_ServiceOrder" of service "API_SERVICE_ORDER_SRV".
 */
class ServiceOrder extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
    }
}
exports.ServiceOrder = ServiceOrder;
/**
 * Technical entity name for ServiceOrder.
 */
ServiceOrder._entityName = 'A_ServiceOrder';
/**
 * Default url path for the according service.
 */
ServiceOrder._defaultBasePath = '/sap/opu/odata/sap/API_SERVICE_ORDER_SRV';
/**
 * All key fields of the ServiceOrder entity
 */
ServiceOrder._keys = ['ServiceOrder'];
//# sourceMappingURL=ServiceOrder.js.map