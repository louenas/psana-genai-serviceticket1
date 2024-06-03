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
import { SrvcOrdItemDuration } from './SrvcOrdItemDuration';
/**
 * Request builder class for operations supported on the {@link SrvcOrdItemDuration} entity.
 */
export declare class SrvcOrdItemDurationRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SrvcOrdItemDuration<T>, T> {
  /**
   * Returns a request builder for querying all `SrvcOrdItemDuration` entities.
   * @returns A request builder for creating requests to retrieve all `SrvcOrdItemDuration` entities.
   */
  getAll(): GetAllRequestBuilder<SrvcOrdItemDuration<T>, T>;
  /**
   * Returns a request builder for creating a `SrvcOrdItemDuration` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SrvcOrdItemDuration`.
   */
  create(
    entity: SrvcOrdItemDuration<T>
  ): CreateRequestBuilder<SrvcOrdItemDuration<T>, T>;
  /**
   * Returns a request builder for retrieving one `SrvcOrdItemDuration` entity based on its keys.
   * @param serviceOrder Key property. See {@link SrvcOrdItemDuration.serviceOrder}.
   * @param serviceOrderItem Key property. See {@link SrvcOrdItemDuration.serviceOrderItem}.
   * @param srvcDocDurationType Key property. See {@link SrvcOrdItemDuration.srvcDocDurationType}.
   * @returns A request builder for creating requests to retrieve one `SrvcOrdItemDuration` entity based on its keys.
   */
  getByKey(
    serviceOrder: DeserializedType<T, 'Edm.String'>,
    serviceOrderItem: DeserializedType<T, 'Edm.String'>,
    srvcDocDurationType: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SrvcOrdItemDuration<T>, T>;
  /**
   * Returns a request builder for updating an entity of type `SrvcOrdItemDuration`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SrvcOrdItemDuration`.
   */
  update(
    entity: SrvcOrdItemDuration<T>
  ): UpdateRequestBuilder<SrvcOrdItemDuration<T>, T>;
}
