/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ServiceOrderConfirmation } from './ServiceOrderConfirmation';
import { ServiceOrderConfirmationRequestBuilder } from './ServiceOrderConfirmationRequestBuilder';
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
export class ServiceOrderConfirmationApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<ServiceOrderConfirmation<DeSerializersT>, DeSerializersT>
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
  ): ServiceOrderConfirmationApi<DeSerializersT> {
    return new ServiceOrderConfirmationApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ServiceOrderConfirmation;

  requestBuilder(): ServiceOrderConfirmationRequestBuilder<DeSerializersT> {
    return new ServiceOrderConfirmationRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ServiceOrderConfirmation<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ServiceOrderConfirmation<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ServiceOrderConfirmation<DeSerializersT>,
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
    typeof ServiceOrderConfirmation,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ServiceOrderConfirmation,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    SERVICE_ORDER: OrderableEdmTypeField<
      ServiceOrderConfirmation<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SERVICE_CONFIRMATION: OrderableEdmTypeField<
      ServiceOrderConfirmation<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ALL_FIELDS: AllFields<ServiceOrderConfirmation<DeSerializers>>;
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
         * Static representation of the {@link serviceConfirmation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_CONFIRMATION: fieldBuilder.buildEdmTypeField(
          'ServiceConfirmation',
          'Edm.String',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ServiceOrderConfirmation)
      };
    }

    return this._schema;
  }
}
