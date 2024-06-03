"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSyntheticsEnablementRoute = exports.enableSyntheticsRoute = exports.disableSyntheticsRoute = void 0;

var _constants = require("../../../common/constants");

var _get_api_key = require("../../synthetics_service/get_api_key");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const getSyntheticsEnablementRoute = libs => ({
  method: 'GET',
  path: _constants.API_URLS.SYNTHETICS_ENABLEMENT,
  validate: {},
  handler: async ({
    request,
    response,
    server
  }) => {
    try {
      return response.ok({
        body: await libs.requests.getSyntheticsEnablement({
          request,
          server
        })
      });
    } catch (e) {
      server.logger.error(e);
      throw e;
    }
  }
});

exports.getSyntheticsEnablementRoute = getSyntheticsEnablementRoute;

const disableSyntheticsRoute = libs => ({
  method: 'DELETE',
  path: _constants.API_URLS.SYNTHETICS_ENABLEMENT,
  validate: {},
  handler: async ({
    response,
    request,
    server,
    savedObjectsClient
  }) => {
    const {
      syntheticsService,
      security
    } = server;

    try {
      var _security$authc$apiKe;

      const {
        canEnable
      } = await libs.requests.getSyntheticsEnablement({
        request,
        server
      });

      if (!canEnable) {
        return response.forbidden();
      }

      await syntheticsService.deleteAllConfigs();
      const apiKey = await libs.requests.getAPIKeyForSyntheticsService({
        server
      });
      await libs.requests.deleteServiceApiKey({
        request,
        server,
        savedObjectsClient
      });
      await ((_security$authc$apiKe = security.authc.apiKeys) === null || _security$authc$apiKe === void 0 ? void 0 : _security$authc$apiKe.invalidate(request, {
        ids: [(apiKey === null || apiKey === void 0 ? void 0 : apiKey.id) || '']
      }));
      return response.ok({});
    } catch (e) {
      server.logger.error(e);
      throw e;
    }
  }
});

exports.disableSyntheticsRoute = disableSyntheticsRoute;

const enableSyntheticsRoute = libs => ({
  method: 'POST',
  path: _constants.API_URLS.SYNTHETICS_ENABLEMENT,
  validate: {},
  handler: async ({
    request,
    response,
    server
  }) => {
    const {
      authSavedObjectsClient,
      logger,
      security
    } = server;

    try {
      await libs.requests.generateAndSaveServiceAPIKey({
        request,
        authSavedObjectsClient,
        security,
        server
      });
      return response.ok({});
    } catch (e) {
      logger.error(e);

      if (e instanceof _get_api_key.SyntheticsForbiddenError) {
        return response.forbidden();
      }

      throw e;
    }
  }
});

exports.enableSyntheticsRoute = enableSyntheticsRoute;