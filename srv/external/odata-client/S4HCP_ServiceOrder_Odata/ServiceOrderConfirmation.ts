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
import type { ServiceOrderConfirmationApi } from './ServiceOrderConfirmationApi';

/**
 * This class represents the entity "A_ServiceOrderConfirmation" of service "API_SERVICE_ORDER_SRV".
 */
export class ServiceOrderConfirmation<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ServiceOrderConfirmationType<T>
{
  /**
   * Technical entity name for ServiceOrderConfirmation.
   */
  static _entityName = 'A_ServiceOrderConfirmation';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/sap/opu/odata/sap/API_SERVICE_ORDER_SRV';
  /**
   * All key fields of the ServiceOrderConfirmation entity
   */
  static _keys = ['ServiceOrder', 'ServiceConfirmation'];
  /**
   * Transaction ID.
   * Maximum length: 10.
   */
  declare serviceOrder: DeserializedType<T, 'Edm.String'>;
  /**
   * Transaction ID.
   * Maximum length: 10.
   */
  declare serviceConfirmation: DeserializedType<T, 'Edm.String'>;

  constructor(_entityApi: ServiceOrderConfirmationApi<T>) {
    super(_entityApi);
  }
}

export interface ServiceOrderConfirmationType<
  T extends DeSerializers = DefaultDeSerializers
> {
  serviceOrder: DeserializedType<T, 'Edm.String'>;
  serviceConfirmation: DeserializedType<T, 'Edm.String'>;
}
