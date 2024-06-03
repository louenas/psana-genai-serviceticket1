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
import { ServiceOrderConfirmation } from './ServiceOrderConfirmation';
/**
 * Request builder class for operations supported on the {@link ServiceOrderConfirmation} entity.
 */
export declare class ServiceOrderConfirmationRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ServiceOrderConfirmation<T>, T> {
  /**
   * Returns a request builder for querying all `ServiceOrderConfirmation` entities.
   * @returns A request builder for creating requests to retrieve all `ServiceOrderConfirmation` entities.
   */
  getAll(): GetAllRequestBuilder<ServiceOrderConfirmation<T>, T>;
  /**
   * Returns a request builder for retrieving one `ServiceOrderConfirmation` entity based on its keys.
   * @param serviceOrder Key property. See {@link ServiceOrderConfirmation.serviceOrder}.
   * @param serviceConfirmation Key property. See {@link ServiceOrderConfirmation.serviceConfirmation}.
   * @returns A request builder for creating requests to retrieve one `ServiceOrderConfirmation` entity based on its keys.
   */
  getByKey(
    serviceOrder: DeserializedType<T, 'Edm.String'>,
    serviceConfirmation: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ServiceOrderConfirmation<T>, T>;
}
