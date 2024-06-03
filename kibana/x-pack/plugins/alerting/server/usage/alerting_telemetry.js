"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getExecutionTimeoutsPerDayCount = getExecutionTimeoutsPerDayCount;
exports.getExecutionsPerDayCount = getExecutionsPerDayCount;
exports.getFailedAndUnrecognizedTasksPerDay = getFailedAndUnrecognizedTasksPerDay;
exports.getTotalCountAggregations = getTotalCountAggregations;
exports.getTotalCountInUse = getTotalCountInUse;
exports.parsePercentileAggsByRuleType = parsePercentileAggsByRuleType;

var _lodash = require("lodash");

var _alerting_usage_collector = require("./alerting_usage_collector");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const percentileFieldNameMapping = {
  '50.0': 'p50',
  '90.0': 'p90',
  '99.0': 'p99'
};
const ruleTypeMetric = {
  scripted_metric: {
    init_script: 'state.ruleTypes = [:]; state.namespaces = [:]',
    map_script: `
      String ruleType = doc['alert.alertTypeId'].value;
      String namespace = doc['namespaces'] !== null && doc['namespaces'].size() > 0 ? doc['namespaces'].value : 'default';
      state.ruleTypes.put(ruleType, state.ruleTypes.containsKey(ruleType) ? state.ruleTypes.get(ruleType) + 1 : 1);
      if (state.namespaces.containsKey(namespace) === false) {
        state.namespaces.put(namespace, 1);
      }
    `,
    // Combine script is executed per cluster, but we already have a key-value pair per cluster.
    // Despite docs that say this is optional, this script can't be blank.
    combine_script: 'return state',
    // Reduce script is executed across all clusters, so we need to add up all the total from each cluster
    // This also needs to account for having no data
    reduce_script: `
      HashMap result = new HashMap();
      HashMap combinedRuleTypes = new HashMap();
      HashMap combinedNamespaces = new HashMap();
      for (state in states) {
        for (String ruleType : state.ruleTypes.keySet()) {
          int ruleTypeCount = combinedRuleTypes.containsKey(ruleType) ? combinedRuleTypes.get(ruleType) + state.ruleTypes.get(ruleType) : state.ruleTypes.get(ruleType);
          combinedRuleTypes.put(ruleType, ruleTypeCount);
        }

        for (String namespace : state.namespaces.keySet()) {
          combinedNamespaces.put(namespace, 1);
        }
      }

      result.ruleTypes = combinedRuleTypes;
      result.namespaces = combinedNamespaces;
      return result;
    `
  }
};
const generatedActionsPercentilesAgg = {
  percentiles: {
    field: 'kibana.alert.rule.execution.metrics.number_of_generated_actions',
    percents: [50, 90, 99]
  }
};
const alertsPercentilesAgg = {
  percentiles: {
    field: 'kibana.alert.rule.execution.metrics.alert_counts.active',
    percents: [50, 90, 99]
  }
};
const ruleTypeExecutionsWithDurationMetric = {
  scripted_metric: {
    init_script: 'state.ruleTypes = [:]; state.ruleTypesDuration = [:]; state.ruleTypesEsSearchDuration = [:]; state.ruleTypesTotalSearchDuration = [:];',
    map_script: `
      String ruleType = doc['rule.category'].value;
      long duration = doc['event.duration'].value / (1000 * 1000);
      long esSearchDuration = doc['kibana.alert.rule.execution.metrics.es_search_duration_ms'].empty ? 0 : doc['kibana.alert.rule.execution.metrics.es_search_duration_ms'].value;
      long totalSearchDuration = doc['kibana.alert.rule.execution.metrics.total_search_duration_ms'].empty ? 0 : doc['kibana.alert.rule.execution.metrics.total_search_duration_ms'].value;
      state.ruleTypes.put(ruleType, state.ruleTypes.containsKey(ruleType) ? state.ruleTypes.get(ruleType) + 1 : 1);
      state.ruleTypesDuration.put(ruleType, state.ruleTypesDuration.containsKey(ruleType) ? state.ruleTypesDuration.get(ruleType) + duration : duration);
      state.ruleTypesEsSearchDuration.put(ruleType, state.ruleTypesEsSearchDuration.containsKey(ruleType) ? state.ruleTypesEsSearchDuration.get(ruleType) + esSearchDuration : esSearchDuration);
      state.ruleTypesTotalSearchDuration.put(ruleType, state.ruleTypesTotalSearchDuration.containsKey(ruleType) ? state.ruleTypesTotalSearchDuration.get(ruleType) + totalSearchDuration : totalSearchDuration);
    `,
    // Combine script is executed per cluster, but we already have a key-value pair per cluster.
    // Despite docs that say this is optional, this script can't be blank.
    combine_script: 'return state',
    // Reduce script is executed across all clusters, so we need to add up all the total from each cluster
    // This also needs to account for having no data
    reduce_script: `
      HashMap result = new HashMap();
      HashMap combinedRuleTypes = new HashMap();
      HashMap combinedRuleTypeDurations = new HashMap();
      HashMap combinedRuleTypeEsSearchDurations = new HashMap();
      HashMap combinedRuleTypeTotalSearchDurations = new HashMap();
      for (state in states) {
        for (String ruleType : state.ruleTypes.keySet()) {
          int ruleTypeCount = combinedRuleTypes.containsKey(ruleType) ? combinedRuleTypes.get(ruleType) + state.ruleTypes.get(ruleType) : state.ruleTypes.get(ruleType);
          combinedRuleTypes.put(ruleType, ruleTypeCount);
        }

        for (String ruleType : state.ruleTypesDuration.keySet()) {
          long ruleTypeDurationTotal = combinedRuleTypeDurations.containsKey(ruleType) ? combinedRuleTypeDurations.get(ruleType) + state.ruleTypesDuration.get(ruleType) : state.ruleTypesDuration.get(ruleType);
          combinedRuleTypeDurations.put(ruleType, ruleTypeDurationTotal);
        }

        for (String ruleType : state.ruleTypesEsSearchDuration.keySet()) {
          long ruleTypeEsSearchDurationTotal = combinedRuleTypeEsSearchDurations.containsKey(ruleType) ? combinedRuleTypeEsSearchDurations.get(ruleType) + state.ruleTypesEsSearchDuration.get(ruleType) : state.ruleTypesEsSearchDuration.get(ruleType);
          combinedRuleTypeEsSearchDurations.put(ruleType, ruleTypeEsSearchDurationTotal);
        }

        for (String ruleType : state.ruleTypesTotalSearchDuration.keySet()) {
          long ruleTypeTotalSearchDurationTotal = combinedRuleTypeTotalSearchDurations.containsKey(ruleType) ? combinedRuleTypeTotalSearchDurations.get(ruleType) + state.ruleTypesTotalSearchDuration.get(ruleType) : state.ruleTypesTotalSearchDuration.get(ruleType);
          combinedRuleTypeTotalSearchDurations.put(ruleType, ruleTypeTotalSearchDurationTotal);
        }
      }

      result.ruleTypes = combinedRuleTypes;
      result.ruleTypesDuration = combinedRuleTypeDurations;
      result.ruleTypesEsSearchDuration = combinedRuleTypeEsSearchDurations;
      result.ruleTypesTotalSearchDuration = combinedRuleTypeTotalSearchDurations;
      return result;
    `
  }
};
const ruleTypeExecutionsMetric = {
  scripted_metric: {
    init_script: 'state.ruleTypes = [:]',
    map_script: `
      String ruleType = doc['rule.category'].value;
      state.ruleTypes.put(ruleType, state.ruleTypes.containsKey(ruleType) ? state.ruleTypes.get(ruleType) + 1 : 1);
    `,
    // Combine script is executed per cluster, but we already have a key-value pair per cluster.
    // Despite docs that say this is optional, this script can't be blank.
    combine_script: 'return state',
    // Reduce script is executed across all clusters, so we need to add up all the total from each cluster
    // This also needs to account for having no data
    reduce_script: `
      HashMap result = new HashMap();
      HashMap combinedRuleTypes = new HashMap();
      for (state in states) {
        for (String ruleType : state.ruleTypes.keySet()) {
          int ruleTypeCount = combinedRuleTypes.containsKey(ruleType) ? combinedRuleTypes.get(ruleType) + state.ruleTypes.get(ruleType) : state.ruleTypes.get(ruleType);
          combinedRuleTypes.put(ruleType, ruleTypeCount);
        }
      }

      result.ruleTypes = combinedRuleTypes;
      return result;
    `
  }
};
const taskTypeExecutionsMetric = {
  scripted_metric: {
    init_script: 'state.statuses = [:]',
    map_script: `
      String status = doc['task.status'].value;
      String taskType = doc['task.taskType'].value.replace('alerting:', '');
      Map taskTypes = state.statuses.containsKey(status) ? state.statuses.get(status) : [:];
      taskTypes.put(taskType, taskTypes.containsKey(taskType) ? taskTypes.get(taskType) + 1 : 1);
      state.statuses.put(status, taskTypes);
    `,
    // Combine script is executed per cluster, but we already have a key-value pair per cluster.
    // Despite docs that say this is optional, this script can't be blank.
    combine_script: 'return state',
    // Reduce script is executed across all clusters, so we need to add up all the total from each cluster
    // This also needs to account for having no data
    reduce_script: `
      HashMap result = new HashMap();
      HashMap combinedStatuses = new HashMap();
      for (state in states) {
        for (String status : state.statuses.keySet()) {
          HashMap combinedTaskTypes = new HashMap();
          Map statusTaskTypes = state.statuses.get(status);
          for (String taskType : statusTaskTypes.keySet()) {
            int statusByTaskTypeCount = combinedTaskTypes.containsKey(taskType) ? combinedTaskTypes.get(taskType) + statusTaskTypes.get(taskType) : statusTaskTypes.get(taskType);
            combinedTaskTypes.put(taskType, statusByTaskTypeCount);
          }
          
          combinedStatuses.put(status, combinedTaskTypes);
        }
      }
      result.statuses = combinedStatuses;
      return result;
    `
  }
};
const ruleTypeFailureExecutionsMetric = {
  scripted_metric: {
    init_script: 'state.reasons = [:]',
    map_script: `
      if (doc['event.outcome'].value == 'failure') {
        String reason = doc['event.reason'].value;
        String ruleType = doc['rule.category'].value;
        Map ruleTypes = state.reasons.containsKey(reason) ? state.reasons.get(reason) : [:];
        ruleTypes.put(ruleType, ruleTypes.containsKey(ruleType) ? ruleTypes.get(ruleType) + 1 : 1);
        state.reasons.put(reason, ruleTypes);
      }
    `,
    // Combine script is executed per cluster, but we already have a key-value pair per cluster.
    // Despite docs that say this is optional, this script can't be blank.
    combine_script: 'return state',
    // Reduce script is executed across all clusters, so we need to add up all the total from each cluster
    // This also needs to account for having no data
    reduce_script: `
      HashMap result = new HashMap();
      HashMap combinedReasons = new HashMap();
      for (state in states) {
        for (String reason : state.reasons.keySet()) {
          HashMap combinedRuleTypes = new HashMap();
          Map reasonRuleTypes = state.reasons.get(reason);
          for (String ruleType : state.reasons.get(reason).keySet()) {
            int reasonByRuleTypeCount = combinedRuleTypes.containsKey(ruleType) ? combinedRuleTypes.get(ruleType) + reasonRuleTypes.get(ruleType) : reasonRuleTypes.get(ruleType);
            combinedRuleTypes.put(ruleType, reasonByRuleTypeCount);
          }
          
          combinedReasons.put(reason, combinedRuleTypes);
        }
      }
      result.reasons = combinedReasons;
      return result;
    `
  }
};

async function getTotalCountAggregations(esClient, kibanaIndex, logger) {
  try {
    const results = await esClient.search({
      index: kibanaIndex,
      body: {
        size: 0,
        query: {
          bool: {
            filter: [{
              term: {
                type: 'alert'
              }
            }]
          }
        },
        runtime_mappings: {
          alert_action_count: {
            type: 'long',
            script: {
              source: `
                def alert = params._source['alert'];
                if (alert != null) {
                  def actions = alert.actions;
                  if (actions != null) {
                    emit(actions.length);
                  } else {
                    emit(0);
                  }
                }`
            }
          },
          alert_interval: {
            type: 'long',
            script: {
              source: `
                int parsed = 0;
                if (doc['alert.schedule.interval'].size() > 0) {
                  def interval = doc['alert.schedule.interval'].value;
  
                  if (interval.length() > 1) {
                      // get last char
                      String timeChar = interval.substring(interval.length() - 1);
                      // remove last char
                      interval = interval.substring(0, interval.length() - 1);
  
                      if (interval.chars().allMatch(Character::isDigit)) {
                        // using of regex is not allowed in painless language
                        parsed = Integer.parseInt(interval);
  
                        if (timeChar.equals("s")) {
                          parsed = parsed;
                        } else if (timeChar.equals("m")) {
                          parsed = parsed * 60;
                        } else if (timeChar.equals("h")) {
                          parsed = parsed * 60 * 60;
                        } else if (timeChar.equals("d")) {
                          parsed = parsed * 24 * 60 * 60;
                        }
                        emit(parsed);
                      }
                  }
                }
                emit(parsed);
              `
            }
          },
          alert_throttle: {
            type: 'long',
            script: {
              source: `
                int parsed = 0;
                if (doc['alert.throttle'].size() > 0) {
                def throttle = doc['alert.throttle'].value;
  
                if (throttle.length() > 1) {
                    // get last char
                    String timeChar = throttle.substring(throttle.length() - 1);
                    // remove last char
                    throttle = throttle.substring(0, throttle.length() - 1);
  
                    if (throttle.chars().allMatch(Character::isDigit)) {
                      // using of regex is not allowed in painless language
                      parsed = Integer.parseInt(throttle);
  
                      if (timeChar.equals("s")) {
                        parsed = parsed;
                      } else if (timeChar.equals("m")) {
                        parsed = parsed * 60;
                      } else if (timeChar.equals("h")) {
                        parsed = parsed * 60 * 60;
                      } else if (timeChar.equals("d")) {
                        parsed = parsed * 24 * 60 * 60;
                      }
                      emit(parsed);
                    }
                }
              }
              emit(parsed);
              `
            }
          }
        },
        aggs: {
          byRuleTypeId: ruleTypeMetric,
          max_throttle_time: {
            max: {
              field: 'alert_throttle'
            }
          },
          min_throttle_time: {
            min: {
              field: 'alert_throttle'
            }
          },
          avg_throttle_time: {
            avg: {
              field: 'alert_throttle'
            }
          },
          max_interval_time: {
            max: {
              field: 'alert_interval'
            }
          },
          min_interval_time: {
            min: {
              field: 'alert_interval'
            }
          },
          avg_interval_time: {
            avg: {
              field: 'alert_interval'
            }
          },
          max_actions_count: {
            max: {
              field: 'alert_action_count'
            }
          },
          min_actions_count: {
            min: {
              field: 'alert_action_count'
            }
          },
          avg_actions_count: {
            avg: {
              field: 'alert_action_count'
            }
          }
        }
      }
    });
    const aggregations = results.aggregations;
    const totalRulesCount = Object.keys(aggregations.byRuleTypeId.value.ruleTypes).reduce((total, key) => parseInt(aggregations.byRuleTypeId.value.ruleTypes[key], 10) + total, 0);
    return {
      count_total: totalRulesCount,
      count_by_type: replaceDotSymbolsInRuleTypeIds(aggregations.byRuleTypeId.value.ruleTypes),
      throttle_time: {
        min: `${aggregations.min_throttle_time.value}s`,
        avg: `${aggregations.avg_throttle_time.value}s`,
        max: `${aggregations.max_throttle_time.value}s`
      },
      schedule_time: {
        min: `${aggregations.min_interval_time.value}s`,
        avg: `${aggregations.avg_interval_time.value}s`,
        max: `${aggregations.max_interval_time.value}s`
      },
      throttle_time_number_s: {
        min: aggregations.min_throttle_time.value,
        avg: aggregations.avg_throttle_time.value,
        max: aggregations.max_throttle_time.value
      },
      schedule_time_number_s: {
        min: aggregations.min_interval_time.value,
        avg: aggregations.avg_interval_time.value,
        max: aggregations.max_interval_time.value
      },
      connectors_per_alert: {
        min: aggregations.min_actions_count.value,
        avg: aggregations.avg_actions_count.value,
        max: aggregations.max_actions_count.value
      },
      count_rules_namespaces: 0
    };
  } catch (err) {
    logger.warn(`Error executing alerting telemetry task: getTotalCountAggregations - ${JSON.stringify(err)}`);
    return {
      count_total: 0,
      count_by_type: {},
      throttle_time: {
        min: '0s',
        avg: '0s',
        max: '0s'
      },
      schedule_time: {
        min: '0s',
        avg: '0s',
        max: '0s'
      },
      throttle_time_number_s: {
        min: 0,
        avg: 0,
        max: 0
      },
      schedule_time_number_s: {
        min: 0,
        avg: 0,
        max: 0
      },
      connectors_per_alert: {
        min: 0,
        avg: 0,
        max: 0
      },
      count_rules_namespaces: 0
    };
  }
}

async function getTotalCountInUse(esClient, kibanaIndex, logger) {
  try {
    const searchResult = await esClient.search({
      index: kibanaIndex,
      size: 0,
      body: {
        query: {
          bool: {
            filter: [{
              term: {
                type: 'alert'
              }
            }, {
              term: {
                'alert.enabled': true
              }
            }]
          }
        },
        aggs: {
          byRuleTypeId: ruleTypeMetric
        }
      }
    });
    const aggregations = searchResult.aggregations;
    return {
      countTotal: Object.keys(aggregations.byRuleTypeId.value.ruleTypes).reduce((total, key) => parseInt(aggregations.byRuleTypeId.value.ruleTypes[key], 10) + total, 0),
      countByType: replaceDotSymbolsInRuleTypeIds(aggregations.byRuleTypeId.value.ruleTypes),
      countNamespaces: Object.keys(aggregations.byRuleTypeId.value.namespaces).length
    };
  } catch (err) {
    logger.warn(`Error executing alerting telemetry task: getTotalCountInUse - ${JSON.stringify(err)}`);
    return {
      countTotal: 0,
      countByType: {},
      countNamespaces: 0
    };
  }
}

async function getExecutionsPerDayCount(esClient, eventLogIndex, logger) {
  try {
    const searchResult = await esClient.search({
      index: eventLogIndex,
      size: 0,
      body: {
        query: {
          bool: {
            filter: {
              bool: {
                must: [{
                  term: {
                    'event.action': 'execute'
                  }
                }, {
                  term: {
                    'event.provider': 'alerting'
                  }
                }, {
                  range: {
                    '@timestamp': {
                      gte: 'now-1d'
                    }
                  }
                }]
              }
            }
          }
        },
        aggs: {
          byRuleTypeId: ruleTypeExecutionsWithDurationMetric,
          failuresByReason: ruleTypeFailureExecutionsMetric,
          avgDuration: {
            avg: {
              field: 'event.duration'
            }
          },
          avgEsSearchDuration: {
            avg: {
              field: 'kibana.alert.rule.execution.metrics.es_search_duration_ms'
            }
          },
          avgTotalSearchDuration: {
            avg: {
              field: 'kibana.alert.rule.execution.metrics.total_search_duration_ms'
            }
          },
          percentileScheduledActions: generatedActionsPercentilesAgg,
          percentileAlerts: alertsPercentilesAgg,
          aggsByType: {
            terms: {
              field: 'rule.category',
              size: _alerting_usage_collector.NUM_ALERTING_RULE_TYPES
            },
            aggs: {
              percentileScheduledActions: generatedActionsPercentilesAgg,
              percentileAlerts: alertsPercentilesAgg
            }
          }
        }
      }
    });
    const executionsAggregations = searchResult.aggregations;
    const aggsAvgExecutionTime = Math.round( // @ts-expect-error aggegation type is not specified
    // convert nanoseconds to milliseconds
    searchResult.aggregations.avgDuration.value / (1000 * 1000));
    const aggsAvgEsSearchDuration = Math.round( // @ts-expect-error aggegation type is not specified
    searchResult.aggregations.avgEsSearchDuration.value);
    const aggsAvgTotalSearchDuration = Math.round( // @ts-expect-error aggegation type is not specified
    searchResult.aggregations.avgTotalSearchDuration.value);
    const aggsGeneratedActionsPercentiles = // @ts-expect-error aggegation type is not specified
    searchResult.aggregations.percentileScheduledActions.values;
    const aggsAlertsPercentiles = // @ts-expect-error aggegation type is not specified
    searchResult.aggregations.percentileAlerts.values;
    const aggsByTypeBuckets = // @ts-expect-error aggegation type is not specified
    searchResult.aggregations.aggsByType.buckets;
    const executionFailuresAggregations = searchResult.aggregations;
    return {
      countTotal: Object.keys(executionsAggregations.byRuleTypeId.value.ruleTypes).reduce((total, key) => parseInt(executionsAggregations.byRuleTypeId.value.ruleTypes[key], 10) + total, 0),
      countByType: replaceDotSymbolsInRuleTypeIds(executionsAggregations.byRuleTypeId.value.ruleTypes),
      countTotalFailures: Object.keys(executionFailuresAggregations.failuresByReason.value.reasons).reduce((total, reason) => {
        const byRuleTypesRefs = executionFailuresAggregations.failuresByReason.value.reasons[reason];
        const countByRuleTypes = Object.keys(byRuleTypesRefs).reduce((totalByType, ruleType) => parseInt(byRuleTypesRefs[ruleType] + totalByType, 10), 0);
        return countByRuleTypes + total;
      }, 0),
      countFailuresByReason: Object.keys(executionFailuresAggregations.failuresByReason.value.reasons).reduce( // ES DSL aggregations are returned as `any` by esClient.search
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (obj, reason) => {
        const byRuleTypesRefs = executionFailuresAggregations.failuresByReason.value.reasons[reason];
        const countByRuleTypes = Object.keys(byRuleTypesRefs).reduce((totalByType, ruleType) => parseInt(byRuleTypesRefs[ruleType] + totalByType, 10), 0);
        return { ...obj,
          [replaceDotSymbols(reason)]: countByRuleTypes
        };
      }, {}),
      countFailuresByReasonByType: Object.keys(executionFailuresAggregations.failuresByReason.value.reasons).reduce( // ES DSL aggregations are returned as `any` by esClient.search
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (obj, key) => ({ ...obj,
        [key]: replaceDotSymbolsInRuleTypeIds(executionFailuresAggregations.failuresByReason.value.reasons[key])
      }), {}),
      avgExecutionTime: aggsAvgExecutionTime,
      avgExecutionTimeByType: Object.keys(executionsAggregations.byRuleTypeId.value.ruleTypes).reduce( // ES DSL aggregations are returned as `any` by esClient.search
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (obj, key) => ({ ...obj,
        [replaceDotSymbols(key)]: Math.round(executionsAggregations.byRuleTypeId.value.ruleTypesDuration[key] / parseInt(executionsAggregations.byRuleTypeId.value.ruleTypes[key], 10))
      }), {}),
      avgEsSearchDuration: aggsAvgEsSearchDuration,
      avgEsSearchDurationByType: Object.keys(executionsAggregations.byRuleTypeId.value.ruleTypes).reduce( // ES DSL aggregations are returned as `any` by esClient.search
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (obj, key) => ({ ...obj,
        [replaceDotSymbols(key)]: Math.round(executionsAggregations.byRuleTypeId.value.ruleTypesEsSearchDuration[key] / parseInt(executionsAggregations.byRuleTypeId.value.ruleTypes[key], 10))
      }), {}),
      avgTotalSearchDuration: aggsAvgTotalSearchDuration,
      avgTotalSearchDurationByType: Object.keys(executionsAggregations.byRuleTypeId.value.ruleTypes).reduce( // ES DSL aggregations are returned as `any` by esClient.search
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (obj, key) => ({ ...obj,
        [replaceDotSymbols(key)]: Math.round(executionsAggregations.byRuleTypeId.value.ruleTypesTotalSearchDuration[key] / parseInt(executionsAggregations.byRuleTypeId.value.ruleTypes[key], 10))
      }), {}),
      generatedActionsPercentiles: Object.keys(aggsGeneratedActionsPercentiles).reduce( // ES DSL aggregations are returned as `any` by esClient.search
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (acc, curr) => ({ ...acc,
        ...(percentileFieldNameMapping[curr] ? {
          [percentileFieldNameMapping[curr]]: aggsGeneratedActionsPercentiles[curr]
        } : {})
      }), {}),
      generatedActionsPercentilesByType: parsePercentileAggsByRuleType(aggsByTypeBuckets, 'percentileScheduledActions.values'),
      alertsPercentiles: Object.keys(aggsAlertsPercentiles).reduce( // ES DSL aggregations are returned as `any` by esClient.search
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (acc, curr) => ({ ...acc,
        ...(percentileFieldNameMapping[curr] ? {
          [percentileFieldNameMapping[curr]]: aggsAlertsPercentiles[curr]
        } : {})
      }), {}),
      alertsPercentilesByType: parsePercentileAggsByRuleType(aggsByTypeBuckets, 'percentileAlerts.values')
    };
  } catch (err) {
    logger.warn(`Error executing alerting telemetry task: getExecutionsPerDayCount - ${JSON.stringify(err)}`);
    return {
      countTotal: 0,
      countByType: {},
      countTotalFailures: 0,
      countFailuresByReason: {},
      countFailuresByReasonByType: {},
      avgExecutionTime: 0,
      avgExecutionTimeByType: {},
      avgEsSearchDuration: 0,
      avgEsSearchDurationByType: {},
      avgTotalSearchDuration: 0,
      avgTotalSearchDurationByType: {},
      generatedActionsPercentiles: {},
      generatedActionsPercentilesByType: {},
      alertsPercentiles: {},
      alertsPercentilesByType: {}
    };
  }
}

async function getExecutionTimeoutsPerDayCount(esClient, eventLogIndex, logger) {
  try {
    const searchResult = await esClient.search({
      index: eventLogIndex,
      size: 0,
      body: {
        query: {
          bool: {
            filter: {
              bool: {
                must: [{
                  term: {
                    'event.action': 'execute-timeout'
                  }
                }, {
                  term: {
                    'event.provider': 'alerting'
                  }
                }, {
                  range: {
                    '@timestamp': {
                      gte: 'now-1d'
                    }
                  }
                }]
              }
            }
          }
        },
        aggs: {
          byRuleTypeId: ruleTypeExecutionsMetric
        }
      }
    });
    const executionsAggregations = searchResult.aggregations;
    return {
      countTotal: Object.keys(executionsAggregations.byRuleTypeId.value.ruleTypes).reduce((total, key) => parseInt(executionsAggregations.byRuleTypeId.value.ruleTypes[key], 10) + total, 0),
      countByType: replaceDotSymbolsInRuleTypeIds(executionsAggregations.byRuleTypeId.value.ruleTypes)
    };
  } catch (err) {
    logger.warn(`Error executing alerting telemetry task: getExecutionsTimeoutsPerDayCount - ${JSON.stringify(err)}`);
    return {
      countTotal: 0,
      countByType: {}
    };
  }
}

async function getFailedAndUnrecognizedTasksPerDay(esClient, taskManagerIndex, logger) {
  try {
    const searchResult = await esClient.search({
      index: taskManagerIndex,
      size: 0,
      body: {
        query: {
          bool: {
            must: [{
              bool: {
                should: [{
                  term: {
                    'task.status': 'unrecognized'
                  }
                }, {
                  term: {
                    'task.status': 'failed'
                  }
                }]
              }
            }, {
              wildcard: {
                'task.taskType': {
                  value: 'alerting:*'
                }
              }
            }, {
              range: {
                'task.runAt': {
                  gte: 'now-1d'
                }
              }
            }]
          }
        },
        aggs: {
          byTaskTypeId: taskTypeExecutionsMetric
        }
      }
    });
    const executionsAggregations = searchResult.aggregations;
    return {
      countTotal: Object.keys(executionsAggregations.byTaskTypeId.value.statuses).reduce((total, status) => {
        const byRuleTypesRefs = executionsAggregations.byTaskTypeId.value.statuses[status];
        const countByRuleTypes = Object.keys(byRuleTypesRefs).reduce((totalByType, ruleType) => parseInt(byRuleTypesRefs[ruleType] + totalByType, 10), 0);
        return countByRuleTypes + total;
      }, 0),
      countByStatus: Object.keys(executionsAggregations.byTaskTypeId.value.statuses).reduce( // ES DSL aggregations are returned as `any` by esClient.search
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (obj, status) => {
        const byRuleTypesRefs = executionsAggregations.byTaskTypeId.value.statuses[status];
        const countByRuleTypes = Object.keys(byRuleTypesRefs).reduce((totalByType, ruleType) => parseInt(byRuleTypesRefs[ruleType] + totalByType, 10), 0);
        return { ...obj,
          [status]: countByRuleTypes
        };
      }, {}),
      countByStatusByRuleType: Object.keys(executionsAggregations.byTaskTypeId.value.statuses).reduce( // ES DSL aggregations are returned as `any` by esClient.search
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (obj, key) => ({ ...obj,
        [key]: replaceDotSymbolsInRuleTypeIds(executionsAggregations.byTaskTypeId.value.statuses[key])
      }), {})
    };
  } catch (err) {
    logger.warn(`Error executing alerting telemetry task: getFailedAndUnrecognizedTasksPerDay - ${JSON.stringify(err)}`);
    return {
      countTotal: 0,
      countByStatus: {},
      countByStatusByRuleType: {}
    };
  }
}

function replaceDotSymbols(strToReplace) {
  return strToReplace.replaceAll('.', '__');
}

function replaceDotSymbolsInRuleTypeIds(ruleTypeIdObj) {
  return Object.keys(ruleTypeIdObj).reduce((obj, key) => ({ ...obj,
    [replaceDotSymbols(key)]: ruleTypeIdObj[key]
  }), {});
}

function parsePercentileAggsByRuleType(aggsByType, path) {
  return (aggsByType !== null && aggsByType !== void 0 ? aggsByType : []).reduce((acc, curr) => {
    const percentiles = (0, _lodash.get)(curr, path, {});
    return (0, _lodash.merge)(acc, Object.keys(percentiles).reduce((pacc, pcurr) => {
      var _percentiles$pcurr;

      return { ...pacc,
        ...(percentileFieldNameMapping[pcurr] ? {
          [percentileFieldNameMapping[pcurr]]: {
            [replaceDotSymbols(curr.key)]: (_percentiles$pcurr = percentiles[pcurr]) !== null && _percentiles$pcurr !== void 0 ? _percentiles$pcurr : 0
          }
        } : {})
      };
    }, {}));
  }, {
    p50: {},
    p90: {},
    p99: {}
  });
}