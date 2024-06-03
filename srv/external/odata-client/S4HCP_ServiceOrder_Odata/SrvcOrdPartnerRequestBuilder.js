"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SrvcOrdPartnerRequestBuilder = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const SrvcOrdPartner_1 = require("./SrvcOrdPartner");
/**
 * Request builder class for operations supported on the {@link SrvcOrdPartner} entity.
 */
class SrvcOrdPartnerRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for querying all `SrvcOrdPartner` entities.
     * @returns A request builder for creating requests to retrieve all `SrvcOrdPartner` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `SrvcOrdPartner` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `SrvcOrdPartner`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for retrieving one `SrvcOrdPartner` entity based on its keys.
     * @param serviceOrder Key property. See {@link SrvcOrdPartner.serviceOrder}.
     * @param custMgmtPartnerFunction Key property. See {@link SrvcOrdPartner.custMgmtPartnerFunction}.
     * @param custMgmtBusinessPartner Key property. See {@link SrvcOrdPartner.custMgmtBusinessPartner}.
     * @returns A request builder for creating requests to retrieve one `SrvcOrdPartner` entity based on its keys.
     */
    getByKey(serviceOrder, custMgmtPartnerFunction, custMgmtBusinessPartner) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            ServiceOrder: serviceOrder,
            CustMgmtPartnerFunction: custMgmtPartnerFunction,
            CustMgmtBusinessPartner: custMgmtBusinessPartner
        });
    }
    /**
     * Returns a request builder for updating an entity of type `SrvcOrdPartner`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `SrvcOrdPartner`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(serviceOrderOrEntity, custMgmtPartnerFunction, custMgmtBusinessPartner) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, serviceOrderOrEntity instanceof SrvcOrdPartner_1.SrvcOrdPartner
            ? serviceOrderOrEntity
            : {
                ServiceOrder: serviceOrderOrEntity,
                CustMgmtPartnerFunction: custMgmtPartnerFunction,
                CustMgmtBusinessPartner: custMgmtBusinessPartner
            });
    }
}
exports.SrvcOrdPartnerRequestBuilder = SrvcOrdPartnerRequestBuilder;
//# sourceMappingURL=SrvcOrdPartnerRequestBuilder.js.map