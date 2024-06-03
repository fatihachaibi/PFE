"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unsnoozeRuleRoute = void 0;

var _configSchema = require("@kbn/config-schema");

var _lib = require("../lib");

var _lib2 = require("./lib");

var _types = require("../types");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const paramSchema = _configSchema.schema.object({
  id: _configSchema.schema.string()
});

const unsnoozeRuleRoute = (router, licenseState) => {
  router.post({
    path: `${_types.INTERNAL_BASE_ALERTING_API_PATH}/rule/{id}/_unsnooze`,
    validate: {
      params: paramSchema
    }
  }, router.handleLegacyErrors((0, _lib2.verifyAccessAndContext)(licenseState, async function (context, req, res) {
    const rulesClient = (await context.alerting).getRulesClient();
    const params = req.params;

    try {
      await rulesClient.unsnooze({ ...params
      });
      return res.noContent();
    } catch (e) {
      if (e instanceof _lib.RuleMutedError) {
        return e.sendResponse(res);
      }

      throw e;
    }
  })));
};

exports.unsnoozeRuleRoute = unsnoozeRuleRoute;