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
export declare class SrvcOrdAppointment<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SrvcOrdAppointmentType<T>
{
  /**
   * Technical entity name for SrvcOrdAppointment.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath: string;
  /**
   * All key fields of the SrvcOrdAppointment entity
   */
  static _keys: string[];
  /**
   * Transaction ID.
   * Maximum length: 10.
   */
  serviceOrder: DeserializedType<T, 'Edm.String'>;
  /**
   * Technical Date Type Name.
   * Maximum length: 12.
   */
  srvcDocAppointmentType: DeserializedType<T, 'Edm.String'>;
  /**
   * Time Stamp (UTC) of Start Time of Appointment.
   * @nullable
   */
  srvcDocApptStartDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Time stamp of end of appointment.
   * @nullable
   */
  srvcDocApptEndDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  constructor(_entityApi: SrvcOrdAppointmentApi<T>);
}
export interface SrvcOrdAppointmentType<
  T extends DeSerializers = DefaultDeSerializers
> {
  serviceOrder: DeserializedType<T, 'Edm.String'>;
  srvcDocAppointmentType: DeserializedType<T, 'Edm.String'>;
  srvcDocApptStartDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  srvcDocApptEndDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
}
