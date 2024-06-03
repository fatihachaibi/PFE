"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateTimelineTitle = exports.validateTimelineId = exports.validateThreshold = exports.validateQuery = exports.validateLanguage = exports.validateId = exports.patchRuleValidateTypeDependents = void 0;

var _helpers = require("../../../machine_learning/helpers");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const validateQuery = rule => {
  if ((0, _helpers.isMlRule)(rule.type)) {
    if (rule.query != null) {
      return ['when "type" is "machine_learning", "query" cannot be set'];
    } else {
      return [];
    }
  } else {
    return [];
  }
};

exports.validateQuery = validateQuery;

const validateLanguage = rule => {
  if ((0, _helpers.isMlRule)(rule.type)) {
    if (rule.language != null) {
      return ['when "type" is "machine_learning", "language" cannot be set'];
    } else {
      return [];
    }
  } else {
    return [];
  }
};

exports.validateLanguage = validateLanguage;

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

const validateId = rule => {
  if (rule.id != null && rule.rule_id != null) {
    return ['both "id" and "rule_id" cannot exist, choose one or the other'];
  } else if (rule.id == null && rule.rule_id == null) {
    return ['either "id" or "rule_id" must be set'];
  } else {
    return [];
  }
};

exports.validateId = validateId;

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

      if (rule.threshold.value <= 0) {
        errors.push('"threshold.value" has to be bigger than 0');
      }

      if (Array.isArray(rule.threshold.field) && rule.threshold.field.length > 3) {
        errors.push('Number of fields must be 3 or less');
      }
    }
  }

  return errors;
};

exports.validateThreshold = validateThreshold;

const patchRuleValidateTypeDependents = rule => {
  return [...validateId(rule), ...validateQuery(rule), ...validateLanguage(rule), ...validateTimelineId(rule), ...validateTimelineTitle(rule), ...validateThreshold(rule)];
};

exports.patchRuleValidateTypeDependents = patchRuleValidateTypeDependents;