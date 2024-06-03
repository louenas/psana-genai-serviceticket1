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
import type { ServiceOrdUserStatusApi } from './ServiceOrdUserStatusApi';

/**
 * This class represents the entity "A_ServiceOrdUserStatus" of service "API_SERVICE_ORDER_SRV".
 */
export class ServiceOrdUserStatus<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ServiceOrdUserStatusType<T>
{
  /**
   * Technical entity name for ServiceOrdUserStatus.
   */
  static _entityName = 'A_ServiceOrdUserStatus';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/sap/opu/odata/sap/API_SERVICE_ORDER_SRV';
  /**
   * All key fields of the ServiceOrdUserStatus entity
   */
  static _keys = ['ServiceOrder', 'SrvcOrdUserStatus'];
  /**
   * Transaction ID.
   * Maximum length: 10.
   */
  declare serviceOrder: DeserializedType<T, 'Edm.String'>;
  /**
   * Object Status.
   * Maximum length: 5.
   */
  declare srvcOrdUserStatus: DeserializedType<T, 'Edm.String'>;

  constructor(_entityApi: ServiceOrdUserStatusApi<T>) {
    super(_entityApi);
  }
}

export interface ServiceOrdUserStatusType<
  T extends DeSerializers = DefaultDeSerializers
> {
  serviceOrder: DeserializedType<T, 'Edm.String'>;
  srvcOrdUserStatus: DeserializedType<T, 'Edm.String'>;
}
