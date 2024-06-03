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
import type { ServiceOrderItemApi } from './ServiceOrderItemApi';
import {
  SrvcOrdItemAppointment,
  SrvcOrdItemAppointmentType
} from './SrvcOrdItemAppointment';
import {
  ServiceOrderItemConfirmation,
  ServiceOrderItemConfirmationType
} from './ServiceOrderItemConfirmation';
import {
  SrvcOrdItemDuration,
  SrvcOrdItemDurationType
} from './SrvcOrdItemDuration';
import { SrvcOrdItmPartner, SrvcOrdItmPartnerType } from './SrvcOrdItmPartner';
import {
  ServiceOrderItemPriceElement,
  ServiceOrderItemPriceElementType
} from './ServiceOrderItemPriceElement';
import {
  SrvcOrdItmProdRefObject,
  SrvcOrdItmProdRefObjectType
} from './SrvcOrdItmProdRefObject';
import {
  ServiceOrderItemRefObject,
  ServiceOrderItemRefObjectType
} from './ServiceOrderItemRefObject';
import { ServiceOrder, ServiceOrderType } from './ServiceOrder';
import {
  ServiceOrdItemUserStatus,
  ServiceOrdItemUserStatusType
} from './ServiceOrdItemUserStatus';
import {
  ServiceOrderItemText,
  ServiceOrderItemTextType
} from './ServiceOrderItemText';
/**
 * This class represents the entity "A_ServiceOrderItem" of service "API_SERVICE_ORDER_SRV".
 */
export declare class ServiceOrderItem<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ServiceOrderItemType<T>
{
  /**
   * Technical entity name for ServiceOrderItem.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath: string;
  /**
   * All key fields of the ServiceOrderItem entity
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
   * GUID of a CRM Order Object.
   * @nullable
   */
  serviceOrderItemUuid?: DeserializedType<T, 'Edm.Guid'> | null;
  /**
   * 32 Character CRM Object GUID (Converted).
   * @nullable
   */
  serviceDocumentItemCharUuid?: DeserializedType<T, 'Edm.Guid'> | null;
  /**
   * Product Description.
   * Maximum length: 40.
   * @nullable
   */
  serviceOrderItemDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Business Trans. Cat.
   * Maximum length: 10.
   * @nullable
   */
  serviceObjectType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * CRM Item Object Type.
   * Maximum length: 10.
   * @nullable
   */
  serviceDocumentItemObjectType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Short Text Language for an Item.
   * Maximum length: 2.
   * @nullable
   */
  language?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Name Entered.
   * Maximum length: 54.
   * @nullable
   */
  product?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * CRM: Order Quantity.
   * @nullable
   */
  quantity?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Unit of Measure in Which the Product Is Sold.
   * Maximum length: 3.
   * @nullable
   */
  quantityUnit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Srvc Ord Itm Resvn Is Existing.
   * @nullable
   */
  srvcOrdItmResvnIsExisting?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * CRM: Confirmed Quantity.
   * @nullable
   */
  srvcOrdItemReservedQuantity?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Duration.
   * @nullable
   */
  serviceDuration?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Unit for Duration of Work.
   * Maximum length: 3.
   * @nullable
   */
  serviceDurationUnit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Category.
   * Maximum length: 4.
   * @nullable
   */
  serviceOrderItemCategory?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cancellation Reason Code.
   * Maximum length: 2.
   * @nullable
   */
  serviceOrdItemRejectionReason?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Accounting Indicator.
   * Maximum length: 2.
   * @nullable
   */
  billableControl?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sold-To Party.
   * Maximum length: 10.
   * @nullable
   */
  soldToParty?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ship-To Party.
   * Maximum length: 10.
   * @nullable
   */
  shipToParty?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bill-To Party.
   * Maximum length: 10.
   * @nullable
   */
  billToParty?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payer.
   * Maximum length: 10.
   * @nullable
   */
  payerParty?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Contact Person.
   * Maximum length: 10.
   * @nullable
   */
  contactPersonBusinessPartnerId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Employee Responsible.
   * Maximum length: 10.
   * @nullable
   */
  personResponsible?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Executing Service Employee.
   * Maximum length: 10.
   * @nullable
   */
  executingServiceEmployee?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Business Partner Number.
   * Maximum length: 10.
   * @nullable
   */
  servicePerformer?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Release Status.
   * Maximum length: 1.
   * @nullable
   */
  serviceOrderItemIsReleased?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Service Order Item Is Completed.
   * Maximum length: 1.
   * @nullable
   */
  serviceOrderItemIsCompleted?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cancellation Status.
   * Maximum length: 1.
   * @nullable
   */
  serviceOrderItemIsRejected?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transaction ID.
   * Maximum length: 10.
   * @nullable
   */
  referenceServiceContract?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Shortened Item Number in Document.
   * Maximum length: 6.
   * @nullable
   */
  referenceServiceContractItem?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transaction ID.
   * Maximum length: 10.
   * @nullable
   */
  refServiceOrderTemplate?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Shortened Item Number in Document.
   * Maximum length: 6.
   * @nullable
   */
  refServiceOrderTemplateItem?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transaction ID.
   * Maximum length: 10.
   * @nullable
   */
  referenceServiceRequest?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Shortened Item Number in Document.
   * Maximum length: 6.
   * @nullable
   */
  referenceServiceRequestItem?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Shortened Item Number in Document.
   * Maximum length: 6.
   * @nullable
   */
  parentServiceOrderItem?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Service Planned From Date.
   * @nullable
   */
  plannedServiceStartDateTime?: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  > | null;
  /**
   * Service Planned To Date.
   * @nullable
   */
  plannedServiceEndDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Service Request Start Date.
   * @nullable
   */
  requestedServiceStartDateTime?: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  > | null;
  /**
   * Service Request Due Date.
   * @nullable
   */
  requestedServiceEndDateTime?: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  > | null;
  /**
   * Due By.
   * @nullable
   */
  srvcDocItemSlaDueByDateTime?: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  > | null;
  /**
   * UTC Time Stamp in Short Form (YYYYMMDDhhmmss).
   * @nullable
   */
  erlstRequestedDeliveryDateTime?: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  > | null;
  /**
   * Confirmed Duration.
   * @nullable
   */
  actualServiceDuration?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Time Unit for Confirmed Duration.
   * Maximum length: 3.
   * @nullable
   */
  actualServiceDurationUnit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Status Is Active.
   * @nullable
   */
  srvcContrDetnIsSpprsd?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * External Reference Number.
   * Maximum length: 80.
   * @nullable
   */
  referenceServiceOrderItem?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Shipping Conditions.
   * Maximum length: 2.
   * @nullable
   */
  shippingCondition?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Shortened Item Number in Document.
   * Maximum length: 6.
   * @nullable
   */
  srvcDocItmPartReferenceItem?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Shortened Item Number in Document.
   * Maximum length: 6.
   * @nullable
   */
  srvcDocItmApptReferenceItem?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * GUID of a CRM Order Object.
   * @nullable
   */
  srvcDocItmApptRefObjectUuid?: DeserializedType<T, 'Edm.Guid'> | null;
  /**
   * Unplanned Item.
   * @nullable
   */
  srvcOrdItemIsUnplanned?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Identification of a Reference Object for Items.
   * Maximum length: 32.
   * @nullable
   */
  fsmServiceActivity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Overtime Category.
   * Maximum length: 4.
   * @nullable
   */
  timeSheetOvertimeCategory?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Service Team (Responsibility Management).
   * Maximum length: 8.
   * @nullable
   */
  respyMgmtServiceTeam?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name.
   * Maximum length: 40.
   * @nullable
   */
  respyMgmtServiceTeamName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Global Team ID in Responsibility Mgmt.
   * Maximum length: 40.
   * @nullable
   */
  respyMgmtGlobalTeamId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Profit Center.
   * Maximum length: 10.
   * @nullable
   */
  profitCenter?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Credit Status of Item.
   * Maximum length: 1.
   * @nullable
   */
  srvcOrdItemCreditStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Execution Status.
   * Maximum length: 2.
   * @nullable
   */
  srvcOrdItemExecutionStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Terms of Payment.
   * Maximum length: 4.
   * @nullable
   */
  paymentTerms?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payment Method.
   * Maximum length: 1.
   * @nullable
   */
  paymentMethod?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Unique Reference to Mandate per Payment Recipient.
   * Maximum length: 35.
   * @nullable
   */
  sepaMandate?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Indicator for SEPA-Relevant Transactions.
   * Maximum length: 1.
   * @nullable
   */
  srvcSepaMandateRelevance?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Work Breakdown Structure Element (WBS Element) Edited.
   * Maximum length: 24.
   * @nullable
   */
  wbsElementExternalId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link SrvcOrdItemAppointment} entity.
   */
  toAppointment: SrvcOrdItemAppointment<T>[];
  /**
   * One-to-many navigation property to the {@link ServiceOrderItemConfirmation} entity.
   */
  toConfirmation: ServiceOrderItemConfirmation<T>[];
  /**
   * One-to-many navigation property to the {@link SrvcOrdItemDuration} entity.
   */
  toDuration: SrvcOrdItemDuration<T>[];
  /**
   * One-to-many navigation property to the {@link SrvcOrdItmPartner} entity.
   */
  toPartner: SrvcOrdItmPartner<T>[];
  /**
   * One-to-many navigation property to the {@link ServiceOrderItemPriceElement} entity.
   */
  toPricingElement: ServiceOrderItemPriceElement<T>[];
  /**
   * One-to-many navigation property to the {@link SrvcOrdItmProdRefObject} entity.
   */
  toProductReferenceObject: SrvcOrdItmProdRefObject<T>[];
  /**
   * One-to-many navigation property to the {@link ServiceOrderItemRefObject} entity.
   */
  toReferenceObject: ServiceOrderItemRefObject<T>[];
  /**
   * One-to-one navigation property to the {@link ServiceOrder} entity.
   */
  toServiceOrder?: ServiceOrder<T> | null;
  /**
   * One-to-many navigation property to the {@link ServiceOrdItemUserStatus} entity.
   */
  toSrvcOrdItemUserStatus: ServiceOrdItemUserStatus<T>[];
  /**
   * One-to-many navigation property to the {@link ServiceOrderItemText} entity.
   */
  toText: ServiceOrderItemText<T>[];
  constructor(_entityApi: ServiceOrderItemApi<T>);
}
export interface ServiceOrderItemType<
  T extends DeSerializers = DefaultDeSerializers
> {
  serviceOrder: DeserializedType<T, 'Edm.String'>;
  serviceOrderItem: DeserializedType<T, 'Edm.String'>;
  serviceOrderItemUuid?: DeserializedType<T, 'Edm.Guid'> | null;
  serviceDocumentItemCharUuid?: DeserializedType<T, 'Edm.Guid'> | null;
  serviceOrderItemDescription?: DeserializedType<T, 'Edm.String'> | null;
  serviceObjectType?: DeserializedType<T, 'Edm.String'> | null;
  serviceDocumentItemObjectType?: DeserializedType<T, 'Edm.String'> | null;
  language?: DeserializedType<T, 'Edm.String'> | null;
  product?: DeserializedType<T, 'Edm.String'> | null;
  quantity?: DeserializedType<T, 'Edm.Decimal'> | null;
  quantityUnit?: DeserializedType<T, 'Edm.String'> | null;
  srvcOrdItmResvnIsExisting?: DeserializedType<T, 'Edm.Boolean'> | null;
  srvcOrdItemReservedQuantity?: DeserializedType<T, 'Edm.Decimal'> | null;
  serviceDuration?: DeserializedType<T, 'Edm.Decimal'> | null;
  serviceDurationUnit?: DeserializedType<T, 'Edm.String'> | null;
  serviceOrderItemCategory?: DeserializedType<T, 'Edm.String'> | null;
  serviceOrdItemRejectionReason?: DeserializedType<T, 'Edm.String'> | null;
  billableControl?: DeserializedType<T, 'Edm.String'> | null;
  soldToParty?: DeserializedType<T, 'Edm.String'> | null;
  shipToParty?: DeserializedType<T, 'Edm.String'> | null;
  billToParty?: DeserializedType<T, 'Edm.String'> | null;
  payerParty?: DeserializedType<T, 'Edm.String'> | null;
  contactPersonBusinessPartnerId?: DeserializedType<T, 'Edm.String'> | null;
  personResponsible?: DeserializedType<T, 'Edm.String'> | null;
  executingServiceEmployee?: DeserializedType<T, 'Edm.String'> | null;
  servicePerformer?: DeserializedType<T, 'Edm.String'> | null;
  serviceOrderItemIsReleased?: DeserializedType<T, 'Edm.String'> | null;
  serviceOrderItemIsCompleted?: DeserializedType<T, 'Edm.String'> | null;
  serviceOrderItemIsRejected?: DeserializedType<T, 'Edm.String'> | null;
  referenceServiceContract?: DeserializedType<T, 'Edm.String'> | null;
  referenceServiceContractItem?: DeserializedType<T, 'Edm.String'> | null;
  refServiceOrderTemplate?: DeserializedType<T, 'Edm.String'> | null;
  refServiceOrderTemplateItem?: DeserializedType<T, 'Edm.String'> | null;
  referenceServiceRequest?: DeserializedType<T, 'Edm.String'> | null;
  referenceServiceRequestItem?: DeserializedType<T, 'Edm.String'> | null;
  parentServiceOrderItem?: DeserializedType<T, 'Edm.String'> | null;
  plannedServiceStartDateTime?: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  > | null;
  plannedServiceEndDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  requestedServiceStartDateTime?: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  > | null;
  requestedServiceEndDateTime?: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  > | null;
  srvcDocItemSlaDueByDateTime?: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  > | null;
  erlstRequestedDeliveryDateTime?: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  > | null;
  actualServiceDuration?: DeserializedType<T, 'Edm.Decimal'> | null;
  actualServiceDurationUnit?: DeserializedType<T, 'Edm.String'> | null;
  srvcContrDetnIsSpprsd?: DeserializedType<T, 'Edm.Boolean'> | null;
  referenceServiceOrderItem?: DeserializedType<T, 'Edm.String'> | null;
  shippingCondition?: DeserializedType<T, 'Edm.String'> | null;
  srvcDocItmPartReferenceItem?: DeserializedType<T, 'Edm.String'> | null;
  srvcDocItmApptReferenceItem?: DeserializedType<T, 'Edm.String'> | null;
  srvcDocItmApptRefObjectUuid?: DeserializedType<T, 'Edm.Guid'> | null;
  srvcOrdItemIsUnplanned?: DeserializedType<T, 'Edm.Boolean'> | null;
  fsmServiceActivity?: DeserializedType<T, 'Edm.String'> | null;
  timeSheetOvertimeCategory?: DeserializedType<T, 'Edm.String'> | null;
  respyMgmtServiceTeam?: DeserializedType<T, 'Edm.String'> | null;
  respyMgmtServiceTeamName?: DeserializedType<T, 'Edm.String'> | null;
  respyMgmtGlobalTeamId?: DeserializedType<T, 'Edm.String'> | null;
  profitCenter?: DeserializedType<T, 'Edm.String'> | null;
  srvcOrdItemCreditStatus?: DeserializedType<T, 'Edm.String'> | null;
  srvcOrdItemExecutionStatus?: DeserializedType<T, 'Edm.String'> | null;
  paymentTerms?: DeserializedType<T, 'Edm.String'> | null;
  paymentMethod?: DeserializedType<T, 'Edm.String'> | null;
  sepaMandate?: DeserializedType<T, 'Edm.String'> | null;
  srvcSepaMandateRelevance?: DeserializedType<T, 'Edm.String'> | null;
  wbsElementExternalId?: DeserializedType<T, 'Edm.String'> | null;
  toAppointment: SrvcOrdItemAppointmentType<T>[];
  toConfirmation: ServiceOrderItemConfirmationType<T>[];
  toDuration: SrvcOrdItemDurationType<T>[];
  toPartner: SrvcOrdItmPartnerType<T>[];
  toPricingElement: ServiceOrderItemPriceElementType<T>[];
  toProductReferenceObject: SrvcOrdItmProdRefObjectType<T>[];
  toReferenceObject: ServiceOrderItemRefObjectType<T>[];
  toServiceOrder?: ServiceOrderType<T> | null;
  toSrvcOrdItemUserStatus: ServiceOrdItemUserStatusType<T>[];
  toText: ServiceOrderItemTextType<T>[];
}
