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
import { ServiceOrder } from './ServiceOrder';
/**
 * Request builder class for operations supported on the {@link ServiceOrder} entity.
 */
export declare class ServiceOrderRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ServiceOrder<T>, T> {
  /**
   * Returns a request builder for querying all `ServiceOrder` entities.
   * @returns A request builder for creating requests to retrieve all `ServiceOrder` entities.
   */
  getAll(): GetAllRequestBuilder<ServiceOrder<T>, T>;
  /**
   * Returns a request builder for creating a `ServiceOrder` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ServiceOrder`.
   */
  create(entity: ServiceOrder<T>): CreateRequestBuilder<ServiceOrder<T>, T>;
  /**
   * Returns a request builder for retrieving one `ServiceOrder` entity based on its keys.
   * @param serviceOrder Key property. See {@link ServiceOrder.serviceOrder}.
   * @returns A request builder for creating requests to retrieve one `ServiceOrder` entity based on its keys.
   */
  getByKey(
    serviceOrder: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ServiceOrder<T>, T>;
  /**
   * Returns a request builder for updating an entity of type `ServiceOrder`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ServiceOrder`.
   */
  update(entity: ServiceOrder<T>): UpdateRequestBuilder<ServiceOrder<T>, T>;
}
