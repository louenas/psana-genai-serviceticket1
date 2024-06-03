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
import type { ServiceOrderTextApi } from './ServiceOrderTextApi';

/**
 * This class represents the entity "A_ServiceOrderText" of service "API_SERVICE_ORDER_SRV".
 */
export class ServiceOrderText<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ServiceOrderTextType<T>
{
  /**
   * Technical entity name for ServiceOrderText.
   */
  static _entityName = 'A_ServiceOrderText';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/sap/opu/odata/sap/API_SERVICE_ORDER_SRV';
  /**
   * All key fields of the ServiceOrderText entity
   */
  static _keys = ['ServiceOrder', 'Language', 'LongTextID'];
  /**
   * Transaction ID.
   * Maximum length: 10.
   */
  declare serviceOrder: DeserializedType<T, 'Edm.String'>;
  /**
   * Language Key.
   * Maximum length: 2.
   */
  declare language: DeserializedType<T, 'Edm.String'>;
  /**
   * Text ID.
   * Maximum length: 4.
   */
  declare longTextId: DeserializedType<T, 'Edm.String'>;
  /**
   * Long Text.
   * @nullable
   */
  declare longText?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ServiceOrderTextApi<T>) {
    super(_entityApi);
  }
}

export interface ServiceOrderTextType<
  T extends DeSerializers = DefaultDeSerializers
> {
  serviceOrder: DeserializedType<T, 'Edm.String'>;
  language: DeserializedType<T, 'Edm.String'>;
  longTextId: DeserializedType<T, 'Edm.String'>;
  longText?: DeserializedType<T, 'Edm.String'> | null;
}
