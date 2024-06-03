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
import { SrvcOrdAppointment } from './SrvcOrdAppointment';
/**
 * Request builder class for operations supported on the {@link SrvcOrdAppointment} entity.
 */
export declare class SrvcOrdAppointmentRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SrvcOrdAppointment<T>, T> {
  /**
   * Returns a request builder for querying all `SrvcOrdAppointment` entities.
   * @returns A request builder for creating requests to retrieve all `SrvcOrdAppointment` entities.
   */
  getAll(): GetAllRequestBuilder<SrvcOrdAppointment<T>, T>;
  /**
   * Returns a request builder for creating a `SrvcOrdAppointment` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SrvcOrdAppointment`.
   */
  create(
    entity: SrvcOrdAppointment<T>
  ): CreateRequestBuilder<SrvcOrdAppointment<T>, T>;
  /**
   * Returns a request builder for retrieving one `SrvcOrdAppointment` entity based on its keys.
   * @param serviceOrder Key property. See {@link SrvcOrdAppointment.serviceOrder}.
   * @param srvcDocAppointmentType Key property. See {@link SrvcOrdAppointment.srvcDocAppointmentType}.
   * @returns A request builder for creating requests to retrieve one `SrvcOrdAppointment` entity based on its keys.
   */
  getByKey(
    serviceOrder: DeserializedType<T, 'Edm.String'>,
    srvcDocAppointmentType: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SrvcOrdAppointment<T>, T>;
  /**
   * Returns a request builder for updating an entity of type `SrvcOrdAppointment`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SrvcOrdAppointment`.
   */
  update(
    entity: SrvcOrdAppointment<T>
  ): UpdateRequestBuilder<SrvcOrdAppointment<T>, T>;
}
