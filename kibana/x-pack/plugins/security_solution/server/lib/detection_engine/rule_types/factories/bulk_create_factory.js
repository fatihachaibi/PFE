"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bulkCreateFactory = void 0;

var _perf_hooks = require("perf_hooks");

var _lodash = require("lodash");

var _utils = require("../../signals/utils");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const bulkCreateFactory = (logger, alertWithPersistence, buildRuleMessage, refreshForBulkCreate) => async wrappedDocs => {
  if (wrappedDocs.length === 0) {
    return {
      errors: [],
      success: true,
      bulkCreateDuration: '0',
      createdItemsCount: 0,
      createdItems: []
    };
  }

  const start = _perf_hooks.performance.now();

  const {
    createdAlerts,
    errors
  } = await alertWithPersistence(wrappedDocs.map(doc => ({
    _id: doc._id,
    // `fields` should have already been merged into `doc._source`
    _source: doc._source
  })), refreshForBulkCreate);

  const end = _perf_hooks.performance.now();

  logger.debug(buildRuleMessage(`individual bulk process time took: ${(0, _utils.makeFloatString)(end - start)} milliseconds`));

  if (!(0, _lodash.isEmpty)(errors)) {
    logger.debug(buildRuleMessage(`[-] bulkResponse had errors with responses of: ${JSON.stringify(errors)}`));
    return {
      errors: Object.keys(errors),
      success: false,
      bulkCreateDuration: (0, _utils.makeFloatString)(end - start),
      createdItemsCount: createdAlerts.length,
      createdItems: createdAlerts
    };
  } else {
    return {
      errors: [],
      success: true,
      bulkCreateDuration: (0, _utils.makeFloatString)(end - start),
      createdItemsCount: createdAlerts.length,
      createdItems: createdAlerts
    };
  }
};

exports.bulkCreateFactory = bulkCreateFactory;