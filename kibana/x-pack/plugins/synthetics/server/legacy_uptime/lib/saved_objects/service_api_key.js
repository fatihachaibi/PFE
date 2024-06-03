"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.syntheticsServiceApiKey = exports.syntheticsApiKeyObjectType = exports.syntheticsApiKeyID = exports.setSyntheticsServiceApiKey = exports.getSyntheticsServiceAPIKey = exports.deleteSyntheticsServiceApiKey = void 0;

var _i18n = require("@kbn/i18n");

var _server = require("../../../../../../../src/core/server");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const syntheticsApiKeyID = 'ba997842-b0cf-4429-aa9d-578d9bf0d391';
exports.syntheticsApiKeyID = syntheticsApiKeyID;
const syntheticsApiKeyObjectType = 'uptime-synthetics-api-key';
exports.syntheticsApiKeyObjectType = syntheticsApiKeyObjectType;
const syntheticsServiceApiKey = {
  name: syntheticsApiKeyObjectType,
  hidden: true,
  namespaceType: 'agnostic',
  mappings: {
    dynamic: false,
    properties: {
      apiKey: {
        type: 'binary'
      }
      /* Leaving these commented to make it clear that these fields exist, even though we don't want them indexed.
         When adding new fields please add them here. If they need to be searchable put them in the uncommented
         part of properties.
      id: {
        type: 'keyword',
      },
      name: {
        type: 'long',
      },
      */

    }
  },
  management: {
    importableAndExportable: false,
    icon: 'uptimeApp',
    getTitle: () => _i18n.i18n.translate('xpack.synthetics.synthetics.service.apiKey', {
      defaultMessage: 'Synthetics service api key'
    })
  }
};
exports.syntheticsServiceApiKey = syntheticsServiceApiKey;

const getSyntheticsServiceAPIKey = async client => {
  try {
    const obj = await client.getDecryptedAsInternalUser(syntheticsServiceApiKey.name, syntheticsApiKeyID);
    return obj === null || obj === void 0 ? void 0 : obj.attributes;
  } catch (getErr) {
    if (_server.SavedObjectsErrorHelpers.isNotFoundError(getErr)) {
      return undefined;
    }

    throw getErr;
  }
};

exports.getSyntheticsServiceAPIKey = getSyntheticsServiceAPIKey;

const setSyntheticsServiceApiKey = async (client, apiKey) => {
  await client.create(syntheticsServiceApiKey.name, apiKey, {
    id: syntheticsApiKeyID,
    overwrite: true
  });
};

exports.setSyntheticsServiceApiKey = setSyntheticsServiceApiKey;

const deleteSyntheticsServiceApiKey = async client => {
  try {
    return await client.delete(syntheticsServiceApiKey.name, syntheticsApiKeyID);
  } catch (e) {
    throw e;
  }
};

exports.deleteSyntheticsServiceApiKey = deleteSyntheticsServiceApiKey;