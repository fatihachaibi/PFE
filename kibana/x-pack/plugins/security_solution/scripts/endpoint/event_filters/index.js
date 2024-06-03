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
      await createEventFilters(options);
      options.log.success(`${options.flags.count} endpoint event filters created`);
    } catch (e) {
      options.log.error(e);
      throw (0, _devCliErrors.createFailError)(e.message);
    }
  }, {
    description: 'Load Endpoint Event Filters',
    flags: {
      string: ['kibana'],
      default: {
        count: 10,
        kibana: 'http://elastic:changeme@localhost:5601'
      },
      help: `
        --count               Number of event filters to create. Default: 10
        --kibana              The URL to kibana including credentials. Default: http://elastic:changeme@localhost:5601
      `
    }
  });
};

exports.cli = cli;

class EventFilterDataLoaderError extends Error {
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

  throw new EventFilterDataLoaderError(message, err.toJSON());
};

const createEventFilters = async ({
  flags,
  log
}) => {
  const eventGenerator = new _exceptions_list_item_generator.ExceptionsListItemGenerator();
  const kbn = new _test.KbnClient({
    log,
    url: flags.kibana
  });
  await ensureCreateEndpointEventFiltersList(kbn);
  const randomPolicyId = await (0, _random_policy_id_generator.randomPolicyIdGenerator)(kbn, log);
  await (0, _pMap.default)(Array.from({
    length: flags.count
  }), () => {
    var _flags$count;

    let options = {};
    const listSize = (_flags$count = flags.count) !== null && _flags$count !== void 0 ? _flags$count : 10;
    const randomN = eventGenerator.randomN(listSize);

    if (randomN > Math.floor(listSize / 2)) {
      const os = eventGenerator.randomOSFamily();
      options = {
        os_types: [os],
        entries: [{
          field: 'file.path.text',
          operator: 'included',
          type: 'wildcard',
          value: os === 'windows' ? 'C:\\Fol*\\file.*' : '/usr/*/*.dmg'
        }]
      };
    }

    const body = eventGenerator.generateEventFilterForCreate(options);

    if ((0, _artifacts.isArtifactByPolicy)(body)) {
      const nmExceptions = Math.floor(Math.random() * 3) || 1;
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

const ensureCreateEndpointEventFiltersList = async kbn => {
  const newListDefinition = {
    description: _securitysolutionListConstants.ENDPOINT_EVENT_FILTERS_LIST_DESCRIPTION,
    list_id: _securitysolutionListConstants.ENDPOINT_EVENT_FILTERS_LIST_ID,
    meta: undefined,
    name: _securitysolutionListConstants.ENDPOINT_EVENT_FILTERS_LIST_NAME,
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