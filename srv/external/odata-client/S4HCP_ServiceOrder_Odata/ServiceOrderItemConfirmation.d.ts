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
import type { ServiceOrderItemConfirmationApi } from './ServiceOrderItemConfirmationApi';
/**
 * This class represents the entity "A_ServiceOrderItemConfirmation" of service "API_SERVICE_ORDER_SRV".
 */
export declare class ServiceOrderItemConfirmation<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ServiceOrderItemConfirmationType<T>
{
  /**
   * Technical entity name for ServiceOrderItemConfirmation.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath: string;
  /**
   * All key fields of the ServiceOrderItemConfirmation entity
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
   * Transaction ID.
   * Maximum length: 10.
   */
  serviceConfirmation: DeserializedType<T, 'Edm.String'>;
  /**
   * Shortened Item Number in Document.
   * Maximum length: 6.
   */
  serviceConfirmationItem: DeserializedType<T, 'Edm.String'>;
  constructor(_entityApi: ServiceOrderItemConfirmationApi<T>);
}
export interface ServiceOrderItemConfirmationType<
  T extends DeSerializers = DefaultDeSerializers
> {
  serviceOrder: DeserializedType<T, 'Edm.String'>;
  serviceOrderItem: DeserializedType<T, 'Edm.String'>;
  serviceConfirmation: DeserializedType<T, 'Edm.String'>;
  serviceConfirmationItem: DeserializedType<T, 'Edm.String'>;
}
