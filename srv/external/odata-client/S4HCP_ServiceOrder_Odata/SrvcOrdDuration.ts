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
import type { SrvcOrdDurationApi } from './SrvcOrdDurationApi';

/**
 * This class represents the entity "A_SrvcOrdDuration" of service "API_SERVICE_ORDER_SRV".
 */
export class SrvcOrdDuration<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements SrvcOrdDurationType<T>
{
  /**
   * Technical entity name for SrvcOrdDuration.
   */
  static _entityName = 'A_SrvcOrdDuration';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/sap/opu/odata/sap/API_SERVICE_ORDER_SRV';
  /**
   * All key fields of the SrvcOrdDuration entity
   */
  static _keys = ['ServiceOrder', 'SrvcDocDurationType'];
  /**
   * Transaction ID.
   * Maximum length: 10.
   */
  declare serviceOrder: DeserializedType<T, 'Edm.String'>;
  /**
   * Name for Type of Time Duration.
   * Maximum length: 12.
   */
  declare srvcDocDurationType: DeserializedType<T, 'Edm.String'>;
  /**
   * Numerical Value of Duration.
   * @nullable
   */
  declare srvcDocDurationValue?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Default Value for Time Unit.
   * Maximum length: 12.
   * @nullable
   */
  declare srvcDocDurationUnit?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: SrvcOrdDurationApi<T>) {
    super(_entityApi);
  }
}

export interface SrvcOrdDurationType<
  T extends DeSerializers = DefaultDeSerializers
> {
  serviceOrder: DeserializedType<T, 'Edm.String'>;
  srvcDocDurationType: DeserializedType<T, 'Edm.String'>;
  srvcDocDurationValue?: DeserializedType<T, 'Edm.Decimal'> | null;
  srvcDocDurationUnit?: DeserializedType<T, 'Edm.String'> | null;
}
