"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceOrderConfirmationRequestBuilder = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * Request builder class for operations supported on the {@link ServiceOrderConfirmation} entity.
 */
class ServiceOrderConfirmationRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for querying all `ServiceOrderConfirmation` entities.
     * @returns A request builder for creating requests to retrieve all `ServiceOrderConfirmation` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for retrieving one `ServiceOrderConfirmation` entity based on its keys.
     * @param serviceOrder Key property. See {@link ServiceOrderConfirmation.serviceOrder}.
     * @param serviceConfirmation Key property. See {@link ServiceOrderConfirmation.serviceConfirmation}.
     * @returns A request builder for creating requests to retrieve one `ServiceOrderConfirmation` entity based on its keys.
     */
    getByKey(serviceOrder, serviceConfirmation) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            ServiceOrder: serviceOrder,
            ServiceConfirmation: serviceConfirmation
        });
    }
}
exports.ServiceOrderConfirmationRequestBuilder = ServiceOrderConfirmationRequestBuilder;
//# sourceMappingURL=ServiceOrderConfirmationRequestBuilder.js.map