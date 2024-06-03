"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceOrderItemRequestBuilder = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const ServiceOrderItem_1 = require("./ServiceOrderItem");
/**
 * Request builder class for operations supported on the {@link ServiceOrderItem} entity.
 */
class ServiceOrderItemRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for querying all `ServiceOrderItem` entities.
     * @returns A request builder for creating requests to retrieve all `ServiceOrderItem` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `ServiceOrderItem` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ServiceOrderItem`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for retrieving one `ServiceOrderItem` entity based on its keys.
     * @param serviceOrder Key property. See {@link ServiceOrderItem.serviceOrder}.
     * @param serviceOrderItem Key property. See {@link ServiceOrderItem.serviceOrderItem}.
     * @returns A request builder for creating requests to retrieve one `ServiceOrderItem` entity based on its keys.
     */
    getByKey(serviceOrder, serviceOrderItem) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            ServiceOrder: serviceOrder,
            ServiceOrderItem: serviceOrderItem
        });
    }
    /**
     * Returns a request builder for updating an entity of type `ServiceOrderItem`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `ServiceOrderItem`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(serviceOrderOrEntity, serviceOrderItem) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, serviceOrderOrEntity instanceof ServiceOrderItem_1.ServiceOrderItem
            ? serviceOrderOrEntity
            : {
                ServiceOrder: serviceOrderOrEntity,
                ServiceOrderItem: serviceOrderItem
            });
    }
}
exports.ServiceOrderItemRequestBuilder = ServiceOrderItemRequestBuilder;
//# sourceMappingURL=ServiceOrderItemRequestBuilder.js.map