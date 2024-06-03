"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cli = void 0;

var _devCliRunner = require("@kbn/dev-cli-runner");

var _devCliErrors = require("@kbn/dev-cli-errors");

var _test = require("@kbn/test");

var _pMap = _interopRequireDefault(require("p-map"));

var _securitysolutionListConstants = require("@kbn/securitysolution-list-constants");

var _random_policy_id_generator = require("../common/random_policy_id_generator");

var _exceptions_list_item_generator = require("../../../common/endpoint/data_generators/exceptions_list_item_generator");

var _artifacts = require("../../../common/endpoint/service/artifacts");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const cli = () => {
  (0, _devCliRunner.run)(async options => {
    try {
      await createBlocklists(options);
      options.log.success(`${options.flags.count} endpoint blocklists created`);
    } catch (e) {
      options.log.error(e);
      throw (0, _devCliErrors.createFailError)(e.message);
    }
  }, {
    description: 'Load Endpoint Blocklists',
    flags: {
      string: ['kibana'],
      default: {
        count: 10,
        kibana: 'http://elastic:changeme@localhost:5601'
      },
      help: `
        --count            Number of blocklists to create. Default: 10
        --kibana           The URL to kibana including credentials. Default: http://elastic:changeme@localhost:5601
      `
    }
  });
};

exports.cli = cli;

class BlocklistDataLoaderError extends Error {
  constructor(message, meta) {
    super(message);
    this.meta = meta;
  }

}

const handleThrowAxiosHttpError = err => {
  let message = err.message;

  if (err.response) {
    var _err$response$data$me;

    message = `[${err.response.status}] ${(_err$response$data$me = err.response.data.message) !== null && _err$response$data$me !== void 0 ? _err$response$data$me : err.message} [ ${String(err.response.config.method).toUpperCase()} ${err.response.config.url} ]`;
  }

  throw new BlocklistDataLoaderError(message, err.toJSON());
};

const createBlocklists = async ({
  flags,
  log
}) => {
  const eventGenerator = new _exceptions_list_item_generator.ExceptionsListItemGenerator();
  const kbn = new _test.KbnClient({
    log,
    url: flags.kibana
  });
  await ensureCreateEndpointBlocklistsList(kbn);
  const randomPolicyId = await (0, _random_policy_id_generator.randomPolicyIdGenerator)(kbn, log);
  await (0, _pMap.default)(Array.from({
    length: flags.count
  }), () => {
    const body = eventGenerator.generateBlocklistForCreate();

    if ((0, _artifacts.isArtifactByPolicy)(body)) {
      const nmExceptions = eventGenerator.randomN(3) || 1;
      body.tags = Array.from({
        length: nmExceptions
      }, () => {
        return `policy:${randomPolicyId()}`;
      });
    }

    return kbn.request({
      method: 'POST',
      path: _securitysolutionListConstants.EXCEPTION_LIST_ITEM_URL,
      body
    }).catch(e => handleThrowAxiosHttpError(e));
  }, {
    concurrency: 10
  });
};

const ensureCreateEndpointBlocklistsList = async kbn => {
  const newListDefinition = {
    description: _securitysolutionListConstants.ENDPOINT_BLOCKLISTS_LIST_DESCRIPTION,
    list_id: _securitysolutionListConstants.ENDPOINT_BLOCKLISTS_LIST_ID,
    meta: undefined,
    name: _securitysolutionListConstants.ENDPOINT_BLOCKLISTS_LIST_NAME,
    os_types: [],
    tags: [],
    type: 'endpoint',
    namespace_type: 'agnostic'
  };
  await kbn.request({
    method: 'POST',
    path: _securitysolutionListConstants.EXCEPTION_LIST_URL,
    body: newListDefinition
  }).catch(e => {
    // Ignore if list was already created
    if (e.response.status !== 409) {
      handleThrowAxiosHttpError(e);
    }
  });
};