"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cloudInstructions = cloudInstructions;
exports.createFunctionbeatInstructions = exports.createFunctionbeatCloudInstructions = void 0;
exports.functionbeatAWSInstructions = functionbeatAWSInstructions;
exports.functionbeatEnableInstructions = functionbeatEnableInstructions;
exports.functionbeatStatusCheck = functionbeatStatusCheck;
exports.onPremCloudInstructions = onPremCloudInstructions;
exports.onPremInstructions = onPremInstructions;

var _i18n = require("@kbn/i18n");

var _instruction_variant = require("../../../common/instruction_variant");

var _onprem_cloud_instructions = require("./onprem_cloud_instructions");

var _get_space_id_for_beats_tutorial = require("./get_space_id_for_beats_tutorial");

var _cloud_instructions = require("./cloud_instructions");

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
const createFunctionbeatInstructions = context => {
  const SSL_DOC_URL = `https://www.elastic.co/guide/en/beats/functionbeat/${context.kibanaBranch}/configuration-ssl.html#ca-sha256`;
  return {
    INSTALL: {
      OSX: {
        title: _i18n.i18n.translate('home.tutorials.common.functionbeatInstructions.install.osxTitle', {
          defaultMessage: 'Download and install Functionbeat'
        }),
        textPre: _i18n.i18n.translate('home.tutorials.common.functionbeatInstructions.install.osxTextPre', {
          defaultMessage: 'First time using Functionbeat? See the [Quick Start]({link}).',
          values: {
            link: '{config.docs.beats.functionbeat}/functionbeat-installation-configuration.html'
          }
        }),
        commands: ['curl -L -O https://artifacts.elastic.co/downloads/beats/functionbeat/functionbeat-{config.kibana.version}-darwin-x86_64.tar.gz', 'tar xzvf functionbeat-{config.kibana.version}-darwin-x86_64.tar.gz', 'cd functionbeat-{config.kibana.version}-darwin-x86_64/']
      },
      LINUX: {
        title: _i18n.i18n.translate('home.tutorials.common.functionbeatInstructions.install.linuxTitle', {
          defaultMessage: 'Download and install Functionbeat'
        }),
        textPre: _i18n.i18n.translate('home.tutorials.common.functionbeatInstructions.install.linuxTextPre', {
          defaultMessage: 'First time using Functionbeat? See the [Quick Start]({link}).',
          values: {
            link: '{config.docs.beats.functionbeat}/functionbeat-installation-configuration.html'
          }
        }),
        commands: ['curl -L -O https://artifacts.elastic.co/downloads/beats/functionbeat/functionbeat-{config.kibana.version}-linux-x86_64.tar.gz', 'tar xzvf functionbeat-{config.kibana.version}-linux-x86_64.tar.gz', 'cd functionbeat-{config.kibana.version}-linux-x86_64/']
      },
      WINDOWS: {
        title: _i18n.i18n.translate('home.tutorials.common.functionbeatInstructions.install.windowsTitle', {
          defaultMessage: 'Download and install Functionbeat'
        }),
        textPre: _i18n.i18n.translate('home.tutorials.common.functionbeatInstructions.install.windowsTextPre', {
          defaultMessage: 'First time using Functionbeat? See the [Quick Start]({functionbeatLink}).\n\
 1. Download the Functionbeat Windows zip file from the [Download]({elasticLink}) page.\n\
 2. Extract the contents of the zip file into {folderPath}.\n\
 3. Rename the {directoryName} directory to `Functionbeat`.\n\
 4. Open a PowerShell prompt as an Administrator (right-click the PowerShell icon and select \
**Run As Administrator**). If you are running Windows XP, you might need to download and install PowerShell.\n\
 5. From the PowerShell prompt, go to the Functionbeat directory:',
          values: {
            directoryName: '`functionbeat-{config.kibana.version}-windows`',
            folderPath: '`C:\\Program Files`',
            functionbeatLink: '{config.docs.beats.functionbeat}/functionbeat-installation-configuration.html',
            elasticLink: 'https://www.elastic.co/downloads/beats/functionbeat'
          }
        }),
        commands: ['cd "C:\\Program Files\\Functionbeat"']
      }
    },
    DEPLOY: {
      OSX_LINUX: {
        title: _i18n.i18n.translate('home.tutorials.common.functionbeatInstructions.deploy.osxTitle', {
          defaultMessage: 'Deploy Functionbeat to AWS Lambda'
        }),
        textPre: _i18n.i18n.translate('home.tutorials.common.functionbeatInstructions.deploy.osxTextPre', {
          defaultMessage: 'This installs Functionbeat as a Lambda function.\
The `setup` command checks the Elasticsearch configuration and loads the \
Kibana index pattern. It is normally safe to omit this command.'
        }),
        commands: ['./functionbeat setup', './functionbeat deploy fn-cloudwatch-logs']
      },
      WINDOWS: {
        title: _i18n.i18n.translate('home.tutorials.common.functionbeatInstructions.deploy.windowsTitle', {
          defaultMessage: 'Deploy Functionbeat to AWS Lambda'
        }),
        textPre: _i18n.i18n.translate('home.tutorials.common.functionbeatInstructions.deploy.windowsTextPre', {
          defaultMessage: 'This installs Functionbeat as a Lambda function.\
The `setup` command checks the Elasticsearch configuration and loads the \
Kibana index pattern. It is normally safe to omit this command.'
        }),
        commands: ['.\\functionbeat.exe setup', '.\\functionbeat.exe deploy fn-cloudwatch-logs']
      }
    },
    CONFIG: {
      OSX_LINUX: {
        title: _i18n.i18n.translate('home.tutorials.common.functionbeatInstructions.config.osxTitle', {
          defaultMessage: 'Configure the Elastic cluster'
        }),
        textPre: _i18n.i18n.translate('home.tutorials.common.functionbeatInstructions.config.osxTextPre', {
          defaultMessage: 'Modify {path} to set the connection information:',
          values: {
            path: '`functionbeat.yml`'
          }
        }),
        commands: ['output.elasticsearch:', '  hosts: ["<es_url>"]', '  username: "elastic"', '  password: "<password>"', "  # If using Elasticsearch's default certificate", '  ssl.ca_trusted_fingerprint: "<es cert fingerprint>"', 'setup.kibana:', '  host: "<kibana_url>"', (0, _get_space_id_for_beats_tutorial.getSpaceIdForBeatsTutorial)(context)],
        textPost: _i18n.i18n.translate('home.tutorials.common.functionbeatInstructions.config.osxTextPostMarkdown', {
          defaultMessage: 'Where {passwordTemplate} is the password of the `elastic` user, {esUrlTemplate} is the URL of \
              Elasticsearch, and {kibanaUrlTemplate} is the URL of Kibana. To [configure SSL]({configureSslUrl}) with the \
              default certificate generated by Elasticsearch, add its fingerprint in {esCertFingerprintTemplate}.\n\n\
  > **_Important:_**  Do not use the built-in `elastic` user to secure clients in a production environment. Instead set up \
  authorized users or API keys, and do not expose passwords in configuration files. [Learn more]({linkUrl}).',
          values: {
            passwordTemplate: '`<password>`',
            esUrlTemplate: '`<es_url>`',
            kibanaUrlTemplate: '`<kibana_url>`',
            configureSslUrl: SSL_DOC_URL,
            esCertFingerprintTemplate: '`<es cert fingerprint>`',
            linkUrl: '{config.docs.beats.functionbeat}/securing-functionbeat.html'
          }
        })
      },
      WINDOWS: {
        title: _i18n.i18n.translate('home.tutorials.common.functionbeatInstructions.config.windowsTitle', {
          defaultMessage: 'Edit the configuration'
        }),
        textPre: _i18n.i18n.translate('home.tutorials.common.functionbeatInstructions.config.windowsTextPre', {
          defaultMessage: 'Modify {path} to set the connection information:',
          values: {
            path: '`C:\\Program Files\\Functionbeat\\functionbeat.yml`'
          }
        }),
        commands: ['output.elasticsearch:', '  hosts: ["<es_url>"]', '  username: "elastic"', '  password: "<password>"', "  # If using Elasticsearch's default certificate", '  ssl.ca_trusted_fingerprint: "<es cert fingerprint>"', 'setup.kibana:', '  host: "<kibana_url>"', (0, _get_space_id_for_beats_tutorial.getSpaceIdForBeatsTutorial)(context)],
        textPost: _i18n.i18n.translate('home.tutorials.common.functionbeatInstructions.config.windowsTextPostMarkdown', {
          defaultMessage: 'Where {passwordTemplate} is the password of the `elastic` user, {esUrlTemplate} is the URL of \
              Elasticsearch, and {kibanaUrlTemplate} is the URL of Kibana. To [configure SSL]({configureSslUrl}) with the \
              default certificate generated by Elasticsearch, add its fingerprint in {esCertFingerprintTemplate}.\n\n\
  > **_Important:_**  Do not use the built-in `elastic` user to secure clients in a production environment. Instead set up \
  authorized users or API keys, and do not expose passwords in configuration files. [Learn more]({linkUrl}).',
          values: {
            passwordTemplate: '`<password>`',
            esUrlTemplate: '`<es_url>`',
            kibanaUrlTemplate: '`<kibana_url>`',
            configureSslUrl: SSL_DOC_URL,
            esCertFingerprintTemplate: '`<es cert fingerprint>`',
            linkUrl: '{config.docs.beats.functionbeat}/securing-functionbeat.html'
          }
        })
      }
    }
  };
};

exports.createFunctionbeatInstructions = createFunctionbeatInstructions;

const createFunctionbeatCloudInstructions = () => ({
  CONFIG: {
    OSX_LINUX: {
      title: _i18n.i18n.translate('home.tutorials.common.functionbeatCloudInstructions.config.osxTitle', {
        defaultMessage: 'Edit the configuration'
      }),
      textPre: _i18n.i18n.translate('home.tutorials.common.functionbeatCloudInstructions.config.osxTextPre', {
        defaultMessage: 'Modify {path} to set the connection information for Elastic Cloud:',
        values: {
          path: '`functionbeat.yml`'
        }
      }),
      commands: ['cloud.id: "{config.cloud.id}"', 'cloud.auth: "elastic:<password>"'],
      textPost: _cloud_instructions.cloudPasswordAndResetLink
    },
    WINDOWS: {
      title: _i18n.i18n.translate('home.tutorials.common.functionbeatCloudInstructions.config.windowsTitle', {
        defaultMessage: 'Edit the configuration'
      }),
      textPre: _i18n.i18n.translate('home.tutorials.common.functionbeatCloudInstructions.config.windowsTextPre', {
        defaultMessage: 'Modify {path} to set the connection information for Elastic Cloud:',
        values: {
          path: '`C:\\Program Files\\Functionbeat\\functionbeat.yml`'
        }
      }),
      commands: ['cloud.id: "{config.cloud.id}"', 'cloud.auth: "elastic:<password>"'],
      textPost: _cloud_instructions.cloudPasswordAndResetLink
    }
  }
});

exports.createFunctionbeatCloudInstructions = createFunctionbeatCloudInstructions;

function functionbeatEnableInstructions() {
  const defaultTitle = _i18n.i18n.translate('home.tutorials.common.functionbeatEnableOnPremInstructions.defaultTitle', {
    defaultMessage: 'Configure the Cloudwatch log group'
  });

  const defaultCommands = ['functionbeat.provider.aws.functions:', '  - name: fn-cloudwatch-logs', '    enabled: true', '    type: cloudwatch_logs', '    triggers:', '      - log_group_name: <cloudwatch-log-group>', 'functionbeat.provider.aws.deploy_bucket: <unique-bucket-name>'];

  const defaultTextPost = _i18n.i18n.translate('home.tutorials.common.functionbeatEnableOnPremInstructions.defaultTextPost', {
    defaultMessage: 'Where `<cloudwatch-log-group>` is the name of the log group you want to ingest, \
and `<unique-bucket-name>` is a valid S3 bucket name which will be used for staging the \
Functionbeat deploy.'
  });

  return {
    OSX_LINUX: {
      title: defaultTitle,
      textPre: _i18n.i18n.translate('home.tutorials.common.functionbeatEnableOnPremInstructionsOSXLinux.textPre', {
        defaultMessage: 'Modify the settings in the `functionbeat.yml` file.'
      }),
      commands: defaultCommands,
      textPost: defaultTextPost
    },
    WINDOWS: {
      title: defaultTitle,
      textPre: _i18n.i18n.translate('home.tutorials.common.functionbeatEnableOnPremInstructionsWindows.textPre', {
        defaultMessage: 'Modify the settings in the {path} file.',
        values: {
          path: '`C:\\Program Files\\Functionbeat\\functionbeat.yml`'
        }
      }),
      commands: defaultCommands,
      textPost: defaultTextPost
    }
  };
}

function functionbeatAWSInstructions() {
  const defaultTitle = _i18n.i18n.translate('home.tutorials.common.functionbeatAWSInstructions.title', {
    defaultMessage: 'Set AWS credentials'
  });

  const defaultPre = _i18n.i18n.translate('home.tutorials.common.functionbeatAWSInstructions.textPre', {
    defaultMessage: 'Set your AWS account credentials in the environment:'
  });

  const defaultPost = _i18n.i18n.translate('home.tutorials.common.functionbeatAWSInstructions.textPost', {
    defaultMessage: 'Where `<your-access-key>` and `<your-secret-access-key>` are your account credentials and \
`us-east-1` is the desired region.'
  });

  return {
    OSX_LINUX: {
      title: defaultTitle,
      textPre: defaultPre,
      commands: ['export AWS_ACCESS_KEY_ID=<your-access-key>', 'export AWS_SECRET_ACCESS_KEY=<your-secret-access-key>', 'export AWS_DEFAULT_REGION=us-east-1'],
      textPost: defaultPost
    },
    WINDOWS: {
      title: defaultTitle,
      textPre: defaultPre,
      commands: ['set AWS_ACCESS_KEY_ID=<your-access-key>', 'set AWS_SECRET_ACCESS_KEY=<your-secret-access-key>', 'set AWS_DEFAULT_REGION=us-east-1'],
      textPost: defaultPost
    }
  };
}

function functionbeatStatusCheck() {
  return {
    title: _i18n.i18n.translate('home.tutorials.common.functionbeatStatusCheck.title', {
      defaultMessage: 'Functionbeat status'
    }),
    text: _i18n.i18n.translate('home.tutorials.common.functionbeatStatusCheck.text', {
      defaultMessage: 'Check that data is received from Functionbeat'
    }),
    btnLabel: _i18n.i18n.translate('home.tutorials.common.functionbeatStatusCheck.buttonLabel', {
      defaultMessage: 'Check data'
    }),
    success: _i18n.i18n.translate('home.tutorials.common.functionbeatStatusCheck.successText', {
      defaultMessage: 'Data successfully received from Functionbeat'
    }),
    error: _i18n.i18n.translate('home.tutorials.common.functionbeatStatusCheck.errorText', {
      defaultMessage: 'No data has been received from Functionbeat yet'
    }),
    esHitsCheck: {
      index: 'functionbeat-*',
      query: {
        match_all: {}
      }
    }
  };
}

function onPremInstructions(platforms, context) {
  const FUNCTIONBEAT_INSTRUCTIONS = createFunctionbeatInstructions(context);
  return {
    instructionSets: [{
      title: _i18n.i18n.translate('home.tutorials.common.functionbeat.premInstructions.gettingStarted.title', {
        defaultMessage: 'Getting Started'
      }),
      instructionVariants: [{
        id: _instruction_variant.INSTRUCTION_VARIANT.OSX,
        instructions: [FUNCTIONBEAT_INSTRUCTIONS.INSTALL.OSX, functionbeatAWSInstructions().OSX_LINUX, functionbeatEnableInstructions().OSX_LINUX, FUNCTIONBEAT_INSTRUCTIONS.CONFIG.OSX_LINUX, FUNCTIONBEAT_INSTRUCTIONS.DEPLOY.OSX_LINUX]
      }, {
        id: _instruction_variant.INSTRUCTION_VARIANT.LINUX,
        instructions: [FUNCTIONBEAT_INSTRUCTIONS.INSTALL.LINUX, functionbeatAWSInstructions().OSX_LINUX, functionbeatEnableInstructions().OSX_LINUX, FUNCTIONBEAT_INSTRUCTIONS.CONFIG.OSX_LINUX, FUNCTIONBEAT_INSTRUCTIONS.DEPLOY.OSX_LINUX]
      }, {
        id: _instruction_variant.INSTRUCTION_VARIANT.WINDOWS,
        instructions: [FUNCTIONBEAT_INSTRUCTIONS.INSTALL.WINDOWS, functionbeatAWSInstructions().WINDOWS, functionbeatEnableInstructions().WINDOWS, FUNCTIONBEAT_INSTRUCTIONS.CONFIG.WINDOWS, FUNCTIONBEAT_INSTRUCTIONS.DEPLOY.WINDOWS]
      }],
      statusCheck: functionbeatStatusCheck()
    }]
  };
}

function onPremCloudInstructions(context) {
  const TRYCLOUD_OPTION1 = (0, _onprem_cloud_instructions.createTrycloudOption1)();
  const TRYCLOUD_OPTION2 = (0, _onprem_cloud_instructions.createTrycloudOption2)();
  const FUNCTIONBEAT_INSTRUCTIONS = createFunctionbeatInstructions(context);
  return {
    instructionSets: [{
      title: _i18n.i18n.translate('home.tutorials.common.functionbeat.premCloudInstructions.gettingStarted.title', {
        defaultMessage: 'Getting Started'
      }),
      instructionVariants: [{
        id: _instruction_variant.INSTRUCTION_VARIANT.OSX,
        instructions: [TRYCLOUD_OPTION1, TRYCLOUD_OPTION2, FUNCTIONBEAT_INSTRUCTIONS.INSTALL.OSX, functionbeatAWSInstructions().OSX_LINUX, functionbeatEnableInstructions().OSX_LINUX, FUNCTIONBEAT_INSTRUCTIONS.CONFIG.OSX_LINUX, FUNCTIONBEAT_INSTRUCTIONS.DEPLOY.OSX_LINUX]
      }, {
        id: _instruction_variant.INSTRUCTION_VARIANT.LINUX,
        instructions: [TRYCLOUD_OPTION1, TRYCLOUD_OPTION2, FUNCTIONBEAT_INSTRUCTIONS.INSTALL.LINUX, functionbeatAWSInstructions().OSX_LINUX, functionbeatEnableInstructions().OSX_LINUX, FUNCTIONBEAT_INSTRUCTIONS.CONFIG.OSX_LINUX, FUNCTIONBEAT_INSTRUCTIONS.DEPLOY.OSX_LINUX]
      }, {
        id: _instruction_variant.INSTRUCTION_VARIANT.WINDOWS,
        instructions: [TRYCLOUD_OPTION1, TRYCLOUD_OPTION2, functionbeatAWSInstructions().WINDOWS, functionbeatEnableInstructions().WINDOWS, FUNCTIONBEAT_INSTRUCTIONS.INSTALL.WINDOWS, FUNCTIONBEAT_INSTRUCTIONS.CONFIG.WINDOWS, FUNCTIONBEAT_INSTRUCTIONS.DEPLOY.WINDOWS]
      }],
      statusCheck: functionbeatStatusCheck()
    }]
  };
}

function cloudInstructions(context) {
  const FUNCTIONBEAT_INSTRUCTIONS = createFunctionbeatInstructions(context);
  const FUNCTIONBEAT_CLOUD_INSTRUCTIONS = createFunctionbeatCloudInstructions();
  return {
    instructionSets: [{
      title: _i18n.i18n.translate('home.tutorials.common.functionbeat.cloudInstructions.gettingStarted.title', {
        defaultMessage: 'Getting Started'
      }),
      instructionVariants: [{
        id: _instruction_variant.INSTRUCTION_VARIANT.OSX,
        instructions: [FUNCTIONBEAT_INSTRUCTIONS.INSTALL.OSX, functionbeatAWSInstructions().OSX_LINUX, functionbeatEnableInstructions().OSX_LINUX, FUNCTIONBEAT_CLOUD_INSTRUCTIONS.CONFIG.OSX_LINUX, FUNCTIONBEAT_INSTRUCTIONS.DEPLOY.OSX_LINUX]
      }, {
        id: _instruction_variant.INSTRUCTION_VARIANT.LINUX,
        instructions: [FUNCTIONBEAT_INSTRUCTIONS.INSTALL.LINUX, functionbeatAWSInstructions().OSX_LINUX, functionbeatEnableInstructions().OSX_LINUX, FUNCTIONBEAT_CLOUD_INSTRUCTIONS.CONFIG.OSX_LINUX, FUNCTIONBEAT_INSTRUCTIONS.DEPLOY.OSX_LINUX]
      }, {
        id: _instruction_variant.INSTRUCTION_VARIANT.WINDOWS,
        instructions: [FUNCTIONBEAT_INSTRUCTIONS.INSTALL.WINDOWS, functionbeatAWSInstructions().WINDOWS, functionbeatEnableInstructions().WINDOWS, FUNCTIONBEAT_CLOUD_INSTRUCTIONS.CONFIG.WINDOWS, FUNCTIONBEAT_INSTRUCTIONS.DEPLOY.WINDOWS]
      }],
      statusCheck: functionbeatStatusCheck()
    }]
  };
}