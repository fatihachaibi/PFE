"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.performBulkActionRoute = exports.migrateRuleActions = void 0;

var _lodash = require("lodash");

var _moment = _interopRequireDefault(require("moment"));

var _securitysolutionEsUtils = require("@kbn/securitysolution-es-utils");

var _common = require("../../../../../../../../src/plugins/kibana_utils/common");

var _constants = require("../../../../../common/constants");

var _schemas = require("../../../../../common/detection_engine/schemas/common/schemas");

var _perform_bulk_action_schema = require("../../../../../common/detection_engine/schemas/request/perform_bulk_action_schema");

var _route_validation = require("../../../../utils/build_validation/route_validation");

var _route_limited_concurrency_tag = require("../../../../utils/route_limited_concurrency_tag");

var _promise_pool = require("../../../../utils/promise_pool");

var _authz = require("../../../machine_learning/authz");

var _validation = require("../../../machine_learning/validation");

var _delete_rules = require("../../rules/delete_rules");

var _duplicate_rule = require("../../rules/duplicate_rule");

var _find_rules = require("../../rules/find_rules");

var _read_rules = require("../../rules/read_rules");

var _bulk_edit_rules = require("../../rules/bulk_edit_rules");

var _get_export_by_object_ids = require("../../rules/get_export_by_object_ids");

var _utils = require("../utils");

var _rule_converters = require("../../schemas/rule_converters");

var _utils2 = require("../../rules/utils");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const MAX_RULES_TO_PROCESS_TOTAL = 10000;
const MAX_ERROR_MESSAGE_LENGTH = 1000;
const MAX_ROUTE_CONCURRENCY = 5;

const normalizeErrorResponse = errors => {
  const errorsMap = new Map();
  errors.forEach(errorObj => {
    let message;
    let statusCode = 500;
    let rule; // transform different error types (PromisePoolError<string> | PromisePoolError<RuleAlertType> | BulkEditError)
    // to one common used in NormalizedRuleError

    if ('rule' in errorObj) {
      rule = errorObj.rule;
      message = errorObj.message;
    } else {
      const {
        error,
        item
      } = errorObj;
      const transformedError = error instanceof Error ? (0, _securitysolutionEsUtils.transformError)(error) : {
        message: String(error),
        statusCode: 500
      };
      message = transformedError.message;
      statusCode = transformedError.statusCode; // The promise pool item is either a rule ID string or a rule object. We have
      // string IDs when we fail to fetch rules. Rule objects come from other
      // situations when we found a rule but failed somewhere else.

      rule = typeof item === 'string' ? {
        id: item
      } : {
        id: item.id,
        name: item.name
      };
    }

    if (errorsMap.has(message)) {
      var _errorsMap$get;

      (_errorsMap$get = errorsMap.get(message)) === null || _errorsMap$get === void 0 ? void 0 : _errorsMap$get.rules.push(rule);
    } else {
      errorsMap.set(message, {
        message: (0, _lodash.truncate)(message, {
          length: MAX_ERROR_MESSAGE_LENGTH
        }),
        status_code: statusCode,
        rules: [rule]
      });
    }
  });
  return Array.from(errorsMap, ([_, normalizedError]) => normalizedError);
};

const buildBulkResponse = (response, {
  errors = [],
  updated = [],
  created = [],
  deleted = []
}) => {
  const numSucceeded = updated.length + created.length + deleted.length;
  const numFailed = errors.length;
  const summary = {
    failed: numFailed,
    succeeded: numSucceeded,
    total: numSucceeded + numFailed
  };
  const results = {
    updated: updated.map(rule => (0, _rule_converters.internalRuleToAPIResponse)(rule)),
    created: created.map(rule => (0, _rule_converters.internalRuleToAPIResponse)(rule)),
    deleted: deleted.map(rule => (0, _rule_converters.internalRuleToAPIResponse)(rule))
  };

  if (numFailed > 0) {
    return response.custom({
      headers: {
        'content-type': 'application/json'
      },
      body: Buffer.from(JSON.stringify({
        message: summary.succeeded > 0 ? 'Bulk edit partially failed' : 'Bulk edit failed',
        status_code: 500,
        attributes: {
          errors: normalizeErrorResponse(errors),
          results,
          summary
        }
      })),
      statusCode: 500
    });
  }

  return response.ok({
    body: {
      success: true,
      rules_count: summary.total,
      attributes: {
        results,
        summary
      }
    }
  });
};

const fetchRulesByQueryOrIds = async ({
  query,
  ids,
  rulesClient,
  abortSignal
}) => {
  if (ids) {
    return (0, _promise_pool.initPromisePool)({
      concurrency: _constants.MAX_RULES_TO_UPDATE_IN_PARALLEL,
      items: ids,
      executor: async id => {
        const rule = await (0, _read_rules.readRules)({
          id,
          rulesClient,
          ruleId: undefined
        });

        if (rule == null) {
          throw Error('Rule not found');
        }

        return rule;
      },
      abortSignal
    });
  }

  const {
    data,
    total
  } = await (0, _find_rules.findRules)({
    rulesClient,
    perPage: MAX_RULES_TO_PROCESS_TOTAL,
    filter: query,
    page: undefined,
    sortField: undefined,
    sortOrder: undefined,
    fields: undefined
  });

  if (total > MAX_RULES_TO_PROCESS_TOTAL) {
    throw new _securitysolutionEsUtils.BadRequestError(`More than ${MAX_RULES_TO_PROCESS_TOTAL} rules matched the filter query. Try to narrow it down.`);
  }

  return {
    results: data.map(rule => ({
      item: rule.id,
      result: rule
    })),
    errors: []
  };
};
/**
 * Helper method to migrate any legacy actions a rule may have. If no actions or no legacy actions
 * no migration is performed.
 * @params rulesClient
 * @params savedObjectsClient
 * @params rule - rule to be migrated
 * @returns The migrated rule
 */


const migrateRuleActions = async ({
  rulesClient,
  savedObjectsClient,
  rule
}) => {
  const migratedRule = await (0, _utils2.legacyMigrate)({
    rulesClient,
    savedObjectsClient,
    rule
  }); // This should only be hit if `rule` passed into `legacyMigrate`
  // is `null` or `rule.id` is null which right now, as typed, should not occur
  // but catching if does, in which case something upstream would be breaking down

  if (migratedRule == null) {
    throw new Error(`An error occurred processing rule with id:${rule.id}`);
  }

  return migratedRule;
};

exports.migrateRuleActions = migrateRuleActions;

const performBulkActionRoute = (router, ml, logger) => {
  router.post({
    path: _constants.DETECTION_ENGINE_RULES_BULK_ACTION,
    validate: {
      body: (0, _route_validation.buildRouteValidation)(_perform_bulk_action_schema.performBulkActionSchema)
    },
    options: {
      tags: ['access:securitySolution', (0, _route_limited_concurrency_tag.routeLimitedConcurrencyTag)(MAX_ROUTE_CONCURRENCY)],
      timeout: {
        idleSocket: _moment.default.duration(15, 'minutes').asMilliseconds()
      }
    }
  }, async (context, request, response) => {
    const {
      body
    } = request;
    const siemResponse = (0, _utils.buildSiemResponse)(response);

    if (body !== null && body !== void 0 && body.ids && body.ids.length > _constants.RULES_TABLE_MAX_PAGE_SIZE) {
      return siemResponse.error({
        body: `More than ${_constants.RULES_TABLE_MAX_PAGE_SIZE} ids sent for bulk edit action.`,
        statusCode: 400
      });
    }

    if (body !== null && body !== void 0 && body.ids && body.query !== undefined) {
      return siemResponse.error({
        body: `Both query and ids are sent. Define either ids or query in request payload.`,
        statusCode: 400
      });
    }

    const abortController = new AbortController(); // subscribing to completed$, because it handles both cases when request was completed and aborted.
    // when route is finished by timeout, aborted$ is not getting fired

    request.events.completed$.subscribe(() => abortController.abort());

    try {
      var _ctx$lists;

      const ctx = await context.resolve(['core', 'securitySolution', 'alerting', 'licensing', 'lists']);
      const rulesClient = ctx.alerting.getRulesClient();
      const ruleExecutionLog = ctx.securitySolution.getRuleExecutionLog();
      const exceptionsClient = (_ctx$lists = ctx.lists) === null || _ctx$lists === void 0 ? void 0 : _ctx$lists.getExceptionListClient();
      const savedObjectsClient = ctx.core.savedObjects.client;
      const mlAuthz = (0, _authz.buildMlAuthz)({
        license: ctx.licensing.license,
        ml,
        request,
        savedObjectsClient
      });
      const query = body.query !== '' ? body.query : undefined; // handling this action before switch statement as bulkEditRules fetch rules within
      // rulesClient method, hence there is no need to use fetchRulesByQueryOrIds utility

      if (body.action === _schemas.BulkAction.edit) {
        const {
          rules,
          errors
        } = await (0, _bulk_edit_rules.bulkEditRules)({
          rulesClient,
          filter: query,
          ids: body.ids,
          actions: body.edit,
          mlAuthz
        }); // migrate legacy rule actions

        const migrationOutcome = await (0, _promise_pool.initPromisePool)({
          concurrency: _constants.MAX_RULES_TO_UPDATE_IN_PARALLEL,
          items: rules,
          executor: async rule => {
            // actions only get fired when rule running, so we should be fine to migrate only enabled
            if (rule.enabled) {
              return migrateRuleActions({
                rulesClient,
                savedObjectsClient,
                rule
              });
            } else {
              return rule;
            }
          },
          abortSignal: abortController.signal
        });
        return buildBulkResponse(response, {
          updated: migrationOutcome.results.filter(({
            result
          }) => result).map(({
            result
          }) => result),
          errors: [...errors, ...migrationOutcome.errors]
        });
      }

      const fetchRulesOutcome = await fetchRulesByQueryOrIds({
        rulesClient,
        query,
        ids: body.ids,
        abortSignal: abortController.signal
      });
      const rules = fetchRulesOutcome.results.map(({
        result
      }) => result);
      let bulkActionOutcome;
      let updated = [];
      let created = [];
      let deleted = [];

      switch (body.action) {
        case _schemas.BulkAction.enable:
          bulkActionOutcome = await (0, _promise_pool.initPromisePool)({
            concurrency: _constants.MAX_RULES_TO_UPDATE_IN_PARALLEL,
            items: rules,
            executor: async rule => {
              const migratedRule = await migrateRuleActions({
                rulesClient,
                savedObjectsClient,
                rule
              });

              if (!migratedRule.enabled) {
                (0, _validation.throwAuthzError)(await mlAuthz.validateRuleType(migratedRule.params.type));
                await rulesClient.enable({
                  id: migratedRule.id
                });
              }

              return { ...migratedRule,
                enabled: true
              };
            },
            abortSignal: abortController.signal
          });
          updated = bulkActionOutcome.results.map(({
            result
          }) => result).filter(rule => rule !== null);
          break;

        case _schemas.BulkAction.disable:
          bulkActionOutcome = await (0, _promise_pool.initPromisePool)({
            concurrency: _constants.MAX_RULES_TO_UPDATE_IN_PARALLEL,
            items: rules,
            executor: async rule => {
              const migratedRule = await migrateRuleActions({
                rulesClient,
                savedObjectsClient,
                rule
              });

              if (migratedRule.enabled) {
                (0, _validation.throwAuthzError)(await mlAuthz.validateRuleType(migratedRule.params.type));
                await rulesClient.disable({
                  id: migratedRule.id
                });
              }

              return { ...migratedRule,
                enabled: false
              };
            },
            abortSignal: abortController.signal
          });
          updated = bulkActionOutcome.results.map(({
            result
          }) => result).filter(rule => rule !== null);
          break;

        case _schemas.BulkAction.delete:
          bulkActionOutcome = await (0, _promise_pool.initPromisePool)({
            concurrency: _constants.MAX_RULES_TO_UPDATE_IN_PARALLEL,
            items: rules,
            executor: async rule => {
              const migratedRule = await migrateRuleActions({
                rulesClient,
                savedObjectsClient,
                rule
              });
              await (0, _delete_rules.deleteRules)({
                ruleId: migratedRule.id,
                rulesClient,
                ruleExecutionLog
              });
              return null;
            },
            abortSignal: abortController.signal
          });
          deleted = bulkActionOutcome.results.map(({
            item
          }) => item).filter(rule => rule !== null);
          break;

        case _schemas.BulkAction.duplicate:
          bulkActionOutcome = await (0, _promise_pool.initPromisePool)({
            concurrency: _constants.MAX_RULES_TO_UPDATE_IN_PARALLEL,
            items: rules,
            executor: async rule => {
              const migratedRule = await migrateRuleActions({
                rulesClient,
                savedObjectsClient,
                rule
              });
              (0, _validation.throwAuthzError)(await mlAuthz.validateRuleType(migratedRule.params.type));
              const createdRule = await rulesClient.create({
                data: (0, _duplicate_rule.duplicateRule)(migratedRule)
              });
              return createdRule;
            },
            abortSignal: abortController.signal
          });
          created = bulkActionOutcome.results.map(({
            result
          }) => result).filter(rule => rule !== null);
          break;

        case _schemas.BulkAction.export:
          const exported = await (0, _get_export_by_object_ids.getExportByObjectIds)(rulesClient, exceptionsClient, savedObjectsClient, rules.map(({
            params
          }) => ({
            rule_id: params.ruleId
          })), logger);
          const responseBody = `${exported.rulesNdjson}${exported.exceptionLists}${exported.exportDetails}`;
          return response.ok({
            headers: {
              'Content-Disposition': `attachment; filename="rules_export.ndjson"`,
              'Content-Type': 'application/ndjson'
            },
            body: responseBody
          });
      }

      if (abortController.signal.aborted === true) {
        throw new _common.AbortError('Bulk action was aborted');
      }

      return buildBulkResponse(response, {
        updated,
        deleted,
        created,
        errors: [...fetchRulesOutcome.errors, ...bulkActionOutcome.errors]
      });
    } catch (err) {
      const error = (0, _securitysolutionEsUtils.transformError)(err);
      return siemResponse.error({
        body: error.message,
        statusCode: error.statusCode
      });
    }
  });
};

exports.performBulkActionRoute = performBulkActionRoute;