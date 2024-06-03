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
import { SrvcOrdItmPartner } from './SrvcOrdItmPartner';

/**
 * Request builder class for operations supported on the {@link SrvcOrdItmPartner} entity.
 */
export class SrvcOrdItmPartnerRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SrvcOrdItmPartner<T>, T> {
  /**
   * Returns a request builder for querying all `SrvcOrdItmPartner` entities.
   * @returns A request builder for creating requests to retrieve all `SrvcOrdItmPartner` entities.
   */
  getAll(): GetAllRequestBuilder<SrvcOrdItmPartner<T>, T> {
    return new GetAllRequestBuilder<SrvcOrdItmPartner<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `SrvcOrdItmPartner` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SrvcOrdItmPartner`.
   */
  create(
    entity: SrvcOrdItmPartner<T>
  ): CreateRequestBuilder<SrvcOrdItmPartner<T>, T> {
    return new CreateRequestBuilder<SrvcOrdItmPartner<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SrvcOrdItmPartner` entity based on its keys.
   * @param serviceOrder Key property. See {@link SrvcOrdItmPartner.serviceOrder}.
   * @param serviceOrderItem Key property. See {@link SrvcOrdItmPartner.serviceOrderItem}.
   * @param custMgmtPartnerFunction Key property. See {@link SrvcOrdItmPartner.custMgmtPartnerFunction}.
   * @param custMgmtBusinessPartner Key property. See {@link SrvcOrdItmPartner.custMgmtBusinessPartner}.
   * @returns A request builder for creating requests to retrieve one `SrvcOrdItmPartner` entity based on its keys.
   */
  getByKey(
    serviceOrder: DeserializedType<T, 'Edm.String'>,
    serviceOrderItem: DeserializedType<T, 'Edm.String'>,
    custMgmtPartnerFunction: DeserializedType<T, 'Edm.String'>,
    custMgmtBusinessPartner: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SrvcOrdItmPartner<T>, T> {
    return new GetByKeyRequestBuilder<SrvcOrdItmPartner<T>, T>(this.entityApi, {
      ServiceOrder: serviceOrder,
      ServiceOrderItem: serviceOrderItem,
      CustMgmtPartnerFunction: custMgmtPartnerFunction,
      CustMgmtBusinessPartner: custMgmtBusinessPartner
    });
  }

  /**
   * Returns a request builder for updating an entity of type `SrvcOrdItmPartner`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SrvcOrdItmPartner`.
   */
  update(
    entity: SrvcOrdItmPartner<T>
  ): UpdateRequestBuilder<SrvcOrdItmPartner<T>, T> {
    return new UpdateRequestBuilder<SrvcOrdItmPartner<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SrvcOrdItmPartner`.
   * @param serviceOrder Key property. See {@link SrvcOrdItmPartner.serviceOrder}.
   * @param serviceOrderItem Key property. See {@link SrvcOrdItmPartner.serviceOrderItem}.
   * @param custMgmtPartnerFunction Key property. See {@link SrvcOrdItmPartner.custMgmtPartnerFunction}.
   * @param custMgmtBusinessPartner Key property. See {@link SrvcOrdItmPartner.custMgmtBusinessPartner}.
   * @returns A request builder for creating requests that delete an entity of type `SrvcOrdItmPartner`.
   */
  delete(
    serviceOrder: string,
    serviceOrderItem: string,
    custMgmtPartnerFunction: string,
    custMgmtBusinessPartner: string
  ): DeleteRequestBuilder<SrvcOrdItmPartner<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SrvcOrdItmPartner`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SrvcOrdItmPartner` by taking the entity as a parameter.
   */
  delete(
    entity: SrvcOrdItmPartner<T>
  ): DeleteRequestBuilder<SrvcOrdItmPartner<T>, T>;
  delete(
    serviceOrderOrEntity: any,
    serviceOrderItem?: string,
    custMgmtPartnerFunction?: string,
    custMgmtBusinessPartner?: string
  ): DeleteRequestBuilder<SrvcOrdItmPartner<T>, T> {
    return new DeleteRequestBuilder<SrvcOrdItmPartner<T>, T>(
      this.entityApi,
      serviceOrderOrEntity instanceof SrvcOrdItmPartner
        ? serviceOrderOrEntity
        : {
            ServiceOrder: serviceOrderOrEntity!,
            ServiceOrderItem: serviceOrderItem!,
            CustMgmtPartnerFunction: custMgmtPartnerFunction!,
            CustMgmtBusinessPartner: custMgmtBusinessPartner!
          }
    );
  }
}
