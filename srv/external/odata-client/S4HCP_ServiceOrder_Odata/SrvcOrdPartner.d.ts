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
import type { SrvcOrdPartnerApi } from './SrvcOrdPartnerApi';
import {
  SrvcOrdPartnerAddress,
  SrvcOrdPartnerAddressType
} from './SrvcOrdPartnerAddress';
/**
 * This class represents the entity "A_SrvcOrdPartner" of service "API_SERVICE_ORDER_SRV".
 */
export declare class SrvcOrdPartner<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SrvcOrdPartnerType<T>
{
  /**
   * Technical entity name for SrvcOrdPartner.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath: string;
  /**
   * All key fields of the SrvcOrdPartner entity
   */
  static _keys: string[];
  /**
   * Transaction ID.
   * Maximum length: 10.
   */
  serviceOrder: DeserializedType<T, 'Edm.String'>;
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
   * One-to-one navigation property to the {@link SrvcOrdPartnerAddress} entity.
   */
  toAddress?: SrvcOrdPartnerAddress<T> | null;
  constructor(_entityApi: SrvcOrdPartnerApi<T>);
}
export interface SrvcOrdPartnerType<
  T extends DeSerializers = DefaultDeSerializers
> {
  serviceOrder: DeserializedType<T, 'Edm.String'>;
  custMgmtPartnerFunction: DeserializedType<T, 'Edm.String'>;
  custMgmtBusinessPartner: DeserializedType<T, 'Edm.String'>;
  custMgmtPartnerIsMainPartner?: DeserializedType<T, 'Edm.Boolean'> | null;
  toAddress?: SrvcOrdPartnerAddressType<T> | null;
}
