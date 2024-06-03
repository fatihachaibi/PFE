"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createLink = exports.AlertingDefaults = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _i18n = require("@kbn/i18n");

var _enums = require("../../common/enums");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


class AlertingDefaults {}

exports.AlertingDefaults = AlertingDefaults;
(0, _defineProperty2.default)(AlertingDefaults, "THROTTLE", '1d');
(0, _defineProperty2.default)(AlertingDefaults, "SCHEDULE_INTERVAL", '1m');
(0, _defineProperty2.default)(AlertingDefaults, "ALERT_STATE", {
  firing: _i18n.i18n.translate('xpack.monitoring.alerts.state.firing', {
    defaultMessage: 'firing'
  })
});
(0, _defineProperty2.default)(AlertingDefaults, "ALERT_TYPE", {
  context: {
    internalShortMessage: {
      name: 'internalShortMessage',
      description: _i18n.i18n.translate('xpack.monitoring.alerts.actionVariables.internalShortMessage', {
        defaultMessage: 'The short internal message generated by Elastic.'
      })
    },
    internalFullMessage: {
      name: 'internalFullMessage',
      description: _i18n.i18n.translate('xpack.monitoring.alerts.actionVariables.internalFullMessage', {
        defaultMessage: 'The full internal message generated by Elastic.'
      })
    },
    state: {
      name: 'state',
      description: _i18n.i18n.translate('xpack.monitoring.alerts.actionVariables.state', {
        defaultMessage: 'The current state of the alert.'
      })
    },
    clusterName: {
      name: 'clusterName',
      description: _i18n.i18n.translate('xpack.monitoring.alerts.actionVariables.clusterName', {
        defaultMessage: 'The cluster to which the node(s) belongs.'
      })
    },
    action: {
      name: 'action',
      description: _i18n.i18n.translate('xpack.monitoring.alerts.actionVariables.action', {
        defaultMessage: 'The recommended action for this alert.'
      })
    },
    actionPlain: {
      name: 'actionPlain',
      description: _i18n.i18n.translate('xpack.monitoring.alerts.actionVariables.actionPlain', {
        defaultMessage: 'The recommended action for this alert, without any markdown.'
      })
    }
  }
});

const createLink = (linkText, linkURL, type = _enums.AlertMessageTokenType.DocLink) => {
  const link = type === _enums.AlertMessageTokenType.DocLink ? {
    partialUrl: linkURL
  } : {
    url: linkURL
  };
  return {
    text: linkText,
    tokens: [{ ...link,
      startToken: '#start_link',
      endToken: '#end_link',
      type
    }]
  };
};

exports.createLink = createLink;