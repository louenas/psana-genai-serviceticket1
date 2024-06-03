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
import { SrvcOrdProdRefObject } from './SrvcOrdProdRefObject';
/**
 * Request builder class for operations supported on the {@link SrvcOrdProdRefObject} entity.
 */
export declare class SrvcOrdProdRefObjectRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SrvcOrdProdRefObject<T>, T> {
  /**
   * Returns a request builder for querying all `SrvcOrdProdRefObject` entities.
   * @returns A request builder for creating requests to retrieve all `SrvcOrdProdRefObject` entities.
   */
  getAll(): GetAllRequestBuilder<SrvcOrdProdRefObject<T>, T>;
  /**
   * Returns a request builder for creating a `SrvcOrdProdRefObject` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SrvcOrdProdRefObject`.
   */
  create(
    entity: SrvcOrdProdRefObject<T>
  ): CreateRequestBuilder<SrvcOrdProdRefObject<T>, T>;
  /**
   * Returns a request builder for retrieving one `SrvcOrdProdRefObject` entity based on its keys.
   * @param serviceOrder Key property. See {@link SrvcOrdProdRefObject.serviceOrder}.
   * @param serviceReferenceProduct Key property. See {@link SrvcOrdProdRefObject.serviceReferenceProduct}.
   * @returns A request builder for creating requests to retrieve one `SrvcOrdProdRefObject` entity based on its keys.
   */
  getByKey(
    serviceOrder: DeserializedType<T, 'Edm.String'>,
    serviceReferenceProduct: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SrvcOrdProdRefObject<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SrvcOrdProdRefObject`.
   * @param serviceOrder Key property. See {@link SrvcOrdProdRefObject.serviceOrder}.
   * @param serviceReferenceProduct Key property. See {@link SrvcOrdProdRefObject.serviceReferenceProduct}.
   * @returns A request builder for creating requests that delete an entity of type `SrvcOrdProdRefObject`.
   */
  delete(
    serviceOrder: string,
    serviceReferenceProduct: string
  ): DeleteRequestBuilder<SrvcOrdProdRefObject<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SrvcOrdProdRefObject`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SrvcOrdProdRefObject` by taking the entity as a parameter.
   */
  delete(
    entity: SrvcOrdProdRefObject<T>
  ): DeleteRequestBuilder<SrvcOrdProdRefObject<T>, T>;
}
