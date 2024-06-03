/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ServiceOrderDefect } from './ServiceOrderDefect';
import { ServiceOrderDefectRequestBuilder } from './ServiceOrderDefectRequestBuilder';
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
export class ServiceOrderDefectApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ServiceOrderDefect<DeSerializersT>, DeSerializersT>
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
  ): ServiceOrderDefectApi<DeSerializersT> {
    return new ServiceOrderDefectApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ServiceOrderDefect;

  requestBuilder(): ServiceOrderDefectRequestBuilder<DeSerializersT> {
    return new ServiceOrderDefectRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ServiceOrderDefect<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ServiceOrderDefect<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ServiceOrderDefect<DeSerializersT>,
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
    typeof ServiceOrderDefect,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ServiceOrderDefect,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    SERVICE_ORDER: OrderableEdmTypeField<
      ServiceOrderDefect<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SRVC_DOC_TYPE_DEFECT_CODE_PROF_TYPE: OrderableEdmTypeField<
      ServiceOrderDefect<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SERVICE_DEFECT_SEQUENCE: OrderableEdmTypeField<
      ServiceOrderDefect<DeSerializers>,
      DeSerializersT,
      'Edm.Int16',
      false,
      true
    >;
    SRVC_DOC_TYPE_DEFECT_CODE_PROFILE: OrderableEdmTypeField<
      ServiceOrderDefect<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SERVICE_DEFECT_CODE_CATALOG: OrderableEdmTypeField<
      ServiceOrderDefect<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SERVICE_DEFECT_CODE_GROUP: OrderableEdmTypeField<
      ServiceOrderDefect<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SERVICE_DEFECT_CODE: OrderableEdmTypeField<
      ServiceOrderDefect<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SERVICE_DEFECT_SCHEMA: OrderableEdmTypeField<
      ServiceOrderDefect<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SERVICE_DEFECT_CATEGORY: OrderableEdmTypeField<
      ServiceOrderDefect<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<ServiceOrderDefect<DeSerializers>>;
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
         * Static representation of the {@link srvcDocTypeDefectCodeProfType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SRVC_DOC_TYPE_DEFECT_CODE_PROF_TYPE: fieldBuilder.buildEdmTypeField(
          'SrvcDocTypeDefectCodeProfType',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link serviceDefectSequence} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_DEFECT_SEQUENCE: fieldBuilder.buildEdmTypeField(
          'ServiceDefectSequence',
          'Edm.Int16',
          false
        ),
        /**
         * Static representation of the {@link srvcDocTypeDefectCodeProfile} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SRVC_DOC_TYPE_DEFECT_CODE_PROFILE: fieldBuilder.buildEdmTypeField(
          'SrvcDocTypeDefectCodeProfile',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link serviceDefectCodeCatalog} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_DEFECT_CODE_CATALOG: fieldBuilder.buildEdmTypeField(
          'ServiceDefectCodeCatalog',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link serviceDefectCodeGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_DEFECT_CODE_GROUP: fieldBuilder.buildEdmTypeField(
          'ServiceDefectCodeGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link serviceDefectCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_DEFECT_CODE: fieldBuilder.buildEdmTypeField(
          'ServiceDefectCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link serviceDefectSchema} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_DEFECT_SCHEMA: fieldBuilder.buildEdmTypeField(
          'ServiceDefectSchema',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link serviceDefectCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_DEFECT_CATEGORY: fieldBuilder.buildEdmTypeField(
          'ServiceDefectCategory',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ServiceOrderDefect)
      };
    }

    return this._schema;
  }
}
