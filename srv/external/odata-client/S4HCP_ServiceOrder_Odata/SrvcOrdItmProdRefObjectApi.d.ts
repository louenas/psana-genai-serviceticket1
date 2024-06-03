/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SrvcOrdItmProdRefObject } from './SrvcOrdItmProdRefObject';
import { SrvcOrdItmProdRefObjectRequestBuilder } from './SrvcOrdItmProdRefObjectRequestBuilder';
import {
  CustomField,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v2';
export declare class SrvcOrdItmProdRefObjectApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<SrvcOrdItmProdRefObject<DeSerializersT>, DeSerializersT>
{
  deSerializers: DeSerializersT;
  private constructor();
  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(deSerializers?: DeSerializersT): SrvcOrdItmProdRefObjectApi<DeSerializersT>;
  private navigationPropertyFields;
  _addNavigationProperties(linkedApis: []): this;
  entityConstructor: typeof SrvcOrdItmProdRefObject;
  requestBuilder(): SrvcOrdItmProdRefObjectRequestBuilder<DeSerializersT>;
  entityBuilder(): EntityBuilderType<
    SrvcOrdItmProdRefObject<DeSerializersT>,
    DeSerializersT
  >;
  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable?: NullableT
  ): CustomField<
    SrvcOrdItmProdRefObject<DeSerializersT>,
    DeSerializersT,
    NullableT
  >;
  private _fieldBuilder?;
  get fieldBuilder(): FieldBuilder<
    typeof SrvcOrdItmProdRefObject,
    DeSerializersT
  >;
  private _schema?;
  get schema(): {
    SERVICE_ORDER: OrderableEdmTypeField<
      SrvcOrdItmProdRefObject<
        DeSerializers<
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any
        >
      >,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SERVICE_ORDER_ITEM: OrderableEdmTypeField<
      SrvcOrdItmProdRefObject<
        DeSerializers<
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any
        >
      >,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SERVICE_REFERENCE_PRODUCT: OrderableEdmTypeField<
      SrvcOrdItmProdRefObject<
        DeSerializers<
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any
        >
      >,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SRVC_REF_OBJ_IS_MAIN_OBJECT: OrderableEdmTypeField<
      SrvcOrdItmProdRefObject<
        DeSerializers<
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any
        >
      >,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    ALL_FIELDS: AllFields<
      SrvcOrdItmProdRefObject<
        DeSerializers<
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any
        >
      >
    >;
  };
}
