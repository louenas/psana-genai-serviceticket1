"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SrvcOrdAppointmentRequestBuilder = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * Request builder class for operations supported on the {@link SrvcOrdAppointment} entity.
 */
class SrvcOrdAppointmentRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for querying all `SrvcOrdAppointment` entities.
     * @returns A request builder for creating requests to retrieve all `SrvcOrdAppointment` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `SrvcOrdAppointment` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `SrvcOrdAppointment`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for retrieving one `SrvcOrdAppointment` entity based on its keys.
     * @param serviceOrder Key property. See {@link SrvcOrdAppointment.serviceOrder}.
     * @param srvcDocAppointmentType Key property. See {@link SrvcOrdAppointment.srvcDocAppointmentType}.
     * @returns A request builder for creating requests to retrieve one `SrvcOrdAppointment` entity based on its keys.
     */
    getByKey(serviceOrder, srvcDocAppointmentType) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            ServiceOrder: serviceOrder,
            SrvcDocAppointmentType: srvcDocAppointmentType
        });
    }
    /**
     * Returns a request builder for updating an entity of type `SrvcOrdAppointment`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `SrvcOrdAppointment`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
}
exports.SrvcOrdAppointmentRequestBuilder = SrvcOrdAppointmentRequestBuilder;
//# sourceMappingURL=SrvcOrdAppointmentRequestBuilder.js.map