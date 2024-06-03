"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceOrderItemTextRequestBuilder = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const ServiceOrderItemText_1 = require("./ServiceOrderItemText");
/**
 * Request builder class for operations supported on the {@link ServiceOrderItemText} entity.
 */
class ServiceOrderItemTextRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for querying all `ServiceOrderItemText` entities.
     * @returns A request builder for creating requests to retrieve all `ServiceOrderItemText` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `ServiceOrderItemText` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ServiceOrderItemText`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for retrieving one `ServiceOrderItemText` entity based on its keys.
     * @param serviceOrder Key property. See {@link ServiceOrderItemText.serviceOrder}.
     * @param serviceOrderItem Key property. See {@link ServiceOrderItemText.serviceOrderItem}.
     * @param language Key property. See {@link ServiceOrderItemText.language}.
     * @param longTextId Key property. See {@link ServiceOrderItemText.longTextId}.
     * @returns A request builder for creating requests to retrieve one `ServiceOrderItemText` entity based on its keys.
     */
    getByKey(serviceOrder, serviceOrderItem, language, longTextId) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            ServiceOrder: serviceOrder,
            ServiceOrderItem: serviceOrderItem,
            Language: language,
            LongTextID: longTextId
        });
    }
    /**
     * Returns a request builder for updating an entity of type `ServiceOrderItemText`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `ServiceOrderItemText`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(serviceOrderOrEntity, serviceOrderItem, language, longTextId) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, serviceOrderOrEntity instanceof ServiceOrderItemText_1.ServiceOrderItemText
            ? serviceOrderOrEntity
            : {
                ServiceOrder: serviceOrderOrEntity,
                ServiceOrderItem: serviceOrderItem,
                Language: language,
                LongTextID: longTextId
            });
    }
}
exports.ServiceOrderItemTextRequestBuilder = ServiceOrderItemTextRequestBuilder;
//# sourceMappingURL=ServiceOrderItemTextRequestBuilder.js.map