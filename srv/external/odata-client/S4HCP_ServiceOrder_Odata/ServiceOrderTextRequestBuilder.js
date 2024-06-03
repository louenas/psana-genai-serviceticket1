"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceOrderTextRequestBuilder = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const ServiceOrderText_1 = require("./ServiceOrderText");
/**
 * Request builder class for operations supported on the {@link ServiceOrderText} entity.
 */
class ServiceOrderTextRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for querying all `ServiceOrderText` entities.
     * @returns A request builder for creating requests to retrieve all `ServiceOrderText` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `ServiceOrderText` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ServiceOrderText`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for retrieving one `ServiceOrderText` entity based on its keys.
     * @param serviceOrder Key property. See {@link ServiceOrderText.serviceOrder}.
     * @param language Key property. See {@link ServiceOrderText.language}.
     * @param longTextId Key property. See {@link ServiceOrderText.longTextId}.
     * @returns A request builder for creating requests to retrieve one `ServiceOrderText` entity based on its keys.
     */
    getByKey(serviceOrder, language, longTextId) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            ServiceOrder: serviceOrder,
            Language: language,
            LongTextID: longTextId
        });
    }
    /**
     * Returns a request builder for updating an entity of type `ServiceOrderText`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `ServiceOrderText`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(serviceOrderOrEntity, language, longTextId) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, serviceOrderOrEntity instanceof ServiceOrderText_1.ServiceOrderText
            ? serviceOrderOrEntity
            : {
                ServiceOrder: serviceOrderOrEntity,
                Language: language,
                LongTextID: longTextId
            });
    }
}
exports.ServiceOrderTextRequestBuilder = ServiceOrderTextRequestBuilder;
//# sourceMappingURL=ServiceOrderTextRequestBuilder.js.map