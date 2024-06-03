"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceOrderRefObjectRequestBuilder = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const ServiceOrderRefObject_1 = require("./ServiceOrderRefObject");
/**
 * Request builder class for operations supported on the {@link ServiceOrderRefObject} entity.
 */
class ServiceOrderRefObjectRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for querying all `ServiceOrderRefObject` entities.
     * @returns A request builder for creating requests to retrieve all `ServiceOrderRefObject` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `ServiceOrderRefObject` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ServiceOrderRefObject`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for retrieving one `ServiceOrderRefObject` entity based on its keys.
     * @param serviceOrder Key property. See {@link ServiceOrderRefObject.serviceOrder}.
     * @param serviceReferenceEquipment Key property. See {@link ServiceOrderRefObject.serviceReferenceEquipment}.
     * @param serviceRefFunctionalLocation Key property. See {@link ServiceOrderRefObject.serviceRefFunctionalLocation}.
     * @returns A request builder for creating requests to retrieve one `ServiceOrderRefObject` entity based on its keys.
     */
    getByKey(serviceOrder, serviceReferenceEquipment, serviceRefFunctionalLocation) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            ServiceOrder: serviceOrder,
            ServiceReferenceEquipment: serviceReferenceEquipment,
            ServiceRefFunctionalLocation: serviceRefFunctionalLocation
        });
    }
    delete(serviceOrderOrEntity, serviceReferenceEquipment, serviceRefFunctionalLocation) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, serviceOrderOrEntity instanceof ServiceOrderRefObject_1.ServiceOrderRefObject
            ? serviceOrderOrEntity
            : {
                ServiceOrder: serviceOrderOrEntity,
                ServiceReferenceEquipment: serviceReferenceEquipment,
                ServiceRefFunctionalLocation: serviceRefFunctionalLocation
            });
    }
}
exports.ServiceOrderRefObjectRequestBuilder = ServiceOrderRefObjectRequestBuilder;
//# sourceMappingURL=ServiceOrderRefObjectRequestBuilder.js.map