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
import type { ServiceOrderDefectApi } from './ServiceOrderDefectApi';

/**
 * This class represents the entity "A_ServiceOrderDefect" of service "API_SERVICE_ORDER_SRV".
 */
export class ServiceOrderDefect<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ServiceOrderDefectType<T>
{
  /**
   * Technical entity name for ServiceOrderDefect.
   */
  static _entityName = 'A_ServiceOrderDefect';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/sap/opu/odata/sap/API_SERVICE_ORDER_SRV';
  /**
   * All key fields of the ServiceOrderDefect entity
   */
  static _keys = [
    'ServiceOrder',
    'SrvcDocTypeDefectCodeProfType',
    'ServiceDefectSequence'
  ];
  /**
   * Transaction ID.
   * Maximum length: 10.
   */
  declare serviceOrder: DeserializedType<T, 'Edm.String'>;
  /**
   * Subject Profile Category.
   * Maximum length: 2.
   */
  declare srvcDocTypeDefectCodeProfType: DeserializedType<T, 'Edm.String'>;
  /**
   * Sort Field.
   */
  declare serviceDefectSequence: DeserializedType<T, 'Edm.Int16'>;
  /**
   * Subject Profile.
   * Maximum length: 9.
   * @nullable
   */
  declare srvcDocTypeDefectCodeProfile?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Catalog.
   * Maximum length: 2.
   * @nullable
   */
  declare serviceDefectCodeCatalog?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Code Group.
   * Maximum length: 8.
   * @nullable
   */
  declare serviceDefectCodeGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Code.
   * Maximum length: 4.
   * @nullable
   */
  declare serviceDefectCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Coherent Cat. - Aspect ID.
   * Maximum length: 40.
   * @nullable
   */
  declare serviceDefectSchema?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Coherent Cat. - Aspect ID.
   * Maximum length: 40.
   * @nullable
   */
  declare serviceDefectCategory?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ServiceOrderDefectApi<T>) {
    super(_entityApi);
  }
}

export interface ServiceOrderDefectType<
  T extends DeSerializers = DefaultDeSerializers
> {
  serviceOrder: DeserializedType<T, 'Edm.String'>;
  srvcDocTypeDefectCodeProfType: DeserializedType<T, 'Edm.String'>;
  serviceDefectSequence: DeserializedType<T, 'Edm.Int16'>;
  srvcDocTypeDefectCodeProfile?: DeserializedType<T, 'Edm.String'> | null;
  serviceDefectCodeCatalog?: DeserializedType<T, 'Edm.String'> | null;
  serviceDefectCodeGroup?: DeserializedType<T, 'Edm.String'> | null;
  serviceDefectCode?: DeserializedType<T, 'Edm.String'> | null;
  serviceDefectSchema?: DeserializedType<T, 'Edm.String'> | null;
  serviceDefectCategory?: DeserializedType<T, 'Edm.String'> | null;
}
