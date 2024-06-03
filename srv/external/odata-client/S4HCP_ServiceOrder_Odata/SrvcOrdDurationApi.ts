/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SrvcOrdDuration } from './SrvcOrdDuration';
import { SrvcOrdDurationRequestBuilder } from './SrvcOrdDurationRequestBuilder';
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
export class SrvcOrdDurationApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<SrvcOrdDuration<DeSerializersT>, DeSerializersT>
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
  ): SrvcOrdDurationApi<DeSerializersT> {
    return new SrvcOrdDurationApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = SrvcOrdDuration;

  requestBuilder(): SrvcOrdDurationRequestBuilder<DeSerializersT> {
    return new SrvcOrdDurationRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    SrvcOrdDuration<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<SrvcOrdDuration<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<SrvcOrdDuration<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof SrvcOrdDuration, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SrvcOrdDuration,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    SERVICE_ORDER: OrderableEdmTypeField<
      SrvcOrdDuration<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SRVC_DOC_DURATION_TYPE: OrderableEdmTypeField<
      SrvcOrdDuration<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SRVC_DOC_DURATION_VALUE: OrderableEdmTypeField<
      SrvcOrdDuration<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    SRVC_DOC_DURATION_UNIT: OrderableEdmTypeField<
      SrvcOrdDuration<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<SrvcOrdDuration<DeSerializers>>;
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
         * Static representation of the {@link srvcDocDurationType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SRVC_DOC_DURATION_TYPE: fieldBuilder.buildEdmTypeField(
          'SrvcDocDurationType',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link srvcDocDurationValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SRVC_DOC_DURATION_VALUE: fieldBuilder.buildEdmTypeField(
          'SrvcDocDurationValue',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link srvcDocDurationUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SRVC_DOC_DURATION_UNIT: fieldBuilder.buildEdmTypeField(
          'SrvcDocDurationUnit',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SrvcOrdDuration)
      };
    }

    return this._schema;
  }
}
