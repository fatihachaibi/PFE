"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buildKpiRiskScoreQuery = void 0;

var _build_query = require("../../../../../utils/build_query");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const buildKpiRiskScoreQuery = ({
  defaultIndex,
  filterQuery,
  aggBy
}) => {
  const filter = [...(0, _build_query.createQueryFilterClauses)(filterQuery)];
  const dslQuery = {
    index: defaultIndex,
    allow_no_indices: false,
    ignore_unavailable: true,
    track_total_hits: false,
    body: {
      aggs: {
        risk: {
          terms: {
            field: 'risk.keyword'
          },
          aggs: {
            unique_entries: {
              cardinality: {
                field: aggBy
              }
            }
          }
        }
      },
      query: {
        bool: {
          filter
        }
      },
      size: 0
    }
  };
  return dslQuery;
};

exports.buildKpiRiskScoreQuery = buildKpiRiskScoreQuery;