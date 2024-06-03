/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SrvcOrdRefServiceContract } from './SrvcOrdRefServiceContract';
import { SrvcOrdRefServiceContractRequestBuilder } from './SrvcOrdRefServiceContractRequestBuilder';
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
export class SrvcOrdRefServiceContractApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<SrvcOrdRefServiceContract<DeSerializersT>, DeSerializersT>
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
  ): SrvcOrdRefServiceContractApi<DeSerializersT> {
    return new SrvcOrdRefServiceContractApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = SrvcOrdRefServiceContract;

  requestBuilder(): SrvcOrdRefServiceContractRequestBuilder<DeSerializersT> {
    return new SrvcOrdRefServiceContractRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    SrvcOrdRefServiceContract<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      SrvcOrdRefServiceContract<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    SrvcOrdRefServiceContract<DeSerializersT>,
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
    typeof SrvcOrdRefServiceContract,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SrvcOrdRefServiceContract,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    SERVICE_ORDER: OrderableEdmTypeField<
      SrvcOrdRefServiceContract<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REFERENCE_SERVICE_CONTRACT: OrderableEdmTypeField<
      SrvcOrdRefServiceContract<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ALL_FIELDS: AllFields<SrvcOrdRefServiceContract<DeSerializers>>;
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
         * Static representation of the {@link referenceServiceContract} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REFERENCE_SERVICE_CONTRACT: fieldBuilder.buildEdmTypeField(
          'ReferenceServiceContract',
          'Edm.String',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SrvcOrdRefServiceContract)
      };
    }

    return this._schema;
  }
}
