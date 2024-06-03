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
  defaultDeSerializers,
  DeSerializers,
  DefaultDeSerializers,
  mergeDefaultDeSerializersWith,
  Time
} from '@sap-cloud-sdk/odata-v2';
import { batch, changeset } from './BatchRequest';

export function s4HcpServiceOrderOdata<
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
  deSerializers: Partial<
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
  > = defaultDeSerializers as any
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
> {
  return new S4HcpServiceOrderOdata(
    mergeDefaultDeSerializersWith(deSerializers)
  );
}
class S4HcpServiceOrderOdata<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  private apis: Record<string, any> = {};
  private deSerializers: DeSerializersT;

  constructor(deSerializers: DeSerializersT) {
    this.deSerializers = deSerializers;
  }

  private initApi(key: string, entityApi: any): any {
    if (!this.apis[key]) {
      this.apis[key] = entityApi._privateFactory(this.deSerializers);
    }
    return this.apis[key];
  }

  get serviceOrderApi(): ServiceOrderApi<DeSerializersT> {
    const api = this.initApi('serviceOrderApi', ServiceOrderApi);
    const linkedApis = [
      this.initApi('srvcOrdAppointmentApi', SrvcOrdAppointmentApi),
      this.initApi('serviceOrderConfirmationApi', ServiceOrderConfirmationApi),
      this.initApi('serviceOrderDefectApi', ServiceOrderDefectApi),
      this.initApi('srvcOrdDurationApi', SrvcOrdDurationApi),
      this.initApi('serviceOrderItemApi', ServiceOrderItemApi),
      this.initApi('srvcOrdPartnerApi', SrvcOrdPartnerApi),
      this.initApi('serviceOrderPersonRespApi', ServiceOrderPersonRespApi),
      this.initApi('serviceOrderPriceElementApi', ServiceOrderPriceElementApi),
      this.initApi('srvcOrdProdRefObjectApi', SrvcOrdProdRefObjectApi),
      this.initApi('serviceOrderRefObjectApi', ServiceOrderRefObjectApi),
      this.initApi(
        'srvcOrdRefServiceContractApi',
        SrvcOrdRefServiceContractApi
      ),
      this.initApi('serviceOrdUserStatusApi', ServiceOrdUserStatusApi),
      this.initApi('serviceOrderTextApi', ServiceOrderTextApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get serviceOrderConfirmationApi(): ServiceOrderConfirmationApi<DeSerializersT> {
    return this.initApi(
      'serviceOrderConfirmationApi',
      ServiceOrderConfirmationApi
    );
  }

  get serviceOrderDefectApi(): ServiceOrderDefectApi<DeSerializersT> {
    return this.initApi('serviceOrderDefectApi', ServiceOrderDefectApi);
  }

  get serviceOrderItemApi(): ServiceOrderItemApi<DeSerializersT> {
    const api = this.initApi('serviceOrderItemApi', ServiceOrderItemApi);
    const linkedApis = [
      this.initApi('srvcOrdItemAppointmentApi', SrvcOrdItemAppointmentApi),
      this.initApi(
        'serviceOrderItemConfirmationApi',
        ServiceOrderItemConfirmationApi
      ),
      this.initApi('srvcOrdItemDurationApi', SrvcOrdItemDurationApi),
      this.initApi('srvcOrdItmPartnerApi', SrvcOrdItmPartnerApi),
      this.initApi(
        'serviceOrderItemPriceElementApi',
        ServiceOrderItemPriceElementApi
      ),
      this.initApi('srvcOrdItmProdRefObjectApi', SrvcOrdItmProdRefObjectApi),
      this.initApi(
        'serviceOrderItemRefObjectApi',
        ServiceOrderItemRefObjectApi
      ),
      this.initApi('serviceOrderApi', ServiceOrderApi),
      this.initApi('serviceOrdItemUserStatusApi', ServiceOrdItemUserStatusApi),
      this.initApi('serviceOrderItemTextApi', ServiceOrderItemTextApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get serviceOrderItemConfirmationApi(): ServiceOrderItemConfirmationApi<DeSerializersT> {
    return this.initApi(
      'serviceOrderItemConfirmationApi',
      ServiceOrderItemConfirmationApi
    );
  }

  get serviceOrderItemPriceElementApi(): ServiceOrderItemPriceElementApi<DeSerializersT> {
    return this.initApi(
      'serviceOrderItemPriceElementApi',
      ServiceOrderItemPriceElementApi
    );
  }

  get serviceOrderItemRefObjectApi(): ServiceOrderItemRefObjectApi<DeSerializersT> {
    return this.initApi(
      'serviceOrderItemRefObjectApi',
      ServiceOrderItemRefObjectApi
    );
  }

  get serviceOrderItemTextApi(): ServiceOrderItemTextApi<DeSerializersT> {
    return this.initApi('serviceOrderItemTextApi', ServiceOrderItemTextApi);
  }

  get serviceOrderPersonRespApi(): ServiceOrderPersonRespApi<DeSerializersT> {
    return this.initApi('serviceOrderPersonRespApi', ServiceOrderPersonRespApi);
  }

  get serviceOrderPriceElementApi(): ServiceOrderPriceElementApi<DeSerializersT> {
    return this.initApi(
      'serviceOrderPriceElementApi',
      ServiceOrderPriceElementApi
    );
  }

  get serviceOrderRefObjectApi(): ServiceOrderRefObjectApi<DeSerializersT> {
    return this.initApi('serviceOrderRefObjectApi', ServiceOrderRefObjectApi);
  }

  get serviceOrderTextApi(): ServiceOrderTextApi<DeSerializersT> {
    return this.initApi('serviceOrderTextApi', ServiceOrderTextApi);
  }

  get serviceOrdItemUserStatusApi(): ServiceOrdItemUserStatusApi<DeSerializersT> {
    return this.initApi(
      'serviceOrdItemUserStatusApi',
      ServiceOrdItemUserStatusApi
    );
  }

  get serviceOrdUserStatusApi(): ServiceOrdUserStatusApi<DeSerializersT> {
    return this.initApi('serviceOrdUserStatusApi', ServiceOrdUserStatusApi);
  }

  get srvcOrdAppointmentApi(): SrvcOrdAppointmentApi<DeSerializersT> {
    return this.initApi('srvcOrdAppointmentApi', SrvcOrdAppointmentApi);
  }

  get srvcOrdDurationApi(): SrvcOrdDurationApi<DeSerializersT> {
    return this.initApi('srvcOrdDurationApi', SrvcOrdDurationApi);
  }

  get srvcOrdItemAppointmentApi(): SrvcOrdItemAppointmentApi<DeSerializersT> {
    return this.initApi('srvcOrdItemAppointmentApi', SrvcOrdItemAppointmentApi);
  }

  get srvcOrdItemDurationApi(): SrvcOrdItemDurationApi<DeSerializersT> {
    return this.initApi('srvcOrdItemDurationApi', SrvcOrdItemDurationApi);
  }

  get srvcOrdItmPartnerApi(): SrvcOrdItmPartnerApi<DeSerializersT> {
    const api = this.initApi('srvcOrdItmPartnerApi', SrvcOrdItmPartnerApi);
    const linkedApis = [
      this.initApi('srvcOrdItmPartnerAddressApi', SrvcOrdItmPartnerAddressApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get srvcOrdItmPartnerAddressApi(): SrvcOrdItmPartnerAddressApi<DeSerializersT> {
    return this.initApi(
      'srvcOrdItmPartnerAddressApi',
      SrvcOrdItmPartnerAddressApi
    );
  }

  get srvcOrdItmProdRefObjectApi(): SrvcOrdItmProdRefObjectApi<DeSerializersT> {
    return this.initApi(
      'srvcOrdItmProdRefObjectApi',
      SrvcOrdItmProdRefObjectApi
    );
  }

  get srvcOrdPartnerApi(): SrvcOrdPartnerApi<DeSerializersT> {
    const api = this.initApi('srvcOrdPartnerApi', SrvcOrdPartnerApi);
    const linkedApis = [
      this.initApi('srvcOrdPartnerAddressApi', SrvcOrdPartnerAddressApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get srvcOrdPartnerAddressApi(): SrvcOrdPartnerAddressApi<DeSerializersT> {
    return this.initApi('srvcOrdPartnerAddressApi', SrvcOrdPartnerAddressApi);
  }

  get srvcOrdProdRefObjectApi(): SrvcOrdProdRefObjectApi<DeSerializersT> {
    return this.initApi('srvcOrdProdRefObjectApi', SrvcOrdProdRefObjectApi);
  }

  get srvcOrdRefServiceContractApi(): SrvcOrdRefServiceContractApi<DeSerializersT> {
    return this.initApi(
      'srvcOrdRefServiceContractApi',
      SrvcOrdRefServiceContractApi
    );
  }

  get batch(): typeof batch {
    return batch;
  }

  get changeset(): typeof changeset {
    return changeset;
  }
}
