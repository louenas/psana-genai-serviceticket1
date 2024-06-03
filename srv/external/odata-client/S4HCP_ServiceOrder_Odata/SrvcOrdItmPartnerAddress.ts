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
export class SrvcOrdItmPartnerAddress<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SrvcOrdItmPartnerAddressType<T>
{
  /**
   * Technical entity name for SrvcOrdItmPartnerAddress.
   */
  static _entityName = 'A_SrvcOrdItmPartnerAddress';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/sap/opu/odata/sap/API_SERVICE_ORDER_SRV';
  /**
   * All key fields of the SrvcOrdItmPartnerAddress entity
   */
  static _keys = [
    'ServiceOrder',
    'ServiceOrderItem',
    'CustMgmtPartnerFunction',
    'CustMgmtBusinessPartner'
  ];
  /**
   * Transaction ID.
   * Maximum length: 10.
   */
  declare serviceOrder: DeserializedType<T, 'Edm.String'>;
  /**
   * Shortened Item Number in Document.
   * Maximum length: 6.
   */
  declare serviceOrderItem: DeserializedType<T, 'Edm.String'>;
  /**
   * Partner func.
   * Maximum length: 8.
   */
  declare custMgmtPartnerFunction: DeserializedType<T, 'Edm.String'>;
  /**
   * Business Partner Number.
   * Maximum length: 10.
   */
  declare custMgmtBusinessPartner: DeserializedType<T, 'Edm.String'>;
  /**
   * Full Name of Person.
   * Maximum length: 80.
   * @nullable
   */
  declare addresseeFullName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * City.
   * Maximum length: 40.
   * @nullable
   */
  declare cityName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Language Key.
   * Maximum length: 2.
   * @nullable
   */
  declare correspondenceLanguage?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Country/Region Key.
   * Maximum length: 3.
   * @nullable
   */
  declare country?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * District.
   * Maximum length: 40.
   * @nullable
   */
  declare districtName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Email Address.
   * Maximum length: 241.
   * @nullable
   */
  declare emailAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fax Number: Dialing Code and Number.
   * Maximum length: 30.
   * @nullable
   */
  declare faxAreaCodeSubscriberNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Fax no.: Extension.
   * Maximum length: 10.
   * @nullable
   */
  declare faxExtensionNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Country/Region for Telephone/Fax Number.
   * Maximum length: 3.
   * @nullable
   */
  declare faxNumberCountry?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Form-of-Address Key.
   * Maximum length: 4.
   * @nullable
   */
  declare formOfAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * House Number.
   * Maximum length: 10.
   * @nullable
   */
  declare houseNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Telephone No.: Dialing Code and Number.
   * Maximum length: 30.
   * @nullable
   */
  declare mobileNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Country/Region for Telephone/Fax Number.
   * Maximum length: 3.
   * @nullable
   */
  declare mobilePhoneCountry?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name 1.
   * Maximum length: 40.
   * @nullable
   */
  declare organizationName1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name 2.
   * Maximum length: 40.
   * @nullable
   */
  declare organizationName2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name 3.
   * Maximum length: 40.
   * @nullable
   */
  declare organizationName3?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name 4.
   * Maximum length: 40.
   * @nullable
   */
  declare organizationName4?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Last Name.
   * Maximum length: 40.
   * @nullable
   */
  declare personFamilyName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * First Name.
   * Maximum length: 40.
   * @nullable
   */
  declare personGivenName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Telephone no.: Extension.
   * Maximum length: 10.
   * @nullable
   */
  declare phoneExtensionNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Telephone No.: Dialing Code and Number.
   * Maximum length: 30.
   * @nullable
   */
  declare phoneNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Country/Region for Telephone/Fax Number.
   * Maximum length: 3.
   * @nullable
   */
  declare phoneNumberCountry?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * PO Box.
   * Maximum length: 10.
   * @nullable
   */
  declare poBox?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * PO Box Postal Code.
   * Maximum length: 10.
   * @nullable
   */
  declare poBoxPostalCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * City Postal Code.
   * Maximum length: 10.
   * @nullable
   */
  declare postalCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Region (State, Province, County).
   * Maximum length: 3.
   * @nullable
   */
  declare region?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Street.
   * Maximum length: 60.
   * @nullable
   */
  declare streetName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Street 2.
   * Maximum length: 40.
   * @nullable
   */
  declare streetPrefixName1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Street 3.
   * Maximum length: 40.
   * @nullable
   */
  declare streetPrefixName2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Street 4.
   * Maximum length: 40.
   * @nullable
   */
  declare streetSuffixName1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Street 5.
   * Maximum length: 40.
   * @nullable
   */
  declare streetSuffixName2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Jurisdiction.
   * Maximum length: 15.
   * @nullable
   */
  declare taxJurisdiction?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transportation zone to or from which the goods are delivered.
   * Maximum length: 10.
   * @nullable
   */
  declare transportZone?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: SrvcOrdItmPartnerAddressApi<T>) {
    super(_entityApi);
  }
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
