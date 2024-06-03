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
import type { ServiceOrderItemRefObjectApi } from './ServiceOrderItemRefObjectApi';
/**
 * This class represents the entity "A_ServiceOrderItemRefObject" of service "API_SERVICE_ORDER_SRV".
 */
export declare class ServiceOrderItemRefObject<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ServiceOrderItemRefObjectType<T>
{
  /**
   * Technical entity name for ServiceOrderItemRefObject.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath: string;
  /**
   * All key fields of the ServiceOrderItemRefObject entity
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
   * Equipment Number.
   * Maximum length: 18.
   */
  serviceReferenceEquipment: DeserializedType<T, 'Edm.String'>;
  /**
   * Functional Location.
   * Maximum length: 40.
   */
  serviceRefFunctionalLocation: DeserializedType<T, 'Edm.String'>;
  /**
   * Main Reference Object.
   * @nullable
   */
  srvcRefObjIsMainObject?: DeserializedType<T, 'Edm.Boolean'> | null;
  constructor(_entityApi: ServiceOrderItemRefObjectApi<T>);
}
export interface ServiceOrderItemRefObjectType<
  T extends DeSerializers = DefaultDeSerializers
> {
  serviceOrder: DeserializedType<T, 'Edm.String'>;
  serviceOrderItem: DeserializedType<T, 'Edm.String'>;
  serviceReferenceEquipment: DeserializedType<T, 'Edm.String'>;
  serviceRefFunctionalLocation: DeserializedType<T, 'Edm.String'>;
  srvcRefObjIsMainObject?: DeserializedType<T, 'Edm.Boolean'> | null;
}
