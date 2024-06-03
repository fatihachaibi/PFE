"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getVisualizationCounts = getVisualizationCounts;

var _saved_objects_metric_factory = require("./saved_objects_metric_factory");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


function getVisualizationCounts(getEsClient, kibanaIndex) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function bucketsToObject(arg) {
    const obj = {};
    arg.byType.buckets.forEach(bucket => {
      var _obj$bucket$key;

      obj[bucket.key] = bucket.doc_count + ((_obj$bucket$key = obj[bucket.key]) !== null && _obj$bucket$key !== void 0 ? _obj$bucket$key : 0);
    });

    if (arg.usesFormula.doc_count > 0) {
      obj.formula = arg.usesFormula.doc_count;
    }

    return obj;
  }

  return (0, _saved_objects_metric_factory.createMetricQuery)(getEsClient, kibanaIndex)({
    aggregations: {
      byType: {
        terms: {
          // The script relies on having flattened keyword mapping for the Lens saved object,
          // without this kind of mapping we would not be able to access `lens.state` in painless
          script: `
          String visType = doc['lens.visualizationType'].value;
          String niceType = visType == 'lnsXY' ? doc['lens.state.visualization.preferredSeriesType'].value : visType;
          return niceType;
          `,
          size: 100
        }
      },
      usesFormula: {
        filter: {
          match: {
            operation_type: 'formula'
          }
        }
      }
    },
    runtimeMappings: {
      operation_type: {
        type: 'keyword',
        script: {
          lang: 'painless',
          source: `try {
            if(doc['lens.state'].size() == 0) return;
            HashMap layers = params['_source'].get('lens').get('state').get('datasourceStates').get('indexpattern').get('layers');
            for(layerId in layers.keySet()) {
              HashMap columns = layers.get(layerId).get('columns');
              for(columnId in columns.keySet()) {
                emit(columns.get(columnId).get('operationType'))
              }
            }
          } catch(Exception e) {}`
        }
      }
    },
    bucketsToObject
  });
}