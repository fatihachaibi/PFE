"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeFindingsStatsTask = removeFindingsStatsTask;
exports.scheduleFindingsStatsTask = scheduleFindingsStatsTask;
exports.setupFindingsStatsTask = setupFindingsStatsTask;
exports.taskRunner = taskRunner;

var _securitysolutionEsUtils = require("@kbn/securitysolution-es-utils");

var _constants = require("../../common/constants");

var _task_manager_util = require("../lib/task_manager_util");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const CSPM_FINDINGS_STATS_TASK_ID = 'cloud_security_posture-findings_stats';
const CSPM_FINDINGS_STATS_TASK_TYPE = 'cloud_security_posture-findings';
const CSPM_FINDINGS_STATS_INTERVAL = '5m';

async function scheduleFindingsStatsTask(taskManager, logger) {
  await (0, _task_manager_util.scheduleTaskSafe)(taskManager, {
    id: CSPM_FINDINGS_STATS_TASK_ID,
    taskType: CSPM_FINDINGS_STATS_TASK_TYPE,
    schedule: {
      interval: CSPM_FINDINGS_STATS_INTERVAL
    },
    state: {},
    params: {}
  }, logger);
}

async function removeFindingsStatsTask(taskManager, logger) {
  await (0, _task_manager_util.removeTaskSafe)(taskManager, CSPM_FINDINGS_STATS_TASK_ID, logger);
}

function setupFindingsStatsTask(taskManager, coreStartServices, logger) {
  try {
    taskManager.registerTaskDefinitions({
      [CSPM_FINDINGS_STATS_TASK_TYPE]: {
        title: 'Aggregate latest findings index for score calculation',
        createTaskRunner: taskRunner(coreStartServices, logger)
      }
    });
    logger.info(`Task: ${CSPM_FINDINGS_STATS_TASK_TYPE} registered successfully`);
  } catch (errMsg) {
    const error = (0, _securitysolutionEsUtils.transformError)(errMsg);
    logger.error(`Failed to register task: ${CSPM_FINDINGS_STATS_TASK_TYPE}, ${error.message}`);
  }
}

function taskRunner(coreStartServices, logger) {
  return ({
    taskInstance
  }) => {
    const {
      state
    } = taskInstance;
    return {
      async run() {
        try {
          logger.info(`Runs task: ${CSPM_FINDINGS_STATS_TASK_TYPE}`);
          const esClient = (await coreStartServices)[0].elasticsearch.client.asInternalUser;
          const status = await aggregateLatestFindings(esClient, state.runs, logger);
          return {
            state: {
              runs: (state.runs || 0) + 1,
              health_status: status
            }
          };
        } catch (errMsg) {
          const error = (0, _securitysolutionEsUtils.transformError)(errMsg);
          logger.warn(`Error executing alerting health check task: ${error.message}`);
          return {
            state: {
              runs: (state.runs || 0) + 1,
              health_status: 'error'
            }
          };
        }
      }

    };
  };
}

const aggregateLatestFindings = async (esClient, stateRuns, logger) => {
  try {
    const startAggTime = performance.now();
    const evaluationsQueryResult = await esClient.search(getScoreQuery());

    if (!evaluationsQueryResult.aggregations) {
      logger.warn(`No data found in latest findings index`);
      return 'warning';
    }

    const totalAggregationTime = performance.now() - startAggTime;
    logger.debug(`Task ${CSPM_FINDINGS_STATS_TASK_TYPE}, ${Number(totalAggregationTime).toFixed(2)} milliseconds for aggregation`);
    const clustersStats = Object.fromEntries(evaluationsQueryResult.aggregations.score_by_cluster_id.buckets.map(clusterStats => {
      return [clusterStats.key, {
        total_findings: clusterStats.total_findings.value,
        passed_findings: clusterStats.passed_findings.doc_count,
        failed_findings: clusterStats.failed_findings.doc_count
      }];
    }));
    const startIndexTime = performance.now();
    await esClient.index({
      index: _constants.BENCHMARK_SCORE_INDEX_DEFAULT_NS,
      document: {
        passed_findings: evaluationsQueryResult.aggregations.passed_findings.doc_count,
        failed_findings: evaluationsQueryResult.aggregations.failed_findings.doc_count,
        total_findings: evaluationsQueryResult.aggregations.total_findings.value,
        score_by_cluster_id: clustersStats
      }
    });
    const totalIndexTime = Number(performance.now() - startIndexTime).toFixed(2);
    logger.debug(`Task ${CSPM_FINDINGS_STATS_TASK_TYPE}, ${totalIndexTime} milliseconds for indexing`);
    const totalTaskTime = Number(performance.now() - startAggTime).toFixed(2);
    logger.debug(`Task ${CSPM_FINDINGS_STATS_TASK_TYPE}, took ${totalTaskTime} milliseconds to run`);
    return 'ok';
  } catch (errMsg) {
    const error = (0, _securitysolutionEsUtils.transformError)(errMsg);
    logger.error(`failed to aggregate latest findings: ${error.message}`);
    return 'error';
  }
};

const getScoreQuery = () => ({
  index: _constants.LATEST_FINDINGS_INDEX_DEFAULT_NS,
  size: 0,
  query: {
    match_all: {}
  },
  aggs: {
    total_findings: {
      value_count: {
        field: 'result.evaluation.keyword'
      }
    },
    passed_findings: {
      filter: {
        term: {
          'result.evaluation.keyword': 'passed'
        }
      }
    },
    failed_findings: {
      filter: {
        term: {
          'result.evaluation.keyword': 'failed'
        }
      }
    },
    score_by_cluster_id: {
      terms: {
        field: 'cluster_id.keyword'
      },
      aggregations: {
        total_findings: {
          value_count: {
            field: 'result.evaluation.keyword'
          }
        },
        passed_findings: {
          filter: {
            term: {
              'result.evaluation.keyword': 'passed'
            }
          }
        },
        failed_findings: {
          filter: {
            term: {
              'result.evaluation.keyword': 'failed'
            }
          }
        }
      }
    }
  }
});