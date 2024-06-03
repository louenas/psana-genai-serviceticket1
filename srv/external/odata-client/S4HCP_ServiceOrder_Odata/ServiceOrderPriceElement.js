"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceOrderPriceElement = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "A_ServiceOrderPriceElement" of service "API_SERVICE_ORDER_SRV".
 */
class ServiceOrderPriceElement extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
    }
}
exports.ServiceOrderPriceElement = ServiceOrderPriceElement;
/**
 * Technical entity name for ServiceOrderPriceElement.
 */
ServiceOrderPriceElement._entityName = 'A_ServiceOrderPriceElement';
/**
 * Default url path for the according service.
 */
ServiceOrderPriceElement._defaultBasePath = '/sap/opu/odata/sap/API_SERVICE_ORDER_SRV';
/**
 * All key fields of the ServiceOrderPriceElement entity
 */
ServiceOrderPriceElement._keys = [
    'ServiceOrder',
    'PricingProcedureStep',
    'PricingProcedureCounter'
];
//# sourceMappingURL=ServiceOrderPriceElement.js.map