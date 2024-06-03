"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceOrderItemPriceElement = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "A_ServiceOrderItemPriceElement" of service "API_SERVICE_ORDER_SRV".
 */
class ServiceOrderItemPriceElement extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
    }
}
exports.ServiceOrderItemPriceElement = ServiceOrderItemPriceElement;
/**
 * Technical entity name for ServiceOrderItemPriceElement.
 */
ServiceOrderItemPriceElement._entityName = 'A_ServiceOrderItemPriceElement';
/**
 * Default url path for the according service.
 */
ServiceOrderItemPriceElement._defaultBasePath = '/sap/opu/odata/sap/API_SERVICE_ORDER_SRV';
/**
 * All key fields of the ServiceOrderItemPriceElement entity
 */
ServiceOrderItemPriceElement._keys = [
    'ServiceOrder',
    'ServiceOrderItem',
    'PricingProcedureStep',
    'PricingProcedureCounter'
];
//# sourceMappingURL=ServiceOrderItemPriceElement.js.map