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
import type { ServiceOrderItemTextApi } from './ServiceOrderItemTextApi';

/**
 * This class represents the entity "A_ServiceOrderItemText" of service "API_SERVICE_ORDER_SRV".
 */
export class ServiceOrderItemText<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ServiceOrderItemTextType<T>
{
  /**
   * Technical entity name for ServiceOrderItemText.
   */
  static _entityName = 'A_ServiceOrderItemText';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/sap/opu/odata/sap/API_SERVICE_ORDER_SRV';
  /**
   * All key fields of the ServiceOrderItemText entity
   */
  static _keys = ['ServiceOrder', 'ServiceOrderItem', 'Language', 'LongTextID'];
  /**
   * Transaction ID.
   * Maximum length: 10.
   */
  declare serviceOrder: DeserializedType<T, 'Edm.String'>;
  /**
   * Shortened Item Number in Document.
   * Maximum length: 6.
   */
  declare serviceOrderItem: DeserializedType<T, 'Edm.String'>;
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

  constructor(_entityApi: ServiceOrderItemTextApi<T>) {
    super(_entityApi);
  }
}

export interface ServiceOrderItemTextType<
  T extends DeSerializers = DefaultDeSerializers
> {
  serviceOrder: DeserializedType<T, 'Edm.String'>;
  serviceOrderItem: DeserializedType<T, 'Edm.String'>;
  language: DeserializedType<T, 'Edm.String'>;
  longTextId: DeserializedType<T, 'Edm.String'>;
  longText?: DeserializedType<T, 'Edm.String'> | null;
}
