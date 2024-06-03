"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceOrderItemConfirmationRequestBuilder = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * Request builder class for operations supported on the {@link ServiceOrderItemConfirmation} entity.
 */
class ServiceOrderItemConfirmationRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for querying all `ServiceOrderItemConfirmation` entities.
     * @returns A request builder for creating requests to retrieve all `ServiceOrderItemConfirmation` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for retrieving one `ServiceOrderItemConfirmation` entity based on its keys.
     * @param serviceOrder Key property. See {@link ServiceOrderItemConfirmation.serviceOrder}.
     * @param serviceOrderItem Key property. See {@link ServiceOrderItemConfirmation.serviceOrderItem}.
     * @param serviceConfirmation Key property. See {@link ServiceOrderItemConfirmation.serviceConfirmation}.
     * @param serviceConfirmationItem Key property. See {@link ServiceOrderItemConfirmation.serviceConfirmationItem}.
     * @returns A request builder for creating requests to retrieve one `ServiceOrderItemConfirmation` entity based on its keys.
     */
    getByKey(serviceOrder, serviceOrderItem, serviceConfirmation, serviceConfirmationItem) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            ServiceOrder: serviceOrder,
            ServiceOrderItem: serviceOrderItem,
            ServiceConfirmation: serviceConfirmation,
            ServiceConfirmationItem: serviceConfirmationItem
        });
    }
}
exports.ServiceOrderItemConfirmationRequestBuilder = ServiceOrderItemConfirmationRequestBuilder;
//# sourceMappingURL=ServiceOrderItemConfirmationRequestBuilder.js.map