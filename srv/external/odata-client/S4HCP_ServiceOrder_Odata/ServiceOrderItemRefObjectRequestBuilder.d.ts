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
import { ServiceOrderItemRefObject } from './ServiceOrderItemRefObject';
/**
 * Request builder class for operations supported on the {@link ServiceOrderItemRefObject} entity.
 */
export declare class ServiceOrderItemRefObjectRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ServiceOrderItemRefObject<T>, T> {
  /**
   * Returns a request builder for querying all `ServiceOrderItemRefObject` entities.
   * @returns A request builder for creating requests to retrieve all `ServiceOrderItemRefObject` entities.
   */
  getAll(): GetAllRequestBuilder<ServiceOrderItemRefObject<T>, T>;
  /**
   * Returns a request builder for creating a `ServiceOrderItemRefObject` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ServiceOrderItemRefObject`.
   */
  create(
    entity: ServiceOrderItemRefObject<T>
  ): CreateRequestBuilder<ServiceOrderItemRefObject<T>, T>;
  /**
   * Returns a request builder for retrieving one `ServiceOrderItemRefObject` entity based on its keys.
   * @param serviceOrder Key property. See {@link ServiceOrderItemRefObject.serviceOrder}.
   * @param serviceOrderItem Key property. See {@link ServiceOrderItemRefObject.serviceOrderItem}.
   * @param serviceReferenceEquipment Key property. See {@link ServiceOrderItemRefObject.serviceReferenceEquipment}.
   * @param serviceRefFunctionalLocation Key property. See {@link ServiceOrderItemRefObject.serviceRefFunctionalLocation}.
   * @returns A request builder for creating requests to retrieve one `ServiceOrderItemRefObject` entity based on its keys.
   */
  getByKey(
    serviceOrder: DeserializedType<T, 'Edm.String'>,
    serviceOrderItem: DeserializedType<T, 'Edm.String'>,
    serviceReferenceEquipment: DeserializedType<T, 'Edm.String'>,
    serviceRefFunctionalLocation: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ServiceOrderItemRefObject<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ServiceOrderItemRefObject`.
   * @param serviceOrder Key property. See {@link ServiceOrderItemRefObject.serviceOrder}.
   * @param serviceOrderItem Key property. See {@link ServiceOrderItemRefObject.serviceOrderItem}.
   * @param serviceReferenceEquipment Key property. See {@link ServiceOrderItemRefObject.serviceReferenceEquipment}.
   * @param serviceRefFunctionalLocation Key property. See {@link ServiceOrderItemRefObject.serviceRefFunctionalLocation}.
   * @returns A request builder for creating requests that delete an entity of type `ServiceOrderItemRefObject`.
   */
  delete(
    serviceOrder: string,
    serviceOrderItem: string,
    serviceReferenceEquipment: string,
    serviceRefFunctionalLocation: string
  ): DeleteRequestBuilder<ServiceOrderItemRefObject<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ServiceOrderItemRefObject`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ServiceOrderItemRefObject` by taking the entity as a parameter.
   */
  delete(
    entity: ServiceOrderItemRefObject<T>
  ): DeleteRequestBuilder<ServiceOrderItemRefObject<T>, T>;
}
