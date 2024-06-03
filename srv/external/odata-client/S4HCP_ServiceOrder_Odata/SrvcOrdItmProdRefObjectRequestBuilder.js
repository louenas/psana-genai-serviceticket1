"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SrvcOrdItmProdRefObjectRequestBuilder = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const SrvcOrdItmProdRefObject_1 = require("./SrvcOrdItmProdRefObject");
/**
 * Request builder class for operations supported on the {@link SrvcOrdItmProdRefObject} entity.
 */
class SrvcOrdItmProdRefObjectRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for querying all `SrvcOrdItmProdRefObject` entities.
     * @returns A request builder for creating requests to retrieve all `SrvcOrdItmProdRefObject` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `SrvcOrdItmProdRefObject` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `SrvcOrdItmProdRefObject`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for retrieving one `SrvcOrdItmProdRefObject` entity based on its keys.
     * @param serviceOrder Key property. See {@link SrvcOrdItmProdRefObject.serviceOrder}.
     * @param serviceOrderItem Key property. See {@link SrvcOrdItmProdRefObject.serviceOrderItem}.
     * @param serviceReferenceProduct Key property. See {@link SrvcOrdItmProdRefObject.serviceReferenceProduct}.
     * @returns A request builder for creating requests to retrieve one `SrvcOrdItmProdRefObject` entity based on its keys.
     */
    getByKey(serviceOrder, serviceOrderItem, serviceReferenceProduct) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            ServiceOrder: serviceOrder,
            ServiceOrderItem: serviceOrderItem,
            ServiceReferenceProduct: serviceReferenceProduct
        });
    }
    delete(serviceOrderOrEntity, serviceOrderItem, serviceReferenceProduct) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, serviceOrderOrEntity instanceof SrvcOrdItmProdRefObject_1.SrvcOrdItmProdRefObject
            ? serviceOrderOrEntity
            : {
                ServiceOrder: serviceOrderOrEntity,
                ServiceOrderItem: serviceOrderItem,
                ServiceReferenceProduct: serviceReferenceProduct
            });
    }
}
exports.SrvcOrdItmProdRefObjectRequestBuilder = SrvcOrdItmProdRefObjectRequestBuilder;
//# sourceMappingURL=SrvcOrdItmProdRefObjectRequestBuilder.js.map