"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createMetricQuery = createMetricQuery;
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

function createMetricQuery(getEsClient, kibanaIndex) {
  return async function ({
    aggregations,
    runtimeMappings,
    bucketsToObject
  }) {
    const esClient = await getEsClient();
    const results = await esClient.search({
      index: kibanaIndex,
      body: {
        query: {
          bool: {
            filter: [{
              term: {
                type: 'lens'
              }
            }]
          }
        },
        aggs: {
          groups: {
            filters: {
              filters: {
                last30: {
                  bool: {
                    filter: {
                      range: {
                        updated_at: {
                          gte: 'now-30d'
                        }
                      }
                    }
                  }
                },
                last90: {
                  bool: {
                    filter: {
                      range: {
                        updated_at: {
                          gte: 'now-90d'
                        }
                      }
                    }
                  }
                },
                overall: {
                  match_all: {}
                }
              }
            },
            aggs: { ...aggregations
            }
          }
        },
        runtime_mappings: { ...runtimeMappings
        },
        size: 0
      }
    }); // @ts-expect-error specify aggregations type explicitly

    const buckets = results.aggregations.groups.buckets; // eslint-disable-next-line @typescript-eslint/no-explicit-any

    function bucketsToObjectFallback(arg) {
      const obj = {};
      const key = Object.keys(arg).find(argKey => {
        var _arg$argKey, _arg$argKey$buckets;

        return (_arg$argKey = arg[argKey]) === null || _arg$argKey === void 0 ? void 0 : (_arg$argKey$buckets = _arg$argKey.buckets) === null || _arg$argKey$buckets === void 0 ? void 0 : _arg$argKey$buckets.length;
      });

      if (key) {
        arg[key].buckets.forEach(bucket => {
          var _obj$bucket$key;

          obj[bucket.key] = bucket.doc_count + ((_obj$bucket$key = obj[bucket.key]) !== null && _obj$bucket$key !== void 0 ? _obj$bucket$key : 0);
        });
      }

      return obj;
    }

    const mapFn = bucketsToObject !== null && bucketsToObject !== void 0 ? bucketsToObject : bucketsToObjectFallback;
    return {
      saved_overall: mapFn(buckets.overall),
      saved_30_days: mapFn(buckets.last30),
      saved_90_days: mapFn(buckets.last90),
      saved_overall_total: buckets.overall.doc_count,
      saved_30_days_total: buckets.last30.doc_count,
      saved_90_days_total: buckets.last90.doc_count
    };
  };
}