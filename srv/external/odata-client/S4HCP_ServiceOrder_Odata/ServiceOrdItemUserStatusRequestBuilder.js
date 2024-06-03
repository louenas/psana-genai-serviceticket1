"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceOrdItemUserStatusRequestBuilder = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const ServiceOrdItemUserStatus_1 = require("./ServiceOrdItemUserStatus");
/**
 * Request builder class for operations supported on the {@link ServiceOrdItemUserStatus} entity.
 */
class ServiceOrdItemUserStatusRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for querying all `ServiceOrdItemUserStatus` entities.
     * @returns A request builder for creating requests to retrieve all `ServiceOrdItemUserStatus` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `ServiceOrdItemUserStatus` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ServiceOrdItemUserStatus`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for retrieving one `ServiceOrdItemUserStatus` entity based on its keys.
     * @param serviceOrder Key property. See {@link ServiceOrdItemUserStatus.serviceOrder}.
     * @param serviceOrderItem Key property. See {@link ServiceOrdItemUserStatus.serviceOrderItem}.
     * @param srvcOrdItemUserStatus Key property. See {@link ServiceOrdItemUserStatus.srvcOrdItemUserStatus}.
     * @returns A request builder for creating requests to retrieve one `ServiceOrdItemUserStatus` entity based on its keys.
     */
    getByKey(serviceOrder, serviceOrderItem, srvcOrdItemUserStatus) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            ServiceOrder: serviceOrder,
            ServiceOrderItem: serviceOrderItem,
            SrvcOrdItemUserStatus: srvcOrdItemUserStatus
        });
    }
    delete(serviceOrderOrEntity, serviceOrderItem, srvcOrdItemUserStatus) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, serviceOrderOrEntity instanceof ServiceOrdItemUserStatus_1.ServiceOrdItemUserStatus
            ? serviceOrderOrEntity
            : {
                ServiceOrder: serviceOrderOrEntity,
                ServiceOrderItem: serviceOrderItem,
                SrvcOrdItemUserStatus: srvcOrdItemUserStatus
            });
    }
}
exports.ServiceOrdItemUserStatusRequestBuilder = ServiceOrdItemUserStatusRequestBuilder;
//# sourceMappingURL=ServiceOrdItemUserStatusRequestBuilder.js.map