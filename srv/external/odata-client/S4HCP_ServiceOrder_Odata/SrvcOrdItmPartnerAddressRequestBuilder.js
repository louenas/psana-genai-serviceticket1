"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SrvcOrdItmPartnerAddressRequestBuilder = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * Request builder class for operations supported on the {@link SrvcOrdItmPartnerAddress} entity.
 */
class SrvcOrdItmPartnerAddressRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for querying all `SrvcOrdItmPartnerAddress` entities.
     * @returns A request builder for creating requests to retrieve all `SrvcOrdItmPartnerAddress` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for retrieving one `SrvcOrdItmPartnerAddress` entity based on its keys.
     * @param serviceOrder Key property. See {@link SrvcOrdItmPartnerAddress.serviceOrder}.
     * @param serviceOrderItem Key property. See {@link SrvcOrdItmPartnerAddress.serviceOrderItem}.
     * @param custMgmtPartnerFunction Key property. See {@link SrvcOrdItmPartnerAddress.custMgmtPartnerFunction}.
     * @param custMgmtBusinessPartner Key property. See {@link SrvcOrdItmPartnerAddress.custMgmtBusinessPartner}.
     * @returns A request builder for creating requests to retrieve one `SrvcOrdItmPartnerAddress` entity based on its keys.
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
     * Returns a request builder for updating an entity of type `SrvcOrdItmPartnerAddress`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `SrvcOrdItmPartnerAddress`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
}
exports.SrvcOrdItmPartnerAddressRequestBuilder = SrvcOrdItmPartnerAddressRequestBuilder;
//# sourceMappingURL=SrvcOrdItmPartnerAddressRequestBuilder.js.map