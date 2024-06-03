"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pipelineAggsSchemas = void 0;

var _configSchema = require("@kbn/config-schema");

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

/**
 * Schemas for the Bucket aggregations.
 *
 * Currently supported:
 * - max_bucket
 *
 * Not implemented:
 * - avg_bucket
 * - bucket_script
 * - bucket_count_ks_test
 * - bucket_correlation
 * - bucket_selector
 * - bucket_sort
 * - cumulative_cardinality
 * - cumulative_sum
 * - derivative
 * - extended_stats_bucket
 * - inference
 * - min_bucket
 * - moving_fn
 * - moving_percentiles
 * - normalize
 * - percentiles_bucket
 * - serial_diff
 * - stats_bucket
 * - sum_bucket
 */
const pipelineAggsSchemas = {
  max_bucket: _configSchema.schema.object({
    buckets_path: _configSchema.schema.string(),
    gap: _configSchema.schema.maybe(_configSchema.schema.oneOf([_configSchema.schema.literal('skip'), _configSchema.schema.literal('insert_zeros'), _configSchema.schema.literal('keep_values')])),
    format: _configSchema.schema.maybe(_configSchema.schema.string())
  })
};
exports.pipelineAggsSchemas = pipelineAggsSchemas;