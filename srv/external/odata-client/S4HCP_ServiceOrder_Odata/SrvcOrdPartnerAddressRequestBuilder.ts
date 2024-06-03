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
import { SrvcOrdPartnerAddress } from './SrvcOrdPartnerAddress';

/**
 * Request builder class for operations supported on the {@link SrvcOrdPartnerAddress} entity.
 */
export class SrvcOrdPartnerAddressRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SrvcOrdPartnerAddress<T>, T> {
  /**
   * Returns a request builder for querying all `SrvcOrdPartnerAddress` entities.
   * @returns A request builder for creating requests to retrieve all `SrvcOrdPartnerAddress` entities.
   */
  getAll(): GetAllRequestBuilder<SrvcOrdPartnerAddress<T>, T> {
    return new GetAllRequestBuilder<SrvcOrdPartnerAddress<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for retrieving one `SrvcOrdPartnerAddress` entity based on its keys.
   * @param serviceOrder Key property. See {@link SrvcOrdPartnerAddress.serviceOrder}.
   * @param custMgmtPartnerFunction Key property. See {@link SrvcOrdPartnerAddress.custMgmtPartnerFunction}.
   * @param custMgmtBusinessPartner Key property. See {@link SrvcOrdPartnerAddress.custMgmtBusinessPartner}.
   * @returns A request builder for creating requests to retrieve one `SrvcOrdPartnerAddress` entity based on its keys.
   */
  getByKey(
    serviceOrder: DeserializedType<T, 'Edm.String'>,
    custMgmtPartnerFunction: DeserializedType<T, 'Edm.String'>,
    custMgmtBusinessPartner: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SrvcOrdPartnerAddress<T>, T> {
    return new GetByKeyRequestBuilder<SrvcOrdPartnerAddress<T>, T>(
      this.entityApi,
      {
        ServiceOrder: serviceOrder,
        CustMgmtPartnerFunction: custMgmtPartnerFunction,
        CustMgmtBusinessPartner: custMgmtBusinessPartner
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SrvcOrdPartnerAddress`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SrvcOrdPartnerAddress`.
   */
  update(
    entity: SrvcOrdPartnerAddress<T>
  ): UpdateRequestBuilder<SrvcOrdPartnerAddress<T>, T> {
    return new UpdateRequestBuilder<SrvcOrdPartnerAddress<T>, T>(
      this.entityApi,
      entity
    );
  }
}
