"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.syntheticsMonitorType = exports.syntheticsMonitor = void 0;

var _i18n = require("@kbn/i18n");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const syntheticsMonitorType = 'synthetics-monitor';
exports.syntheticsMonitorType = syntheticsMonitorType;
const syntheticsMonitor = {
  name: syntheticsMonitorType,
  hidden: false,
  namespaceType: 'single',
  mappings: {
    dynamic: false,
    properties: {
      name: {
        type: 'text',
        fields: {
          keyword: {
            type: 'keyword',
            ignore_above: 256
          }
        }
      },
      type: {
        type: 'text',
        fields: {
          keyword: {
            type: 'keyword',
            ignore_above: 256
          }
        }
      },
      urls: {
        type: 'text',
        fields: {
          keyword: {
            type: 'keyword',
            ignore_above: 256
          }
        }
      },
      journey_id: {
        type: 'keyword'
      },
      project_id: {
        type: 'keyword'
      },
      origin: {
        type: 'keyword'
      },
      custom_heartbeat_id: {
        type: 'keyword'
      }
    }
  },
  management: {
    importableAndExportable: false,
    icon: 'uptimeApp',
    getTitle: savedObject => savedObject.attributes.name + ' - ' + _i18n.i18n.translate('xpack.synthetics.syntheticsMonitors', {
      defaultMessage: 'Uptime - Monitor'
    })
  }
};
exports.syntheticsMonitor = syntheticsMonitor;