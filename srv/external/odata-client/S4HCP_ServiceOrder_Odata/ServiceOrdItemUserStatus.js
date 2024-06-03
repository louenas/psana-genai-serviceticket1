"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceOrdItemUserStatus = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "A_ServiceOrdItemUserStatus" of service "API_SERVICE_ORDER_SRV".
 */
class ServiceOrdItemUserStatus extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
    }
}
exports.ServiceOrdItemUserStatus = ServiceOrdItemUserStatus;
/**
 * Technical entity name for ServiceOrdItemUserStatus.
 */
ServiceOrdItemUserStatus._entityName = 'A_ServiceOrdItemUserStatus';
/**
 * Default url path for the according service.
 */
ServiceOrdItemUserStatus._defaultBasePath = '/sap/opu/odata/sap/API_SERVICE_ORDER_SRV';
/**
 * All key fields of the ServiceOrdItemUserStatus entity
 */
ServiceOrdItemUserStatus._keys = ['ServiceOrder', 'ServiceOrderItem', 'SrvcOrdItemUserStatus'];
//# sourceMappingURL=ServiceOrdItemUserStatus.js.map