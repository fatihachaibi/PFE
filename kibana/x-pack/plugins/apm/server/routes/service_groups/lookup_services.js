"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.lookupServices = lookupServices;

var _server = require("../../../../observability/server");

var _elasticsearch_fieldnames = require("../../../common/elasticsearch_fieldnames");

var _processor_event = require("../../../common/processor_event");

var _service_groups = require("../../../common/service_groups");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


async function lookupServices({
  setup,
  kuery,
  start,
  end
}) {
  var _response$aggregation, _response$aggregation2;

  const {
    apmEventClient
  } = setup;
  const response = await apmEventClient.search('lookup_services', {
    apm: {
      events: [_processor_event.ProcessorEvent.metric, _processor_event.ProcessorEvent.transaction, _processor_event.ProcessorEvent.span, _processor_event.ProcessorEvent.error]
    },
    body: {
      size: 0,
      query: {
        bool: {
          filter: [...(0, _server.rangeQuery)(start, end), ...(0, _server.kqlQuery)(kuery)]
        }
      },
      aggs: {
        services: {
          terms: {
            field: _elasticsearch_fieldnames.SERVICE_NAME,
            size: _service_groups.MAX_NUMBER_OF_SERVICE_GROUPS
          },
          aggs: {
            environments: {
              terms: {
                field: _elasticsearch_fieldnames.SERVICE_ENVIRONMENT
              }
            },
            latest: {
              top_metrics: {
                metrics: [{
                  field: _elasticsearch_fieldnames.AGENT_NAME
                }],
                sort: {
                  '@timestamp': 'desc'
                }
              }
            }
          }
        }
      }
    }
  });
  return (_response$aggregation = (_response$aggregation2 = response.aggregations) === null || _response$aggregation2 === void 0 ? void 0 : _response$aggregation2.services.buckets.map(bucket => {
    return {
      serviceName: bucket.key,
      environments: bucket.environments.buckets.map(envBucket => envBucket.key),
      agentName: bucket.latest.top[0].metrics[_elasticsearch_fieldnames.AGENT_NAME]
    };
  })) !== null && _response$aggregation !== void 0 ? _response$aggregation : [];
}