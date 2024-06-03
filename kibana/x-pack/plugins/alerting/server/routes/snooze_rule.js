"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.snoozeRuleRoute = void 0;

var _configSchema = require("@kbn/config-schema");

var _lib = require("../lib");

var _lib2 = require("./lib");

var _types = require("../types");

var _validate_snooze_date = require("../lib/validate_snooze_date");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const paramSchema = _configSchema.schema.object({
  id: _configSchema.schema.string()
});

const bodySchema = _configSchema.schema.object({
  snooze_end_time: _configSchema.schema.oneOf([_configSchema.schema.string({
    validate: _validate_snooze_date.validateSnoozeDate
  }), _configSchema.schema.literal(-1)])
});

const rewriteBodyReq = ({
  snooze_end_time: snoozeEndTime
}) => ({
  snoozeEndTime
});

const snoozeRuleRoute = (router, licenseState) => {
  router.post({
    path: `${_types.INTERNAL_BASE_ALERTING_API_PATH}/rule/{id}/_snooze`,
    validate: {
      params: paramSchema,
      body: bodySchema
    }
  }, router.handleLegacyErrors((0, _lib2.verifyAccessAndContext)(licenseState, async function (context, req, res) {
    const rulesClient = (await context.alerting).getRulesClient();
    const params = req.params;
    const body = rewriteBodyReq(req.body);

    try {
      await rulesClient.snooze({ ...params,
        ...body
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

exports.snoozeRuleRoute = snoozeRuleRoute;