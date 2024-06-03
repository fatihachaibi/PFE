"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isSavedQueryPrebuilt = exports.getInstalledSavedQueriesMap = void 0;

var _lodash = require("lodash");

var _common = require("../../../common");

var _types = require("../../../common/types");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const getInstallation = async osqueryContext => {
  var _osqueryContext$servi, _osqueryContext$servi2;

  return await ((_osqueryContext$servi = osqueryContext.service.getPackageService()) === null || _osqueryContext$servi === void 0 ? void 0 : (_osqueryContext$servi2 = _osqueryContext$servi.asInternalUser) === null || _osqueryContext$servi2 === void 0 ? void 0 : _osqueryContext$servi2.getInstallation(_common.OSQUERY_INTEGRATION_NAME));
};

const getInstalledSavedQueriesMap = async osqueryContext => {
  const installation = await getInstallation(osqueryContext);

  if (installation) {
    return (0, _lodash.reduce)(installation.installed_kibana, (acc, item) => {
      if (item.type === _types.savedQuerySavedObjectType) {
        return { ...acc,
          [item.id]: item
        };
      }

      return acc;
    }, {});
  }

  return {};
};

exports.getInstalledSavedQueriesMap = getInstalledSavedQueriesMap;

const isSavedQueryPrebuilt = async (osqueryContext, savedQueryId) => {
  const installation = await getInstallation(osqueryContext);

  if (installation) {
    const installationSavedQueries = (0, _lodash.find)(installation.installed_kibana, item => item.type === _types.savedQuerySavedObjectType && item.id === savedQueryId);
    return !!installationSavedQueries;
  }

  return false;
};

exports.isSavedQueryPrebuilt = isSavedQueryPrebuilt;