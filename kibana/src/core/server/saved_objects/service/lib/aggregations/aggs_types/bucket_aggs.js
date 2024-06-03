"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bucketAggsSchemas = void 0;

var _configSchema = require("@kbn/config-schema");

var _common_schemas = require("./common_schemas");

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
 * - date_range
 * - filter
 * - histogram
 * - nested
 * - reverse_nested
 * - terms
 * - multi_terms
 *
 * Not fully supported:
 * - filter
 * - filters
 *
 * Not implemented:
 * - adjacency_matrix
 * - auto_date_histogram
 * - children
 * - composite
 * - date_histogram
 * - diversified_sampler
 * - geo_distance
 * - geohash_grid
 * - geotile_grid
 * - global
 * - ip_range
 * - missing
 * - parent
 * - range
 * - rare_terms
 * - sampler
 * - significant_terms
 * - significant_text
 * - variable_width_histogram
 */
// TODO: it would be great if we could recursively build the schema since the aggregation have be nested
// For more details see how the types are defined in the elasticsearch javascript client:
// https://github.com/elastic/elasticsearch-js/blob/4ad5daeaf401ce8ebb28b940075e0a67e56ff9ce/src/api/typesWithBodyKey.ts#L5295
const termSchema = _configSchema.schema.object({
  term: _configSchema.schema.recordOf(_configSchema.schema.string(), _configSchema.schema.oneOf([_configSchema.schema.string(), _configSchema.schema.boolean(), _configSchema.schema.number()]))
}); // TODO: it would be great if we could recursively build the schema since the aggregation have be nested
// For more details see how the types are defined in the elasticsearch javascript client:
// https://github.com/elastic/elasticsearch-js/blob/4ad5daeaf401ce8ebb28b940075e0a67e56ff9ce/src/api/typesWithBodyKey.ts#L5295


const boolSchema = _configSchema.schema.object({
  bool: _configSchema.schema.object({
    must_not: _configSchema.schema.oneOf([termSchema])
  })
});

const orderSchema = _configSchema.schema.oneOf([_common_schemas.sortOrderSchema, _configSchema.schema.recordOf(_configSchema.schema.string(), _common_schemas.sortOrderSchema), _configSchema.schema.arrayOf(_configSchema.schema.recordOf(_configSchema.schema.string(), _common_schemas.sortOrderSchema))]);

const termsSchema = _configSchema.schema.object({
  field: _configSchema.schema.maybe(_configSchema.schema.string()),
  collect_mode: _configSchema.schema.maybe(_configSchema.schema.string()),
  exclude: _configSchema.schema.maybe(_configSchema.schema.oneOf([_configSchema.schema.string(), _configSchema.schema.arrayOf(_configSchema.schema.string())])),
  include: _configSchema.schema.maybe(_configSchema.schema.oneOf([_configSchema.schema.string(), _configSchema.schema.arrayOf(_configSchema.schema.string())])),
  execution_hint: _configSchema.schema.maybe(_configSchema.schema.string()),
  missing: _configSchema.schema.maybe(_configSchema.schema.number()),
  min_doc_count: _configSchema.schema.maybe(_configSchema.schema.number({
    min: 1
  })),
  size: _configSchema.schema.maybe(_configSchema.schema.number()),
  show_term_doc_count_error: _configSchema.schema.maybe(_configSchema.schema.boolean()),
  order: _configSchema.schema.maybe(orderSchema)
});

const multiTermsSchema = _configSchema.schema.object({
  terms: _configSchema.schema.arrayOf(termsSchema),
  size: _configSchema.schema.maybe(_configSchema.schema.number()),
  shard_size: _configSchema.schema.maybe(_configSchema.schema.number()),
  show_term_doc_count_error: _configSchema.schema.maybe(_configSchema.schema.boolean()),
  min_doc_count: _configSchema.schema.maybe(_configSchema.schema.number()),
  shard_min_doc_count: _configSchema.schema.maybe(_configSchema.schema.number()),
  collect_mode: _configSchema.schema.maybe(_configSchema.schema.oneOf([_configSchema.schema.literal('depth_first'), _configSchema.schema.literal('breadth_first')])),
  order: _configSchema.schema.maybe(_configSchema.schema.recordOf(_configSchema.schema.string(), orderSchema))
});

const bucketAggsSchemas = {
  date_range: _configSchema.schema.object({
    field: _configSchema.schema.string(),
    format: _configSchema.schema.string(),
    ranges: _configSchema.schema.arrayOf(_configSchema.schema.object({
      from: _configSchema.schema.maybe(_configSchema.schema.string()),
      to: _configSchema.schema.maybe(_configSchema.schema.string())
    }))
  }),
  filter: termSchema,
  filters: _configSchema.schema.object({
    filters: _configSchema.schema.recordOf(_configSchema.schema.string(), _configSchema.schema.oneOf([termSchema, boolSchema]))
  }),
  histogram: _configSchema.schema.object({
    field: _configSchema.schema.maybe(_configSchema.schema.string()),
    interval: _configSchema.schema.maybe(_configSchema.schema.number()),
    min_doc_count: _configSchema.schema.maybe(_configSchema.schema.number({
      min: 1
    })),
    extended_bounds: _configSchema.schema.maybe(_configSchema.schema.object({
      min: _configSchema.schema.number(),
      max: _configSchema.schema.number()
    })),
    hard_bounds: _configSchema.schema.maybe(_configSchema.schema.object({
      min: _configSchema.schema.number(),
      max: _configSchema.schema.number()
    })),
    missing: _configSchema.schema.maybe(_configSchema.schema.number()),
    keyed: _configSchema.schema.maybe(_configSchema.schema.boolean()),
    order: _configSchema.schema.maybe(_configSchema.schema.object({
      _count: _configSchema.schema.string(),
      _key: _configSchema.schema.string()
    }))
  }),
  nested: _configSchema.schema.object({
    path: _configSchema.schema.string()
  }),
  reverse_nested: _configSchema.schema.object({
    path: _configSchema.schema.maybe(_configSchema.schema.string())
  }),
  multi_terms: multiTermsSchema,
  terms: termsSchema
};
exports.bucketAggsSchemas = bucketAggsSchemas;