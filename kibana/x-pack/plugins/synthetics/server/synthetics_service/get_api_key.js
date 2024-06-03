"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.serviceApiKeyPrivileges = exports.getSyntheticsEnablement = exports.getAPIKeyForSyntheticsService = exports.generateAndSaveServiceAPIKey = exports.generateAPIKey = exports.deleteServiceApiKey = exports.SyntheticsForbiddenError = void 0;

var _constants = require("../../../security/common/constants");

var _service_api_key = require("../legacy_uptime/lib/saved_objects/service_api_key");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const serviceApiKeyPrivileges = {
  cluster: ['monitor', 'read_ilm', 'read_pipeline'],
  indices: [{
    names: ['synthetics-*'],
    privileges: ['view_index_metadata', 'create_doc', 'auto_configure']
  }],
  run_as: []
};
exports.serviceApiKeyPrivileges = serviceApiKeyPrivileges;

const getAPIKeyForSyntheticsService = async ({
  server
}) => {
  const {
    encryptedSavedObjects
  } = server;
  const encryptedClient = encryptedSavedObjects.getClient({
    includedHiddenTypes: [_service_api_key.syntheticsServiceApiKey.name]
  });

  try {
    const apiKey = await (0, _service_api_key.getSyntheticsServiceAPIKey)(encryptedClient);

    if (apiKey) {
      return apiKey;
    }
  } catch (err) {// TODO: figure out how to handle decryption errors
  }
};

exports.getAPIKeyForSyntheticsService = getAPIKeyForSyntheticsService;

const generateAPIKey = async ({
  server,
  security,
  request,
  uptimePrivileges = false
}) => {
  var _security$authc$apiKe, _security$authc$apiKe3;

  const isApiKeysEnabled = await ((_security$authc$apiKe = security.authc.apiKeys) === null || _security$authc$apiKe === void 0 ? void 0 : _security$authc$apiKe.areAPIKeysEnabled());

  if (!isApiKeysEnabled) {
    throw new Error('Please enable API keys in kibana to use synthetics service.');
  }

  if (!request) {
    throw new Error('User authorization is needed for api key generation');
  }

  const {
    canEnable
  } = await getSyntheticsEnablement({
    request,
    server
  });

  if (!canEnable) {
    throw new SyntheticsForbiddenError();
  }

  if (uptimePrivileges) {
    var _security$authc$apiKe2;

    return (_security$authc$apiKe2 = security.authc.apiKeys) === null || _security$authc$apiKe2 === void 0 ? void 0 : _security$authc$apiKe2.create(request, {
      name: 'uptime-api-key',
      kibana_role_descriptors: {
        uptime_save: {
          elasticsearch: {},
          kibana: [{
            base: [],
            spaces: [_constants.ALL_SPACES_ID],
            feature: {
              uptime: ['all']
            }
          }]
        }
      },
      metadata: {
        description: 'Created for the Synthetics Agent to be able to communicate with Kibana for generating monitors for projects'
      }
    });
  }

  return (_security$authc$apiKe3 = security.authc.apiKeys) === null || _security$authc$apiKe3 === void 0 ? void 0 : _security$authc$apiKe3.create(request, {
    name: 'synthetics-api-key',
    role_descriptors: {
      synthetics_writer: serviceApiKeyPrivileges
    },
    metadata: {
      description: 'Created for synthetics service to be passed to the heartbeat to communicate with ES'
    }
  });
};

exports.generateAPIKey = generateAPIKey;

const generateAndSaveServiceAPIKey = async ({
  server,
  security,
  request,
  authSavedObjectsClient
}) => {
  const apiKeyResult = await generateAPIKey({
    server,
    request,
    security
  });

  if (apiKeyResult) {
    const {
      id,
      name,
      api_key: apiKey
    } = apiKeyResult;
    const apiKeyObject = {
      id,
      name,
      apiKey
    };

    if (authSavedObjectsClient) {
      // discard decoded key and rest of the keys
      await (0, _service_api_key.setSyntheticsServiceApiKey)(authSavedObjectsClient, apiKeyObject);
    }

    return apiKeyObject;
  }
};

exports.generateAndSaveServiceAPIKey = generateAndSaveServiceAPIKey;

const deleteServiceApiKey = async ({
  request,
  server,
  savedObjectsClient
}) => {
  await (0, _service_api_key.deleteSyntheticsServiceApiKey)(savedObjectsClient);
};

exports.deleteServiceApiKey = deleteServiceApiKey;

const getSyntheticsEnablement = async ({
  request,
  server: {
    uptimeEsClient,
    security,
    encryptedSavedObjects
  }
}) => {
  var _hasPrivileges$index;

  const encryptedClient = encryptedSavedObjects.getClient({
    includedHiddenTypes: [_service_api_key.syntheticsServiceApiKey.name]
  });
  const [apiKey, hasPrivileges, areApiKeysEnabled] = await Promise.all([(0, _service_api_key.getSyntheticsServiceAPIKey)(encryptedClient), uptimeEsClient.baseESClient.security.hasPrivileges({
    body: {
      cluster: ['manage_security', 'manage_api_key', 'manage_own_api_key', ...serviceApiKeyPrivileges.cluster],
      index: serviceApiKeyPrivileges.indices
    }
  }), security.authc.apiKeys.areAPIKeysEnabled()]);
  const {
    cluster
  } = hasPrivileges;
  const {
    manage_security: manageSecurity,
    manage_api_key: manageApiKey,
    manage_own_api_key: manageOwnApiKey,
    monitor,
    read_ilm: readILM,
    read_pipeline: readPipeline
  } = cluster || {};
  const canManageApiKeys = manageSecurity || manageApiKey || manageOwnApiKey;
  const hasClusterPermissions = readILM && readPipeline && monitor;
  const hasIndexPermissions = !Object.values(((_hasPrivileges$index = hasPrivileges.index) === null || _hasPrivileges$index === void 0 ? void 0 : _hasPrivileges$index['synthetics-*']) || []).includes(false);
  return {
    canEnable: canManageApiKeys && hasClusterPermissions && hasIndexPermissions,
    canManageApiKeys,
    isEnabled: Boolean(apiKey),
    areApiKeysEnabled
  };
};

exports.getSyntheticsEnablement = getSyntheticsEnablement;

class SyntheticsForbiddenError extends Error {
  constructor() {
    super();
    this.message = 'Forbidden';
    this.name = 'SyntheticsForbiddenError';
  }

}

exports.SyntheticsForbiddenError = SyntheticsForbiddenError;