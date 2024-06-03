"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defineGetCspSetupStatusRoute = void 0;

var _securitysolutionEsUtils = require("@kbn/securitysolution-es-utils");

var _constants = require("../../../common/constants");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const getLatestFindingsStatus = async esClient => {
  try {
    const queryResult = await esClient.search({
      index: _constants.LATEST_FINDINGS_INDEX_DEFAULT_NS,
      query: {
        match_all: {}
      },
      size: 1
    });
    const hasLatestFinding = !!queryResult.hits.hits.length;
    return hasLatestFinding ? 'applicable' : 'inapplicable';
  } catch (e) {
    return 'inapplicable';
  }
};

const defineGetCspSetupStatusRoute = (router, cspContext) => router.get({
  path: _constants.INFO_ROUTE_PATH,
  validate: false
}, async (context, _, response) => {
  try {
    const esClient = (await context.core).elasticsearch.client.asCurrentUser;
    const latestFindingsIndexStatus = await getLatestFindingsStatus(esClient);
    const body = {
      latestFindingsIndexStatus
    };
    return response.ok({
      body
    });
  } catch (err) {
    const error = (0, _securitysolutionEsUtils.transformError)(err);
    cspContext.logger.error(`Error while fetching findings status: ${err}`);
    return response.customError({
      body: {
        message: error.message
      },
      statusCode: error.statusCode
    });
  }
});

exports.defineGetCspSetupStatusRoute = defineGetCspSetupStatusRoute;