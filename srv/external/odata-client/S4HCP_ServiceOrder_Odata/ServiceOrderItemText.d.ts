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
export declare class ServiceOrderItemText<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ServiceOrderItemTextType<T>
{
  /**
   * Technical entity name for ServiceOrderItemText.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath: string;
  /**
   * All key fields of the ServiceOrderItemText entity
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
   * Language Key.
   * Maximum length: 2.
   */
  language: DeserializedType<T, 'Edm.String'>;
  /**
   * Text ID.
   * Maximum length: 4.
   */
  longTextId: DeserializedType<T, 'Edm.String'>;
  /**
   * Long Text.
   * @nullable
   */
  longText?: DeserializedType<T, 'Edm.String'> | null;
  constructor(_entityApi: ServiceOrderItemTextApi<T>);
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
