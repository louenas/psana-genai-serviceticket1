"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceOrderPriceElementRequestBuilder = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * Request builder class for operations supported on the {@link ServiceOrderPriceElement} entity.
 */
class ServiceOrderPriceElementRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for querying all `ServiceOrderPriceElement` entities.
     * @returns A request builder for creating requests to retrieve all `ServiceOrderPriceElement` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `ServiceOrderPriceElement` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ServiceOrderPriceElement`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for retrieving one `ServiceOrderPriceElement` entity based on its keys.
     * @param serviceOrder Key property. See {@link ServiceOrderPriceElement.serviceOrder}.
     * @param pricingProcedureStep Key property. See {@link ServiceOrderPriceElement.pricingProcedureStep}.
     * @param pricingProcedureCounter Key property. See {@link ServiceOrderPriceElement.pricingProcedureCounter}.
     * @returns A request builder for creating requests to retrieve one `ServiceOrderPriceElement` entity based on its keys.
     */
    getByKey(serviceOrder, pricingProcedureStep, pricingProcedureCounter) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            ServiceOrder: serviceOrder,
            PricingProcedureStep: pricingProcedureStep,
            PricingProcedureCounter: pricingProcedureCounter
        });
    }
    /**
     * Returns a request builder for updating an entity of type `ServiceOrderPriceElement`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `ServiceOrderPriceElement`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
}
exports.ServiceOrderPriceElementRequestBuilder = ServiceOrderPriceElementRequestBuilder;
//# sourceMappingURL=ServiceOrderPriceElementRequestBuilder.js.map