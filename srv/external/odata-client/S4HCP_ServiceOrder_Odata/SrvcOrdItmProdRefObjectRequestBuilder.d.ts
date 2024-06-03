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
import { SrvcOrdItmProdRefObject } from './SrvcOrdItmProdRefObject';
/**
 * Request builder class for operations supported on the {@link SrvcOrdItmProdRefObject} entity.
 */
export declare class SrvcOrdItmProdRefObjectRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SrvcOrdItmProdRefObject<T>, T> {
  /**
   * Returns a request builder for querying all `SrvcOrdItmProdRefObject` entities.
   * @returns A request builder for creating requests to retrieve all `SrvcOrdItmProdRefObject` entities.
   */
  getAll(): GetAllRequestBuilder<SrvcOrdItmProdRefObject<T>, T>;
  /**
   * Returns a request builder for creating a `SrvcOrdItmProdRefObject` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SrvcOrdItmProdRefObject`.
   */
  create(
    entity: SrvcOrdItmProdRefObject<T>
  ): CreateRequestBuilder<SrvcOrdItmProdRefObject<T>, T>;
  /**
   * Returns a request builder for retrieving one `SrvcOrdItmProdRefObject` entity based on its keys.
   * @param serviceOrder Key property. See {@link SrvcOrdItmProdRefObject.serviceOrder}.
   * @param serviceOrderItem Key property. See {@link SrvcOrdItmProdRefObject.serviceOrderItem}.
   * @param serviceReferenceProduct Key property. See {@link SrvcOrdItmProdRefObject.serviceReferenceProduct}.
   * @returns A request builder for creating requests to retrieve one `SrvcOrdItmProdRefObject` entity based on its keys.
   */
  getByKey(
    serviceOrder: DeserializedType<T, 'Edm.String'>,
    serviceOrderItem: DeserializedType<T, 'Edm.String'>,
    serviceReferenceProduct: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SrvcOrdItmProdRefObject<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SrvcOrdItmProdRefObject`.
   * @param serviceOrder Key property. See {@link SrvcOrdItmProdRefObject.serviceOrder}.
   * @param serviceOrderItem Key property. See {@link SrvcOrdItmProdRefObject.serviceOrderItem}.
   * @param serviceReferenceProduct Key property. See {@link SrvcOrdItmProdRefObject.serviceReferenceProduct}.
   * @returns A request builder for creating requests that delete an entity of type `SrvcOrdItmProdRefObject`.
   */
  delete(
    serviceOrder: string,
    serviceOrderItem: string,
    serviceReferenceProduct: string
  ): DeleteRequestBuilder<SrvcOrdItmProdRefObject<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SrvcOrdItmProdRefObject`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SrvcOrdItmProdRefObject` by taking the entity as a parameter.
   */
  delete(
    entity: SrvcOrdItmProdRefObject<T>
  ): DeleteRequestBuilder<SrvcOrdItmProdRefObject<T>, T>;
}
