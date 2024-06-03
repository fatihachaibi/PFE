"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.previewRulesRoute = void 0;

var _moment = _interopRequireDefault(require("moment"));

var _uuid = _interopRequireDefault(require("uuid"));

var _securitysolutionEsUtils = require("@kbn/securitysolution-es-utils");

var _common = require("../../../../../../alerting/common");

var _utils = require("../utils");

var _rule_converters = require("../../schemas/rule_converters");

var _preview_rule_execution_logger = require("../../signals/preview/preview_rule_execution_logger");

var _utils2 = require("../../signals/utils");

var _authz = require("../../../machine_learning/authz");

var _validation = require("../../../machine_learning/validation");

var _route_validation = require("../../../../utils/build_validation/route_validation");

var _create_rules_type_dependents = require("../../../../../common/detection_engine/schemas/request/create_rules_type_dependents");

var _constants = require("../../../../../common/constants");

var _wrap_scoped_cluster_client = require("./utils/wrap_scoped_cluster_client");

var _request = require("../../../../../common/detection_engine/schemas/request");

var _common2 = require("../../../../../common/detection_engine/schemas/common");

var _alert_instance_factory_stub = require("../../signals/preview/alert_instance_factory_stub");

var _rule_types = require("../../rule_types");

var _create_security_rule_type_wrapper = require("../../rule_types/create_security_rule_type_wrapper");

var _constants2 = require("../../../../../common/detection_engine/constants");

var _wrap_search_source_client = require("./utils/wrap_search_source_client");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const PREVIEW_TIMEOUT_SECONDS = 60;

const previewRulesRoute = async (router, config, ml, security, ruleOptions, securityRuleTypeOptions, previewRuleDataClient, getStartServices) => {
  router.post({
    path: _constants.DETECTION_ENGINE_RULES_PREVIEW,
    validate: {
      body: (0, _route_validation.buildRouteValidation)(_request.previewRulesSchema)
    },
    options: {
      tags: ['access:securitySolution']
    }
  }, async (context, request, response) => {
    const siemResponse = (0, _utils.buildSiemResponse)(response);
    const validationErrors = (0, _create_rules_type_dependents.createRuleValidateTypeDependents)(request.body);
    const coreContext = await context.core;

    if (validationErrors.length) {
      return siemResponse.error({
        statusCode: 400,
        body: validationErrors
      });
    }

    try {
      var _security$authc$getCu;

      const [, {
        data,
        security: securityService
      }] = await getStartServices();
      const searchSourceClient = await data.search.searchSource.asScoped(request);
      const savedObjectsClient = coreContext.savedObjects.client;
      const siemClient = (await context.securitySolution).getAppClient();
      let invocationCount = request.body.invocationCount;

      if (![_constants2.RULE_PREVIEW_INVOCATION_COUNT.HOUR, _constants2.RULE_PREVIEW_INVOCATION_COUNT.DAY, _constants2.RULE_PREVIEW_INVOCATION_COUNT.WEEK, _constants2.RULE_PREVIEW_INVOCATION_COUNT.MONTH].includes(invocationCount)) {
        return response.ok({
          body: {
            logs: [{
              errors: ['Invalid invocation count'],
              warnings: [],
              duration: 0
            }]
          }
        });
      }

      const internalRule = (0, _rule_converters.convertCreateAPIToInternalSchema)(request.body, siemClient);
      const previewRuleParams = internalRule.params;
      const mlAuthz = (0, _authz.buildMlAuthz)({
        license: (await context.licensing).license,
        ml,
        request,
        savedObjectsClient
      });
      (0, _validation.throwAuthzError)(await mlAuthz.validateRuleType(internalRule.params.type));
      const listsContext = await context.lists;
      await (listsContext === null || listsContext === void 0 ? void 0 : listsContext.getExceptionListClient().createEndpointList());
      const spaceId = siemClient.getSpaceId();

      const previewId = _uuid.default.v4();

      const username = security === null || security === void 0 ? void 0 : (_security$authc$getCu = security.authc.getCurrentUser(request)) === null || _security$authc$getCu === void 0 ? void 0 : _security$authc$getCu.username;
      const loggedStatusChanges = [];
      const previewRuleExecutionLogger = (0, _preview_rule_execution_logger.createPreviewRuleExecutionLogger)(loggedStatusChanges);
      const runState = {};
      const logs = [];
      let isAborted = false;
      const {
        hasAllRequested
      } = await securityService.authz.checkPrivilegesWithRequest(request).atSpace(spaceId, {
        elasticsearch: {
          index: {
            [`${_constants.DEFAULT_PREVIEW_INDEX}`]: ['read'],
            [`.internal${_constants.DEFAULT_PREVIEW_INDEX}-`]: ['read']
          },
          cluster: []
        }
      });

      if (!hasAllRequested) {
        return response.ok({
          body: {
            logs: [{
              errors: ['Missing "read" privileges for the ".preview.alerts-security.alerts" or ".internal.preview.alerts-security.alerts" indices. Without these privileges you cannot use the Rule Preview feature.'],
              warnings: [],
              duration: 0
            }]
          }
        });
      }

      const previewRuleTypeWrapper = (0, _create_security_rule_type_wrapper.createSecurityRuleTypeWrapper)({ ...securityRuleTypeOptions,
        ruleDataClient: previewRuleDataClient,
        ruleExecutionLoggerFactory: previewRuleExecutionLogger.factory
      });

      const runExecutors = async (executor, ruleTypeId, ruleTypeName, params, shouldWriteAlerts, alertFactory) => {
        var _parseDuration;

        let statePreview = runState;
        const abortController = new AbortController();
        setTimeout(() => {
          abortController.abort();
          isAborted = true;
        }, PREVIEW_TIMEOUT_SECONDS * 1000);
        const startedAt = (0, _moment.default)();
        const parsedDuration = (_parseDuration = (0, _common.parseDuration)(internalRule.schedule.interval)) !== null && _parseDuration !== void 0 ? _parseDuration : 0;
        startedAt.subtract(_moment.default.duration(parsedDuration * (invocationCount - 1)));
        let previousStartedAt = null;
        const rule = { ...internalRule,
          createdAt: new Date(),
          createdBy: username !== null && username !== void 0 ? username : 'preview-created-by',
          producer: 'preview-producer',
          ruleTypeId,
          ruleTypeName,
          updatedAt: new Date(),
          updatedBy: username !== null && username !== void 0 ? username : 'preview-updated-by'
        };
        let invocationStartTime;

        while (invocationCount > 0 && !isAborted) {
          invocationStartTime = (0, _moment.default)();
          statePreview = await executor({
            alertId: previewId,
            createdBy: rule.createdBy,
            executionId: _uuid.default.v4(),
            name: rule.name,
            params,
            previousStartedAt,
            rule,
            services: {
              shouldWriteAlerts,
              shouldStopExecution: () => false,
              alertFactory,
              savedObjectsClient: coreContext.savedObjects.client,
              scopedClusterClient: (0, _wrap_scoped_cluster_client.wrapScopedClusterClient)({
                abortController,
                scopedClusterClient: coreContext.elasticsearch.client
              }),
              searchSourceClient: (0, _wrap_search_source_client.wrapSearchSourceClient)({
                abortController,
                searchSourceClient
              }),
              uiSettingsClient: coreContext.uiSettings.client
            },
            spaceId,
            startedAt: startedAt.toDate(),
            state: statePreview,
            tags: [],
            updatedBy: rule.updatedBy
          });
          const errors = loggedStatusChanges.filter(item => item.newStatus === _common2.RuleExecutionStatus.failed).map(item => {
            var _item$message;

            return (_item$message = item.message) !== null && _item$message !== void 0 ? _item$message : 'Unkown Error';
          });
          const warnings = loggedStatusChanges.filter(item => item.newStatus === _common2.RuleExecutionStatus['partial failure']).map(item => {
            var _item$message2;

            return (_item$message2 = item.message) !== null && _item$message2 !== void 0 ? _item$message2 : 'Unknown Warning';
          });
          logs.push({
            errors,
            warnings,
            startedAt: startedAt.toDate().toISOString(),
            duration: (0, _moment.default)().diff(invocationStartTime, 'milliseconds')
          });
          loggedStatusChanges.length = 0;

          if (errors.length) {
            break;
          }

          previousStartedAt = startedAt.toDate();
          startedAt.add((0, _utils2.parseInterval)(internalRule.schedule.interval));
          invocationCount--;
        }
      };

      switch (previewRuleParams.type) {
        case 'query':
          const queryAlertType = previewRuleTypeWrapper((0, _rule_types.createQueryAlertType)(ruleOptions));
          await runExecutors(queryAlertType.executor, queryAlertType.id, queryAlertType.name, previewRuleParams, () => true, {
            create: _alert_instance_factory_stub.alertInstanceFactoryStub,
            done: () => ({
              getRecoveredAlerts: () => []
            })
          });
          break;

        case 'threshold':
          const thresholdAlertType = previewRuleTypeWrapper((0, _rule_types.createThresholdAlertType)(ruleOptions));
          await runExecutors(thresholdAlertType.executor, thresholdAlertType.id, thresholdAlertType.name, previewRuleParams, () => true, {
            create: _alert_instance_factory_stub.alertInstanceFactoryStub,
            done: () => ({
              getRecoveredAlerts: () => []
            })
          });
          break;

        case 'threat_match':
          const threatMatchAlertType = previewRuleTypeWrapper((0, _rule_types.createIndicatorMatchAlertType)(ruleOptions));
          await runExecutors(threatMatchAlertType.executor, threatMatchAlertType.id, threatMatchAlertType.name, previewRuleParams, () => true, {
            create: _alert_instance_factory_stub.alertInstanceFactoryStub,
            done: () => ({
              getRecoveredAlerts: () => []
            })
          });
          break;

        case 'eql':
          const eqlAlertType = previewRuleTypeWrapper((0, _rule_types.createEqlAlertType)(ruleOptions));
          await runExecutors(eqlAlertType.executor, eqlAlertType.id, eqlAlertType.name, previewRuleParams, () => true, {
            create: _alert_instance_factory_stub.alertInstanceFactoryStub,
            done: () => ({
              getRecoveredAlerts: () => []
            })
          });
          break;

        case 'machine_learning':
          const mlAlertType = previewRuleTypeWrapper((0, _rule_types.createMlAlertType)(ruleOptions));
          await runExecutors(mlAlertType.executor, mlAlertType.id, mlAlertType.name, previewRuleParams, () => true, {
            create: _alert_instance_factory_stub.alertInstanceFactoryStub,
            done: () => ({
              getRecoveredAlerts: () => []
            })
          });
          break;
      } // Refreshes alias to ensure index is able to be read before returning


      await coreContext.elasticsearch.client.asInternalUser.indices.refresh({
        index: previewRuleDataClient.indexNameWithNamespace(spaceId)
      }, {
        ignore: [404]
      });
      return response.ok({
        body: {
          previewId,
          logs,
          isAborted
        }
      });
    } catch (err) {
      const error = (0, _securitysolutionEsUtils.transformError)(err);
      return siemResponse.error({
        body: {
          errors: [error.message]
        },
        statusCode: error.statusCode
      });
    }
  });
};

exports.previewRulesRoute = previewRulesRoute;