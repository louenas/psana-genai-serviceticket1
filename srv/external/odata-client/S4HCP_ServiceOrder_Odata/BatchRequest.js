"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultS4HcpServiceOrderOdataPath = exports.changeset = exports.batch = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const util_1 = require("@sap-cloud-sdk/util");
function batch(first, ...rest) {
    return new odata_v2_1.ODataBatchRequestBuilder(exports.defaultS4HcpServiceOrderOdataPath, (0, util_1.transformVariadicArgumentToArray)(first, rest));
}
exports.batch = batch;
function changeset(first, ...rest) {
    return new odata_v2_1.BatchChangeSet((0, util_1.transformVariadicArgumentToArray)(first, rest));
}
exports.changeset = changeset;
exports.defaultS4HcpServiceOrderOdataPath = '/sap/opu/odata/sap/API_SERVICE_ORDER_SRV';
//# sourceMappingURL=BatchRequest.js.map