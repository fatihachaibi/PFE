"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.apmServiceGroups = void 0;

var _i18n = require("@kbn/i18n");

var _service_groups = require("../../common/service_groups");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const apmServiceGroups = {
  name: _service_groups.APM_SERVICE_GROUP_SAVED_OBJECT_TYPE,
  hidden: false,
  namespaceType: 'multiple',
  mappings: {
    properties: {
      groupName: {
        type: 'keyword'
      },
      kuery: {
        type: 'text'
      },
      description: {
        type: 'text'
      },
      serviceNames: {
        type: 'keyword'
      },
      color: {
        type: 'text'
      }
    }
  },
  management: {
    importableAndExportable: false,
    icon: 'apmApp',
    getTitle: () => _i18n.i18n.translate('xpack.apm.apmServiceGroups.index', {
      defaultMessage: 'APM Service Groups - Index'
    })
  }
};
exports.apmServiceGroups = apmServiceGroups;