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
import { ServiceOrderItemText } from './ServiceOrderItemText';
/**
 * Request builder class for operations supported on the {@link ServiceOrderItemText} entity.
 */
export declare class ServiceOrderItemTextRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ServiceOrderItemText<T>, T> {
  /**
   * Returns a request builder for querying all `ServiceOrderItemText` entities.
   * @returns A request builder for creating requests to retrieve all `ServiceOrderItemText` entities.
   */
  getAll(): GetAllRequestBuilder<ServiceOrderItemText<T>, T>;
  /**
   * Returns a request builder for creating a `ServiceOrderItemText` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ServiceOrderItemText`.
   */
  create(
    entity: ServiceOrderItemText<T>
  ): CreateRequestBuilder<ServiceOrderItemText<T>, T>;
  /**
   * Returns a request builder for retrieving one `ServiceOrderItemText` entity based on its keys.
   * @param serviceOrder Key property. See {@link ServiceOrderItemText.serviceOrder}.
   * @param serviceOrderItem Key property. See {@link ServiceOrderItemText.serviceOrderItem}.
   * @param language Key property. See {@link ServiceOrderItemText.language}.
   * @param longTextId Key property. See {@link ServiceOrderItemText.longTextId}.
   * @returns A request builder for creating requests to retrieve one `ServiceOrderItemText` entity based on its keys.
   */
  getByKey(
    serviceOrder: DeserializedType<T, 'Edm.String'>,
    serviceOrderItem: DeserializedType<T, 'Edm.String'>,
    language: DeserializedType<T, 'Edm.String'>,
    longTextId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ServiceOrderItemText<T>, T>;
  /**
   * Returns a request builder for updating an entity of type `ServiceOrderItemText`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ServiceOrderItemText`.
   */
  update(
    entity: ServiceOrderItemText<T>
  ): UpdateRequestBuilder<ServiceOrderItemText<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ServiceOrderItemText`.
   * @param serviceOrder Key property. See {@link ServiceOrderItemText.serviceOrder}.
   * @param serviceOrderItem Key property. See {@link ServiceOrderItemText.serviceOrderItem}.
   * @param language Key property. See {@link ServiceOrderItemText.language}.
   * @param longTextId Key property. See {@link ServiceOrderItemText.longTextId}.
   * @returns A request builder for creating requests that delete an entity of type `ServiceOrderItemText`.
   */
  delete(
    serviceOrder: string,
    serviceOrderItem: string,
    language: string,
    longTextId: string
  ): DeleteRequestBuilder<ServiceOrderItemText<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ServiceOrderItemText`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ServiceOrderItemText` by taking the entity as a parameter.
   */
  delete(
    entity: ServiceOrderItemText<T>
  ): DeleteRequestBuilder<ServiceOrderItemText<T>, T>;
}
