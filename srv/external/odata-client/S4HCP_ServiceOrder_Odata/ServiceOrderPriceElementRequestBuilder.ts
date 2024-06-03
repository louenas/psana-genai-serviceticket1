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
import { ServiceOrderPriceElement } from './ServiceOrderPriceElement';

/**
 * Request builder class for operations supported on the {@link ServiceOrderPriceElement} entity.
 */
export class ServiceOrderPriceElementRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ServiceOrderPriceElement<T>, T> {
  /**
   * Returns a request builder for querying all `ServiceOrderPriceElement` entities.
   * @returns A request builder for creating requests to retrieve all `ServiceOrderPriceElement` entities.
   */
  getAll(): GetAllRequestBuilder<ServiceOrderPriceElement<T>, T> {
    return new GetAllRequestBuilder<ServiceOrderPriceElement<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ServiceOrderPriceElement` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ServiceOrderPriceElement`.
   */
  create(
    entity: ServiceOrderPriceElement<T>
  ): CreateRequestBuilder<ServiceOrderPriceElement<T>, T> {
    return new CreateRequestBuilder<ServiceOrderPriceElement<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ServiceOrderPriceElement` entity based on its keys.
   * @param serviceOrder Key property. See {@link ServiceOrderPriceElement.serviceOrder}.
   * @param pricingProcedureStep Key property. See {@link ServiceOrderPriceElement.pricingProcedureStep}.
   * @param pricingProcedureCounter Key property. See {@link ServiceOrderPriceElement.pricingProcedureCounter}.
   * @returns A request builder for creating requests to retrieve one `ServiceOrderPriceElement` entity based on its keys.
   */
  getByKey(
    serviceOrder: DeserializedType<T, 'Edm.String'>,
    pricingProcedureStep: DeserializedType<T, 'Edm.String'>,
    pricingProcedureCounter: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ServiceOrderPriceElement<T>, T> {
    return new GetByKeyRequestBuilder<ServiceOrderPriceElement<T>, T>(
      this.entityApi,
      {
        ServiceOrder: serviceOrder,
        PricingProcedureStep: pricingProcedureStep,
        PricingProcedureCounter: pricingProcedureCounter
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ServiceOrderPriceElement`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ServiceOrderPriceElement`.
   */
  update(
    entity: ServiceOrderPriceElement<T>
  ): UpdateRequestBuilder<ServiceOrderPriceElement<T>, T> {
    return new UpdateRequestBuilder<ServiceOrderPriceElement<T>, T>(
      this.entityApi,
      entity
    );
  }
}
