"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getInventoryViewInAppUrl = void 0;

var _ruleDataUtils = require("@kbn/rule-data-utils");

var _risonNode = require("rison-node");

var _queryString = require("query-string");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const getInventoryViewInAppUrl = fields => {
  const nodeTypeField = `${_ruleDataUtils.ALERT_RULE_PARAMETERS}.nodeType`;
  const nodeType = fields[nodeTypeField];
  let inventoryViewInAppUrl = '/app/metrics/link-to/inventory?';

  if (nodeType) {
    const linkToParams = {
      nodeType: fields[nodeTypeField][0],
      timestamp: Date.parse(fields[_ruleDataUtils.TIMESTAMP]),
      customMetric: ''
    }; // We always pick the first criteria metric for the URL

    const criteriaMetric = fields[`${_ruleDataUtils.ALERT_RULE_PARAMETERS}.criteria.metric`][0];

    if (criteriaMetric === 'custom') {
      const criteriaCustomMetricId = fields[`${_ruleDataUtils.ALERT_RULE_PARAMETERS}.criteria.customMetric.id`][0];
      const criteriaCustomMetricAggregation = fields[`${_ruleDataUtils.ALERT_RULE_PARAMETERS}.criteria.customMetric.aggregation`][0];
      const criteriaCustomMetricField = fields[`${_ruleDataUtils.ALERT_RULE_PARAMETERS}.criteria.customMetric.field`][0];
      const customMetric = (0, _risonNode.encode)({
        id: criteriaCustomMetricId,
        type: 'custom',
        field: criteriaCustomMetricField,
        aggregation: criteriaCustomMetricAggregation
      });
      linkToParams.customMetric = customMetric;
      linkToParams.metric = customMetric;
    } else {
      linkToParams.metric = (0, _risonNode.encode)({
        type: criteriaMetric
      });
    }

    inventoryViewInAppUrl += (0, _queryString.stringify)(linkToParams);
  }

  return inventoryViewInAppUrl;
};

exports.getInventoryViewInAppUrl = getInventoryViewInAppUrl;