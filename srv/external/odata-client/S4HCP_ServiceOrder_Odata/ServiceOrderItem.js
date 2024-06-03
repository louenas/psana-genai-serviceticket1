"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceOrderItem = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "A_ServiceOrderItem" of service "API_SERVICE_ORDER_SRV".
 */
class ServiceOrderItem extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
    }
}
exports.ServiceOrderItem = ServiceOrderItem;
/**
 * Technical entity name for ServiceOrderItem.
 */
ServiceOrderItem._entityName = 'A_ServiceOrderItem';
/**
 * Default url path for the according service.
 */
ServiceOrderItem._defaultBasePath = '/sap/opu/odata/sap/API_SERVICE_ORDER_SRV';
/**
 * All key fields of the ServiceOrderItem entity
 */
ServiceOrderItem._keys = ['ServiceOrder', 'ServiceOrderItem'];
//# sourceMappingURL=ServiceOrderItem.js.map