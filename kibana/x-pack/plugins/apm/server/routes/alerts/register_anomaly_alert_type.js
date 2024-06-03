"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerAnomalyAlertType = registerAnomalyAlertType;

var _datemath = _interopRequireDefault(require("@kbn/datemath"));

var _configSchema = require("@kbn/config-schema");

var _ruleDataUtils = require("@kbn/rule-data-utils");

var _lodash = require("lodash");

var _server = require("../../../../observability/server");

var _server2 = require("../../../../rule_registry/server");

var _alert_types = require("../../../common/alert_types");

var _anomaly_detection = require("../../../common/anomaly_detection");

var _apm_ml_detectors = require("../../../common/anomaly_detection/apm_ml_detectors");

var _elasticsearch_fieldnames = require("../../../common/elasticsearch_fieldnames");

var _environment_filter_values = require("../../../common/environment_filter_values");

var _ml_constants = require("../../../common/ml_constants");

var _processor_event = require("../../../common/processor_event");

var _as_mutable_array = require("../../../common/utils/as_mutable_array");

var _formatters = require("../../../common/utils/formatters");

var _get_service_anomalies = require("../service_map/get_service_anomalies");

var _action_variables = require("./action_variables");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const paramsSchema = _configSchema.schema.object({
  serviceName: _configSchema.schema.maybe(_configSchema.schema.string()),
  transactionType: _configSchema.schema.maybe(_configSchema.schema.string()),
  windowSize: _configSchema.schema.number(),
  windowUnit: _configSchema.schema.string(),
  environment: _configSchema.schema.string(),
  anomalySeverityType: _configSchema.schema.oneOf([_configSchema.schema.literal(_ml_constants.ANOMALY_SEVERITY.CRITICAL), _configSchema.schema.literal(_ml_constants.ANOMALY_SEVERITY.MAJOR), _configSchema.schema.literal(_ml_constants.ANOMALY_SEVERITY.MINOR), _configSchema.schema.literal(_ml_constants.ANOMALY_SEVERITY.WARNING)])
});

const alertTypeConfig = _alert_types.ALERT_TYPES_CONFIG[_alert_types.AlertType.Anomaly];

function registerAnomalyAlertType({
  logger,
  ruleDataClient,
  alerting,
  ml,
  basePath
}) {
  const createLifecycleRuleType = (0, _server2.createLifecycleRuleTypeFactory)({
    logger,
    ruleDataClient
  });
  alerting.registerType(createLifecycleRuleType({
    id: _alert_types.AlertType.Anomaly,
    name: alertTypeConfig.name,
    actionGroups: alertTypeConfig.actionGroups,
    defaultActionGroupId: alertTypeConfig.defaultActionGroupId,
    validate: {
      params: paramsSchema
    },
    actionVariables: {
      context: [_action_variables.apmActionVariables.serviceName, _action_variables.apmActionVariables.transactionType, _action_variables.apmActionVariables.environment, _action_variables.apmActionVariables.threshold, _action_variables.apmActionVariables.triggerValue, _action_variables.apmActionVariables.reason, _action_variables.apmActionVariables.viewInAppUrl]
    },
    producer: 'apm',
    minimumLicenseRequired: 'basic',
    isExportable: true,
    executor: async ({
      services,
      params
    }) => {
      var _datemath$parse, _response$aggregation, _response$aggregation2;

      if (!ml) {
        return {};
      }

      const ruleParams = params;
      const request = {};
      const {
        mlAnomalySearch
      } = ml.mlSystemProvider(request, services.savedObjectsClient);
      const anomalyDetectors = ml.anomalyDetectorsProvider(request, services.savedObjectsClient);
      const mlJobs = await (0, _get_service_anomalies.getMLJobs)(anomalyDetectors, ruleParams.environment);

      const selectedOption = _alert_types.ANOMALY_ALERT_SEVERITY_TYPES.find(option => option.type === ruleParams.anomalySeverityType);

      if (!selectedOption) {
        throw new Error(`Anomaly alert severity type ${ruleParams.anomalySeverityType} is not supported.`);
      }

      const threshold = selectedOption.threshold;

      if (mlJobs.length === 0) {
        return {};
      } // start time must be at least 30, does like this to support rules created before this change where default was 15


      const startTime = Math.min(_datemath.default.parse('now-30m').valueOf(), ((_datemath$parse = _datemath.default.parse(`now-${ruleParams.windowSize}${ruleParams.windowUnit}`)) === null || _datemath$parse === void 0 ? void 0 : _datemath$parse.valueOf()) || 0);
      const jobIds = mlJobs.map(job => job.jobId);
      const anomalySearchParams = {
        body: {
          size: 0,
          query: {
            bool: {
              filter: [{
                term: {
                  result_type: 'record'
                }
              }, {
                terms: {
                  job_id: jobIds
                }
              }, {
                term: {
                  is_interim: false
                }
              }, {
                range: {
                  timestamp: {
                    gte: startTime,
                    format: 'epoch_millis'
                  }
                }
              }, ...(0, _server.termQuery)('partition_field_value', ruleParams.serviceName), ...(0, _server.termQuery)('by_field_value', ruleParams.transactionType), ...(0, _server.termQuery)('detector_index', (0, _apm_ml_detectors.getApmMlDetectorIndex)(_apm_ml_detectors.ApmMlDetectorType.txLatency))]
            }
          },
          aggs: {
            anomaly_groups: {
              multi_terms: {
                terms: [{
                  field: 'partition_field_value'
                }, {
                  field: 'by_field_value'
                }, {
                  field: 'job_id'
                }],
                size: 10000
              },
              aggs: {
                latest_score: {
                  top_metrics: {
                    metrics: (0, _as_mutable_array.asMutableArray)([{
                      field: 'record_score'
                    }, {
                      field: 'partition_field_value'
                    }, {
                      field: 'by_field_value'
                    }, {
                      field: 'job_id'
                    }]),
                    sort: {
                      timestamp: 'desc'
                    }
                  }
                }
              }
            }
          }
        }
      };
      const response = await mlAnomalySearch(anomalySearchParams, []);
      const anomalies = (_response$aggregation = (_response$aggregation2 = response.aggregations) === null || _response$aggregation2 === void 0 ? void 0 : _response$aggregation2.anomaly_groups.buckets.map(bucket => {
        const latest = bucket.latest_score.top[0].metrics;
        const job = mlJobs.find(j => j.jobId === latest.job_id);

        if (!job) {
          logger.warn(`Could not find matching job for job id ${latest.job_id}`);
          return undefined;
        }

        return {
          serviceName: latest.partition_field_value,
          transactionType: latest.by_field_value,
          environment: job.environment,
          score: latest.record_score
        };
      }).filter(anomaly => anomaly ? anomaly.score >= threshold : false)) !== null && _response$aggregation !== void 0 ? _response$aggregation : [];
      (0, _lodash.compact)(anomalies).forEach(anomaly => {
        var _getEnvironmentEsFiel;

        const {
          serviceName,
          environment,
          transactionType,
          score
        } = anomaly;
        const severityLevel = (0, _anomaly_detection.getSeverity)(score);
        const reasonMessage = (0, _alert_types.formatAnomalyReason)({
          measured: score,
          serviceName,
          severityLevel,
          windowSize: params.windowSize,
          windowUnit: params.windowUnit
        });
        const relativeViewInAppUrl = (0, _formatters.getAlertUrlTransaction)(serviceName, (_getEnvironmentEsFiel = (0, _environment_filter_values.getEnvironmentEsField)(environment)) === null || _getEnvironmentEsFiel === void 0 ? void 0 : _getEnvironmentEsFiel[_elasticsearch_fieldnames.SERVICE_ENVIRONMENT], transactionType);
        const viewInAppUrl = basePath.publicBaseUrl ? new URL(basePath.prepend(relativeViewInAppUrl), basePath.publicBaseUrl).toString() : relativeViewInAppUrl;
        services.alertWithLifecycle({
          id: [_alert_types.AlertType.Anomaly, serviceName, environment, transactionType].filter(name => name).join('_'),
          fields: {
            [_elasticsearch_fieldnames.SERVICE_NAME]: serviceName,
            ...(0, _environment_filter_values.getEnvironmentEsField)(environment),
            [_elasticsearch_fieldnames.TRANSACTION_TYPE]: transactionType,
            [_elasticsearch_fieldnames.PROCESSOR_EVENT]: _processor_event.ProcessorEvent.transaction,
            [_ruleDataUtils.ALERT_SEVERITY]: severityLevel,
            [_ruleDataUtils.ALERT_EVALUATION_VALUE]: score,
            [_ruleDataUtils.ALERT_EVALUATION_THRESHOLD]: threshold,
            [_ruleDataUtils.ALERT_REASON]: reasonMessage
          }
        }).scheduleActions(alertTypeConfig.defaultActionGroupId, {
          serviceName,
          transactionType,
          environment: (0, _environment_filter_values.getEnvironmentLabel)(environment),
          threshold: selectedOption === null || selectedOption === void 0 ? void 0 : selectedOption.label,
          triggerValue: severityLevel,
          reason: reasonMessage,
          viewInAppUrl
        });
      });
      return {};
    }
  }));
}