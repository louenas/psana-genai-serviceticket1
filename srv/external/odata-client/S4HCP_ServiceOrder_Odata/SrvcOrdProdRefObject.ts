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
import type { SrvcOrdProdRefObjectApi } from './SrvcOrdProdRefObjectApi';

/**
 * This class represents the entity "A_SrvcOrdProdRefObject" of service "API_SERVICE_ORDER_SRV".
 */
export class SrvcOrdProdRefObject<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SrvcOrdProdRefObjectType<T>
{
  /**
   * Technical entity name for SrvcOrdProdRefObject.
   */
  static _entityName = 'A_SrvcOrdProdRefObject';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/sap/opu/odata/sap/API_SERVICE_ORDER_SRV';
  /**
   * All key fields of the SrvcOrdProdRefObject entity
   */
  static _keys = ['ServiceOrder', 'ServiceReferenceProduct'];
  /**
   * Transaction ID.
   * Maximum length: 10.
   */
  declare serviceOrder: DeserializedType<T, 'Edm.String'>;
  /**
   * Material Number.
   * Maximum length: 40.
   */
  declare serviceReferenceProduct: DeserializedType<T, 'Edm.String'>;
  /**
   * Main Reference Object.
   * @nullable
   */
  declare srvcRefObjIsMainObject?: DeserializedType<T, 'Edm.Boolean'> | null;

  constructor(_entityApi: SrvcOrdProdRefObjectApi<T>) {
    super(_entityApi);
  }
}

export interface SrvcOrdProdRefObjectType<
  T extends DeSerializers = DefaultDeSerializers
> {
  serviceOrder: DeserializedType<T, 'Edm.String'>;
  serviceReferenceProduct: DeserializedType<T, 'Edm.String'>;
  srvcRefObjIsMainObject?: DeserializedType<T, 'Edm.Boolean'> | null;
}
