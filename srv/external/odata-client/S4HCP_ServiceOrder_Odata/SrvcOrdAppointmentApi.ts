/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SrvcOrdAppointment } from './SrvcOrdAppointment';
import { SrvcOrdAppointmentRequestBuilder } from './SrvcOrdAppointmentRequestBuilder';
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
export class SrvcOrdAppointmentApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<SrvcOrdAppointment<DeSerializersT>, DeSerializersT>
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
  ): SrvcOrdAppointmentApi<DeSerializersT> {
    return new SrvcOrdAppointmentApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = SrvcOrdAppointment;

  requestBuilder(): SrvcOrdAppointmentRequestBuilder<DeSerializersT> {
    return new SrvcOrdAppointmentRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    SrvcOrdAppointment<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<SrvcOrdAppointment<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    SrvcOrdAppointment<DeSerializersT>,
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
    typeof SrvcOrdAppointment,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SrvcOrdAppointment,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    SERVICE_ORDER: OrderableEdmTypeField<
      SrvcOrdAppointment<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SRVC_DOC_APPOINTMENT_TYPE: OrderableEdmTypeField<
      SrvcOrdAppointment<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SRVC_DOC_APPT_START_DATE_TIME: OrderableEdmTypeField<
      SrvcOrdAppointment<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    SRVC_DOC_APPT_END_DATE_TIME: OrderableEdmTypeField<
      SrvcOrdAppointment<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    ALL_FIELDS: AllFields<SrvcOrdAppointment<DeSerializers>>;
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
         * Static representation of the {@link srvcDocAppointmentType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SRVC_DOC_APPOINTMENT_TYPE: fieldBuilder.buildEdmTypeField(
          'SrvcDocAppointmentType',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link srvcDocApptStartDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SRVC_DOC_APPT_START_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'SrvcDocApptStartDateTime',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link srvcDocApptEndDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SRVC_DOC_APPT_END_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'SrvcDocApptEndDateTime',
          'Edm.DateTimeOffset',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SrvcOrdAppointment)
      };
    }

    return this._schema;
  }
}
