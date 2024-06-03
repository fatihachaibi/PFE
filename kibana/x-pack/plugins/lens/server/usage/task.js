"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TASK_ID = void 0;
exports.getDailyEvents = getDailyEvents;
exports.initializeLensTelemetry = initializeLensTelemetry;
exports.scheduleLensTelemetry = scheduleLensTelemetry;
exports.telemetryTaskRunner = telemetryTaskRunner;

var _moment = _interopRequireDefault(require("moment"));

var _visualization_counts = require("./visualization_counts");

var _multiterms_count = require("./multiterms_count");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */
// This task is responsible for running daily and aggregating all the Lens click event objects
// into daily rolled-up documents, which will be used in reporting click stats


const TELEMETRY_TASK_TYPE = 'lens_telemetry';
const TASK_ID = `Lens-${TELEMETRY_TASK_TYPE}`;
exports.TASK_ID = TASK_ID;

function initializeLensTelemetry(logger, core, taskManager) {
  registerLensTelemetryTask(logger, core, taskManager);
}

function scheduleLensTelemetry(logger, taskManager) {
  if (taskManager) {
    scheduleTasks(logger, taskManager);
  }
}

function registerLensTelemetryTask(logger, core, taskManager) {
  taskManager.registerTaskDefinitions({
    [TELEMETRY_TASK_TYPE]: {
      title: 'Lens usage fetch task',
      timeout: '1m',
      createTaskRunner: telemetryTaskRunner(logger, core)
    }
  });
}

async function scheduleTasks(logger, taskManager) {
  try {
    await taskManager.ensureScheduled({
      id: TASK_ID,
      taskType: TELEMETRY_TASK_TYPE,
      state: {
        byDate: {},
        suggestionsByDate: {},
        saved: {},
        runs: 0
      },
      params: {}
    });
  } catch (e) {
    logger.debug(`Error scheduling task, received ${e.message}`);
  }
}

async function getDailyEvents(kibanaIndex, getEsClient) {
  const esClient = await getEsClient();
  const aggs = {
    daily: {
      date_histogram: {
        field: 'lens-ui-telemetry.date',
        calendar_interval: '1d',
        min_doc_count: 1
      },
      aggs: {
        groups: {
          filters: {
            filters: {
              suggestionEvents: {
                bool: {
                  filter: {
                    term: {
                      'lens-ui-telemetry.type': 'suggestion'
                    }
                  }
                }
              },
              regularEvents: {
                bool: {
                  must_not: {
                    term: {
                      'lens-ui-telemetry.type': 'suggestion'
                    }
                  }
                }
              }
            }
          },
          aggs: {
            names: {
              terms: {
                field: 'lens-ui-telemetry.name',
                size: 100
              },
              aggs: {
                sums: {
                  sum: {
                    field: 'lens-ui-telemetry.count'
                  }
                }
              }
            }
          }
        }
      }
    }
  };
  const metrics = await esClient.search({
    index: kibanaIndex,
    body: {
      query: {
        bool: {
          filter: [{
            term: {
              type: 'lens-ui-telemetry'
            }
          }, {
            range: {
              'lens-ui-telemetry.date': {
                gte: 'now-90d/d'
              }
            }
          }]
        }
      },
      aggs
    },
    size: 0
  });
  const byDateByType = {};
  const suggestionsByDate = {}; // @ts-expect-error no way to declare aggregations for search response

  metrics.aggregations.daily.buckets.forEach(daily => {
    const byType = byDateByType[daily.key] || {}; // @ts-expect-error no way to declare aggregations for search response

    daily.groups.buckets.regularEvents.names.buckets.forEach(bucket => {
      byType[bucket.key] = (bucket.sums.value || 0) + (byType[daily.key] || 0);
    });
    byDateByType[daily.key] = byType;
    const suggestionsByType = suggestionsByDate[daily.key] || {}; // @ts-expect-error no way to declare aggregations for search response

    daily.groups.buckets.suggestionEvents.names.buckets.forEach(bucket => {
      suggestionsByType[bucket.key] = (bucket.sums.value || 0) + (suggestionsByType[daily.key] || 0);
    });
    suggestionsByDate[daily.key] = suggestionsByType;
  }); // Always delete old date because we don't report it

  await esClient.deleteByQuery({
    index: kibanaIndex,
    wait_for_completion: true,
    body: {
      query: {
        bool: {
          filter: [{
            term: {
              type: 'lens-ui-telemetry'
            }
          }, {
            range: {
              'lens-ui-telemetry.date': {
                lt: 'now-90d/d'
              }
            }
          }]
        }
      }
    }
  });
  return {
    byDate: byDateByType,
    suggestionsByDate
  };
}

function telemetryTaskRunner(logger, core) {
  return ({
    taskInstance
  }) => {
    const {
      state
    } = taskInstance;

    const getEsClient = async () => {
      const [coreStart] = await core.getStartServices();
      return coreStart.elasticsearch.client.asInternalUser;
    };

    return {
      async run() {
        const kibanaIndex = core.savedObjects.getKibanaIndex();
        return Promise.all([getDailyEvents(kibanaIndex, getEsClient), (0, _visualization_counts.getVisualizationCounts)(getEsClient, kibanaIndex), (0, _multiterms_count.getMultitermsCounts)(getEsClient, kibanaIndex)]).then(([lensTelemetry, lensVisualizations, lensMultiterms]) => {
          return {
            state: {
              runs: (state.runs || 0) + 1,
              byDate: lensTelemetry && lensTelemetry.byDate || {},
              suggestionsByDate: lensTelemetry && lensTelemetry.suggestionsByDate || {},
              saved: lensVisualizations,
              multiterms: lensMultiterms
            },
            runAt: getNextMidnight()
          };
        }).catch(errMsg => logger.warn(`Error executing lens telemetry task: ${errMsg}`));
      },

      async cancel() {}

    };
  };
}

function getNextMidnight() {
  return (0, _moment.default)().add(1, 'day').startOf('day').toDate();
}