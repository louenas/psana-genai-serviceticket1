"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceOrdUserStatusRequestBuilder = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const ServiceOrdUserStatus_1 = require("./ServiceOrdUserStatus");
/**
 * Request builder class for operations supported on the {@link ServiceOrdUserStatus} entity.
 */
class ServiceOrdUserStatusRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for querying all `ServiceOrdUserStatus` entities.
     * @returns A request builder for creating requests to retrieve all `ServiceOrdUserStatus` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `ServiceOrdUserStatus` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ServiceOrdUserStatus`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for retrieving one `ServiceOrdUserStatus` entity based on its keys.
     * @param serviceOrder Key property. See {@link ServiceOrdUserStatus.serviceOrder}.
     * @param srvcOrdUserStatus Key property. See {@link ServiceOrdUserStatus.srvcOrdUserStatus}.
     * @returns A request builder for creating requests to retrieve one `ServiceOrdUserStatus` entity based on its keys.
     */
    getByKey(serviceOrder, srvcOrdUserStatus) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            ServiceOrder: serviceOrder,
            SrvcOrdUserStatus: srvcOrdUserStatus
        });
    }
    delete(serviceOrderOrEntity, srvcOrdUserStatus) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, serviceOrderOrEntity instanceof ServiceOrdUserStatus_1.ServiceOrdUserStatus
            ? serviceOrderOrEntity
            : {
                ServiceOrder: serviceOrderOrEntity,
                SrvcOrdUserStatus: srvcOrdUserStatus
            });
    }
}
exports.ServiceOrdUserStatusRequestBuilder = ServiceOrdUserStatusRequestBuilder;
//# sourceMappingURL=ServiceOrdUserStatusRequestBuilder.js.map