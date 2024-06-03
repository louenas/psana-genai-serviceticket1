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
import { ServiceOrdItemUserStatus } from './ServiceOrdItemUserStatus';

/**
 * Request builder class for operations supported on the {@link ServiceOrdItemUserStatus} entity.
 */
export class ServiceOrdItemUserStatusRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ServiceOrdItemUserStatus<T>, T> {
  /**
   * Returns a request builder for querying all `ServiceOrdItemUserStatus` entities.
   * @returns A request builder for creating requests to retrieve all `ServiceOrdItemUserStatus` entities.
   */
  getAll(): GetAllRequestBuilder<ServiceOrdItemUserStatus<T>, T> {
    return new GetAllRequestBuilder<ServiceOrdItemUserStatus<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ServiceOrdItemUserStatus` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ServiceOrdItemUserStatus`.
   */
  create(
    entity: ServiceOrdItemUserStatus<T>
  ): CreateRequestBuilder<ServiceOrdItemUserStatus<T>, T> {
    return new CreateRequestBuilder<ServiceOrdItemUserStatus<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ServiceOrdItemUserStatus` entity based on its keys.
   * @param serviceOrder Key property. See {@link ServiceOrdItemUserStatus.serviceOrder}.
   * @param serviceOrderItem Key property. See {@link ServiceOrdItemUserStatus.serviceOrderItem}.
   * @param srvcOrdItemUserStatus Key property. See {@link ServiceOrdItemUserStatus.srvcOrdItemUserStatus}.
   * @returns A request builder for creating requests to retrieve one `ServiceOrdItemUserStatus` entity based on its keys.
   */
  getByKey(
    serviceOrder: DeserializedType<T, 'Edm.String'>,
    serviceOrderItem: DeserializedType<T, 'Edm.String'>,
    srvcOrdItemUserStatus: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ServiceOrdItemUserStatus<T>, T> {
    return new GetByKeyRequestBuilder<ServiceOrdItemUserStatus<T>, T>(
      this.entityApi,
      {
        ServiceOrder: serviceOrder,
        ServiceOrderItem: serviceOrderItem,
        SrvcOrdItemUserStatus: srvcOrdItemUserStatus
      }
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ServiceOrdItemUserStatus`.
   * @param serviceOrder Key property. See {@link ServiceOrdItemUserStatus.serviceOrder}.
   * @param serviceOrderItem Key property. See {@link ServiceOrdItemUserStatus.serviceOrderItem}.
   * @param srvcOrdItemUserStatus Key property. See {@link ServiceOrdItemUserStatus.srvcOrdItemUserStatus}.
   * @returns A request builder for creating requests that delete an entity of type `ServiceOrdItemUserStatus`.
   */
  delete(
    serviceOrder: string,
    serviceOrderItem: string,
    srvcOrdItemUserStatus: string
  ): DeleteRequestBuilder<ServiceOrdItemUserStatus<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ServiceOrdItemUserStatus`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ServiceOrdItemUserStatus` by taking the entity as a parameter.
   */
  delete(
    entity: ServiceOrdItemUserStatus<T>
  ): DeleteRequestBuilder<ServiceOrdItemUserStatus<T>, T>;
  delete(
    serviceOrderOrEntity: any,
    serviceOrderItem?: string,
    srvcOrdItemUserStatus?: string
  ): DeleteRequestBuilder<ServiceOrdItemUserStatus<T>, T> {
    return new DeleteRequestBuilder<ServiceOrdItemUserStatus<T>, T>(
      this.entityApi,
      serviceOrderOrEntity instanceof ServiceOrdItemUserStatus
        ? serviceOrderOrEntity
        : {
            ServiceOrder: serviceOrderOrEntity!,
            ServiceOrderItem: serviceOrderItem!,
            SrvcOrdItemUserStatus: srvcOrdItemUserStatus!
          }
    );
  }
}
