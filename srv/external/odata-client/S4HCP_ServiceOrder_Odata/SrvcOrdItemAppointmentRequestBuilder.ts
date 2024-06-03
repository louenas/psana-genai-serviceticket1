/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  CreateRequestBuilder,
  DeSerializers,
  DefaultDeSerializers,
  DeserializedType,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  RequestBuilder,
  UpdateRequestBuilder
} from '@sap-cloud-sdk/odata-v2';
import { SrvcOrdItemAppointment } from './SrvcOrdItemAppointment';

/**
 * Request builder class for operations supported on the {@link SrvcOrdItemAppointment} entity.
 */
export class SrvcOrdItemAppointmentRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SrvcOrdItemAppointment<T>, T> {
  /**
   * Returns a request builder for querying all `SrvcOrdItemAppointment` entities.
   * @returns A request builder for creating requests to retrieve all `SrvcOrdItemAppointment` entities.
   */
  getAll(): GetAllRequestBuilder<SrvcOrdItemAppointment<T>, T> {
    return new GetAllRequestBuilder<SrvcOrdItemAppointment<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SrvcOrdItemAppointment` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SrvcOrdItemAppointment`.
   */
  create(
    entity: SrvcOrdItemAppointment<T>
  ): CreateRequestBuilder<SrvcOrdItemAppointment<T>, T> {
    return new CreateRequestBuilder<SrvcOrdItemAppointment<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SrvcOrdItemAppointment` entity based on its keys.
   * @param serviceOrder Key property. See {@link SrvcOrdItemAppointment.serviceOrder}.
   * @param serviceOrderItem Key property. See {@link SrvcOrdItemAppointment.serviceOrderItem}.
   * @param srvcDocAppointmentType Key property. See {@link SrvcOrdItemAppointment.srvcDocAppointmentType}.
   * @returns A request builder for creating requests to retrieve one `SrvcOrdItemAppointment` entity based on its keys.
   */
  getByKey(
    serviceOrder: DeserializedType<T, 'Edm.String'>,
    serviceOrderItem: DeserializedType<T, 'Edm.String'>,
    srvcDocAppointmentType: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SrvcOrdItemAppointment<T>, T> {
    return new GetByKeyRequestBuilder<SrvcOrdItemAppointment<T>, T>(
      this.entityApi,
      {
        ServiceOrder: serviceOrder,
        ServiceOrderItem: serviceOrderItem,
        SrvcDocAppointmentType: srvcDocAppointmentType
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SrvcOrdItemAppointment`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SrvcOrdItemAppointment`.
   */
  update(
    entity: SrvcOrdItemAppointment<T>
  ): UpdateRequestBuilder<SrvcOrdItemAppointment<T>, T> {
    return new UpdateRequestBuilder<SrvcOrdItemAppointment<T>, T>(
      this.entityApi,
      entity
    );
  }
}
