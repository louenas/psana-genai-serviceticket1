/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SrvcOrdProdRefObject } from './SrvcOrdProdRefObject';
import { SrvcOrdProdRefObjectRequestBuilder } from './SrvcOrdProdRefObjectRequestBuilder';
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
export declare class SrvcOrdProdRefObjectApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<SrvcOrdProdRefObject<DeSerializersT>, DeSerializersT>
{
  deSerializers: DeSerializersT;
  private constructor();
  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(deSerializers?: DeSerializersT): SrvcOrdProdRefObjectApi<DeSerializersT>;
  private navigationPropertyFields;
  _addNavigationProperties(linkedApis: []): this;
  entityConstructor: typeof SrvcOrdProdRefObject;
  requestBuilder(): SrvcOrdProdRefObjectRequestBuilder<DeSerializersT>;
  entityBuilder(): EntityBuilderType<
    SrvcOrdProdRefObject<DeSerializersT>,
    DeSerializersT
  >;
  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable?: NullableT
  ): CustomField<
    SrvcOrdProdRefObject<DeSerializersT>,
    DeSerializersT,
    NullableT
  >;
  private _fieldBuilder?;
  get fieldBuilder(): FieldBuilder<typeof SrvcOrdProdRefObject, DeSerializersT>;
  private _schema?;
  get schema(): {
    SERVICE_ORDER: OrderableEdmTypeField<
      SrvcOrdProdRefObject<
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
      SrvcOrdProdRefObject<
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
      SrvcOrdProdRefObject<
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
      SrvcOrdProdRefObject<
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
