"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceOrderItemPriceElementRequestBuilder = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * Request builder class for operations supported on the {@link ServiceOrderItemPriceElement} entity.
 */
class ServiceOrderItemPriceElementRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for querying all `ServiceOrderItemPriceElement` entities.
     * @returns A request builder for creating requests to retrieve all `ServiceOrderItemPriceElement` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `ServiceOrderItemPriceElement` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ServiceOrderItemPriceElement`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for retrieving one `ServiceOrderItemPriceElement` entity based on its keys.
     * @param serviceOrder Key property. See {@link ServiceOrderItemPriceElement.serviceOrder}.
     * @param serviceOrderItem Key property. See {@link ServiceOrderItemPriceElement.serviceOrderItem}.
     * @param pricingProcedureStep Key property. See {@link ServiceOrderItemPriceElement.pricingProcedureStep}.
     * @param pricingProcedureCounter Key property. See {@link ServiceOrderItemPriceElement.pricingProcedureCounter}.
     * @returns A request builder for creating requests to retrieve one `ServiceOrderItemPriceElement` entity based on its keys.
     */
    getByKey(serviceOrder, serviceOrderItem, pricingProcedureStep, pricingProcedureCounter) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            ServiceOrder: serviceOrder,
            ServiceOrderItem: serviceOrderItem,
            PricingProcedureStep: pricingProcedureStep,
            PricingProcedureCounter: pricingProcedureCounter
        });
    }
    /**
     * Returns a request builder for updating an entity of type `ServiceOrderItemPriceElement`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `ServiceOrderItemPriceElement`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
}
exports.ServiceOrderItemPriceElementRequestBuilder = ServiceOrderItemPriceElementRequestBuilder;
//# sourceMappingURL=ServiceOrderItemPriceElementRequestBuilder.js.map