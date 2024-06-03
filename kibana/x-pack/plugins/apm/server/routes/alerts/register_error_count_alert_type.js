"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerErrorCountAlertType = registerErrorCountAlertType;

var _configSchema = require("@kbn/config-schema");

var _rxjs = require("rxjs");

var _ruleDataUtils = require("@kbn/rule-data-utils");

var _server = require("../../../../rule_registry/server");

var _server2 = require("../../../../observability/server");

var _environment_filter_values = require("../../../common/environment_filter_values");

var _formatters = require("../../../common/utils/formatters");

var _alert_types = require("../../../common/alert_types");

var _elasticsearch_fieldnames = require("../../../common/elasticsearch_fieldnames");

var _processor_event = require("../../../common/processor_event");

var _environment_query = require("../../../common/utils/environment_query");

var _get_apm_indices = require("../settings/apm_indices/get_apm_indices");

var _action_variables = require("./action_variables");

var _alerting_es_client = require("./alerting_es_client");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const paramsSchema = _configSchema.schema.object({
  windowSize: _configSchema.schema.number(),
  windowUnit: _configSchema.schema.string(),
  threshold: _configSchema.schema.number(),
  serviceName: _configSchema.schema.maybe(_configSchema.schema.string()),
  environment: _configSchema.schema.string()
});

const alertTypeConfig = _alert_types.ALERT_TYPES_CONFIG[_alert_types.AlertType.ErrorCount];

function registerErrorCountAlertType({
  alerting,
  logger,
  ruleDataClient,
  config$,
  basePath
}) {
  const createLifecycleRuleType = (0, _server.createLifecycleRuleTypeFactory)({
    ruleDataClient,
    logger
  });
  alerting.registerType(createLifecycleRuleType({
    id: _alert_types.AlertType.ErrorCount,
    name: alertTypeConfig.name,
    actionGroups: alertTypeConfig.actionGroups,
    defaultActionGroupId: alertTypeConfig.defaultActionGroupId,
    validate: {
      params: paramsSchema
    },
    actionVariables: {
      context: [_action_variables.apmActionVariables.serviceName, _action_variables.apmActionVariables.environment, _action_variables.apmActionVariables.threshold, _action_variables.apmActionVariables.triggerValue, _action_variables.apmActionVariables.interval, _action_variables.apmActionVariables.reason, _action_variables.apmActionVariables.viewInAppUrl]
    },
    producer: _alert_types.APM_SERVER_FEATURE_ID,
    minimumLicenseRequired: 'basic',
    isExportable: true,
    executor: async ({
      services,
      params
    }) => {
      var _response$aggregation, _response$aggregation2;

      const config = await (0, _rxjs.firstValueFrom)(config$);
      const ruleParams = params;
      const indices = await (0, _get_apm_indices.getApmIndices)({
        config,
        savedObjectsClient: services.savedObjectsClient
      });
      const searchParams = {
        index: indices.error,
        size: 0,
        body: {
          query: {
            bool: {
              filter: [{
                range: {
                  '@timestamp': {
                    gte: `now-${ruleParams.windowSize}${ruleParams.windowUnit}`
                  }
                }
              }, {
                term: {
                  [_elasticsearch_fieldnames.PROCESSOR_EVENT]: _processor_event.ProcessorEvent.error
                }
              }, ...(0, _server2.termQuery)(_elasticsearch_fieldnames.SERVICE_NAME, ruleParams.serviceName), ...(0, _environment_query.environmentQuery)(ruleParams.environment)]
            }
          },
          aggs: {
            error_counts: {
              multi_terms: {
                terms: [{
                  field: _elasticsearch_fieldnames.SERVICE_NAME
                }, {
                  field: _elasticsearch_fieldnames.SERVICE_ENVIRONMENT,
                  missing: _environment_filter_values.ENVIRONMENT_NOT_DEFINED.value
                }],
                size: 10000
              }
            }
          }
        }
      };
      const response = await (0, _alerting_es_client.alertingEsClient)({
        scopedClusterClient: services.scopedClusterClient,
        params: searchParams
      });
      const errorCountResults = (_response$aggregation = (_response$aggregation2 = response.aggregations) === null || _response$aggregation2 === void 0 ? void 0 : _response$aggregation2.error_counts.buckets.map(bucket => {
        const [serviceName, environment] = bucket.key;
        return {
          serviceName,
          environment,
          errorCount: bucket.doc_count
        };
      })) !== null && _response$aggregation !== void 0 ? _response$aggregation : [];
      errorCountResults.filter(result => result.errorCount >= ruleParams.threshold).forEach(result => {
        var _getEnvironmentEsFiel;

        const {
          serviceName,
          environment,
          errorCount
        } = result;
        const alertReason = (0, _alert_types.formatErrorCountReason)({
          serviceName,
          threshold: ruleParams.threshold,
          measured: errorCount,
          windowSize: ruleParams.windowSize,
          windowUnit: ruleParams.windowUnit
        });
        const relativeViewInAppUrl = (0, _formatters.getAlertUrlErrorCount)(serviceName, (_getEnvironmentEsFiel = (0, _environment_filter_values.getEnvironmentEsField)(environment)) === null || _getEnvironmentEsFiel === void 0 ? void 0 : _getEnvironmentEsFiel[_elasticsearch_fieldnames.SERVICE_ENVIRONMENT]);
        const viewInAppUrl = basePath.publicBaseUrl ? new URL(basePath.prepend(relativeViewInAppUrl), basePath.publicBaseUrl).toString() : relativeViewInAppUrl;
        services.alertWithLifecycle({
          id: [_alert_types.AlertType.ErrorCount, serviceName, environment].filter(name => name).join('_'),
          fields: {
            [_elasticsearch_fieldnames.SERVICE_NAME]: serviceName,
            ...(0, _environment_filter_values.getEnvironmentEsField)(environment),
            [_elasticsearch_fieldnames.PROCESSOR_EVENT]: _processor_event.ProcessorEvent.error,
            [_ruleDataUtils.ALERT_EVALUATION_VALUE]: errorCount,
            [_ruleDataUtils.ALERT_EVALUATION_THRESHOLD]: ruleParams.threshold,
            [_ruleDataUtils.ALERT_REASON]: alertReason
          }
        }).scheduleActions(alertTypeConfig.defaultActionGroupId, {
          serviceName,
          environment: (0, _environment_filter_values.getEnvironmentLabel)(environment),
          threshold: ruleParams.threshold,
          triggerValue: errorCount,
          interval: `${ruleParams.windowSize}${ruleParams.windowUnit}`,
          reason: alertReason,
          viewInAppUrl
        });
      });
      return {};
    }
  }));
}