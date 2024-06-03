"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMetricIndices = getMetricIndices;
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

async function getMetricIndices({
  infraPlugin,
  savedObjectsClient
}) {
  const infra = await infraPlugin.start();
  const metricIndices = await infra.getMetricIndices(savedObjectsClient);
  return metricIndices;
}