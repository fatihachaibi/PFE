"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getReferencedExceptionLists = void 0;

var _find_all_exception_list_types = require("../../../../../../../lists/server/services/exception_lists/utils/import/find_all_exception_list_types");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

/**
 * Helper that takes rules, goes through their referenced exception lists and
 * searches for them, returning an object with all those found, using list_id as keys
 * @param rules {array}
 * @param savedObjectsClient {object}
 * @returns {Promise} an object with all referenced lists found, using list_id as keys
 */


const getReferencedExceptionLists = async ({
  rules,
  savedObjectsClient
}) => {
  const [lists] = rules.reduce((acc, rule) => {
    if (!(rule instanceof Error) && rule.exceptions_list != null) {
      return [...acc, rule.exceptions_list];
    } else {
      return acc;
    }
  }, []);

  if (lists == null) {
    return {};
  }

  const [agnosticLists, nonAgnosticLists] = lists.reduce(([agnostic, single], list) => {
    const listInfo = {
      listId: list.list_id,
      namespaceType: list.namespace_type
    };

    if (list.namespace_type === 'agnostic') {
      return [[...agnostic, listInfo], single];
    } else {
      return [agnostic, [...single, listInfo]];
    }
  }, [[], []]);
  return (0, _find_all_exception_list_types.getAllListTypes)(agnosticLists, nonAgnosticLists, savedObjectsClient);
};

exports.getReferencedExceptionLists = getReferencedExceptionLists;