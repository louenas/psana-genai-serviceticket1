"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceOrderPersonResp = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "A_ServiceOrderPersonResp" of service "API_SERVICE_ORDER_SRV".
 */
class ServiceOrderPersonResp extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
    }
}
exports.ServiceOrderPersonResp = ServiceOrderPersonResp;
/**
 * Technical entity name for ServiceOrderPersonResp.
 */
ServiceOrderPersonResp._entityName = 'A_ServiceOrderPersonResp';
/**
 * Default url path for the according service.
 */
ServiceOrderPersonResp._defaultBasePath = '/sap/opu/odata/sap/API_SERVICE_ORDER_SRV';
/**
 * All key fields of the ServiceOrderPersonResp entity
 */
ServiceOrderPersonResp._keys = ['ServiceOrder', 'PersonResponsible'];
//# sourceMappingURL=ServiceOrderPersonResp.js.map