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
import { ServiceOrderPersonResp } from './ServiceOrderPersonResp';
/**
 * Request builder class for operations supported on the {@link ServiceOrderPersonResp} entity.
 */
export declare class ServiceOrderPersonRespRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ServiceOrderPersonResp<T>, T> {
  /**
   * Returns a request builder for querying all `ServiceOrderPersonResp` entities.
   * @returns A request builder for creating requests to retrieve all `ServiceOrderPersonResp` entities.
   */
  getAll(): GetAllRequestBuilder<ServiceOrderPersonResp<T>, T>;
  /**
   * Returns a request builder for creating a `ServiceOrderPersonResp` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ServiceOrderPersonResp`.
   */
  create(
    entity: ServiceOrderPersonResp<T>
  ): CreateRequestBuilder<ServiceOrderPersonResp<T>, T>;
  /**
   * Returns a request builder for retrieving one `ServiceOrderPersonResp` entity based on its keys.
   * @param serviceOrder Key property. See {@link ServiceOrderPersonResp.serviceOrder}.
   * @param personResponsible Key property. See {@link ServiceOrderPersonResp.personResponsible}.
   * @returns A request builder for creating requests to retrieve one `ServiceOrderPersonResp` entity based on its keys.
   */
  getByKey(
    serviceOrder: DeserializedType<T, 'Edm.String'>,
    personResponsible: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ServiceOrderPersonResp<T>, T>;
  /**
   * Returns a request builder for updating an entity of type `ServiceOrderPersonResp`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ServiceOrderPersonResp`.
   */
  update(
    entity: ServiceOrderPersonResp<T>
  ): UpdateRequestBuilder<ServiceOrderPersonResp<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ServiceOrderPersonResp`.
   * @param serviceOrder Key property. See {@link ServiceOrderPersonResp.serviceOrder}.
   * @param personResponsible Key property. See {@link ServiceOrderPersonResp.personResponsible}.
   * @returns A request builder for creating requests that delete an entity of type `ServiceOrderPersonResp`.
   */
  delete(
    serviceOrder: string,
    personResponsible: string
  ): DeleteRequestBuilder<ServiceOrderPersonResp<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ServiceOrderPersonResp`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ServiceOrderPersonResp` by taking the entity as a parameter.
   */
  delete(
    entity: ServiceOrderPersonResp<T>
  ): DeleteRequestBuilder<ServiceOrderPersonResp<T>, T>;
}
