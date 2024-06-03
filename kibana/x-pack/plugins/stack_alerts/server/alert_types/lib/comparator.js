"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getComparatorSchemaType = exports.ComparatorFns = exports.ComparatorFnNames = void 0;
exports.getHumanReadableComparator = getHumanReadableComparator;

var _configSchema = require("@kbn/config-schema");

var _comparator_types = require("../../../common/comparator_types");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const humanReadableComparators = new Map([[_comparator_types.Comparator.LT, 'less than'], [_comparator_types.Comparator.LT_OR_EQ, 'less than or equal to'], [_comparator_types.Comparator.GT_OR_EQ, 'greater than or equal to'], [_comparator_types.Comparator.GT, 'greater than'], [_comparator_types.Comparator.BETWEEN, 'between'], [_comparator_types.Comparator.NOT_BETWEEN, 'not between']]);
const ComparatorFns = new Map([[_comparator_types.Comparator.LT, (value, threshold) => value < threshold[0]], [_comparator_types.Comparator.LT_OR_EQ, (value, threshold) => value <= threshold[0]], [_comparator_types.Comparator.GT_OR_EQ, (value, threshold) => value >= threshold[0]], [_comparator_types.Comparator.GT, (value, threshold) => value > threshold[0]], [_comparator_types.Comparator.BETWEEN, (value, threshold) => value >= threshold[0] && value <= threshold[1]], [_comparator_types.Comparator.NOT_BETWEEN, (value, threshold) => value < threshold[0] || value > threshold[1]]]);
exports.ComparatorFns = ComparatorFns;

const getComparatorSchemaType = validate => _configSchema.schema.oneOf([_configSchema.schema.literal(_comparator_types.Comparator.GT), _configSchema.schema.literal(_comparator_types.Comparator.LT), _configSchema.schema.literal(_comparator_types.Comparator.GT_OR_EQ), _configSchema.schema.literal(_comparator_types.Comparator.LT_OR_EQ), _configSchema.schema.literal(_comparator_types.Comparator.BETWEEN), _configSchema.schema.literal(_comparator_types.Comparator.NOT_BETWEEN)], {
  validate
});

exports.getComparatorSchemaType = getComparatorSchemaType;
const ComparatorFnNames = new Set(ComparatorFns.keys());
exports.ComparatorFnNames = ComparatorFnNames;

function getHumanReadableComparator(comparator) {
  return humanReadableComparators.has(comparator) ? humanReadableComparators.get(comparator) : comparator;
}