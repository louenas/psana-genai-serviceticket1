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
  defaultDeSerializers,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  entityBuilder,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v2';
export class SrvcOrdItmPartnerApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<SrvcOrdItmPartner<DeSerializersT>, DeSerializersT>
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
  ): SrvcOrdItmPartnerApi<DeSerializersT> {
    return new SrvcOrdItmPartnerApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link toAddress} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_ADDRESS: OneToOneLink<
      SrvcOrdItmPartner<DeSerializersT>,
      DeSerializersT,
      SrvcOrdItmPartnerAddressApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [SrvcOrdItmPartnerAddressApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      TO_ADDRESS: new OneToOneLink('to_Address', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = SrvcOrdItmPartner;

  requestBuilder(): SrvcOrdItmPartnerRequestBuilder<DeSerializersT> {
    return new SrvcOrdItmPartnerRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    SrvcOrdItmPartner<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<SrvcOrdItmPartner<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<SrvcOrdItmPartner<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof SrvcOrdItmPartner,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SrvcOrdItmPartner,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    SERVICE_ORDER: OrderableEdmTypeField<
      SrvcOrdItmPartner<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SERVICE_ORDER_ITEM: OrderableEdmTypeField<
      SrvcOrdItmPartner<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CUST_MGMT_PARTNER_FUNCTION: OrderableEdmTypeField<
      SrvcOrdItmPartner<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CUST_MGMT_BUSINESS_PARTNER: OrderableEdmTypeField<
      SrvcOrdItmPartner<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CUST_MGMT_PARTNER_IS_MAIN_PARTNER: OrderableEdmTypeField<
      SrvcOrdItmPartner<DeSerializers>,
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
    ALL_FIELDS: AllFields<SrvcOrdItmPartner<DeSerializers>>;
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
         * Static representation of the {@link custMgmtPartnerFunction} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUST_MGMT_PARTNER_FUNCTION: fieldBuilder.buildEdmTypeField(
          'CustMgmtPartnerFunction',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link custMgmtBusinessPartner} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUST_MGMT_BUSINESS_PARTNER: fieldBuilder.buildEdmTypeField(
          'CustMgmtBusinessPartner',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link custMgmtPartnerIsMainPartner} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUST_MGMT_PARTNER_IS_MAIN_PARTNER: fieldBuilder.buildEdmTypeField(
          'CustMgmtPartnerIsMainPartner',
          'Edm.Boolean',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SrvcOrdItmPartner)
      };
    }

    return this._schema;
  }
}
