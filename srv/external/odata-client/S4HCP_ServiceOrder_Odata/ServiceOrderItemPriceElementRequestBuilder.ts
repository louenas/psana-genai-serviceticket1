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
import { ServiceOrderItemPriceElement } from './ServiceOrderItemPriceElement';

/**
 * Request builder class for operations supported on the {@link ServiceOrderItemPriceElement} entity.
 */
export class ServiceOrderItemPriceElementRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ServiceOrderItemPriceElement<T>, T> {
  /**
   * Returns a request builder for querying all `ServiceOrderItemPriceElement` entities.
   * @returns A request builder for creating requests to retrieve all `ServiceOrderItemPriceElement` entities.
   */
  getAll(): GetAllRequestBuilder<ServiceOrderItemPriceElement<T>, T> {
    return new GetAllRequestBuilder<ServiceOrderItemPriceElement<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ServiceOrderItemPriceElement` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ServiceOrderItemPriceElement`.
   */
  create(
    entity: ServiceOrderItemPriceElement<T>
  ): CreateRequestBuilder<ServiceOrderItemPriceElement<T>, T> {
    return new CreateRequestBuilder<ServiceOrderItemPriceElement<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ServiceOrderItemPriceElement` entity based on its keys.
   * @param serviceOrder Key property. See {@link ServiceOrderItemPriceElement.serviceOrder}.
   * @param serviceOrderItem Key property. See {@link ServiceOrderItemPriceElement.serviceOrderItem}.
   * @param pricingProcedureStep Key property. See {@link ServiceOrderItemPriceElement.pricingProcedureStep}.
   * @param pricingProcedureCounter Key property. See {@link ServiceOrderItemPriceElement.pricingProcedureCounter}.
   * @returns A request builder for creating requests to retrieve one `ServiceOrderItemPriceElement` entity based on its keys.
   */
  getByKey(
    serviceOrder: DeserializedType<T, 'Edm.String'>,
    serviceOrderItem: DeserializedType<T, 'Edm.String'>,
    pricingProcedureStep: DeserializedType<T, 'Edm.String'>,
    pricingProcedureCounter: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ServiceOrderItemPriceElement<T>, T> {
    return new GetByKeyRequestBuilder<ServiceOrderItemPriceElement<T>, T>(
      this.entityApi,
      {
        ServiceOrder: serviceOrder,
        ServiceOrderItem: serviceOrderItem,
        PricingProcedureStep: pricingProcedureStep,
        PricingProcedureCounter: pricingProcedureCounter
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ServiceOrderItemPriceElement`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ServiceOrderItemPriceElement`.
   */
  update(
    entity: ServiceOrderItemPriceElement<T>
  ): UpdateRequestBuilder<ServiceOrderItemPriceElement<T>, T> {
    return new UpdateRequestBuilder<ServiceOrderItemPriceElement<T>, T>(
      this.entityApi,
      entity
    );
  }
}
