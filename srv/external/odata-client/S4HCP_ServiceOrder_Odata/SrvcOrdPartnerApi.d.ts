/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SrvcOrdPartner } from './SrvcOrdPartner';
import { SrvcOrdPartnerRequestBuilder } from './SrvcOrdPartnerRequestBuilder';
import { SrvcOrdPartnerAddressApi } from './SrvcOrdPartnerAddressApi';
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
export declare class SrvcOrdPartnerApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<SrvcOrdPartner<DeSerializersT>, DeSerializersT>
{
  deSerializers: DeSerializersT;
  private constructor();
  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(deSerializers?: DeSerializersT): SrvcOrdPartnerApi<DeSerializersT>;
  private navigationPropertyFields;
  _addNavigationProperties(
    linkedApis: [SrvcOrdPartnerAddressApi<DeSerializersT>]
  ): this;
  entityConstructor: typeof SrvcOrdPartner;
  requestBuilder(): SrvcOrdPartnerRequestBuilder<DeSerializersT>;
  entityBuilder(): EntityBuilderType<
    SrvcOrdPartner<DeSerializersT>,
    DeSerializersT
  >;
  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable?: NullableT
  ): CustomField<SrvcOrdPartner<DeSerializersT>, DeSerializersT, NullableT>;
  private _fieldBuilder?;
  get fieldBuilder(): FieldBuilder<typeof SrvcOrdPartner, DeSerializersT>;
  private _schema?;
  get schema(): {
    SERVICE_ORDER: OrderableEdmTypeField<
      SrvcOrdPartner<
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
      SrvcOrdPartner<
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
      SrvcOrdPartner<
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
      SrvcOrdPartner<
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
      SrvcOrdPartner<DeSerializersT>,
      DeSerializersT,
      SrvcOrdPartnerAddressApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      SrvcOrdPartner<
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
