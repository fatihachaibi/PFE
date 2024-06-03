"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cli = void 0;

var _devCliErrors = require("@kbn/dev-cli-errors");

var _devCliRunner = require("@kbn/dev-cli-runner");

var _securitysolutionListConstants = require("@kbn/securitysolution-list-constants");

var _test = require("@kbn/test");

var _host_isolation_exception_generator = require("../../../common/endpoint/data_generators/host_isolation_exception_generator");

var _random_policy_id_generator = require("../common/random_policy_id_generator");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const cli = () => {
  (0, _devCliRunner.run)(async options => {
    try {
      await createHostIsolationException(options);
      options.log.success(`${options.flags.count} endpoint host isolation exceptions`);
    } catch (e) {
      options.log.error(e);
      throw (0, _devCliErrors.createFailError)(e.message);
    }
  }, {
    description: 'Load Host isolation exceptions',
    flags: {
      string: ['kibana'],
      default: {
        count: 10,
        kibana: 'http://elastic:changeme@localhost:5601'
      },
      help: `
        --count            Number of host isolation exceptions to create. Default: 10
        --kibana           The URL to kibana including credentials. Default: http://elastic:changeme@localhost:5601
      `
    }
  });
};

exports.cli = cli;

class HostIsolationExceptionDataLoaderError extends Error {
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

  throw new HostIsolationExceptionDataLoaderError(message, err.toJSON());
};

const createHostIsolationException = async ({
  flags,
  log
}) => {
  const exceptionGenerator = new _host_isolation_exception_generator.HostIsolationExceptionGenerator();
  const kbn = new _test.KbnClient({
    log,
    url: flags.kibana
  });
  log.info('Creating Host isolation exceptions list');
  await ensureCreateEndpointHostIsolationExceptionList(kbn);
  const randomPolicyId = await (0, _random_policy_id_generator.randomPolicyIdGenerator)(kbn, log);
  log.info('Generating exceptions....');
  await Promise.all(Array.from({
    length: flags.count
  }, async () => {
    var _body$tags;

    const body = exceptionGenerator.generate();

    if ((_body$tags = body.tags) !== null && _body$tags !== void 0 && _body$tags.length && body.tags[0] !== 'policy:all') {
      const nmExceptions = Math.floor(Math.random() * 3) || 1;
      body.tags = Array.from({
        length: nmExceptions
      }, () => {
        return `policy:${randomPolicyId()}`;
      });
    }

    try {
      return kbn.request({
        method: 'POST',
        path: _securitysolutionListConstants.EXCEPTION_LIST_ITEM_URL,
        body
      });
    } catch (e) {
      return handleThrowAxiosHttpError(e);
    }
  }));
  log.info('Finished.');
};

const ensureCreateEndpointHostIsolationExceptionList = async kbn => {
  const newListDefinition = {
    description: _securitysolutionListConstants.ENDPOINT_HOST_ISOLATION_EXCEPTIONS_LIST_DESCRIPTION,
    list_id: _securitysolutionListConstants.ENDPOINT_HOST_ISOLATION_EXCEPTIONS_LIST_ID,
    meta: undefined,
    name: _securitysolutionListConstants.ENDPOINT_HOST_ISOLATION_EXCEPTIONS_LIST_NAME,
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