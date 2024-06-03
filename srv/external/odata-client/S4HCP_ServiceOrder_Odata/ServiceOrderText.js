"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceOrderText = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "A_ServiceOrderText" of service "API_SERVICE_ORDER_SRV".
 */
class ServiceOrderText extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
    }
}
exports.ServiceOrderText = ServiceOrderText;
/**
 * Technical entity name for ServiceOrderText.
 */
ServiceOrderText._entityName = 'A_ServiceOrderText';
/**
 * Default url path for the according service.
 */
ServiceOrderText._defaultBasePath = '/sap/opu/odata/sap/API_SERVICE_ORDER_SRV';
/**
 * All key fields of the ServiceOrderText entity
 */
ServiceOrderText._keys = ['ServiceOrder', 'Language', 'LongTextID'];
//# sourceMappingURL=ServiceOrderText.js.map