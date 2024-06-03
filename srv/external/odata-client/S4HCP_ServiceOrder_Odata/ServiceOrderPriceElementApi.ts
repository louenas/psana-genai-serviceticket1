/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ServiceOrderPriceElement } from './ServiceOrderPriceElement';
import { ServiceOrderPriceElementRequestBuilder } from './ServiceOrderPriceElementRequestBuilder';
import {
  CustomField,
  defaultDeSerializers,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  entityBuilder,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v2';
export class ServiceOrderPriceElementApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<ServiceOrderPriceElement<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  private constructor(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ) {
    this.deSerializers = deSerializers;
  }

  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  public static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ): ServiceOrderPriceElementApi<DeSerializersT> {
    return new ServiceOrderPriceElementApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ServiceOrderPriceElement;

  requestBuilder(): ServiceOrderPriceElementRequestBuilder<DeSerializersT> {
    return new ServiceOrderPriceElementRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ServiceOrderPriceElement<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ServiceOrderPriceElement<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ServiceOrderPriceElement<DeSerializersT>,
    DeSerializersT,
    NullableT
  > {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof ServiceOrderPriceElement,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ServiceOrderPriceElement,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    SERVICE_ORDER: OrderableEdmTypeField<
      ServiceOrderPriceElement<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRICING_PROCEDURE_STEP: OrderableEdmTypeField<
      ServiceOrderPriceElement<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRICING_PROCEDURE_COUNTER: OrderableEdmTypeField<
      ServiceOrderPriceElement<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CONDITION_TYPE: OrderableEdmTypeField<
      ServiceOrderPriceElement<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONDITION_RATE_VALUE: OrderableEdmTypeField<
      ServiceOrderPriceElement<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    CONDITION_CURRENCY: OrderableEdmTypeField<
      ServiceOrderPriceElement<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONDITION_QUANTITY: OrderableEdmTypeField<
      ServiceOrderPriceElement<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    CONDITION_QUANTITY_UNIT: OrderableEdmTypeField<
      ServiceOrderPriceElement<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<ServiceOrderPriceElement<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link serviceOrder} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_ORDER: fieldBuilder.buildEdmTypeField(
          'ServiceOrder',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link pricingProcedureStep} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICING_PROCEDURE_STEP: fieldBuilder.buildEdmTypeField(
          'PricingProcedureStep',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link pricingProcedureCounter} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICING_PROCEDURE_COUNTER: fieldBuilder.buildEdmTypeField(
          'PricingProcedureCounter',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link conditionType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONDITION_TYPE: fieldBuilder.buildEdmTypeField(
          'ConditionType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link conditionRateValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONDITION_RATE_VALUE: fieldBuilder.buildEdmTypeField(
          'ConditionRateValue',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link conditionCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONDITION_CURRENCY: fieldBuilder.buildEdmTypeField(
          'ConditionCurrency',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link conditionQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONDITION_QUANTITY: fieldBuilder.buildEdmTypeField(
          'ConditionQuantity',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link conditionQuantityUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONDITION_QUANTITY_UNIT: fieldBuilder.buildEdmTypeField(
          'ConditionQuantityUnit',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ServiceOrderPriceElement)
      };
    }

    return this._schema;
  }
}
