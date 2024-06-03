"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerClusterCollector = registerClusterCollector;

var _statsLite = _interopRequireDefault(require("stats-lite"));

var _server = require("../../../task_manager/server");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


function registerClusterCollector({
  monitoringCollection,
  core
}) {
  monitoringCollection.registerMetric({
    type: 'cluster_rules',
    schema: {
      overdue: {
        count: {
          type: 'long'
        },
        delay: {
          p50: {
            type: 'long'
          },
          p99: {
            type: 'long'
          }
        }
      }
    },
    fetch: async () => {
      const [_, pluginStart] = await core.getStartServices();
      const now = +new Date();
      const {
        docs: overdueTasks
      } = await pluginStart.taskManager.fetch({
        query: {
          bool: {
            must: [{
              term: {
                'task.scope': {
                  value: 'alerting'
                }
              }
            }, {
              bool: {
                should: [_server.IdleTaskWithExpiredRunAt, _server.RunningOrClaimingTaskWithExpiredRetryAt]
              }
            }]
          }
        }
      });
      const overdueTasksDelay = overdueTasks.map(overdueTask => now - +new Date(overdueTask.runAt || overdueTask.retryAt));
      const metrics = {
        overdue: {
          count: overdueTasks.length,
          delay: {
            p50: _statsLite.default.percentile(overdueTasksDelay, 0.5),
            p99: _statsLite.default.percentile(overdueTasksDelay, 0.99)
          }
        }
      };

      if (isNaN(metrics.overdue.delay.p50)) {
        metrics.overdue.delay.p50 = 0;
      }

      if (isNaN(metrics.overdue.delay.p99)) {
        metrics.overdue.delay.p99 = 0;
      }

      return metrics;
    }
  });
}