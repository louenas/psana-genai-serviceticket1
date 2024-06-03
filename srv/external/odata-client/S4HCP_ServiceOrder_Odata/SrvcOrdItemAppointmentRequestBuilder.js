"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SrvcOrdItemAppointmentRequestBuilder = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * Request builder class for operations supported on the {@link SrvcOrdItemAppointment} entity.
 */
class SrvcOrdItemAppointmentRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for querying all `SrvcOrdItemAppointment` entities.
     * @returns A request builder for creating requests to retrieve all `SrvcOrdItemAppointment` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `SrvcOrdItemAppointment` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `SrvcOrdItemAppointment`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for retrieving one `SrvcOrdItemAppointment` entity based on its keys.
     * @param serviceOrder Key property. See {@link SrvcOrdItemAppointment.serviceOrder}.
     * @param serviceOrderItem Key property. See {@link SrvcOrdItemAppointment.serviceOrderItem}.
     * @param srvcDocAppointmentType Key property. See {@link SrvcOrdItemAppointment.srvcDocAppointmentType}.
     * @returns A request builder for creating requests to retrieve one `SrvcOrdItemAppointment` entity based on its keys.
     */
    getByKey(serviceOrder, serviceOrderItem, srvcDocAppointmentType) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            ServiceOrder: serviceOrder,
            ServiceOrderItem: serviceOrderItem,
            SrvcDocAppointmentType: srvcDocAppointmentType
        });
    }
    /**
     * Returns a request builder for updating an entity of type `SrvcOrdItemAppointment`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `SrvcOrdItemAppointment`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
}
exports.SrvcOrdItemAppointmentRequestBuilder = SrvcOrdItemAppointmentRequestBuilder;
//# sourceMappingURL=SrvcOrdItemAppointmentRequestBuilder.js.map