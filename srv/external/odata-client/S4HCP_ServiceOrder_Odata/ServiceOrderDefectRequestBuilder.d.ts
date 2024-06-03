/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  CreateRequestBuilder,
  DeSerializers,
  DefaultDeSerializers,
  DeleteRequestBuilder,
  DeserializedType,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  RequestBuilder,
  UpdateRequestBuilder
} from '@sap-cloud-sdk/odata-v2';
import { ServiceOrderDefect } from './ServiceOrderDefect';
/**
 * Request builder class for operations supported on the {@link ServiceOrderDefect} entity.
 */
export declare class ServiceOrderDefectRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ServiceOrderDefect<T>, T> {
  /**
   * Returns a request builder for querying all `ServiceOrderDefect` entities.
   * @returns A request builder for creating requests to retrieve all `ServiceOrderDefect` entities.
   */
  getAll(): GetAllRequestBuilder<ServiceOrderDefect<T>, T>;
  /**
   * Returns a request builder for creating a `ServiceOrderDefect` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ServiceOrderDefect`.
   */
  create(
    entity: ServiceOrderDefect<T>
  ): CreateRequestBuilder<ServiceOrderDefect<T>, T>;
  /**
   * Returns a request builder for retrieving one `ServiceOrderDefect` entity based on its keys.
   * @param serviceOrder Key property. See {@link ServiceOrderDefect.serviceOrder}.
   * @param srvcDocTypeDefectCodeProfType Key property. See {@link ServiceOrderDefect.srvcDocTypeDefectCodeProfType}.
   * @param serviceDefectSequence Key property. See {@link ServiceOrderDefect.serviceDefectSequence}.
   * @returns A request builder for creating requests to retrieve one `ServiceOrderDefect` entity based on its keys.
   */
  getByKey(
    serviceOrder: DeserializedType<T, 'Edm.String'>,
    srvcDocTypeDefectCodeProfType: DeserializedType<T, 'Edm.String'>,
    serviceDefectSequence: DeserializedType<T, 'Edm.Int16'>
  ): GetByKeyRequestBuilder<ServiceOrderDefect<T>, T>;
  /**
   * Returns a request builder for updating an entity of type `ServiceOrderDefect`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ServiceOrderDefect`.
   */
  update(
    entity: ServiceOrderDefect<T>
  ): UpdateRequestBuilder<ServiceOrderDefect<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ServiceOrderDefect`.
   * @param serviceOrder Key property. See {@link ServiceOrderDefect.serviceOrder}.
   * @param srvcDocTypeDefectCodeProfType Key property. See {@link ServiceOrderDefect.srvcDocTypeDefectCodeProfType}.
   * @param serviceDefectSequence Key property. See {@link ServiceOrderDefect.serviceDefectSequence}.
   * @returns A request builder for creating requests that delete an entity of type `ServiceOrderDefect`.
   */
  delete(
    serviceOrder: string,
    srvcDocTypeDefectCodeProfType: string,
    serviceDefectSequence: number
  ): DeleteRequestBuilder<ServiceOrderDefect<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ServiceOrderDefect`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ServiceOrderDefect` by taking the entity as a parameter.
   */
  delete(
    entity: ServiceOrderDefect<T>
  ): DeleteRequestBuilder<ServiceOrderDefect<T>, T>;
}
