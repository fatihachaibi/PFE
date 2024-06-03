"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buildRuleMessageFactory = void 0;
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */
// TODO: change `index` param to `spaceId`

const buildRuleMessageFactory = ({
  executionId,
  id,
  ruleId,
  index,
  name
}) => (...messages) => [...messages, `name: "${name}"`, `id: "${id}"`, `rule id: "${ruleId !== null && ruleId !== void 0 ? ruleId : '(unknown rule id)'}"`, `execution id: "${executionId}"`, `space ID: "${index}"`].join(' ');

exports.buildRuleMessageFactory = buildRuleMessageFactory;