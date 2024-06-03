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
import type { SrvcOrdItmPartnerApi } from './SrvcOrdItmPartnerApi';
import {
  SrvcOrdItmPartnerAddress,
  SrvcOrdItmPartnerAddressType
} from './SrvcOrdItmPartnerAddress';
/**
 * This class represents the entity "A_SrvcOrdItmPartner" of service "API_SERVICE_ORDER_SRV".
 */
export declare class SrvcOrdItmPartner<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SrvcOrdItmPartnerType<T>
{
  /**
   * Technical entity name for SrvcOrdItmPartner.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath: string;
  /**
   * All key fields of the SrvcOrdItmPartner entity
   */
  static _keys: string[];
  /**
   * Transaction ID.
   * Maximum length: 10.
   */
  serviceOrder: DeserializedType<T, 'Edm.String'>;
  /**
   * Shortened Item Number in Document.
   * Maximum length: 6.
   */
  serviceOrderItem: DeserializedType<T, 'Edm.String'>;
  /**
   * Partner func.
   * Maximum length: 8.
   */
  custMgmtPartnerFunction: DeserializedType<T, 'Edm.String'>;
  /**
   * Business Partner Number.
   * Maximum length: 10.
   */
  custMgmtBusinessPartner: DeserializedType<T, 'Edm.String'>;
  /**
   * Main Partner (For Ambiguous Partner Functions).
   * @nullable
   */
  custMgmtPartnerIsMainPartner?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * One-to-one navigation property to the {@link SrvcOrdItmPartnerAddress} entity.
   */
  toAddress?: SrvcOrdItmPartnerAddress<T> | null;
  constructor(_entityApi: SrvcOrdItmPartnerApi<T>);
}
export interface SrvcOrdItmPartnerType<
  T extends DeSerializers = DefaultDeSerializers
> {
  serviceOrder: DeserializedType<T, 'Edm.String'>;
  serviceOrderItem: DeserializedType<T, 'Edm.String'>;
  custMgmtPartnerFunction: DeserializedType<T, 'Edm.String'>;
  custMgmtBusinessPartner: DeserializedType<T, 'Edm.String'>;
  custMgmtPartnerIsMainPartner?: DeserializedType<T, 'Edm.Boolean'> | null;
  toAddress?: SrvcOrdItmPartnerAddressType<T> | null;
}
