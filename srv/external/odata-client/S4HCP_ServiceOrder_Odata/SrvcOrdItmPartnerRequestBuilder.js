"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SrvcOrdItmPartnerRequestBuilder = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const SrvcOrdItmPartner_1 = require("./SrvcOrdItmPartner");
/**
 * Request builder class for operations supported on the {@link SrvcOrdItmPartner} entity.
 */
class SrvcOrdItmPartnerRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for querying all `SrvcOrdItmPartner` entities.
     * @returns A request builder for creating requests to retrieve all `SrvcOrdItmPartner` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `SrvcOrdItmPartner` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `SrvcOrdItmPartner`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for retrieving one `SrvcOrdItmPartner` entity based on its keys.
     * @param serviceOrder Key property. See {@link SrvcOrdItmPartner.serviceOrder}.
     * @param serviceOrderItem Key property. See {@link SrvcOrdItmPartner.serviceOrderItem}.
     * @param custMgmtPartnerFunction Key property. See {@link SrvcOrdItmPartner.custMgmtPartnerFunction}.
     * @param custMgmtBusinessPartner Key property. See {@link SrvcOrdItmPartner.custMgmtBusinessPartner}.
     * @returns A request builder for creating requests to retrieve one `SrvcOrdItmPartner` entity based on its keys.
     */
    getByKey(serviceOrder, serviceOrderItem, custMgmtPartnerFunction, custMgmtBusinessPartner) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            ServiceOrder: serviceOrder,
            ServiceOrderItem: serviceOrderItem,
            CustMgmtPartnerFunction: custMgmtPartnerFunction,
            CustMgmtBusinessPartner: custMgmtBusinessPartner
        });
    }
    /**
     * Returns a request builder for updating an entity of type `SrvcOrdItmPartner`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `SrvcOrdItmPartner`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(serviceOrderOrEntity, serviceOrderItem, custMgmtPartnerFunction, custMgmtBusinessPartner) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, serviceOrderOrEntity instanceof SrvcOrdItmPartner_1.SrvcOrdItmPartner
            ? serviceOrderOrEntity
            : {
                ServiceOrder: serviceOrderOrEntity,
                ServiceOrderItem: serviceOrderItem,
                CustMgmtPartnerFunction: custMgmtPartnerFunction,
                CustMgmtBusinessPartner: custMgmtBusinessPartner
            });
    }
}
exports.SrvcOrdItmPartnerRequestBuilder = SrvcOrdItmPartnerRequestBuilder;
//# sourceMappingURL=SrvcOrdItmPartnerRequestBuilder.js.map