/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SrvcOrdItmPartner } from './SrvcOrdItmPartner';
import { SrvcOrdItmPartnerRequestBuilder } from './SrvcOrdItmPartnerRequestBuilder';
import { SrvcOrdItmPartnerAddressApi } from './SrvcOrdItmPartnerAddressApi';
import {
  CustomField,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v2';
export declare class SrvcOrdItmPartnerApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<SrvcOrdItmPartner<DeSerializersT>, DeSerializersT>
{
  deSerializers: DeSerializersT;
  private constructor();
  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(deSerializers?: DeSerializersT): SrvcOrdItmPartnerApi<DeSerializersT>;
  private navigationPropertyFields;
  _addNavigationProperties(
    linkedApis: [SrvcOrdItmPartnerAddressApi<DeSerializersT>]
  ): this;
  entityConstructor: typeof SrvcOrdItmPartner;
  requestBuilder(): SrvcOrdItmPartnerRequestBuilder<DeSerializersT>;
  entityBuilder(): EntityBuilderType<
    SrvcOrdItmPartner<DeSerializersT>,
    DeSerializersT
  >;
  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable?: NullableT
  ): CustomField<SrvcOrdItmPartner<DeSerializersT>, DeSerializersT, NullableT>;
  private _fieldBuilder?;
  get fieldBuilder(): FieldBuilder<typeof SrvcOrdItmPartner, DeSerializersT>;
  private _schema?;
  get schema(): {
    SERVICE_ORDER: OrderableEdmTypeField<
      SrvcOrdItmPartner<
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
      SrvcOrdItmPartner<
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
    CUST_MGMT_PARTNER_FUNCTION: OrderableEdmTypeField<
      SrvcOrdItmPartner<
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
    CUST_MGMT_BUSINESS_PARTNER: OrderableEdmTypeField<
      SrvcOrdItmPartner<
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
    CUST_MGMT_PARTNER_IS_MAIN_PARTNER: OrderableEdmTypeField<
      SrvcOrdItmPartner<
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
    /**
     * Static representation of the one-to-one navigation property {@link toAddress} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_ADDRESS: OneToOneLink<
      SrvcOrdItmPartner<DeSerializersT>,
      DeSerializersT,
      SrvcOrdItmPartnerAddressApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      SrvcOrdItmPartner<
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
