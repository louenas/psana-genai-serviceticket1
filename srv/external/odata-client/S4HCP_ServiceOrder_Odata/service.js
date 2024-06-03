"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.s4HcpServiceOrderOdata = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const ServiceOrderApi_1 = require("./ServiceOrderApi");
const ServiceOrderConfirmationApi_1 = require("./ServiceOrderConfirmationApi");
const ServiceOrderDefectApi_1 = require("./ServiceOrderDefectApi");
const ServiceOrderItemApi_1 = require("./ServiceOrderItemApi");
const ServiceOrderItemConfirmationApi_1 = require("./ServiceOrderItemConfirmationApi");
const ServiceOrderItemPriceElementApi_1 = require("./ServiceOrderItemPriceElementApi");
const ServiceOrderItemRefObjectApi_1 = require("./ServiceOrderItemRefObjectApi");
const ServiceOrderItemTextApi_1 = require("./ServiceOrderItemTextApi");
const ServiceOrderPersonRespApi_1 = require("./ServiceOrderPersonRespApi");
const ServiceOrderPriceElementApi_1 = require("./ServiceOrderPriceElementApi");
const ServiceOrderRefObjectApi_1 = require("./ServiceOrderRefObjectApi");
const ServiceOrderTextApi_1 = require("./ServiceOrderTextApi");
const ServiceOrdItemUserStatusApi_1 = require("./ServiceOrdItemUserStatusApi");
const ServiceOrdUserStatusApi_1 = require("./ServiceOrdUserStatusApi");
const SrvcOrdAppointmentApi_1 = require("./SrvcOrdAppointmentApi");
const SrvcOrdDurationApi_1 = require("./SrvcOrdDurationApi");
const SrvcOrdItemAppointmentApi_1 = require("./SrvcOrdItemAppointmentApi");
const SrvcOrdItemDurationApi_1 = require("./SrvcOrdItemDurationApi");
const SrvcOrdItmPartnerApi_1 = require("./SrvcOrdItmPartnerApi");
const SrvcOrdItmPartnerAddressApi_1 = require("./SrvcOrdItmPartnerAddressApi");
const SrvcOrdItmProdRefObjectApi_1 = require("./SrvcOrdItmProdRefObjectApi");
const SrvcOrdPartnerApi_1 = require("./SrvcOrdPartnerApi");
const SrvcOrdPartnerAddressApi_1 = require("./SrvcOrdPartnerAddressApi");
const SrvcOrdProdRefObjectApi_1 = require("./SrvcOrdProdRefObjectApi");
const SrvcOrdRefServiceContractApi_1 = require("./SrvcOrdRefServiceContractApi");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const BatchRequest_1 = require("./BatchRequest");
function s4HcpServiceOrderOdata(deSerializers = odata_v2_1.defaultDeSerializers) {
    return new S4HcpServiceOrderOdata((0, odata_v2_1.mergeDefaultDeSerializersWith)(deSerializers));
}
exports.s4HcpServiceOrderOdata = s4HcpServiceOrderOdata;
class S4HcpServiceOrderOdata {
    constructor(deSerializers) {
        this.apis = {};
        this.deSerializers = deSerializers;
    }
    initApi(key, entityApi) {
        if (!this.apis[key]) {
            this.apis[key] = entityApi._privateFactory(this.deSerializers);
        }
        return this.apis[key];
    }
    get serviceOrderApi() {
        const api = this.initApi('serviceOrderApi', ServiceOrderApi_1.ServiceOrderApi);
        const linkedApis = [
            this.initApi('srvcOrdAppointmentApi', SrvcOrdAppointmentApi_1.SrvcOrdAppointmentApi),
            this.initApi('serviceOrderConfirmationApi', ServiceOrderConfirmationApi_1.ServiceOrderConfirmationApi),
            this.initApi('serviceOrderDefectApi', ServiceOrderDefectApi_1.ServiceOrderDefectApi),
            this.initApi('srvcOrdDurationApi', SrvcOrdDurationApi_1.SrvcOrdDurationApi),
            this.initApi('serviceOrderItemApi', ServiceOrderItemApi_1.ServiceOrderItemApi),
            this.initApi('srvcOrdPartnerApi', SrvcOrdPartnerApi_1.SrvcOrdPartnerApi),
            this.initApi('serviceOrderPersonRespApi', ServiceOrderPersonRespApi_1.ServiceOrderPersonRespApi),
            this.initApi('serviceOrderPriceElementApi', ServiceOrderPriceElementApi_1.ServiceOrderPriceElementApi),
            this.initApi('srvcOrdProdRefObjectApi', SrvcOrdProdRefObjectApi_1.SrvcOrdProdRefObjectApi),
            this.initApi('serviceOrderRefObjectApi', ServiceOrderRefObjectApi_1.ServiceOrderRefObjectApi),
            this.initApi('srvcOrdRefServiceContractApi', SrvcOrdRefServiceContractApi_1.SrvcOrdRefServiceContractApi),
            this.initApi('serviceOrdUserStatusApi', ServiceOrdUserStatusApi_1.ServiceOrdUserStatusApi),
            this.initApi('serviceOrderTextApi', ServiceOrderTextApi_1.ServiceOrderTextApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get serviceOrderConfirmationApi() {
        return this.initApi('serviceOrderConfirmationApi', ServiceOrderConfirmationApi_1.ServiceOrderConfirmationApi);
    }
    get serviceOrderDefectApi() {
        return this.initApi('serviceOrderDefectApi', ServiceOrderDefectApi_1.ServiceOrderDefectApi);
    }
    get serviceOrderItemApi() {
        const api = this.initApi('serviceOrderItemApi', ServiceOrderItemApi_1.ServiceOrderItemApi);
        const linkedApis = [
            this.initApi('srvcOrdItemAppointmentApi', SrvcOrdItemAppointmentApi_1.SrvcOrdItemAppointmentApi),
            this.initApi('serviceOrderItemConfirmationApi', ServiceOrderItemConfirmationApi_1.ServiceOrderItemConfirmationApi),
            this.initApi('srvcOrdItemDurationApi', SrvcOrdItemDurationApi_1.SrvcOrdItemDurationApi),
            this.initApi('srvcOrdItmPartnerApi', SrvcOrdItmPartnerApi_1.SrvcOrdItmPartnerApi),
            this.initApi('serviceOrderItemPriceElementApi', ServiceOrderItemPriceElementApi_1.ServiceOrderItemPriceElementApi),
            this.initApi('srvcOrdItmProdRefObjectApi', SrvcOrdItmProdRefObjectApi_1.SrvcOrdItmProdRefObjectApi),
            this.initApi('serviceOrderItemRefObjectApi', ServiceOrderItemRefObjectApi_1.ServiceOrderItemRefObjectApi),
            this.initApi('serviceOrderApi', ServiceOrderApi_1.ServiceOrderApi),
            this.initApi('serviceOrdItemUserStatusApi', ServiceOrdItemUserStatusApi_1.ServiceOrdItemUserStatusApi),
            this.initApi('serviceOrderItemTextApi', ServiceOrderItemTextApi_1.ServiceOrderItemTextApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get serviceOrderItemConfirmationApi() {
        return this.initApi('serviceOrderItemConfirmationApi', ServiceOrderItemConfirmationApi_1.ServiceOrderItemConfirmationApi);
    }
    get serviceOrderItemPriceElementApi() {
        return this.initApi('serviceOrderItemPriceElementApi', ServiceOrderItemPriceElementApi_1.ServiceOrderItemPriceElementApi);
    }
    get serviceOrderItemRefObjectApi() {
        return this.initApi('serviceOrderItemRefObjectApi', ServiceOrderItemRefObjectApi_1.ServiceOrderItemRefObjectApi);
    }
    get serviceOrderItemTextApi() {
        return this.initApi('serviceOrderItemTextApi', ServiceOrderItemTextApi_1.ServiceOrderItemTextApi);
    }
    get serviceOrderPersonRespApi() {
        return this.initApi('serviceOrderPersonRespApi', ServiceOrderPersonRespApi_1.ServiceOrderPersonRespApi);
    }
    get serviceOrderPriceElementApi() {
        return this.initApi('serviceOrderPriceElementApi', ServiceOrderPriceElementApi_1.ServiceOrderPriceElementApi);
    }
    get serviceOrderRefObjectApi() {
        return this.initApi('serviceOrderRefObjectApi', ServiceOrderRefObjectApi_1.ServiceOrderRefObjectApi);
    }
    get serviceOrderTextApi() {
        return this.initApi('serviceOrderTextApi', ServiceOrderTextApi_1.ServiceOrderTextApi);
    }
    get serviceOrdItemUserStatusApi() {
        return this.initApi('serviceOrdItemUserStatusApi', ServiceOrdItemUserStatusApi_1.ServiceOrdItemUserStatusApi);
    }
    get serviceOrdUserStatusApi() {
        return this.initApi('serviceOrdUserStatusApi', ServiceOrdUserStatusApi_1.ServiceOrdUserStatusApi);
    }
    get srvcOrdAppointmentApi() {
        return this.initApi('srvcOrdAppointmentApi', SrvcOrdAppointmentApi_1.SrvcOrdAppointmentApi);
    }
    get srvcOrdDurationApi() {
        return this.initApi('srvcOrdDurationApi', SrvcOrdDurationApi_1.SrvcOrdDurationApi);
    }
    get srvcOrdItemAppointmentApi() {
        return this.initApi('srvcOrdItemAppointmentApi', SrvcOrdItemAppointmentApi_1.SrvcOrdItemAppointmentApi);
    }
    get srvcOrdItemDurationApi() {
        return this.initApi('srvcOrdItemDurationApi', SrvcOrdItemDurationApi_1.SrvcOrdItemDurationApi);
    }
    get srvcOrdItmPartnerApi() {
        const api = this.initApi('srvcOrdItmPartnerApi', SrvcOrdItmPartnerApi_1.SrvcOrdItmPartnerApi);
        const linkedApis = [
            this.initApi('srvcOrdItmPartnerAddressApi', SrvcOrdItmPartnerAddressApi_1.SrvcOrdItmPartnerAddressApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get srvcOrdItmPartnerAddressApi() {
        return this.initApi('srvcOrdItmPartnerAddressApi', SrvcOrdItmPartnerAddressApi_1.SrvcOrdItmPartnerAddressApi);
    }
    get srvcOrdItmProdRefObjectApi() {
        return this.initApi('srvcOrdItmProdRefObjectApi', SrvcOrdItmProdRefObjectApi_1.SrvcOrdItmProdRefObjectApi);
    }
    get srvcOrdPartnerApi() {
        const api = this.initApi('srvcOrdPartnerApi', SrvcOrdPartnerApi_1.SrvcOrdPartnerApi);
        const linkedApis = [
            this.initApi('srvcOrdPartnerAddressApi', SrvcOrdPartnerAddressApi_1.SrvcOrdPartnerAddressApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get srvcOrdPartnerAddressApi() {
        return this.initApi('srvcOrdPartnerAddressApi', SrvcOrdPartnerAddressApi_1.SrvcOrdPartnerAddressApi);
    }
    get srvcOrdProdRefObjectApi() {
        return this.initApi('srvcOrdProdRefObjectApi', SrvcOrdProdRefObjectApi_1.SrvcOrdProdRefObjectApi);
    }
    get srvcOrdRefServiceContractApi() {
        return this.initApi('srvcOrdRefServiceContractApi', SrvcOrdRefServiceContractApi_1.SrvcOrdRefServiceContractApi);
    }
    get batch() {
        return BatchRequest_1.batch;
    }
    get changeset() {
        return BatchRequest_1.changeset;
    }
}
//# sourceMappingURL=service.js.map