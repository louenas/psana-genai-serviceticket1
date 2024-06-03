"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceOrdUserStatus = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "A_ServiceOrdUserStatus" of service "API_SERVICE_ORDER_SRV".
 */
class ServiceOrdUserStatus extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
    }
}
exports.ServiceOrdUserStatus = ServiceOrdUserStatus;
/**
 * Technical entity name for ServiceOrdUserStatus.
 */
ServiceOrdUserStatus._entityName = 'A_ServiceOrdUserStatus';
/**
 * Default url path for the according service.
 */
ServiceOrdUserStatus._defaultBasePath = '/sap/opu/odata/sap/API_SERVICE_ORDER_SRV';
/**
 * All key fields of the ServiceOrdUserStatus entity
 */
ServiceOrdUserStatus._keys = ['ServiceOrder', 'SrvcOrdUserStatus'];
//# sourceMappingURL=ServiceOrdUserStatus.js.map