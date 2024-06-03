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
import { SrvcOrdRefServiceContract } from './SrvcOrdRefServiceContract';
/**
 * Request builder class for operations supported on the {@link SrvcOrdRefServiceContract} entity.
 */
export declare class SrvcOrdRefServiceContractRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SrvcOrdRefServiceContract<T>, T> {
  /**
   * Returns a request builder for querying all `SrvcOrdRefServiceContract` entities.
   * @returns A request builder for creating requests to retrieve all `SrvcOrdRefServiceContract` entities.
   */
  getAll(): GetAllRequestBuilder<SrvcOrdRefServiceContract<T>, T>;
  /**
   * Returns a request builder for retrieving one `SrvcOrdRefServiceContract` entity based on its keys.
   * @param serviceOrder Key property. See {@link SrvcOrdRefServiceContract.serviceOrder}.
   * @param referenceServiceContract Key property. See {@link SrvcOrdRefServiceContract.referenceServiceContract}.
   * @returns A request builder for creating requests to retrieve one `SrvcOrdRefServiceContract` entity based on its keys.
   */
  getByKey(
    serviceOrder: DeserializedType<T, 'Edm.String'>,
    referenceServiceContract: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SrvcOrdRefServiceContract<T>, T>;
}
