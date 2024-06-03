"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SrvcOrdPartnerAddressRequestBuilder = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * Request builder class for operations supported on the {@link SrvcOrdPartnerAddress} entity.
 */
class SrvcOrdPartnerAddressRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for querying all `SrvcOrdPartnerAddress` entities.
     * @returns A request builder for creating requests to retrieve all `SrvcOrdPartnerAddress` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for retrieving one `SrvcOrdPartnerAddress` entity based on its keys.
     * @param serviceOrder Key property. See {@link SrvcOrdPartnerAddress.serviceOrder}.
     * @param custMgmtPartnerFunction Key property. See {@link SrvcOrdPartnerAddress.custMgmtPartnerFunction}.
     * @param custMgmtBusinessPartner Key property. See {@link SrvcOrdPartnerAddress.custMgmtBusinessPartner}.
     * @returns A request builder for creating requests to retrieve one `SrvcOrdPartnerAddress` entity based on its keys.
     */
    getByKey(serviceOrder, custMgmtPartnerFunction, custMgmtBusinessPartner) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            ServiceOrder: serviceOrder,
            CustMgmtPartnerFunction: custMgmtPartnerFunction,
            CustMgmtBusinessPartner: custMgmtBusinessPartner
        });
    }
    /**
     * Returns a request builder for updating an entity of type `SrvcOrdPartnerAddress`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `SrvcOrdPartnerAddress`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
}
exports.SrvcOrdPartnerAddressRequestBuilder = SrvcOrdPartnerAddressRequestBuilder;
//# sourceMappingURL=SrvcOrdPartnerAddressRequestBuilder.js.map