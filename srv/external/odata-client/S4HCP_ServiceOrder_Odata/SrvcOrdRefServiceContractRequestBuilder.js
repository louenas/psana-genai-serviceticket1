"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SrvcOrdRefServiceContractRequestBuilder = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * Request builder class for operations supported on the {@link SrvcOrdRefServiceContract} entity.
 */
class SrvcOrdRefServiceContractRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for querying all `SrvcOrdRefServiceContract` entities.
     * @returns A request builder for creating requests to retrieve all `SrvcOrdRefServiceContract` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for retrieving one `SrvcOrdRefServiceContract` entity based on its keys.
     * @param serviceOrder Key property. See {@link SrvcOrdRefServiceContract.serviceOrder}.
     * @param referenceServiceContract Key property. See {@link SrvcOrdRefServiceContract.referenceServiceContract}.
     * @returns A request builder for creating requests to retrieve one `SrvcOrdRefServiceContract` entity based on its keys.
     */
    getByKey(serviceOrder, referenceServiceContract) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            ServiceOrder: serviceOrder,
            ReferenceServiceContract: referenceServiceContract
        });
    }
}
exports.SrvcOrdRefServiceContractRequestBuilder = SrvcOrdRefServiceContractRequestBuilder;
//# sourceMappingURL=SrvcOrdRefServiceContractRequestBuilder.js.map