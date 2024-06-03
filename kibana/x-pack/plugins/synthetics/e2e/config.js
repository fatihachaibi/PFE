"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _devUtils = require("@kbn/dev-utils");

var _read_kibana_config = require("./tasks/read_kibana_config");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const MANIFEST_KEY = 'xpack.uptime.service.manifestUrl';
const SERVICE_PASSWORD = 'xpack.uptime.service.password';
const SERVICE_USERNAME = 'xpack.uptime.service.username';

async function config({
  readConfigFile
}) {
  var _process$env$SYNTHETI, _process$env$SYNTHETI2, _process$env$SYNTHETI3;

  const kibanaCommonTestsConfig = await readConfigFile(require.resolve('../../../../test/common/config.js'));
  const xpackFunctionalTestsConfig = await readConfigFile(require.resolve('../../../test/functional/config.base.js'));
  const kibanaConfig = (0, _read_kibana_config.readKibanaConfig)();
  const manifestUrl = (_process$env$SYNTHETI = process.env.SYNTHETICS_SERVICE_MANIFEST) !== null && _process$env$SYNTHETI !== void 0 ? _process$env$SYNTHETI : kibanaConfig[MANIFEST_KEY];
  const serviceUsername = (_process$env$SYNTHETI2 = process.env.SYNTHETICS_SERVICE_USERNAME) !== null && _process$env$SYNTHETI2 !== void 0 ? _process$env$SYNTHETI2 : kibanaConfig[SERVICE_USERNAME];
  const servicePassword = (_process$env$SYNTHETI3 = process.env.SYNTHETICS_SERVICE_PASSWORD) !== null && _process$env$SYNTHETI3 !== void 0 ? _process$env$SYNTHETI3 : kibanaConfig[SERVICE_PASSWORD];
  return { ...kibanaCommonTestsConfig.getAll(),
    esTestCluster: { ...xpackFunctionalTestsConfig.get('esTestCluster'),
      serverArgs: [...xpackFunctionalTestsConfig.get('esTestCluster.serverArgs'), // define custom es server here
      // API Keys is enabled at the top level
      'xpack.security.enabled=true']
    },
    kbnTestServer: { ...xpackFunctionalTestsConfig.get('kbnTestServer'),
      sourceArgs: [...xpackFunctionalTestsConfig.get('kbnTestServer.sourceArgs'), '--no-watch'],
      serverArgs: [...xpackFunctionalTestsConfig.get('kbnTestServer.serverArgs'), '--csp.strict=false', '--home.disableWelcomeScreen=true', '--csp.warnLegacyBrowsers=false', // define custom kibana server args here
      `--elasticsearch.ssl.certificateAuthorities=${_devUtils.CA_CERT_PATH}`, `--elasticsearch.ignoreVersionMismatch=${process.env.CI ? 'false' : 'true'}`, `--uiSettings.overrides.theme:darkMode=true`, `--elasticsearch.username=kibana_system`, `--elasticsearch.password=changeme`, '--xpack.reporting.enabled=false', `--xpack.uptime.service.manifestUrl=${manifestUrl}`, `--xpack.uptime.service.username=${process.env.SYNTHETICS_REMOTE_ENABLED ? serviceUsername : 'localKibanaIntegrationTestsUser'}`, `--xpack.uptime.service.password=${servicePassword}`, `--xpack.uptime.service.showExperimentalLocations=${true}`]
    }
  };
} // eslint-disable-next-line import/no-default-export


var _default = config;
exports.default = _default;
module.exports = exports.default;