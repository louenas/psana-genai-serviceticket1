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
import { ServiceOrderText } from './ServiceOrderText';
/**
 * Request builder class for operations supported on the {@link ServiceOrderText} entity.
 */
export declare class ServiceOrderTextRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ServiceOrderText<T>, T> {
  /**
   * Returns a request builder for querying all `ServiceOrderText` entities.
   * @returns A request builder for creating requests to retrieve all `ServiceOrderText` entities.
   */
  getAll(): GetAllRequestBuilder<ServiceOrderText<T>, T>;
  /**
   * Returns a request builder for creating a `ServiceOrderText` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ServiceOrderText`.
   */
  create(
    entity: ServiceOrderText<T>
  ): CreateRequestBuilder<ServiceOrderText<T>, T>;
  /**
   * Returns a request builder for retrieving one `ServiceOrderText` entity based on its keys.
   * @param serviceOrder Key property. See {@link ServiceOrderText.serviceOrder}.
   * @param language Key property. See {@link ServiceOrderText.language}.
   * @param longTextId Key property. See {@link ServiceOrderText.longTextId}.
   * @returns A request builder for creating requests to retrieve one `ServiceOrderText` entity based on its keys.
   */
  getByKey(
    serviceOrder: DeserializedType<T, 'Edm.String'>,
    language: DeserializedType<T, 'Edm.String'>,
    longTextId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ServiceOrderText<T>, T>;
  /**
   * Returns a request builder for updating an entity of type `ServiceOrderText`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ServiceOrderText`.
   */
  update(
    entity: ServiceOrderText<T>
  ): UpdateRequestBuilder<ServiceOrderText<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ServiceOrderText`.
   * @param serviceOrder Key property. See {@link ServiceOrderText.serviceOrder}.
   * @param language Key property. See {@link ServiceOrderText.language}.
   * @param longTextId Key property. See {@link ServiceOrderText.longTextId}.
   * @returns A request builder for creating requests that delete an entity of type `ServiceOrderText`.
   */
  delete(
    serviceOrder: string,
    language: string,
    longTextId: string
  ): DeleteRequestBuilder<ServiceOrderText<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ServiceOrderText`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ServiceOrderText` by taking the entity as a parameter.
   */
  delete(
    entity: ServiceOrderText<T>
  ): DeleteRequestBuilder<ServiceOrderText<T>, T>;
}
