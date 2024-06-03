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
import { ServiceOrderItem } from './ServiceOrderItem';

/**
 * Request builder class for operations supported on the {@link ServiceOrderItem} entity.
 */
export class ServiceOrderItemRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ServiceOrderItem<T>, T> {
  /**
   * Returns a request builder for querying all `ServiceOrderItem` entities.
   * @returns A request builder for creating requests to retrieve all `ServiceOrderItem` entities.
   */
  getAll(): GetAllRequestBuilder<ServiceOrderItem<T>, T> {
    return new GetAllRequestBuilder<ServiceOrderItem<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ServiceOrderItem` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ServiceOrderItem`.
   */
  create(
    entity: ServiceOrderItem<T>
  ): CreateRequestBuilder<ServiceOrderItem<T>, T> {
    return new CreateRequestBuilder<ServiceOrderItem<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ServiceOrderItem` entity based on its keys.
   * @param serviceOrder Key property. See {@link ServiceOrderItem.serviceOrder}.
   * @param serviceOrderItem Key property. See {@link ServiceOrderItem.serviceOrderItem}.
   * @returns A request builder for creating requests to retrieve one `ServiceOrderItem` entity based on its keys.
   */
  getByKey(
    serviceOrder: DeserializedType<T, 'Edm.String'>,
    serviceOrderItem: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ServiceOrderItem<T>, T> {
    return new GetByKeyRequestBuilder<ServiceOrderItem<T>, T>(this.entityApi, {
      ServiceOrder: serviceOrder,
      ServiceOrderItem: serviceOrderItem
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ServiceOrderItem`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ServiceOrderItem`.
   */
  update(
    entity: ServiceOrderItem<T>
  ): UpdateRequestBuilder<ServiceOrderItem<T>, T> {
    return new UpdateRequestBuilder<ServiceOrderItem<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ServiceOrderItem`.
   * @param serviceOrder Key property. See {@link ServiceOrderItem.serviceOrder}.
   * @param serviceOrderItem Key property. See {@link ServiceOrderItem.serviceOrderItem}.
   * @returns A request builder for creating requests that delete an entity of type `ServiceOrderItem`.
   */
  delete(
    serviceOrder: string,
    serviceOrderItem: string
  ): DeleteRequestBuilder<ServiceOrderItem<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ServiceOrderItem`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ServiceOrderItem` by taking the entity as a parameter.
   */
  delete(
    entity: ServiceOrderItem<T>
  ): DeleteRequestBuilder<ServiceOrderItem<T>, T>;
  delete(
    serviceOrderOrEntity: any,
    serviceOrderItem?: string
  ): DeleteRequestBuilder<ServiceOrderItem<T>, T> {
    return new DeleteRequestBuilder<ServiceOrderItem<T>, T>(
      this.entityApi,
      serviceOrderOrEntity instanceof ServiceOrderItem
        ? serviceOrderOrEntity
        : {
            ServiceOrder: serviceOrderOrEntity!,
            ServiceOrderItem: serviceOrderItem!
          }
    );
  }
}
