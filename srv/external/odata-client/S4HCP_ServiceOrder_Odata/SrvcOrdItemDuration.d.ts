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
import type { SrvcOrdItemDurationApi } from './SrvcOrdItemDurationApi';
/**
 * This class represents the entity "A_SrvcOrdItemDuration" of service "API_SERVICE_ORDER_SRV".
 */
export declare class SrvcOrdItemDuration<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SrvcOrdItemDurationType<T>
{
  /**
   * Technical entity name for SrvcOrdItemDuration.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath: string;
  /**
   * All key fields of the SrvcOrdItemDuration entity
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
   * Name for Type of Time Duration.
   * Maximum length: 12.
   */
  srvcDocDurationType: DeserializedType<T, 'Edm.String'>;
  /**
   * Numerical Value of Duration.
   * @nullable
   */
  srvcDocDurationValue?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Default Value for Time Unit.
   * Maximum length: 12.
   * @nullable
   */
  srvcDocDurationUnit?: DeserializedType<T, 'Edm.String'> | null;
  constructor(_entityApi: SrvcOrdItemDurationApi<T>);
}
export interface SrvcOrdItemDurationType<
  T extends DeSerializers = DefaultDeSerializers
> {
  serviceOrder: DeserializedType<T, 'Edm.String'>;
  serviceOrderItem: DeserializedType<T, 'Edm.String'>;
  srvcDocDurationType: DeserializedType<T, 'Edm.String'>;
  srvcDocDurationValue?: DeserializedType<T, 'Edm.Decimal'> | null;
  srvcDocDurationUnit?: DeserializedType<T, 'Edm.String'> | null;
}
