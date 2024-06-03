"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.run = exports.cli = void 0;

var _minimist = _interopRequireDefault(require("minimist"));

var _toolingLog = require("@kbn/tooling-log");

var _test = require("@kbn/test");

var _pMap = _interopRequireDefault(require("p-map"));

var _path = require("path");

var _securitysolutionListConstants = require("@kbn/securitysolution-list-constants");

var _trusted_app_generator = require("../../../common/endpoint/data_generators/trusted_app_generator");

var _mappers = require("../../../public/management/pages/trusted_apps/service/mappers");

var _random_policy_id_generator = require("../common/random_policy_id_generator");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const defaultLogger = new _toolingLog.ToolingLog({
  level: 'info',
  writeTo: process.stdout
});
const separator = '----------------------------------------';
const trustedAppGenerator = new _trusted_app_generator.TrustedAppGenerator();

const cli = async () => {
  const cliDefaults = {
    string: ['kibana'],
    default: {
      count: 10,
      kibana: 'http://elastic:changeme@localhost:5601'
    }
  };
  const options = (0, _minimist.default)(process.argv.slice(2), cliDefaults);

  if ('help' in options) {
    defaultLogger.write(`
node ${(0, _path.basename)(process.argv[1])} [options]

Options:${Object.keys(cliDefaults.default).reduce((out, option) => {
      // @ts-expect-error TS7053
      return `${out}\n  --${option}=${cliDefaults.default[option]}`;
    }, '')}
`);
    return;
  }

  const runLogger = createRunLogger();
  defaultLogger.write(`${separator}
Loading ${options.count} Trusted App Entries`);
  await run({ ...options,
    logger: runLogger
  });
  defaultLogger.write(`
Done!
${separator}`);
};

exports.cli = cli;

const run = async ({
  count = 10,
  kibana = 'http://elastic:changeme@localhost:5601',
  logger = defaultLogger
} = {}) => {
  const kbnClient = new _test.KbnClient({
    log: logger,
    url: kibana
  }); // setup fleet with endpoint integrations
  // and
  // and ensure the trusted apps list is created

  logger.info('setting up Fleet with endpoint and creating trusted apps list');
  ensureCreateEndpointTrustedAppsList(kbnClient);
  const randomPolicyId = await (0, _random_policy_id_generator.randomPolicyIdGenerator)(kbnClient, logger);
  return (0, _pMap.default)(Array.from({
    length: count
  }), async () => {
    const body = trustedAppGenerator.generateTrustedAppForCreate();

    if (body.effectScope.type === 'policy') {
      body.effectScope.policies = [randomPolicyId(), randomPolicyId()];
    }

    return kbnClient.request({
      method: 'POST',
      path: _securitysolutionListConstants.EXCEPTION_LIST_ITEM_URL,
      body: (0, _mappers.newTrustedAppToCreateExceptionListItem)(body)
    }).then(({
      data
    }) => {
      logger.write(data.id);
      return data;
    });
  }, {
    concurrency: 10
  });
};

exports.run = run;

const createRunLogger = () => {
  let groupCount = 1;
  let itemCount = 0;
  return new _toolingLog.ToolingLog({
    level: 'info',
    writeTo: {
      write: msg => {
        process.stdout.write('.');
        itemCount++;

        if (itemCount === 5) {
          itemCount = 0;

          if (groupCount === 5) {
            process.stdout.write('\n');
            groupCount = 1;
          } else {
            process.stdout.write('  ');
            groupCount++;
          }
        }
      }
    }
  });
};

const ensureCreateEndpointTrustedAppsList = async kbn => {
  const newListDefinition = {
    description: _securitysolutionListConstants.ENDPOINT_TRUSTED_APPS_LIST_DESCRIPTION,
    list_id: _securitysolutionListConstants.ENDPOINT_TRUSTED_APPS_LIST_ID,
    meta: undefined,
    name: _securitysolutionListConstants.ENDPOINT_TRUSTED_APPS_LIST_NAME,
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
      throw e;
    }
  });
};