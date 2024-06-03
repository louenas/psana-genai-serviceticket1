"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SrvcOrdItemDurationRequestBuilder = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * Request builder class for operations supported on the {@link SrvcOrdItemDuration} entity.
 */
class SrvcOrdItemDurationRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for querying all `SrvcOrdItemDuration` entities.
     * @returns A request builder for creating requests to retrieve all `SrvcOrdItemDuration` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `SrvcOrdItemDuration` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `SrvcOrdItemDuration`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for retrieving one `SrvcOrdItemDuration` entity based on its keys.
     * @param serviceOrder Key property. See {@link SrvcOrdItemDuration.serviceOrder}.
     * @param serviceOrderItem Key property. See {@link SrvcOrdItemDuration.serviceOrderItem}.
     * @param srvcDocDurationType Key property. See {@link SrvcOrdItemDuration.srvcDocDurationType}.
     * @returns A request builder for creating requests to retrieve one `SrvcOrdItemDuration` entity based on its keys.
     */
    getByKey(serviceOrder, serviceOrderItem, srvcDocDurationType) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            ServiceOrder: serviceOrder,
            ServiceOrderItem: serviceOrderItem,
            SrvcDocDurationType: srvcDocDurationType
        });
    }
    /**
     * Returns a request builder for updating an entity of type `SrvcOrdItemDuration`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `SrvcOrdItemDuration`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
}
exports.SrvcOrdItemDurationRequestBuilder = SrvcOrdItemDurationRequestBuilder;
//# sourceMappingURL=SrvcOrdItemDurationRequestBuilder.js.map