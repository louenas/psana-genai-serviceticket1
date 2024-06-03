"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SrvcOrdDurationRequestBuilder = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * Request builder class for operations supported on the {@link SrvcOrdDuration} entity.
 */
class SrvcOrdDurationRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for querying all `SrvcOrdDuration` entities.
     * @returns A request builder for creating requests to retrieve all `SrvcOrdDuration` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `SrvcOrdDuration` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `SrvcOrdDuration`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for retrieving one `SrvcOrdDuration` entity based on its keys.
     * @param serviceOrder Key property. See {@link SrvcOrdDuration.serviceOrder}.
     * @param srvcDocDurationType Key property. See {@link SrvcOrdDuration.srvcDocDurationType}.
     * @returns A request builder for creating requests to retrieve one `SrvcOrdDuration` entity based on its keys.
     */
    getByKey(serviceOrder, srvcDocDurationType) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            ServiceOrder: serviceOrder,
            SrvcDocDurationType: srvcDocDurationType
        });
    }
    /**
     * Returns a request builder for updating an entity of type `SrvcOrdDuration`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `SrvcOrdDuration`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
}
exports.SrvcOrdDurationRequestBuilder = SrvcOrdDurationRequestBuilder;
//# sourceMappingURL=SrvcOrdDurationRequestBuilder.js.map