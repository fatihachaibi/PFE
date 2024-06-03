"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUiSettings = exports.FIELD_EXISTENCE_SETTING = void 0;

var _i18n = require("@kbn/i18n");

var _configSchema = require("@kbn/config-schema");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const FIELD_EXISTENCE_SETTING = 'lens:useFieldExistenceSampling';
exports.FIELD_EXISTENCE_SETTING = FIELD_EXISTENCE_SETTING;

const getUiSettings = () => ({
  [FIELD_EXISTENCE_SETTING]: {
    name: _i18n.i18n.translate('xpack.lens.advancedSettings.useFieldExistenceSampling.title', {
      defaultMessage: 'Use field existence sampling'
    }),
    value: false,
    description: _i18n.i18n.translate('xpack.lens.advancedSettings.useFieldExistenceSampling.description', {
      defaultMessage: 'If enabled, document sampling is used to determine field existence (available or empty) for the Lens field list instead of relying on index mappings.'
    }),
    category: ['visualization'],
    schema: _configSchema.schema.boolean()
  }
});

exports.getUiSettings = getUiSettings;