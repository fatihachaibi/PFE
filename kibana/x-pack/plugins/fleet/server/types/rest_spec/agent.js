"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UpdateAgentRequestSchema = exports.PutAgentReassignRequestSchema = exports.PostNewAgentActionRequestSchema = exports.PostCancelActionRequestSchema = exports.PostBulkAgentUpgradeRequestSchema = exports.PostBulkAgentUnenrollRequestSchema = exports.PostBulkAgentReassignRequestSchema = exports.PostAgentUpgradeRequestSchema = exports.PostAgentUnenrollRequestSchema = exports.GetOneAgentRequestSchema = exports.GetAgentsRequestSchema = exports.GetAgentStatusRequestSchema = exports.GetAgentDataRequestSchema = exports.DeleteAgentRequestSchema = void 0;

var _configSchema = require("@kbn/config-schema");

var _moment = _interopRequireDefault(require("moment"));

var _valid = _interopRequireDefault(require("semver/functions/valid"));

var _models = require("../models");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const GetAgentsRequestSchema = {
  query: _configSchema.schema.object({
    page: _configSchema.schema.number({
      defaultValue: 1
    }),
    perPage: _configSchema.schema.number({
      defaultValue: 20
    }),
    kuery: _configSchema.schema.maybe(_configSchema.schema.string()),
    showInactive: _configSchema.schema.boolean({
      defaultValue: false
    }),
    showUpgradeable: _configSchema.schema.boolean({
      defaultValue: false
    })
  })
};
exports.GetAgentsRequestSchema = GetAgentsRequestSchema;
const GetOneAgentRequestSchema = {
  params: _configSchema.schema.object({
    agentId: _configSchema.schema.string()
  })
};
exports.GetOneAgentRequestSchema = GetOneAgentRequestSchema;
const PostNewAgentActionRequestSchema = {
  body: _configSchema.schema.object({
    action: _models.NewAgentActionSchema
  }),
  params: _configSchema.schema.object({
    agentId: _configSchema.schema.string()
  })
};
exports.PostNewAgentActionRequestSchema = PostNewAgentActionRequestSchema;
const PostCancelActionRequestSchema = {
  params: _configSchema.schema.object({
    actionId: _configSchema.schema.string()
  })
};
exports.PostCancelActionRequestSchema = PostCancelActionRequestSchema;
const PostAgentUnenrollRequestSchema = {
  params: _configSchema.schema.object({
    agentId: _configSchema.schema.string()
  }),
  body: _configSchema.schema.nullable(_configSchema.schema.object({
    force: _configSchema.schema.maybe(_configSchema.schema.boolean()),
    revoke: _configSchema.schema.maybe(_configSchema.schema.boolean())
  }))
};
exports.PostAgentUnenrollRequestSchema = PostAgentUnenrollRequestSchema;
const PostBulkAgentUnenrollRequestSchema = {
  body: _configSchema.schema.object({
    agents: _configSchema.schema.oneOf([_configSchema.schema.arrayOf(_configSchema.schema.string()), _configSchema.schema.string()]),
    force: _configSchema.schema.maybe(_configSchema.schema.boolean()),
    revoke: _configSchema.schema.maybe(_configSchema.schema.boolean()),
    batchSize: _configSchema.schema.maybe(_configSchema.schema.number())
  })
};
exports.PostBulkAgentUnenrollRequestSchema = PostBulkAgentUnenrollRequestSchema;

function validateVersion(s) {
  if (!(0, _valid.default)(s)) {
    return 'not a valid semver';
  }
}

const PostAgentUpgradeRequestSchema = {
  params: _configSchema.schema.object({
    agentId: _configSchema.schema.string()
  }),
  body: _configSchema.schema.object({
    source_uri: _configSchema.schema.maybe(_configSchema.schema.string()),
    version: _configSchema.schema.string({
      validate: validateVersion
    }),
    force: _configSchema.schema.maybe(_configSchema.schema.boolean())
  })
};
exports.PostAgentUpgradeRequestSchema = PostAgentUpgradeRequestSchema;
const PostBulkAgentUpgradeRequestSchema = {
  body: _configSchema.schema.object({
    agents: _configSchema.schema.oneOf([_configSchema.schema.arrayOf(_configSchema.schema.string()), _configSchema.schema.string()]),
    source_uri: _configSchema.schema.maybe(_configSchema.schema.string()),
    version: _configSchema.schema.string({
      validate: validateVersion
    }),
    force: _configSchema.schema.maybe(_configSchema.schema.boolean()),
    rollout_duration_seconds: _configSchema.schema.maybe(_configSchema.schema.number({
      min: 600
    })),
    start_time: _configSchema.schema.maybe(_configSchema.schema.string({
      validate: v => {
        if (!(0, _moment.default)(v).isValid()) {
          return 'not a valid date';
        }
      }
    })),
    batchSize: _configSchema.schema.maybe(_configSchema.schema.number())
  })
};
exports.PostBulkAgentUpgradeRequestSchema = PostBulkAgentUpgradeRequestSchema;
const PutAgentReassignRequestSchema = {
  params: _configSchema.schema.object({
    agentId: _configSchema.schema.string()
  }),
  body: _configSchema.schema.object({
    policy_id: _configSchema.schema.string()
  })
};
exports.PutAgentReassignRequestSchema = PutAgentReassignRequestSchema;
const PostBulkAgentReassignRequestSchema = {
  body: _configSchema.schema.object({
    policy_id: _configSchema.schema.string(),
    agents: _configSchema.schema.oneOf([_configSchema.schema.arrayOf(_configSchema.schema.string()), _configSchema.schema.string()]),
    batchSize: _configSchema.schema.maybe(_configSchema.schema.number())
  })
};
exports.PostBulkAgentReassignRequestSchema = PostBulkAgentReassignRequestSchema;
const DeleteAgentRequestSchema = {
  params: _configSchema.schema.object({
    agentId: _configSchema.schema.string()
  })
};
exports.DeleteAgentRequestSchema = DeleteAgentRequestSchema;
const UpdateAgentRequestSchema = {
  params: _configSchema.schema.object({
    agentId: _configSchema.schema.string()
  }),
  body: _configSchema.schema.object({
    user_provided_metadata: _configSchema.schema.recordOf(_configSchema.schema.string(), _configSchema.schema.any())
  })
};
exports.UpdateAgentRequestSchema = UpdateAgentRequestSchema;
const GetAgentStatusRequestSchema = {
  query: _configSchema.schema.object({
    policyId: _configSchema.schema.maybe(_configSchema.schema.string()),
    kuery: _configSchema.schema.maybe(_configSchema.schema.string())
  })
};
exports.GetAgentStatusRequestSchema = GetAgentStatusRequestSchema;
const GetAgentDataRequestSchema = {
  query: _configSchema.schema.object({
    agentsIds: _configSchema.schema.oneOf([_configSchema.schema.arrayOf(_configSchema.schema.string()), _configSchema.schema.string()]),
    previewData: _configSchema.schema.boolean({
      defaultValue: false
    })
  })
};
exports.GetAgentDataRequestSchema = GetAgentDataRequestSchema;