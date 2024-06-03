"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceOrderDefectRequestBuilder = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const ServiceOrderDefect_1 = require("./ServiceOrderDefect");
/**
 * Request builder class for operations supported on the {@link ServiceOrderDefect} entity.
 */
class ServiceOrderDefectRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for querying all `ServiceOrderDefect` entities.
     * @returns A request builder for creating requests to retrieve all `ServiceOrderDefect` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `ServiceOrderDefect` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ServiceOrderDefect`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for retrieving one `ServiceOrderDefect` entity based on its keys.
     * @param serviceOrder Key property. See {@link ServiceOrderDefect.serviceOrder}.
     * @param srvcDocTypeDefectCodeProfType Key property. See {@link ServiceOrderDefect.srvcDocTypeDefectCodeProfType}.
     * @param serviceDefectSequence Key property. See {@link ServiceOrderDefect.serviceDefectSequence}.
     * @returns A request builder for creating requests to retrieve one `ServiceOrderDefect` entity based on its keys.
     */
    getByKey(serviceOrder, srvcDocTypeDefectCodeProfType, serviceDefectSequence) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            ServiceOrder: serviceOrder,
            SrvcDocTypeDefectCodeProfType: srvcDocTypeDefectCodeProfType,
            ServiceDefectSequence: serviceDefectSequence
        });
    }
    /**
     * Returns a request builder for updating an entity of type `ServiceOrderDefect`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `ServiceOrderDefect`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(serviceOrderOrEntity, srvcDocTypeDefectCodeProfType, serviceDefectSequence) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, serviceOrderOrEntity instanceof ServiceOrderDefect_1.ServiceOrderDefect
            ? serviceOrderOrEntity
            : {
                ServiceOrder: serviceOrderOrEntity,
                SrvcDocTypeDefectCodeProfType: srvcDocTypeDefectCodeProfType,
                ServiceDefectSequence: serviceDefectSequence
            });
    }
}
exports.ServiceOrderDefectRequestBuilder = ServiceOrderDefectRequestBuilder;
//# sourceMappingURL=ServiceOrderDefectRequestBuilder.js.map