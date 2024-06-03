/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ServiceOrdItemUserStatus } from './ServiceOrdItemUserStatus';
import { ServiceOrdItemUserStatusRequestBuilder } from './ServiceOrdItemUserStatusRequestBuilder';
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
export class ServiceOrdItemUserStatusApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<ServiceOrdItemUserStatus<DeSerializersT>, DeSerializersT>
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
  ): ServiceOrdItemUserStatusApi<DeSerializersT> {
    return new ServiceOrdItemUserStatusApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ServiceOrdItemUserStatus;

  requestBuilder(): ServiceOrdItemUserStatusRequestBuilder<DeSerializersT> {
    return new ServiceOrdItemUserStatusRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ServiceOrdItemUserStatus<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ServiceOrdItemUserStatus<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ServiceOrdItemUserStatus<DeSerializersT>,
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
    typeof ServiceOrdItemUserStatus,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ServiceOrdItemUserStatus,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    SERVICE_ORDER: OrderableEdmTypeField<
      ServiceOrdItemUserStatus<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SERVICE_ORDER_ITEM: OrderableEdmTypeField<
      ServiceOrdItemUserStatus<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SRVC_ORD_ITEM_USER_STATUS: OrderableEdmTypeField<
      ServiceOrdItemUserStatus<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ALL_FIELDS: AllFields<ServiceOrdItemUserStatus<DeSerializers>>;
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
         * Static representation of the {@link srvcOrdItemUserStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SRVC_ORD_ITEM_USER_STATUS: fieldBuilder.buildEdmTypeField(
          'SrvcOrdItemUserStatus',
          'Edm.String',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ServiceOrdItemUserStatus)
      };
    }

    return this._schema;
  }
}
