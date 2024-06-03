"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SrvcOrdProdRefObjectRequestBuilder = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const SrvcOrdProdRefObject_1 = require("./SrvcOrdProdRefObject");
/**
 * Request builder class for operations supported on the {@link SrvcOrdProdRefObject} entity.
 */
class SrvcOrdProdRefObjectRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for querying all `SrvcOrdProdRefObject` entities.
     * @returns A request builder for creating requests to retrieve all `SrvcOrdProdRefObject` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `SrvcOrdProdRefObject` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `SrvcOrdProdRefObject`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for retrieving one `SrvcOrdProdRefObject` entity based on its keys.
     * @param serviceOrder Key property. See {@link SrvcOrdProdRefObject.serviceOrder}.
     * @param serviceReferenceProduct Key property. See {@link SrvcOrdProdRefObject.serviceReferenceProduct}.
     * @returns A request builder for creating requests to retrieve one `SrvcOrdProdRefObject` entity based on its keys.
     */
    getByKey(serviceOrder, serviceReferenceProduct) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            ServiceOrder: serviceOrder,
            ServiceReferenceProduct: serviceReferenceProduct
        });
    }
    delete(serviceOrderOrEntity, serviceReferenceProduct) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, serviceOrderOrEntity instanceof SrvcOrdProdRefObject_1.SrvcOrdProdRefObject
            ? serviceOrderOrEntity
            : {
                ServiceOrder: serviceOrderOrEntity,
                ServiceReferenceProduct: serviceReferenceProduct
            });
    }
}
exports.SrvcOrdProdRefObjectRequestBuilder = SrvcOrdProdRefObjectRequestBuilder;
//# sourceMappingURL=SrvcOrdProdRefObjectRequestBuilder.js.map