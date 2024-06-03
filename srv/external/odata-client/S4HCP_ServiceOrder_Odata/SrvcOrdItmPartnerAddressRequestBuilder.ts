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
  RequestBuilder,
  UpdateRequestBuilder
} from '@sap-cloud-sdk/odata-v2';
import { SrvcOrdItmPartnerAddress } from './SrvcOrdItmPartnerAddress';

/**
 * Request builder class for operations supported on the {@link SrvcOrdItmPartnerAddress} entity.
 */
export class SrvcOrdItmPartnerAddressRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SrvcOrdItmPartnerAddress<T>, T> {
  /**
   * Returns a request builder for querying all `SrvcOrdItmPartnerAddress` entities.
   * @returns A request builder for creating requests to retrieve all `SrvcOrdItmPartnerAddress` entities.
   */
  getAll(): GetAllRequestBuilder<SrvcOrdItmPartnerAddress<T>, T> {
    return new GetAllRequestBuilder<SrvcOrdItmPartnerAddress<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for retrieving one `SrvcOrdItmPartnerAddress` entity based on its keys.
   * @param serviceOrder Key property. See {@link SrvcOrdItmPartnerAddress.serviceOrder}.
   * @param serviceOrderItem Key property. See {@link SrvcOrdItmPartnerAddress.serviceOrderItem}.
   * @param custMgmtPartnerFunction Key property. See {@link SrvcOrdItmPartnerAddress.custMgmtPartnerFunction}.
   * @param custMgmtBusinessPartner Key property. See {@link SrvcOrdItmPartnerAddress.custMgmtBusinessPartner}.
   * @returns A request builder for creating requests to retrieve one `SrvcOrdItmPartnerAddress` entity based on its keys.
   */
  getByKey(
    serviceOrder: DeserializedType<T, 'Edm.String'>,
    serviceOrderItem: DeserializedType<T, 'Edm.String'>,
    custMgmtPartnerFunction: DeserializedType<T, 'Edm.String'>,
    custMgmtBusinessPartner: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SrvcOrdItmPartnerAddress<T>, T> {
    return new GetByKeyRequestBuilder<SrvcOrdItmPartnerAddress<T>, T>(
      this.entityApi,
      {
        ServiceOrder: serviceOrder,
        ServiceOrderItem: serviceOrderItem,
        CustMgmtPartnerFunction: custMgmtPartnerFunction,
        CustMgmtBusinessPartner: custMgmtBusinessPartner
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SrvcOrdItmPartnerAddress`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SrvcOrdItmPartnerAddress`.
   */
  update(
    entity: SrvcOrdItmPartnerAddress<T>
  ): UpdateRequestBuilder<SrvcOrdItmPartnerAddress<T>, T> {
    return new UpdateRequestBuilder<SrvcOrdItmPartnerAddress<T>, T>(
      this.entityApi,
      entity
    );
  }
}
