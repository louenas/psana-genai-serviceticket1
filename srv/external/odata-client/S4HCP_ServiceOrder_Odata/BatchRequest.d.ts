/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  CreateRequestBuilder,
  DeleteRequestBuilder,
  DeSerializers,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  ODataBatchRequestBuilder,
  UpdateRequestBuilder,
  BatchChangeSet
} from '@sap-cloud-sdk/odata-v2';
import {
  ServiceOrder,
  ServiceOrderConfirmation,
  ServiceOrderDefect,
  ServiceOrderItem,
  ServiceOrderItemConfirmation,
  ServiceOrderItemPriceElement,
  ServiceOrderItemRefObject,
  ServiceOrderItemText,
  ServiceOrderPersonResp,
  ServiceOrderPriceElement,
  ServiceOrderRefObject,
  ServiceOrderText,
  ServiceOrdItemUserStatus,
  ServiceOrdUserStatus,
  SrvcOrdAppointment,
  SrvcOrdDuration,
  SrvcOrdItemAppointment,
  SrvcOrdItemDuration,
  SrvcOrdItmPartner,
  SrvcOrdItmPartnerAddress,
  SrvcOrdItmProdRefObject,
  SrvcOrdPartner,
  SrvcOrdPartnerAddress,
  SrvcOrdProdRefObject,
  SrvcOrdRefServiceContract
} from './index';
/**
 * Batch builder for operations supported on the S4Hcp ServiceOrder Odata.
 * @param requests The requests of the batch
 * @returns A request builder for batch.
 */
export declare function batch<DeSerializersT extends DeSerializers>(
  ...requests: Array<
    | ReadS4HcpServiceOrderOdataRequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT>;
export declare function batch<DeSerializersT extends DeSerializers>(
  requests: Array<
    | ReadS4HcpServiceOrderOdataRequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT>;
/**
 * Change set constructor consists of write operations supported on the S4Hcp ServiceOrder Odata.
 * @param requests The requests of the change set
 * @returns A change set for batch.
 */
export declare function changeset<DeSerializersT extends DeSerializers>(
  ...requests: Array<WriteS4HcpServiceOrderOdataRequestBuilder<DeSerializersT>>
): BatchChangeSet<DeSerializersT>;
export declare function changeset<DeSerializersT extends DeSerializers>(
  requests: Array<WriteS4HcpServiceOrderOdataRequestBuilder<DeSerializersT>>
): BatchChangeSet<DeSerializersT>;
export declare const defaultS4HcpServiceOrderOdataPath =
  '/sap/opu/odata/sap/API_SERVICE_ORDER_SRV';
export type ReadS4HcpServiceOrderOdataRequestBuilder<
  DeSerializersT extends DeSerializers
> =
  | GetAllRequestBuilder<ServiceOrder<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<
      ServiceOrderConfirmation<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<ServiceOrderDefect<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<ServiceOrderItem<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<
      ServiceOrderItemConfirmation<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<
      ServiceOrderItemPriceElement<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<
      ServiceOrderItemRefObject<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<ServiceOrderItemText<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<ServiceOrderPersonResp<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<
      ServiceOrderPriceElement<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<ServiceOrderRefObject<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<ServiceOrderText<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<
      ServiceOrdItemUserStatus<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<ServiceOrdUserStatus<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<SrvcOrdAppointment<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<SrvcOrdDuration<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<SrvcOrdItemAppointment<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<SrvcOrdItemDuration<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<SrvcOrdItmPartner<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<
      SrvcOrdItmPartnerAddress<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<
      SrvcOrdItmProdRefObject<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<SrvcOrdPartner<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<SrvcOrdPartnerAddress<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<SrvcOrdProdRefObject<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<
      SrvcOrdRefServiceContract<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<ServiceOrder<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      ServiceOrderConfirmation<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<ServiceOrderDefect<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<ServiceOrderItem<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      ServiceOrderItemConfirmation<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<
      ServiceOrderItemPriceElement<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<
      ServiceOrderItemRefObject<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<ServiceOrderItemText<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      ServiceOrderPersonResp<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<
      ServiceOrderPriceElement<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<
      ServiceOrderRefObject<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<ServiceOrderText<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      ServiceOrdItemUserStatus<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<ServiceOrdUserStatus<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<SrvcOrdAppointment<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<SrvcOrdDuration<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      SrvcOrdItemAppointment<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<SrvcOrdItemDuration<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<SrvcOrdItmPartner<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      SrvcOrdItmPartnerAddress<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<
      SrvcOrdItmProdRefObject<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<SrvcOrdPartner<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      SrvcOrdPartnerAddress<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<SrvcOrdProdRefObject<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      SrvcOrdRefServiceContract<DeSerializersT>,
      DeSerializersT
    >;
export type WriteS4HcpServiceOrderOdataRequestBuilder<
  DeSerializersT extends DeSerializers
> =
  | CreateRequestBuilder<ServiceOrder<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<ServiceOrder<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<ServiceOrder<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<
      ServiceOrderConfirmation<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      ServiceOrderConfirmation<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      ServiceOrderConfirmation<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<ServiceOrderDefect<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<ServiceOrderDefect<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<ServiceOrderDefect<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<ServiceOrderItem<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<ServiceOrderItem<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<ServiceOrderItem<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<
      ServiceOrderItemConfirmation<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      ServiceOrderItemConfirmation<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      ServiceOrderItemConfirmation<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<
      ServiceOrderItemPriceElement<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      ServiceOrderItemPriceElement<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      ServiceOrderItemPriceElement<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<
      ServiceOrderItemRefObject<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      ServiceOrderItemRefObject<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      ServiceOrderItemRefObject<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<ServiceOrderItemText<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<ServiceOrderItemText<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<ServiceOrderItemText<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<ServiceOrderPersonResp<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<ServiceOrderPersonResp<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<ServiceOrderPersonResp<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<
      ServiceOrderPriceElement<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      ServiceOrderPriceElement<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      ServiceOrderPriceElement<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<ServiceOrderRefObject<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<ServiceOrderRefObject<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<ServiceOrderRefObject<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<ServiceOrderText<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<ServiceOrderText<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<ServiceOrderText<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<
      ServiceOrdItemUserStatus<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      ServiceOrdItemUserStatus<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      ServiceOrdItemUserStatus<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<ServiceOrdUserStatus<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<ServiceOrdUserStatus<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<ServiceOrdUserStatus<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<SrvcOrdAppointment<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<SrvcOrdAppointment<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<SrvcOrdAppointment<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<SrvcOrdDuration<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<SrvcOrdDuration<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<SrvcOrdDuration<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<SrvcOrdItemAppointment<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<SrvcOrdItemAppointment<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<SrvcOrdItemAppointment<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<SrvcOrdItemDuration<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<SrvcOrdItemDuration<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<SrvcOrdItemDuration<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<SrvcOrdItmPartner<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<SrvcOrdItmPartner<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<SrvcOrdItmPartner<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<
      SrvcOrdItmPartnerAddress<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      SrvcOrdItmPartnerAddress<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      SrvcOrdItmPartnerAddress<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<
      SrvcOrdItmProdRefObject<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      SrvcOrdItmProdRefObject<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      SrvcOrdItmProdRefObject<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<SrvcOrdPartner<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<SrvcOrdPartner<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<SrvcOrdPartner<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<SrvcOrdPartnerAddress<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<SrvcOrdPartnerAddress<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<SrvcOrdPartnerAddress<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<SrvcOrdProdRefObject<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<SrvcOrdProdRefObject<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<SrvcOrdProdRefObject<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<
      SrvcOrdRefServiceContract<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      SrvcOrdRefServiceContract<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      SrvcOrdRefServiceContract<DeSerializersT>,
      DeSerializersT
    >;
