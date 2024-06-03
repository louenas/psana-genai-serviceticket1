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
import type { SrvcOrdItmPartnerAddressApi } from './SrvcOrdItmPartnerAddressApi';
/**
 * This class represents the entity "A_SrvcOrdItmPartnerAddress" of service "API_SERVICE_ORDER_SRV".
 */
export declare class SrvcOrdItmPartnerAddress<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SrvcOrdItmPartnerAddressType<T>
{
  /**
   * Technical entity name for SrvcOrdItmPartnerAddress.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath: string;
  /**
   * All key fields of the SrvcOrdItmPartnerAddress entity
   */
  static _keys: string[];
  /**
   * Transaction ID.
   * Maximum length: 10.
   */
  serviceOrder: DeserializedType<T, 'Edm.String'>;
  /**
   * Shortened Item Number in Document.
   * Maximum length: 6.
   */
  serviceOrderItem: DeserializedType<T, 'Edm.String'>;
  /**
   * Partner func.
   * Maximum length: 8.
   */
  custMgmtPartnerFunction: DeserializedType<T, 'Edm.String'>;
  /**
   * Business Partner Number.
   * Maximum length: 10.
   */
  custMgmtBusinessPartner: DeserializedType<T, 'Edm.String'>;
  /**
   * Full Name of Person.
   * Maximum length: 80.
   * @nullable
   */
  addresseeFullName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * City.
   * Maximum length: 40.
   * @nullable
   */
  cityName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Language Key.
   * Maximum length: 2.
   * @nullable
   */
  correspondenceLanguage?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Country/Region Key.
   * Maximum length: 3.
   * @nullable
   */
  country?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * District.
   * Maximum length: 40.
   * @nullable
   */
  districtName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Email Address.
   * Maximum length: 241.
   * @nullable
   */
  emailAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fax Number: Dialing Code and Number.
   * Maximum length: 30.
   * @nullable
   */
  faxAreaCodeSubscriberNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fax no.: Extension.
   * Maximum length: 10.
   * @nullable
   */
  faxExtensionNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Country/Region for Telephone/Fax Number.
   * Maximum length: 3.
   * @nullable
   */
  faxNumberCountry?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Form-of-Address Key.
   * Maximum length: 4.
   * @nullable
   */
  formOfAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * House Number.
   * Maximum length: 10.
   * @nullable
   */
  houseNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Telephone No.: Dialing Code and Number.
   * Maximum length: 30.
   * @nullable
   */
  mobileNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Country/Region for Telephone/Fax Number.
   * Maximum length: 3.
   * @nullable
   */
  mobilePhoneCountry?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name 1.
   * Maximum length: 40.
   * @nullable
   */
  organizationName1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name 2.
   * Maximum length: 40.
   * @nullable
   */
  organizationName2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name 3.
   * Maximum length: 40.
   * @nullable
   */
  organizationName3?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name 4.
   * Maximum length: 40.
   * @nullable
   */
  organizationName4?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Last Name.
   * Maximum length: 40.
   * @nullable
   */
  personFamilyName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * First Name.
   * Maximum length: 40.
   * @nullable
   */
  personGivenName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Telephone no.: Extension.
   * Maximum length: 10.
   * @nullable
   */
  phoneExtensionNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Telephone No.: Dialing Code and Number.
   * Maximum length: 30.
   * @nullable
   */
  phoneNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Country/Region for Telephone/Fax Number.
   * Maximum length: 3.
   * @nullable
   */
  phoneNumberCountry?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * PO Box.
   * Maximum length: 10.
   * @nullable
   */
  poBox?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * PO Box Postal Code.
   * Maximum length: 10.
   * @nullable
   */
  poBoxPostalCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * City Postal Code.
   * Maximum length: 10.
   * @nullable
   */
  postalCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Region (State, Province, County).
   * Maximum length: 3.
   * @nullable
   */
  region?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Street.
   * Maximum length: 60.
   * @nullable
   */
  streetName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Street 2.
   * Maximum length: 40.
   * @nullable
   */
  streetPrefixName1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Street 3.
   * Maximum length: 40.
   * @nullable
   */
  streetPrefixName2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Street 4.
   * Maximum length: 40.
   * @nullable
   */
  streetSuffixName1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Street 5.
   * Maximum length: 40.
   * @nullable
   */
  streetSuffixName2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Jurisdiction.
   * Maximum length: 15.
   * @nullable
   */
  taxJurisdiction?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transportation zone to or from which the goods are delivered.
   * Maximum length: 10.
   * @nullable
   */
  transportZone?: DeserializedType<T, 'Edm.String'> | null;
  constructor(_entityApi: SrvcOrdItmPartnerAddressApi<T>);
}
export interface SrvcOrdItmPartnerAddressType<
  T extends DeSerializers = DefaultDeSerializers
> {
  serviceOrder: DeserializedType<T, 'Edm.String'>;
  serviceOrderItem: DeserializedType<T, 'Edm.String'>;
  custMgmtPartnerFunction: DeserializedType<T, 'Edm.String'>;
  custMgmtBusinessPartner: DeserializedType<T, 'Edm.String'>;
  addresseeFullName?: DeserializedType<T, 'Edm.String'> | null;
  cityName?: DeserializedType<T, 'Edm.String'> | null;
  correspondenceLanguage?: DeserializedType<T, 'Edm.String'> | null;
  country?: DeserializedType<T, 'Edm.String'> | null;
  districtName?: DeserializedType<T, 'Edm.String'> | null;
  emailAddress?: DeserializedType<T, 'Edm.String'> | null;
  faxAreaCodeSubscriberNumber?: DeserializedType<T, 'Edm.String'> | null;
  faxExtensionNumber?: DeserializedType<T, 'Edm.String'> | null;
  faxNumberCountry?: DeserializedType<T, 'Edm.String'> | null;
  formOfAddress?: DeserializedType<T, 'Edm.String'> | null;
  houseNumber?: DeserializedType<T, 'Edm.String'> | null;
  mobileNumber?: DeserializedType<T, 'Edm.String'> | null;
  mobilePhoneCountry?: DeserializedType<T, 'Edm.String'> | null;
  organizationName1?: DeserializedType<T, 'Edm.String'> | null;
  organizationName2?: DeserializedType<T, 'Edm.String'> | null;
  organizationName3?: DeserializedType<T, 'Edm.String'> | null;
  organizationName4?: DeserializedType<T, 'Edm.String'> | null;
  personFamilyName?: DeserializedType<T, 'Edm.String'> | null;
  personGivenName?: DeserializedType<T, 'Edm.String'> | null;
  phoneExtensionNumber?: DeserializedType<T, 'Edm.String'> | null;
  phoneNumber?: DeserializedType<T, 'Edm.String'> | null;
  phoneNumberCountry?: DeserializedType<T, 'Edm.String'> | null;
  poBox?: DeserializedType<T, 'Edm.String'> | null;
  poBoxPostalCode?: DeserializedType<T, 'Edm.String'> | null;
  postalCode?: DeserializedType<T, 'Edm.String'> | null;
  region?: DeserializedType<T, 'Edm.String'> | null;
  streetName?: DeserializedType<T, 'Edm.String'> | null;
  streetPrefixName1?: DeserializedType<T, 'Edm.String'> | null;
  streetPrefixName2?: DeserializedType<T, 'Edm.String'> | null;
  streetSuffixName1?: DeserializedType<T, 'Edm.String'> | null;
  streetSuffixName2?: DeserializedType<T, 'Edm.String'> | null;
  taxJurisdiction?: DeserializedType<T, 'Edm.String'> | null;
  transportZone?: DeserializedType<T, 'Edm.String'> | null;
}
