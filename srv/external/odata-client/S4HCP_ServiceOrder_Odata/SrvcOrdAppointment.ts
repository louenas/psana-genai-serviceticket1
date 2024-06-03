/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v2';
import type { SrvcOrdAppointmentApi } from './SrvcOrdAppointmentApi';

/**
 * This class represents the entity "A_SrvcOrdAppointment" of service "API_SERVICE_ORDER_SRV".
 */
export class SrvcOrdAppointment<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements SrvcOrdAppointmentType<T>
{
  /**
   * Technical entity name for SrvcOrdAppointment.
   */
  static _entityName = 'A_SrvcOrdAppointment';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/sap/opu/odata/sap/API_SERVICE_ORDER_SRV';
  /**
   * All key fields of the SrvcOrdAppointment entity
   */
  static _keys = ['ServiceOrder', 'SrvcDocAppointmentType'];
  /**
   * Transaction ID.
   * Maximum length: 10.
   */
  declare serviceOrder: DeserializedType<T, 'Edm.String'>;
  /**
   * Technical Date Type Name.
   * Maximum length: 12.
   */
  declare srvcDocAppointmentType: DeserializedType<T, 'Edm.String'>;
  /**
   * Time Stamp (UTC) of Start Time of Appointment.
   * @nullable
   */
  declare srvcDocApptStartDateTime?: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  > | null;
  /**
   * Time stamp of end of appointment.
   * @nullable
   */
  declare srvcDocApptEndDateTime?: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  > | null;

  constructor(_entityApi: SrvcOrdAppointmentApi<T>) {
    super(_entityApi);
  }
}

export interface SrvcOrdAppointmentType<
  T extends DeSerializers = DefaultDeSerializers
> {
  serviceOrder: DeserializedType<T, 'Edm.String'>;
  srvcDocAppointmentType: DeserializedType<T, 'Edm.String'>;
  srvcDocApptStartDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  srvcDocApptEndDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
}
