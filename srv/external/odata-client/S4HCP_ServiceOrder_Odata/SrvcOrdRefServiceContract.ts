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
import type { SrvcOrdRefServiceContractApi } from './SrvcOrdRefServiceContractApi';

/**
 * This class represents the entity "A_SrvcOrdRefServiceContract" of service "API_SERVICE_ORDER_SRV".
 */
export class SrvcOrdRefServiceContract<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SrvcOrdRefServiceContractType<T>
{
  /**
   * Technical entity name for SrvcOrdRefServiceContract.
   */
  static _entityName = 'A_SrvcOrdRefServiceContract';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/sap/opu/odata/sap/API_SERVICE_ORDER_SRV';
  /**
   * All key fields of the SrvcOrdRefServiceContract entity
   */
  static _keys = ['ServiceOrder', 'ReferenceServiceContract'];
  /**
   * Transaction ID.
   * Maximum length: 10.
   */
  declare serviceOrder: DeserializedType<T, 'Edm.String'>;
  /**
   * Transaction ID.
   * Maximum length: 10.
   */
  declare referenceServiceContract: DeserializedType<T, 'Edm.String'>;

  constructor(_entityApi: SrvcOrdRefServiceContractApi<T>) {
    super(_entityApi);
  }
}

export interface SrvcOrdRefServiceContractType<
  T extends DeSerializers = DefaultDeSerializers
> {
  serviceOrder: DeserializedType<T, 'Edm.String'>;
  referenceServiceContract: DeserializedType<T, 'Edm.String'>;
}
