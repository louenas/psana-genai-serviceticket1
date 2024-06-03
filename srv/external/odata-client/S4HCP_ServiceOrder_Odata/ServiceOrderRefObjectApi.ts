/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ServiceOrderRefObject } from './ServiceOrderRefObject';
import { ServiceOrderRefObjectRequestBuilder } from './ServiceOrderRefObjectRequestBuilder';
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
export class ServiceOrderRefObjectApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ServiceOrderRefObject<DeSerializersT>, DeSerializersT>
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
  ): ServiceOrderRefObjectApi<DeSerializersT> {
    return new ServiceOrderRefObjectApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ServiceOrderRefObject;

  requestBuilder(): ServiceOrderRefObjectRequestBuilder<DeSerializersT> {
    return new ServiceOrderRefObjectRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ServiceOrderRefObject<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ServiceOrderRefObject<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ServiceOrderRefObject<DeSerializersT>,
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
    typeof ServiceOrderRefObject,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ServiceOrderRefObject,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    SERVICE_ORDER: OrderableEdmTypeField<
      ServiceOrderRefObject<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SERVICE_REFERENCE_EQUIPMENT: OrderableEdmTypeField<
      ServiceOrderRefObject<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SERVICE_REF_FUNCTIONAL_LOCATION: OrderableEdmTypeField<
      ServiceOrderRefObject<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SRVC_REF_OBJ_IS_MAIN_OBJECT: OrderableEdmTypeField<
      ServiceOrderRefObject<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    ALL_FIELDS: AllFields<ServiceOrderRefObject<DeSerializers>>;
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
         * Static representation of the {@link serviceReferenceEquipment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_REFERENCE_EQUIPMENT: fieldBuilder.buildEdmTypeField(
          'ServiceReferenceEquipment',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link serviceRefFunctionalLocation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_REF_FUNCTIONAL_LOCATION: fieldBuilder.buildEdmTypeField(
          'ServiceRefFunctionalLocation',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link srvcRefObjIsMainObject} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SRVC_REF_OBJ_IS_MAIN_OBJECT: fieldBuilder.buildEdmTypeField(
          'SrvcRefObjIsMainObject',
          'Edm.Boolean',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ServiceOrderRefObject)
      };
    }

    return this._schema;
  }
}
