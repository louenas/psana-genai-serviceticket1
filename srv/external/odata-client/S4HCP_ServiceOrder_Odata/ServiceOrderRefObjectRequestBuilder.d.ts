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
  RequestBuilder
} from '@sap-cloud-sdk/odata-v2';
import { ServiceOrderRefObject } from './ServiceOrderRefObject';
/**
 * Request builder class for operations supported on the {@link ServiceOrderRefObject} entity.
 */
export declare class ServiceOrderRefObjectRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ServiceOrderRefObject<T>, T> {
  /**
   * Returns a request builder for querying all `ServiceOrderRefObject` entities.
   * @returns A request builder for creating requests to retrieve all `ServiceOrderRefObject` entities.
   */
  getAll(): GetAllRequestBuilder<ServiceOrderRefObject<T>, T>;
  /**
   * Returns a request builder for creating a `ServiceOrderRefObject` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ServiceOrderRefObject`.
   */
  create(
    entity: ServiceOrderRefObject<T>
  ): CreateRequestBuilder<ServiceOrderRefObject<T>, T>;
  /**
   * Returns a request builder for retrieving one `ServiceOrderRefObject` entity based on its keys.
   * @param serviceOrder Key property. See {@link ServiceOrderRefObject.serviceOrder}.
   * @param serviceReferenceEquipment Key property. See {@link ServiceOrderRefObject.serviceReferenceEquipment}.
   * @param serviceRefFunctionalLocation Key property. See {@link ServiceOrderRefObject.serviceRefFunctionalLocation}.
   * @returns A request builder for creating requests to retrieve one `ServiceOrderRefObject` entity based on its keys.
   */
  getByKey(
    serviceOrder: DeserializedType<T, 'Edm.String'>,
    serviceReferenceEquipment: DeserializedType<T, 'Edm.String'>,
    serviceRefFunctionalLocation: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ServiceOrderRefObject<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ServiceOrderRefObject`.
   * @param serviceOrder Key property. See {@link ServiceOrderRefObject.serviceOrder}.
   * @param serviceReferenceEquipment Key property. See {@link ServiceOrderRefObject.serviceReferenceEquipment}.
   * @param serviceRefFunctionalLocation Key property. See {@link ServiceOrderRefObject.serviceRefFunctionalLocation}.
   * @returns A request builder for creating requests that delete an entity of type `ServiceOrderRefObject`.
   */
  delete(
    serviceOrder: string,
    serviceReferenceEquipment: string,
    serviceRefFunctionalLocation: string
  ): DeleteRequestBuilder<ServiceOrderRefObject<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ServiceOrderRefObject`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ServiceOrderRefObject` by taking the entity as a parameter.
   */
  delete(
    entity: ServiceOrderRefObject<T>
  ): DeleteRequestBuilder<ServiceOrderRefObject<T>, T>;
}
