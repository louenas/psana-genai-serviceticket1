"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceOrderPersonRespRequestBuilder = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const ServiceOrderPersonResp_1 = require("./ServiceOrderPersonResp");
/**
 * Request builder class for operations supported on the {@link ServiceOrderPersonResp} entity.
 */
class ServiceOrderPersonRespRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for querying all `ServiceOrderPersonResp` entities.
     * @returns A request builder for creating requests to retrieve all `ServiceOrderPersonResp` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `ServiceOrderPersonResp` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ServiceOrderPersonResp`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for retrieving one `ServiceOrderPersonResp` entity based on its keys.
     * @param serviceOrder Key property. See {@link ServiceOrderPersonResp.serviceOrder}.
     * @param personResponsible Key property. See {@link ServiceOrderPersonResp.personResponsible}.
     * @returns A request builder for creating requests to retrieve one `ServiceOrderPersonResp` entity based on its keys.
     */
    getByKey(serviceOrder, personResponsible) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            ServiceOrder: serviceOrder,
            PersonResponsible: personResponsible
        });
    }
    /**
     * Returns a request builder for updating an entity of type `ServiceOrderPersonResp`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `ServiceOrderPersonResp`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(serviceOrderOrEntity, personResponsible) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, serviceOrderOrEntity instanceof ServiceOrderPersonResp_1.ServiceOrderPersonResp
            ? serviceOrderOrEntity
            : {
                ServiceOrder: serviceOrderOrEntity,
                PersonResponsible: personResponsible
            });
    }
}
exports.ServiceOrderPersonRespRequestBuilder = ServiceOrderPersonRespRequestBuilder;
//# sourceMappingURL=ServiceOrderPersonRespRequestBuilder.js.map