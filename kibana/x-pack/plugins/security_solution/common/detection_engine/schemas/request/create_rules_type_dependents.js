"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateTimelineTitle = exports.validateTimelineId = exports.validateThreshold = exports.validateThreatMapping = exports.createRuleValidateTypeDependents = void 0;
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

const validateTimelineId = rule => {
  if (rule.timeline_id != null) {
    if (rule.timeline_title == null) {
      return ['when "timeline_id" exists, "timeline_title" must also exist'];
    } else if (rule.timeline_id === '') {
      return ['"timeline_id" cannot be an empty string'];
    } else {
      return [];
    }
  }

  return [];
};

exports.validateTimelineId = validateTimelineId;

const validateTimelineTitle = rule => {
  if (rule.timeline_title != null) {
    if (rule.timeline_id == null) {
      return ['when "timeline_title" exists, "timeline_id" must also exist'];
    } else if (rule.timeline_title === '') {
      return ['"timeline_title" cannot be an empty string'];
    } else {
      return [];
    }
  }

  return [];
};

exports.validateTimelineTitle = validateTimelineTitle;

const validateThreatMapping = rule => {
  const errors = [];

  if (rule.type === 'threat_match') {
    if (rule.concurrent_searches != null && rule.items_per_search == null) {
      errors.push('when "concurrent_searches" exists, "items_per_search" must also exist');
    }

    if (rule.concurrent_searches == null && rule.items_per_search != null) {
      errors.push('when "items_per_search" exists, "concurrent_searches" must also exist');
    }
  }

  return errors;
};

exports.validateThreatMapping = validateThreatMapping;

const validateThreshold = rule => {
  const errors = [];

  if (rule.type === 'threshold') {
    if (!rule.threshold) {
      errors.push('when "type" is "threshold", "threshold" is required');
    } else {
      var _rule$threshold$cardi;

      if ((_rule$threshold$cardi = rule.threshold.cardinality) !== null && _rule$threshold$cardi !== void 0 && _rule$threshold$cardi.length && rule.threshold.field.includes(rule.threshold.cardinality[0].field)) {
        errors.push('Cardinality of a field that is being aggregated on is always 1');
      }

      if (Array.isArray(rule.threshold.field) && rule.threshold.field.length > 3) {
        errors.push('Number of fields must be 3 or less');
      }
    }
  }

  return errors;
};

exports.validateThreshold = validateThreshold;

const createRuleValidateTypeDependents = rule => {
  return [...validateTimelineId(rule), ...validateTimelineTitle(rule), ...validateThreatMapping(rule), ...validateThreshold(rule)];
};

exports.createRuleValidateTypeDependents = createRuleValidateTypeDependents;