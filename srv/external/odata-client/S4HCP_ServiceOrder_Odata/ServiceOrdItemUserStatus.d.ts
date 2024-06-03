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
import type { ServiceOrdItemUserStatusApi } from './ServiceOrdItemUserStatusApi';
/**
 * This class represents the entity "A_ServiceOrdItemUserStatus" of service "API_SERVICE_ORDER_SRV".
 */
export declare class ServiceOrdItemUserStatus<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ServiceOrdItemUserStatusType<T>
{
  /**
   * Technical entity name for ServiceOrdItemUserStatus.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath: string;
  /**
   * All key fields of the ServiceOrdItemUserStatus entity
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
   * Object Status.
   * Maximum length: 5.
   */
  srvcOrdItemUserStatus: DeserializedType<T, 'Edm.String'>;
  constructor(_entityApi: ServiceOrdItemUserStatusApi<T>);
}
export interface ServiceOrdItemUserStatusType<
  T extends DeSerializers = DefaultDeSerializers
> {
  serviceOrder: DeserializedType<T, 'Edm.String'>;
  serviceOrderItem: DeserializedType<T, 'Edm.String'>;
  srvcOrdItemUserStatus: DeserializedType<T, 'Edm.String'>;
}
