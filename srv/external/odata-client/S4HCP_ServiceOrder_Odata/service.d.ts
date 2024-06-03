/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ServiceOrderApi } from './ServiceOrderApi';
import { ServiceOrderConfirmationApi } from './ServiceOrderConfirmationApi';
import { ServiceOrderDefectApi } from './ServiceOrderDefectApi';
import { ServiceOrderItemApi } from './ServiceOrderItemApi';
import { ServiceOrderItemConfirmationApi } from './ServiceOrderItemConfirmationApi';
import { ServiceOrderItemPriceElementApi } from './ServiceOrderItemPriceElementApi';
import { ServiceOrderItemRefObjectApi } from './ServiceOrderItemRefObjectApi';
import { ServiceOrderItemTextApi } from './ServiceOrderItemTextApi';
import { ServiceOrderPersonRespApi } from './ServiceOrderPersonRespApi';
import { ServiceOrderPriceElementApi } from './ServiceOrderPriceElementApi';
import { ServiceOrderRefObjectApi } from './ServiceOrderRefObjectApi';
import { ServiceOrderTextApi } from './ServiceOrderTextApi';
import { ServiceOrdItemUserStatusApi } from './ServiceOrdItemUserStatusApi';
import { ServiceOrdUserStatusApi } from './ServiceOrdUserStatusApi';
import { SrvcOrdAppointmentApi } from './SrvcOrdAppointmentApi';
import { SrvcOrdDurationApi } from './SrvcOrdDurationApi';
import { SrvcOrdItemAppointmentApi } from './SrvcOrdItemAppointmentApi';
import { SrvcOrdItemDurationApi } from './SrvcOrdItemDurationApi';
import { SrvcOrdItmPartnerApi } from './SrvcOrdItmPartnerApi';
import { SrvcOrdItmPartnerAddressApi } from './SrvcOrdItmPartnerAddressApi';
import { SrvcOrdItmProdRefObjectApi } from './SrvcOrdItmProdRefObjectApi';
import { SrvcOrdPartnerApi } from './SrvcOrdPartnerApi';
import { SrvcOrdPartnerAddressApi } from './SrvcOrdPartnerAddressApi';
import { SrvcOrdProdRefObjectApi } from './SrvcOrdProdRefObjectApi';
import { SrvcOrdRefServiceContractApi } from './SrvcOrdRefServiceContractApi';
import { BigNumber } from 'bignumber.js';
import { Moment } from 'moment';
import {
  DeSerializers,
  DefaultDeSerializers,
  Time
} from '@sap-cloud-sdk/odata-v2';
import { batch, changeset } from './BatchRequest';
export declare function s4HcpServiceOrderOdata<
  BinaryT = string,
  BooleanT = boolean,
  ByteT = number,
  DecimalT = BigNumber,
  DoubleT = number,
  FloatT = number,
  Int16T = number,
  Int32T = number,
  Int64T = BigNumber,
  GuidT = string,
  SByteT = number,
  SingleT = number,
  StringT = string,
  AnyT = any,
  DateTimeOffsetT = Moment,
  DateTimeT = Moment,
  TimeT = Time
>(
  deSerializers?: Partial<
    DeSerializers<
      BinaryT,
      BooleanT,
      ByteT,
      DecimalT,
      DoubleT,
      FloatT,
      Int16T,
      Int32T,
      Int64T,
      GuidT,
      SByteT,
      SingleT,
      StringT,
      AnyT,
      DateTimeOffsetT,
      DateTimeT,
      TimeT
    >
  >
): S4HcpServiceOrderOdata<
  DeSerializers<
    BinaryT,
    BooleanT,
    ByteT,
    DecimalT,
    DoubleT,
    FloatT,
    Int16T,
    Int32T,
    Int64T,
    GuidT,
    SByteT,
    SingleT,
    StringT,
    AnyT,
    DateTimeOffsetT,
    DateTimeT,
    TimeT
  >
>;
declare class S4HcpServiceOrderOdata<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  private apis;
  private deSerializers;
  constructor(deSerializers: DeSerializersT);
  private initApi;
  get serviceOrderApi(): ServiceOrderApi<DeSerializersT>;
  get serviceOrderConfirmationApi(): ServiceOrderConfirmationApi<DeSerializersT>;
  get serviceOrderDefectApi(): ServiceOrderDefectApi<DeSerializersT>;
  get serviceOrderItemApi(): ServiceOrderItemApi<DeSerializersT>;
  get serviceOrderItemConfirmationApi(): ServiceOrderItemConfirmationApi<DeSerializersT>;
  get serviceOrderItemPriceElementApi(): ServiceOrderItemPriceElementApi<DeSerializersT>;
  get serviceOrderItemRefObjectApi(): ServiceOrderItemRefObjectApi<DeSerializersT>;
  get serviceOrderItemTextApi(): ServiceOrderItemTextApi<DeSerializersT>;
  get serviceOrderPersonRespApi(): ServiceOrderPersonRespApi<DeSerializersT>;
  get serviceOrderPriceElementApi(): ServiceOrderPriceElementApi<DeSerializersT>;
  get serviceOrderRefObjectApi(): ServiceOrderRefObjectApi<DeSerializersT>;
  get serviceOrderTextApi(): ServiceOrderTextApi<DeSerializersT>;
  get serviceOrdItemUserStatusApi(): ServiceOrdItemUserStatusApi<DeSerializersT>;
  get serviceOrdUserStatusApi(): ServiceOrdUserStatusApi<DeSerializersT>;
  get srvcOrdAppointmentApi(): SrvcOrdAppointmentApi<DeSerializersT>;
  get srvcOrdDurationApi(): SrvcOrdDurationApi<DeSerializersT>;
  get srvcOrdItemAppointmentApi(): SrvcOrdItemAppointmentApi<DeSerializersT>;
  get srvcOrdItemDurationApi(): SrvcOrdItemDurationApi<DeSerializersT>;
  get srvcOrdItmPartnerApi(): SrvcOrdItmPartnerApi<DeSerializersT>;
  get srvcOrdItmPartnerAddressApi(): SrvcOrdItmPartnerAddressApi<DeSerializersT>;
  get srvcOrdItmProdRefObjectApi(): SrvcOrdItmProdRefObjectApi<DeSerializersT>;
  get srvcOrdPartnerApi(): SrvcOrdPartnerApi<DeSerializersT>;
  get srvcOrdPartnerAddressApi(): SrvcOrdPartnerAddressApi<DeSerializersT>;
  get srvcOrdProdRefObjectApi(): SrvcOrdProdRefObjectApi<DeSerializersT>;
  get srvcOrdRefServiceContractApi(): SrvcOrdRefServiceContractApi<DeSerializersT>;
  get batch(): typeof batch;
  get changeset(): typeof changeset;
}
export {};
