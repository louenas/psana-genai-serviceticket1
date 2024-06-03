"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceOrderItemRefObjectRequestBuilder = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const ServiceOrderItemRefObject_1 = require("./ServiceOrderItemRefObject");
/**
 * Request builder class for operations supported on the {@link ServiceOrderItemRefObject} entity.
 */
class ServiceOrderItemRefObjectRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for querying all `ServiceOrderItemRefObject` entities.
     * @returns A request builder for creating requests to retrieve all `ServiceOrderItemRefObject` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `ServiceOrderItemRefObject` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ServiceOrderItemRefObject`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for retrieving one `ServiceOrderItemRefObject` entity based on its keys.
     * @param serviceOrder Key property. See {@link ServiceOrderItemRefObject.serviceOrder}.
     * @param serviceOrderItem Key property. See {@link ServiceOrderItemRefObject.serviceOrderItem}.
     * @param serviceReferenceEquipment Key property. See {@link ServiceOrderItemRefObject.serviceReferenceEquipment}.
     * @param serviceRefFunctionalLocation Key property. See {@link ServiceOrderItemRefObject.serviceRefFunctionalLocation}.
     * @returns A request builder for creating requests to retrieve one `ServiceOrderItemRefObject` entity based on its keys.
     */
    getByKey(serviceOrder, serviceOrderItem, serviceReferenceEquipment, serviceRefFunctionalLocation) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            ServiceOrder: serviceOrder,
            ServiceOrderItem: serviceOrderItem,
            ServiceReferenceEquipment: serviceReferenceEquipment,
            ServiceRefFunctionalLocation: serviceRefFunctionalLocation
        });
    }
    delete(serviceOrderOrEntity, serviceOrderItem, serviceReferenceEquipment, serviceRefFunctionalLocation) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, serviceOrderOrEntity instanceof ServiceOrderItemRefObject_1.ServiceOrderItemRefObject
            ? serviceOrderOrEntity
            : {
                ServiceOrder: serviceOrderOrEntity,
                ServiceOrderItem: serviceOrderItem,
                ServiceReferenceEquipment: serviceReferenceEquipment,
                ServiceRefFunctionalLocation: serviceRefFunctionalLocation
            });
    }
}
exports.ServiceOrderItemRefObjectRequestBuilder = ServiceOrderItemRefObjectRequestBuilder;
//# sourceMappingURL=ServiceOrderItemRefObjectRequestBuilder.js.map