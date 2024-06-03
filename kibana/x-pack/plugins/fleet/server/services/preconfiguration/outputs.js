"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cleanPreconfiguredOutputs = cleanPreconfiguredOutputs;
exports.createOrUpdatePreconfiguredOutputs = createOrUpdatePreconfiguredOutputs;
exports.ensurePreconfiguredOutputs = ensurePreconfiguredOutputs;

var _lodash = require("lodash");

var _jsYaml = require("js-yaml");

var _common = require("../../../common");

var _output = require("../output");

var _agent_policy = require("../agent_policy");

var _app_context = require("../app_context");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


async function ensurePreconfiguredOutputs(soClient, esClient, outputs) {
  await createOrUpdatePreconfiguredOutputs(soClient, esClient, outputs);
  await cleanPreconfiguredOutputs(soClient, outputs);
}

async function createOrUpdatePreconfiguredOutputs(soClient, esClient, outputs) {
  const logger = _app_context.appContextService.getLogger();

  if (outputs.length === 0) {
    return;
  }

  const existingOutputs = await _output.outputService.bulkGet(soClient, outputs.map(({
    id
  }) => id), {
    ignoreNotFound: true
  });
  await Promise.all(outputs.map(async output => {
    const existingOutput = existingOutputs.find(o => o.id === output.id);
    const {
      id,
      config,
      ...outputData
    } = output;
    const configYaml = config ? (0, _jsYaml.safeDump)(config) : undefined;
    const data = { ...outputData,
      config_yaml: configYaml,
      is_preconfigured: true
    };

    if (!data.hosts || data.hosts.length === 0) {
      data.hosts = _output.outputService.getDefaultESHosts();
    }

    const isCreate = !existingOutput;
    const isUpdateWithNewData = existingOutput && isPreconfiguredOutputDifferentFromCurrent(existingOutput, data);

    if (isCreate) {
      logger.debug(`Creating output ${output.id}`);
      await _output.outputService.create(soClient, data, {
        id,
        fromPreconfiguration: true
      });
    } else if (isUpdateWithNewData) {
      logger.debug(`Updating output ${output.id}`);
      await _output.outputService.update(soClient, id, data, {
        fromPreconfiguration: true
      }); // Bump revision of all policies using that output

      if (outputData.is_default || outputData.is_default_monitoring) {
        await _agent_policy.agentPolicyService.bumpAllAgentPolicies(soClient, esClient);
      } else {
        await _agent_policy.agentPolicyService.bumpAllAgentPoliciesForOutput(soClient, esClient, id);
      }
    }
  }));
}

async function cleanPreconfiguredOutputs(soClient, outputs) {
  const existingOutputs = await _output.outputService.list(soClient);
  const existingPreconfiguredOutput = existingOutputs.items.filter(o => o.is_preconfigured === true);

  const logger = _app_context.appContextService.getLogger();

  for (const output of existingPreconfiguredOutput) {
    const hasBeenDelete = !outputs.find(({
      id
    }) => output.id === id);

    if (!hasBeenDelete) {
      continue;
    }

    if (output.is_default) {
      logger.info(`Updating default preconfigured output ${output.id} is no longer preconfigured`);
      await _output.outputService.update(soClient, output.id, {
        is_preconfigured: false
      }, {
        fromPreconfiguration: true
      });
    } else if (output.is_default_monitoring) {
      logger.info(`Updating default preconfigured output ${output.id} is no longer preconfigured`);
      await _output.outputService.update(soClient, output.id, {
        is_preconfigured: false
      }, {
        fromPreconfiguration: true
      });
    } else {
      logger.info(`Deleting preconfigured output ${output.id}`);
      await _output.outputService.delete(soClient, output.id, {
        fromPreconfiguration: true
      });
    }
  }
}

function isPreconfiguredOutputDifferentFromCurrent(existingOutput, preconfiguredOutput) {
  var _existingOutput$hosts;

  return !existingOutput.is_preconfigured || existingOutput.is_default !== preconfiguredOutput.is_default || existingOutput.is_default_monitoring !== preconfiguredOutput.is_default_monitoring || existingOutput.name !== preconfiguredOutput.name || existingOutput.type !== preconfiguredOutput.type || preconfiguredOutput.hosts && !(0, _lodash.isEqual)((_existingOutput$hosts = existingOutput.hosts) === null || _existingOutput$hosts === void 0 ? void 0 : _existingOutput$hosts.map(_common.normalizeHostsForAgents), preconfiguredOutput.hosts.map(_common.normalizeHostsForAgents)) || preconfiguredOutput.ssl && !(0, _lodash.isEqual)(preconfiguredOutput.ssl, existingOutput.ssl) || existingOutput.ca_sha256 !== preconfiguredOutput.ca_sha256 || existingOutput.ca_trusted_fingerprint !== preconfiguredOutput.ca_trusted_fingerprint || existingOutput.config_yaml !== preconfiguredOutput.config_yaml;
}