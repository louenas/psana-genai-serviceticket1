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
import { SrvcOrdDuration } from './SrvcOrdDuration';

/**
 * Request builder class for operations supported on the {@link SrvcOrdDuration} entity.
 */
export class SrvcOrdDurationRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SrvcOrdDuration<T>, T> {
  /**
   * Returns a request builder for querying all `SrvcOrdDuration` entities.
   * @returns A request builder for creating requests to retrieve all `SrvcOrdDuration` entities.
   */
  getAll(): GetAllRequestBuilder<SrvcOrdDuration<T>, T> {
    return new GetAllRequestBuilder<SrvcOrdDuration<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `SrvcOrdDuration` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SrvcOrdDuration`.
   */
  create(
    entity: SrvcOrdDuration<T>
  ): CreateRequestBuilder<SrvcOrdDuration<T>, T> {
    return new CreateRequestBuilder<SrvcOrdDuration<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SrvcOrdDuration` entity based on its keys.
   * @param serviceOrder Key property. See {@link SrvcOrdDuration.serviceOrder}.
   * @param srvcDocDurationType Key property. See {@link SrvcOrdDuration.srvcDocDurationType}.
   * @returns A request builder for creating requests to retrieve one `SrvcOrdDuration` entity based on its keys.
   */
  getByKey(
    serviceOrder: DeserializedType<T, 'Edm.String'>,
    srvcDocDurationType: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SrvcOrdDuration<T>, T> {
    return new GetByKeyRequestBuilder<SrvcOrdDuration<T>, T>(this.entityApi, {
      ServiceOrder: serviceOrder,
      SrvcDocDurationType: srvcDocDurationType
    });
  }

  /**
   * Returns a request builder for updating an entity of type `SrvcOrdDuration`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SrvcOrdDuration`.
   */
  update(
    entity: SrvcOrdDuration<T>
  ): UpdateRequestBuilder<SrvcOrdDuration<T>, T> {
    return new UpdateRequestBuilder<SrvcOrdDuration<T>, T>(
      this.entityApi,
      entity
    );
  }
}
