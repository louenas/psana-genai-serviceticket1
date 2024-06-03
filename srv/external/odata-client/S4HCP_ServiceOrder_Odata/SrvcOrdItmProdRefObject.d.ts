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
import type { SrvcOrdItmProdRefObjectApi } from './SrvcOrdItmProdRefObjectApi';
/**
 * This class represents the entity "A_SrvcOrdItmProdRefObject" of service "API_SERVICE_ORDER_SRV".
 */
export declare class SrvcOrdItmProdRefObject<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SrvcOrdItmProdRefObjectType<T>
{
  /**
   * Technical entity name for SrvcOrdItmProdRefObject.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath: string;
  /**
   * All key fields of the SrvcOrdItmProdRefObject entity
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
   * Material Number.
   * Maximum length: 40.
   */
  serviceReferenceProduct: DeserializedType<T, 'Edm.String'>;
  /**
   * Main Reference Object.
   * @nullable
   */
  srvcRefObjIsMainObject?: DeserializedType<T, 'Edm.Boolean'> | null;
  constructor(_entityApi: SrvcOrdItmProdRefObjectApi<T>);
}
export interface SrvcOrdItmProdRefObjectType<
  T extends DeSerializers = DefaultDeSerializers
> {
  serviceOrder: DeserializedType<T, 'Edm.String'>;
  serviceOrderItem: DeserializedType<T, 'Edm.String'>;
  serviceReferenceProduct: DeserializedType<T, 'Edm.String'>;
  srvcRefObjIsMainObject?: DeserializedType<T, 'Edm.Boolean'> | null;
}
