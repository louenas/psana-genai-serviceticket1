/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v2';
import type { ServiceOrderPersonRespApi } from './ServiceOrderPersonRespApi';

/**
 * This class represents the entity "A_ServiceOrderPersonResp" of service "API_SERVICE_ORDER_SRV".
 */
export class ServiceOrderPersonResp<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ServiceOrderPersonRespType<T>
{
  /**
   * Technical entity name for ServiceOrderPersonResp.
   */
  static _entityName = 'A_ServiceOrderPersonResp';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/sap/opu/odata/sap/API_SERVICE_ORDER_SRV';
  /**
   * All key fields of the ServiceOrderPersonResp entity
   */
  static _keys = ['ServiceOrder', 'PersonResponsible'];
  /**
   * Transaction ID.
   * Maximum length: 10.
   */
  declare serviceOrder: DeserializedType<T, 'Edm.String'>;
  /**
   * Business Partner Number.
   * Maximum length: 10.
   */
  declare personResponsible: DeserializedType<T, 'Edm.String'>;
  /**
   * Main Partner (For Ambiguous Partner Functions).
   * @nullable
   */
  declare custMgmtPartnerIsMainPartner?: DeserializedType<
    T,
    'Edm.Boolean'
  > | null;

  constructor(_entityApi: ServiceOrderPersonRespApi<T>) {
    super(_entityApi);
  }
}

export interface ServiceOrderPersonRespType<
  T extends DeSerializers = DefaultDeSerializers
> {
  serviceOrder: DeserializedType<T, 'Edm.String'>;
  personResponsible: DeserializedType<T, 'Edm.String'>;
  custMgmtPartnerIsMainPartner?: DeserializedType<T, 'Edm.Boolean'> | null;
}
