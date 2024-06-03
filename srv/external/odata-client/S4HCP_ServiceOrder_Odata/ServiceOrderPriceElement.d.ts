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
import type { ServiceOrderPriceElementApi } from './ServiceOrderPriceElementApi';
/**
 * This class represents the entity "A_ServiceOrderPriceElement" of service "API_SERVICE_ORDER_SRV".
 */
export declare class ServiceOrderPriceElement<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ServiceOrderPriceElementType<T>
{
  /**
   * Technical entity name for ServiceOrderPriceElement.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath: string;
  /**
   * All key fields of the ServiceOrderPriceElement entity
   */
  static _keys: string[];
  /**
   * Transaction ID.
   * Maximum length: 10.
   */
  serviceOrder: DeserializedType<T, 'Edm.String'>;
  /**
   * Step Number.
   * Maximum length: 3.
   */
  pricingProcedureStep: DeserializedType<T, 'Edm.String'>;
  /**
   * Condition Counter.
   * Maximum length: 3.
   */
  pricingProcedureCounter: DeserializedType<T, 'Edm.String'>;
  /**
   * Condition Type.
   * Maximum length: 4.
   * @nullable
   */
  conditionType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Condition Amount or Percentage.
   * @nullable
   */
  conditionRateValue?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Currency Key.
   * Maximum length: 5.
   * @nullable
   */
  conditionCurrency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Condition Pricing Unit.
   * @nullable
   */
  conditionQuantity?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Condition Unit in the Document.
   * Maximum length: 3.
   * @nullable
   */
  conditionQuantityUnit?: DeserializedType<T, 'Edm.String'> | null;
  constructor(_entityApi: ServiceOrderPriceElementApi<T>);
}
export interface ServiceOrderPriceElementType<
  T extends DeSerializers = DefaultDeSerializers
> {
  serviceOrder: DeserializedType<T, 'Edm.String'>;
  pricingProcedureStep: DeserializedType<T, 'Edm.String'>;
  pricingProcedureCounter: DeserializedType<T, 'Edm.String'>;
  conditionType?: DeserializedType<T, 'Edm.String'> | null;
  conditionRateValue?: DeserializedType<T, 'Edm.Decimal'> | null;
  conditionCurrency?: DeserializedType<T, 'Edm.String'> | null;
  conditionQuantity?: DeserializedType<T, 'Edm.Decimal'> | null;
  conditionQuantityUnit?: DeserializedType<T, 'Edm.String'> | null;
}
