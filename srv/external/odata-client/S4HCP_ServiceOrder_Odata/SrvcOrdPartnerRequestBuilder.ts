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
import { SrvcOrdPartner } from './SrvcOrdPartner';

/**
 * Request builder class for operations supported on the {@link SrvcOrdPartner} entity.
 */
export class SrvcOrdPartnerRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SrvcOrdPartner<T>, T> {
  /**
   * Returns a request builder for querying all `SrvcOrdPartner` entities.
   * @returns A request builder for creating requests to retrieve all `SrvcOrdPartner` entities.
   */
  getAll(): GetAllRequestBuilder<SrvcOrdPartner<T>, T> {
    return new GetAllRequestBuilder<SrvcOrdPartner<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `SrvcOrdPartner` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SrvcOrdPartner`.
   */
  create(
    entity: SrvcOrdPartner<T>
  ): CreateRequestBuilder<SrvcOrdPartner<T>, T> {
    return new CreateRequestBuilder<SrvcOrdPartner<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SrvcOrdPartner` entity based on its keys.
   * @param serviceOrder Key property. See {@link SrvcOrdPartner.serviceOrder}.
   * @param custMgmtPartnerFunction Key property. See {@link SrvcOrdPartner.custMgmtPartnerFunction}.
   * @param custMgmtBusinessPartner Key property. See {@link SrvcOrdPartner.custMgmtBusinessPartner}.
   * @returns A request builder for creating requests to retrieve one `SrvcOrdPartner` entity based on its keys.
   */
  getByKey(
    serviceOrder: DeserializedType<T, 'Edm.String'>,
    custMgmtPartnerFunction: DeserializedType<T, 'Edm.String'>,
    custMgmtBusinessPartner: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SrvcOrdPartner<T>, T> {
    return new GetByKeyRequestBuilder<SrvcOrdPartner<T>, T>(this.entityApi, {
      ServiceOrder: serviceOrder,
      CustMgmtPartnerFunction: custMgmtPartnerFunction,
      CustMgmtBusinessPartner: custMgmtBusinessPartner
    });
  }

  /**
   * Returns a request builder for updating an entity of type `SrvcOrdPartner`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SrvcOrdPartner`.
   */
  update(
    entity: SrvcOrdPartner<T>
  ): UpdateRequestBuilder<SrvcOrdPartner<T>, T> {
    return new UpdateRequestBuilder<SrvcOrdPartner<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SrvcOrdPartner`.
   * @param serviceOrder Key property. See {@link SrvcOrdPartner.serviceOrder}.
   * @param custMgmtPartnerFunction Key property. See {@link SrvcOrdPartner.custMgmtPartnerFunction}.
   * @param custMgmtBusinessPartner Key property. See {@link SrvcOrdPartner.custMgmtBusinessPartner}.
   * @returns A request builder for creating requests that delete an entity of type `SrvcOrdPartner`.
   */
  delete(
    serviceOrder: string,
    custMgmtPartnerFunction: string,
    custMgmtBusinessPartner: string
  ): DeleteRequestBuilder<SrvcOrdPartner<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SrvcOrdPartner`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SrvcOrdPartner` by taking the entity as a parameter.
   */
  delete(entity: SrvcOrdPartner<T>): DeleteRequestBuilder<SrvcOrdPartner<T>, T>;
  delete(
    serviceOrderOrEntity: any,
    custMgmtPartnerFunction?: string,
    custMgmtBusinessPartner?: string
  ): DeleteRequestBuilder<SrvcOrdPartner<T>, T> {
    return new DeleteRequestBuilder<SrvcOrdPartner<T>, T>(
      this.entityApi,
      serviceOrderOrEntity instanceof SrvcOrdPartner
        ? serviceOrderOrEntity
        : {
            ServiceOrder: serviceOrderOrEntity!,
            CustMgmtPartnerFunction: custMgmtPartnerFunction!,
            CustMgmtBusinessPartner: custMgmtBusinessPartner!
          }
    );
  }
}
