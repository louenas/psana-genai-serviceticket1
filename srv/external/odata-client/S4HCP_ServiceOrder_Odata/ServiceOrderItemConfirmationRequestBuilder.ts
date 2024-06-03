/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  DeSerializers,
  DefaultDeSerializers,
  DeserializedType,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  RequestBuilder
} from '@sap-cloud-sdk/odata-v2';
import { ServiceOrderItemConfirmation } from './ServiceOrderItemConfirmation';

/**
 * Request builder class for operations supported on the {@link ServiceOrderItemConfirmation} entity.
 */
export class ServiceOrderItemConfirmationRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ServiceOrderItemConfirmation<T>, T> {
  /**
   * Returns a request builder for querying all `ServiceOrderItemConfirmation` entities.
   * @returns A request builder for creating requests to retrieve all `ServiceOrderItemConfirmation` entities.
   */
  getAll(): GetAllRequestBuilder<ServiceOrderItemConfirmation<T>, T> {
    return new GetAllRequestBuilder<ServiceOrderItemConfirmation<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for retrieving one `ServiceOrderItemConfirmation` entity based on its keys.
   * @param serviceOrder Key property. See {@link ServiceOrderItemConfirmation.serviceOrder}.
   * @param serviceOrderItem Key property. See {@link ServiceOrderItemConfirmation.serviceOrderItem}.
   * @param serviceConfirmation Key property. See {@link ServiceOrderItemConfirmation.serviceConfirmation}.
   * @param serviceConfirmationItem Key property. See {@link ServiceOrderItemConfirmation.serviceConfirmationItem}.
   * @returns A request builder for creating requests to retrieve one `ServiceOrderItemConfirmation` entity based on its keys.
   */
  getByKey(
    serviceOrder: DeserializedType<T, 'Edm.String'>,
    serviceOrderItem: DeserializedType<T, 'Edm.String'>,
    serviceConfirmation: DeserializedType<T, 'Edm.String'>,
    serviceConfirmationItem: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ServiceOrderItemConfirmation<T>, T> {
    return new GetByKeyRequestBuilder<ServiceOrderItemConfirmation<T>, T>(
      this.entityApi,
      {
        ServiceOrder: serviceOrder,
        ServiceOrderItem: serviceOrderItem,
        ServiceConfirmation: serviceConfirmation,
        ServiceConfirmationItem: serviceConfirmationItem
      }
    );
  }
}
