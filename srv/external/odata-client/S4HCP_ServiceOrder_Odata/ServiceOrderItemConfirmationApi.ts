/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ServiceOrderItemConfirmation } from './ServiceOrderItemConfirmation';
import { ServiceOrderItemConfirmationRequestBuilder } from './ServiceOrderItemConfirmationRequestBuilder';
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
export class ServiceOrderItemConfirmationApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<ServiceOrderItemConfirmation<DeSerializersT>, DeSerializersT>
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
  ): ServiceOrderItemConfirmationApi<DeSerializersT> {
    return new ServiceOrderItemConfirmationApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ServiceOrderItemConfirmation;

  requestBuilder(): ServiceOrderItemConfirmationRequestBuilder<DeSerializersT> {
    return new ServiceOrderItemConfirmationRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ServiceOrderItemConfirmation<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ServiceOrderItemConfirmation<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ServiceOrderItemConfirmation<DeSerializersT>,
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
    typeof ServiceOrderItemConfirmation,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ServiceOrderItemConfirmation,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    SERVICE_ORDER: OrderableEdmTypeField<
      ServiceOrderItemConfirmation<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SERVICE_ORDER_ITEM: OrderableEdmTypeField<
      ServiceOrderItemConfirmation<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SERVICE_CONFIRMATION: OrderableEdmTypeField<
      ServiceOrderItemConfirmation<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SERVICE_CONFIRMATION_ITEM: OrderableEdmTypeField<
      ServiceOrderItemConfirmation<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ALL_FIELDS: AllFields<ServiceOrderItemConfirmation<DeSerializers>>;
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
         * Static representation of the {@link serviceOrderItem} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_ORDER_ITEM: fieldBuilder.buildEdmTypeField(
          'ServiceOrderItem',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link serviceConfirmation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_CONFIRMATION: fieldBuilder.buildEdmTypeField(
          'ServiceConfirmation',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link serviceConfirmationItem} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_CONFIRMATION_ITEM: fieldBuilder.buildEdmTypeField(
          'ServiceConfirmationItem',
          'Edm.String',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ServiceOrderItemConfirmation)
      };
    }

    return this._schema;
  }
}
