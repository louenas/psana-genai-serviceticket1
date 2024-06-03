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
import type { ServiceOrderItemPriceElementApi } from './ServiceOrderItemPriceElementApi';

/**
 * This class represents the entity "A_ServiceOrderItemPriceElement" of service "API_SERVICE_ORDER_SRV".
 */
export class ServiceOrderItemPriceElement<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ServiceOrderItemPriceElementType<T>
{
  /**
   * Technical entity name for ServiceOrderItemPriceElement.
   */
  static _entityName = 'A_ServiceOrderItemPriceElement';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/sap/opu/odata/sap/API_SERVICE_ORDER_SRV';
  /**
   * All key fields of the ServiceOrderItemPriceElement entity
   */
  static _keys = [
    'ServiceOrder',
    'ServiceOrderItem',
    'PricingProcedureStep',
    'PricingProcedureCounter'
  ];
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
   * Step Number.
   * Maximum length: 3.
   */
  declare pricingProcedureStep: DeserializedType<T, 'Edm.String'>;
  /**
   * Condition Counter.
   * Maximum length: 3.
   */
  declare pricingProcedureCounter: DeserializedType<T, 'Edm.String'>;
  /**
   * Condition Type.
   * Maximum length: 4.
   * @nullable
   */
  declare conditionType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Condition Amount or Percentage.
   * @nullable
   */
  declare conditionRateValue?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Currency Key.
   * Maximum length: 5.
   * @nullable
   */
  declare conditionCurrency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Condition Pricing Unit.
   * @nullable
   */
  declare conditionQuantity?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Condition Unit in the Document.
   * Maximum length: 3.
   * @nullable
   */
  declare conditionQuantityUnit?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ServiceOrderItemPriceElementApi<T>) {
    super(_entityApi);
  }
}

export interface ServiceOrderItemPriceElementType<
  T extends DeSerializers = DefaultDeSerializers
> {
  serviceOrder: DeserializedType<T, 'Edm.String'>;
  serviceOrderItem: DeserializedType<T, 'Edm.String'>;
  pricingProcedureStep: DeserializedType<T, 'Edm.String'>;
  pricingProcedureCounter: DeserializedType<T, 'Edm.String'>;
  conditionType?: DeserializedType<T, 'Edm.String'> | null;
  conditionRateValue?: DeserializedType<T, 'Edm.Decimal'> | null;
  conditionCurrency?: DeserializedType<T, 'Edm.String'> | null;
  conditionQuantity?: DeserializedType<T, 'Edm.Decimal'> | null;
  conditionQuantityUnit?: DeserializedType<T, 'Edm.String'> | null;
}
