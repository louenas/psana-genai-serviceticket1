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
import { ServiceOrdUserStatus } from './ServiceOrdUserStatus';

/**
 * Request builder class for operations supported on the {@link ServiceOrdUserStatus} entity.
 */
export class ServiceOrdUserStatusRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ServiceOrdUserStatus<T>, T> {
  /**
   * Returns a request builder for querying all `ServiceOrdUserStatus` entities.
   * @returns A request builder for creating requests to retrieve all `ServiceOrdUserStatus` entities.
   */
  getAll(): GetAllRequestBuilder<ServiceOrdUserStatus<T>, T> {
    return new GetAllRequestBuilder<ServiceOrdUserStatus<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ServiceOrdUserStatus` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ServiceOrdUserStatus`.
   */
  create(
    entity: ServiceOrdUserStatus<T>
  ): CreateRequestBuilder<ServiceOrdUserStatus<T>, T> {
    return new CreateRequestBuilder<ServiceOrdUserStatus<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ServiceOrdUserStatus` entity based on its keys.
   * @param serviceOrder Key property. See {@link ServiceOrdUserStatus.serviceOrder}.
   * @param srvcOrdUserStatus Key property. See {@link ServiceOrdUserStatus.srvcOrdUserStatus}.
   * @returns A request builder for creating requests to retrieve one `ServiceOrdUserStatus` entity based on its keys.
   */
  getByKey(
    serviceOrder: DeserializedType<T, 'Edm.String'>,
    srvcOrdUserStatus: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ServiceOrdUserStatus<T>, T> {
    return new GetByKeyRequestBuilder<ServiceOrdUserStatus<T>, T>(
      this.entityApi,
      {
        ServiceOrder: serviceOrder,
        SrvcOrdUserStatus: srvcOrdUserStatus
      }
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ServiceOrdUserStatus`.
   * @param serviceOrder Key property. See {@link ServiceOrdUserStatus.serviceOrder}.
   * @param srvcOrdUserStatus Key property. See {@link ServiceOrdUserStatus.srvcOrdUserStatus}.
   * @returns A request builder for creating requests that delete an entity of type `ServiceOrdUserStatus`.
   */
  delete(
    serviceOrder: string,
    srvcOrdUserStatus: string
  ): DeleteRequestBuilder<ServiceOrdUserStatus<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ServiceOrdUserStatus`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ServiceOrdUserStatus` by taking the entity as a parameter.
   */
  delete(
    entity: ServiceOrdUserStatus<T>
  ): DeleteRequestBuilder<ServiceOrdUserStatus<T>, T>;
  delete(
    serviceOrderOrEntity: any,
    srvcOrdUserStatus?: string
  ): DeleteRequestBuilder<ServiceOrdUserStatus<T>, T> {
    return new DeleteRequestBuilder<ServiceOrdUserStatus<T>, T>(
      this.entityApi,
      serviceOrderOrEntity instanceof ServiceOrdUserStatus
        ? serviceOrderOrEntity
        : {
            ServiceOrder: serviceOrderOrEntity!,
            SrvcOrdUserStatus: srvcOrdUserStatus!
          }
    );
  }
}
