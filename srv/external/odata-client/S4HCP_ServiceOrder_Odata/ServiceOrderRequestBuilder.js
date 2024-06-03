"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceOrderRequestBuilder = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * Request builder class for operations supported on the {@link ServiceOrder} entity.
 */
class ServiceOrderRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for querying all `ServiceOrder` entities.
     * @returns A request builder for creating requests to retrieve all `ServiceOrder` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `ServiceOrder` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ServiceOrder`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for retrieving one `ServiceOrder` entity based on its keys.
     * @param serviceOrder Key property. See {@link ServiceOrder.serviceOrder}.
     * @returns A request builder for creating requests to retrieve one `ServiceOrder` entity based on its keys.
     */
    getByKey(serviceOrder) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            ServiceOrder: serviceOrder
        });
    }
    /**
     * Returns a request builder for updating an entity of type `ServiceOrder`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `ServiceOrder`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
}
exports.ServiceOrderRequestBuilder = ServiceOrderRequestBuilder;
//# sourceMappingURL=ServiceOrderRequestBuilder.js.map