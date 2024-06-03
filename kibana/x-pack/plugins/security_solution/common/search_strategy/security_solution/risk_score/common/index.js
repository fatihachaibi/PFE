"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUserRiskIndex = exports.getHostRiskIndex = exports.buildUserNamesFilter = exports.buildHostNamesFilter = exports.RiskQueries = void 0;

var _constants = require("../../../../constants");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const getHostRiskIndex = (spaceId, onlyLatest = true) => {
  return `${_constants.RISKY_HOSTS_INDEX_PREFIX}${onlyLatest ? 'latest_' : ''}${spaceId}`;
};

exports.getHostRiskIndex = getHostRiskIndex;

const getUserRiskIndex = (spaceId, onlyLatest = true) => {
  return `${_constants.RISKY_USERS_INDEX_PREFIX}${onlyLatest ? 'latest_' : ''}${spaceId}`;
};

exports.getUserRiskIndex = getUserRiskIndex;

const buildHostNamesFilter = hostNames => {
  return {
    terms: {
      'host.name': hostNames
    }
  };
};

exports.buildHostNamesFilter = buildHostNamesFilter;

const buildUserNamesFilter = userNames => {
  return {
    terms: {
      'user.name': userNames
    }
  };
};

exports.buildUserNamesFilter = buildUserNamesFilter;
let RiskQueries;
exports.RiskQueries = RiskQueries;

(function (RiskQueries) {
  RiskQueries["riskScore"] = "riskScore";
  RiskQueries["kpiRiskScore"] = "kpiRiskScore";
})(RiskQueries || (exports.RiskQueries = RiskQueries = {}));