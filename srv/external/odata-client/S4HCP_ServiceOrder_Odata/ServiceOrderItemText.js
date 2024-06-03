"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceOrderItemText = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "A_ServiceOrderItemText" of service "API_SERVICE_ORDER_SRV".
 */
class ServiceOrderItemText extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
    }
}
exports.ServiceOrderItemText = ServiceOrderItemText;
/**
 * Technical entity name for ServiceOrderItemText.
 */
ServiceOrderItemText._entityName = 'A_ServiceOrderItemText';
/**
 * Default url path for the according service.
 */
ServiceOrderItemText._defaultBasePath = '/sap/opu/odata/sap/API_SERVICE_ORDER_SRV';
/**
 * All key fields of the ServiceOrderItemText entity
 */
ServiceOrderItemText._keys = ['ServiceOrder', 'ServiceOrderItem', 'Language', 'LongTextID'];
//# sourceMappingURL=ServiceOrderItemText.js.map