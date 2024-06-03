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
import type { ServiceOrderApi } from './ServiceOrderApi';
import {
  SrvcOrdAppointment,
  SrvcOrdAppointmentType
} from './SrvcOrdAppointment';
import {
  ServiceOrderConfirmation,
  ServiceOrderConfirmationType
} from './ServiceOrderConfirmation';
import {
  ServiceOrderDefect,
  ServiceOrderDefectType
} from './ServiceOrderDefect';
import { SrvcOrdDuration, SrvcOrdDurationType } from './SrvcOrdDuration';
import { ServiceOrderItem, ServiceOrderItemType } from './ServiceOrderItem';
import { SrvcOrdPartner, SrvcOrdPartnerType } from './SrvcOrdPartner';
import {
  ServiceOrderPersonResp,
  ServiceOrderPersonRespType
} from './ServiceOrderPersonResp';
import {
  ServiceOrderPriceElement,
  ServiceOrderPriceElementType
} from './ServiceOrderPriceElement';
import {
  SrvcOrdProdRefObject,
  SrvcOrdProdRefObjectType
} from './SrvcOrdProdRefObject';
import {
  ServiceOrderRefObject,
  ServiceOrderRefObjectType
} from './ServiceOrderRefObject';
import {
  SrvcOrdRefServiceContract,
  SrvcOrdRefServiceContractType
} from './SrvcOrdRefServiceContract';
import {
  ServiceOrdUserStatus,
  ServiceOrdUserStatusType
} from './ServiceOrdUserStatus';
import { ServiceOrderText, ServiceOrderTextType } from './ServiceOrderText';

/**
 * This class represents the entity "A_ServiceOrder" of service "API_SERVICE_ORDER_SRV".
 */
export class ServiceOrder<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ServiceOrderType<T>
{
  /**
   * Technical entity name for ServiceOrder.
   */
  static _entityName = 'A_ServiceOrder';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/sap/opu/odata/sap/API_SERVICE_ORDER_SRV';
  /**
   * All key fields of the ServiceOrder entity
   */
  static _keys = ['ServiceOrder'];
  /**
   * Transaction ID.
   * Maximum length: 10.
   */
  declare serviceOrder: DeserializedType<T, 'Edm.String'>;
  /**
   * Business Transaction Type.
   * Maximum length: 4.
   * @nullable
   */
  declare serviceOrderType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * GUID of a CRM Order Object.
   * @nullable
   */
  declare serviceOrderUuid?: DeserializedType<T, 'Edm.Guid'> | null;
  /**
   * Transaction Description.
   * Maximum length: 40.
   * @nullable
   */
  declare serviceOrderDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Business Trans. Cat.
   * Maximum length: 10.
   * @nullable
   */
  declare serviceObjectType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Language Key of Description.
   * Maximum length: 2.
   * @nullable
   */
  declare language?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Activity Priority.
   * Maximum length: 1.
   * @nullable
   */
  declare serviceDocumentPriority?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Service Request Start Date.
   * @nullable
   */
  declare requestedServiceStartDateTime?: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  > | null;
  /**
   * Service Request Due Date.
   * @nullable
   */
  declare requestedServiceEndDateTime?: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  > | null;
  /**
   * UTC Time Stamp in Short Form (YYYYMMDDhhmmss).
   * @nullable
   */
  declare erlstRequestedDeliveryDateTime?: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  > | null;
  /**
   * Changed At.
   * @nullable
   */
  declare serviceDocChangedDateTime?: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  > | null;
  /**
   * Template Type of CRM Transaction.
   * Maximum length: 1.
   * @nullable
   */
  declare serviceDocumentTemplateType?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Sold-To Party's External Reference Number.
   * Maximum length: 35.
   * @nullable
   */
  declare purchaseOrderByCustomer?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reference Document Date.
   * @nullable
   */
  declare customerPurchaseOrderDate?: DeserializedType<
    T,
    'Edm.DateTime'
  > | null;
  /**
   * Release Status.
   * Maximum length: 1.
   * @nullable
   */
  declare serviceOrderIsReleased?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Service Order Is Completed.
   * Maximum length: 1.
   * @nullable
   */
  declare serviceOrderIsCompleted?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cancellation Status.
   * Maximum length: 1.
   * @nullable
   */
  declare serviceOrderIsRejected?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Organization.
   * Maximum length: 4.
   * @nullable
   */
  declare salesOrganization?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Distribution Channel.
   * Maximum length: 2.
   * @nullable
   */
  declare distributionChannel?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Division.
   * Maximum length: 2.
   * @nullable
   */
  declare division?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Office.
   * Maximum length: 4.
   * @nullable
   */
  declare salesOffice?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Group.
   * Maximum length: 3.
   * @nullable
   */
  declare salesGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sold-To Party.
   * Maximum length: 10.
   * @nullable
   */
  declare soldToParty?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ship-To Party.
   * Maximum length: 10.
   * @nullable
   */
  declare shipToParty?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bill-To Party.
   * Maximum length: 10.
   * @nullable
   */
  declare billToParty?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payer.
   * Maximum length: 10.
   * @nullable
   */
  declare payerParty?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Contact Person.
   * Maximum length: 10.
   * @nullable
   */
  declare contactPerson?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Total Gross Value of Document in Document Currency.
   * @nullable
   */
  declare serviceDocGrossAmount?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Total Net Value of Document in Document Currency.
   * @nullable
   */
  declare serviceDocNetAmount?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Total Tax Amount in Document Currency.
   * @nullable
   */
  declare serviceDocTaxAmount?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Currency.
   * Maximum length: 5.
   * @nullable
   */
  declare transactionCurrency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transaction ID.
   * Maximum length: 10.
   * @nullable
   */
  declare referenceServiceRequest?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transaction ID.
   * Maximum length: 10.
   * @nullable
   */
  declare referenceServiceContract?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transaction ID.
   * Maximum length: 10.
   * @nullable
   */
  declare refServiceOrderTemplate?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * External Reference Number.
   * Maximum length: 80.
   * @nullable
   */
  declare referenceServiceOrder?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Shipping Conditions.
   * Maximum length: 2.
   * @nullable
   */
  declare shippingCondition?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Service Team (Responsibility Management).
   * Maximum length: 8.
   * @nullable
   */
  declare respyMgmtServiceTeam?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name.
   * Maximum length: 40.
   * @nullable
   */
  declare respyMgmtServiceTeamName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Global Team ID in Responsibility Mgmt.
   * Maximum length: 40.
   * @nullable
   */
  declare respyMgmtGlobalTeamId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Credit Status of Header.
   * Maximum length: 1.
   * @nullable
   */
  declare srvcOrdCreditStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Execution Status.
   * Maximum length: 2.
   * @nullable
   */
  declare srvcOrdExecutionStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Terms of Payment.
   * Maximum length: 4.
   * @nullable
   */
  declare paymentTerms?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payment Method.
   * Maximum length: 1.
   * @nullable
   */
  declare paymentMethod?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Unique Reference to Mandate per Payment Recipient.
   * Maximum length: 35.
   * @nullable
   */
  declare sepaMandate?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Indicator for SEPA-Relevant Transactions.
   * Maximum length: 1.
   * @nullable
   */
  declare srvcSepaMandateRelevance?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Work Breakdown Structure Element (WBS Element) Edited.
   * Maximum length: 24.
   * @nullable
   */
  declare wbsElementExternalId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Organization ID.
   * Maximum length: 14.
   * @nullable
   */
  declare salesOrganizationOrgUnitId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Service Organization.
   * Maximum length: 14.
   * @nullable
   */
  declare serviceOrganization?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Office.
   * Maximum length: 14.
   * @nullable
   */
  declare salesOfficeOrgUnitId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Group.
   * Maximum length: 14.
   * @nullable
   */
  declare salesGroupOrgUnitId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Object key.
   * Maximum length: 70.
   * @nullable
   */
  declare fsmServiceCall?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cancellation Reason Code.
   * Maximum length: 2.
   * @nullable
   */
  declare serviceOrderRejectionReason?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Reference In-House Repair.
   * Maximum length: 10.
   * @nullable
   */
  declare referenceInHouseRepair?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reference In-House Repair Item.
   * Maximum length: 6.
   * @nullable
   */
  declare referenceInHouseRepairItem?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link SrvcOrdAppointment} entity.
   */
  declare toAppointment: SrvcOrdAppointment<T>[];
  /**
   * One-to-many navigation property to the {@link ServiceOrderConfirmation} entity.
   */
  declare toConfirmation: ServiceOrderConfirmation<T>[];
  /**
   * One-to-many navigation property to the {@link ServiceOrderDefect} entity.
   */
  declare toDefect: ServiceOrderDefect<T>[];
  /**
   * One-to-many navigation property to the {@link SrvcOrdDuration} entity.
   */
  declare toDuration: SrvcOrdDuration<T>[];
  /**
   * One-to-many navigation property to the {@link ServiceOrderItem} entity.
   */
  declare toItem: ServiceOrderItem<T>[];
  /**
   * One-to-many navigation property to the {@link SrvcOrdPartner} entity.
   */
  declare toPartner: SrvcOrdPartner<T>[];
  /**
   * One-to-many navigation property to the {@link ServiceOrderPersonResp} entity.
   */
  declare toPersonResponsible: ServiceOrderPersonResp<T>[];
  /**
   * One-to-many navigation property to the {@link ServiceOrderPriceElement} entity.
   */
  declare toPricingElement: ServiceOrderPriceElement<T>[];
  /**
   * One-to-many navigation property to the {@link SrvcOrdProdRefObject} entity.
   */
  declare toProductReferenceObject: SrvcOrdProdRefObject<T>[];
  /**
   * One-to-many navigation property to the {@link ServiceOrderRefObject} entity.
   */
  declare toReferenceObject: ServiceOrderRefObject<T>[];
  /**
   * One-to-many navigation property to the {@link SrvcOrdRefServiceContract} entity.
   */
  declare toReferenceServiceContract: SrvcOrdRefServiceContract<T>[];
  /**
   * One-to-many navigation property to the {@link ServiceOrdUserStatus} entity.
   */
  declare toServiceOrdUserStatus: ServiceOrdUserStatus<T>[];
  /**
   * One-to-many navigation property to the {@link ServiceOrderText} entity.
   */
  declare toText: ServiceOrderText<T>[];

  constructor(_entityApi: ServiceOrderApi<T>) {
    super(_entityApi);
  }
}

export interface ServiceOrderType<
  T extends DeSerializers = DefaultDeSerializers
> {
  serviceOrder: DeserializedType<T, 'Edm.String'>;
  serviceOrderType?: DeserializedType<T, 'Edm.String'> | null;
  serviceOrderUuid?: DeserializedType<T, 'Edm.Guid'> | null;
  serviceOrderDescription?: DeserializedType<T, 'Edm.String'> | null;
  serviceObjectType?: DeserializedType<T, 'Edm.String'> | null;
  language?: DeserializedType<T, 'Edm.String'> | null;
  serviceDocumentPriority?: DeserializedType<T, 'Edm.String'> | null;
  requestedServiceStartDateTime?: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  > | null;
  requestedServiceEndDateTime?: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  > | null;
  erlstRequestedDeliveryDateTime?: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  > | null;
  serviceDocChangedDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  serviceDocumentTemplateType?: DeserializedType<T, 'Edm.String'> | null;
  purchaseOrderByCustomer?: DeserializedType<T, 'Edm.String'> | null;
  customerPurchaseOrderDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  serviceOrderIsReleased?: DeserializedType<T, 'Edm.String'> | null;
  serviceOrderIsCompleted?: DeserializedType<T, 'Edm.String'> | null;
  serviceOrderIsRejected?: DeserializedType<T, 'Edm.String'> | null;
  salesOrganization?: DeserializedType<T, 'Edm.String'> | null;
  distributionChannel?: DeserializedType<T, 'Edm.String'> | null;
  division?: DeserializedType<T, 'Edm.String'> | null;
  salesOffice?: DeserializedType<T, 'Edm.String'> | null;
  salesGroup?: DeserializedType<T, 'Edm.String'> | null;
  soldToParty?: DeserializedType<T, 'Edm.String'> | null;
  shipToParty?: DeserializedType<T, 'Edm.String'> | null;
  billToParty?: DeserializedType<T, 'Edm.String'> | null;
  payerParty?: DeserializedType<T, 'Edm.String'> | null;
  contactPerson?: DeserializedType<T, 'Edm.String'> | null;
  serviceDocGrossAmount?: DeserializedType<T, 'Edm.Decimal'> | null;
  serviceDocNetAmount?: DeserializedType<T, 'Edm.Decimal'> | null;
  serviceDocTaxAmount?: DeserializedType<T, 'Edm.Decimal'> | null;
  transactionCurrency?: DeserializedType<T, 'Edm.String'> | null;
  referenceServiceRequest?: DeserializedType<T, 'Edm.String'> | null;
  referenceServiceContract?: DeserializedType<T, 'Edm.String'> | null;
  refServiceOrderTemplate?: DeserializedType<T, 'Edm.String'> | null;
  referenceServiceOrder?: DeserializedType<T, 'Edm.String'> | null;
  shippingCondition?: DeserializedType<T, 'Edm.String'> | null;
  respyMgmtServiceTeam?: DeserializedType<T, 'Edm.String'> | null;
  respyMgmtServiceTeamName?: DeserializedType<T, 'Edm.String'> | null;
  respyMgmtGlobalTeamId?: DeserializedType<T, 'Edm.String'> | null;
  srvcOrdCreditStatus?: DeserializedType<T, 'Edm.String'> | null;
  srvcOrdExecutionStatus?: DeserializedType<T, 'Edm.String'> | null;
  paymentTerms?: DeserializedType<T, 'Edm.String'> | null;
  paymentMethod?: DeserializedType<T, 'Edm.String'> | null;
  sepaMandate?: DeserializedType<T, 'Edm.String'> | null;
  srvcSepaMandateRelevance?: DeserializedType<T, 'Edm.String'> | null;
  wbsElementExternalId?: DeserializedType<T, 'Edm.String'> | null;
  salesOrganizationOrgUnitId?: DeserializedType<T, 'Edm.String'> | null;
  serviceOrganization?: DeserializedType<T, 'Edm.String'> | null;
  salesOfficeOrgUnitId?: DeserializedType<T, 'Edm.String'> | null;
  salesGroupOrgUnitId?: DeserializedType<T, 'Edm.String'> | null;
  fsmServiceCall?: DeserializedType<T, 'Edm.String'> | null;
  serviceOrderRejectionReason?: DeserializedType<T, 'Edm.String'> | null;
  referenceInHouseRepair?: DeserializedType<T, 'Edm.String'> | null;
  referenceInHouseRepairItem?: DeserializedType<T, 'Edm.String'> | null;
  toAppointment: SrvcOrdAppointmentType<T>[];
  toConfirmation: ServiceOrderConfirmationType<T>[];
  toDefect: ServiceOrderDefectType<T>[];
  toDuration: SrvcOrdDurationType<T>[];
  toItem: ServiceOrderItemType<T>[];
  toPartner: SrvcOrdPartnerType<T>[];
  toPersonResponsible: ServiceOrderPersonRespType<T>[];
  toPricingElement: ServiceOrderPriceElementType<T>[];
  toProductReferenceObject: SrvcOrdProdRefObjectType<T>[];
  toReferenceObject: ServiceOrderRefObjectType<T>[];
  toReferenceServiceContract: SrvcOrdRefServiceContractType<T>[];
  toServiceOrdUserStatus: ServiceOrdUserStatusType<T>[];
  toText: ServiceOrderTextType<T>[];
}
