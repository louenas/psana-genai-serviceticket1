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
export declare class SrvcOrdRefServiceContract<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SrvcOrdRefServiceContractType<T>
{
  /**
   * Technical entity name for SrvcOrdRefServiceContract.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath: string;
  /**
   * All key fields of the SrvcOrdRefServiceContract entity
   */
  static _keys: string[];
  /**
   * Transaction ID.
   * Maximum length: 10.
   */
  serviceOrder: DeserializedType<T, 'Edm.String'>;
  /**
   * Transaction ID.
   * Maximum length: 10.
   */
  referenceServiceContract: DeserializedType<T, 'Edm.String'>;
  constructor(_entityApi: SrvcOrdRefServiceContractApi<T>);
}
export interface SrvcOrdRefServiceContractType<
  T extends DeSerializers = DefaultDeSerializers
> {
  serviceOrder: DeserializedType<T, 'Edm.String'>;
  referenceServiceContract: DeserializedType<T, 'Edm.String'>;
}
