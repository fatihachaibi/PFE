"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.allUsers = void 0;

var _fp = require("lodash/fp");

var _constants = require("../../../../../../common/constants");

var _build_query = require("../../../../../utils/build_query");

var _queryAll_users = require("./query.all_users.dsl");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const allUsers = {
  buildDsl: options => {
    if (options.pagination && options.pagination.querySize >= _constants.DEFAULT_MAX_TABLE_QUERY_SIZE) {
      throw new Error(`No query size above ${_constants.DEFAULT_MAX_TABLE_QUERY_SIZE}`);
    }

    return (0, _queryAll_users.buildUsersQuery)(options);
  },
  parse: async (options, response) => {
    const {
      activePage,
      cursorStart,
      fakePossibleCount,
      querySize
    } = options.pagination;
    const inspect = {
      dsl: [(0, _build_query.inspectStringifyObject)((0, _queryAll_users.buildUsersQuery)(options))]
    };
    const buckets = (0, _fp.getOr)([], 'aggregations.user_data.buckets', response.rawResponse);
    const totalCount = (0, _fp.getOr)(0, 'aggregations.user_count.value', response.rawResponse);
    const fakeTotalCount = fakePossibleCount <= totalCount ? fakePossibleCount : totalCount;
    const users = buckets.map(bucket => ({
      name: bucket.key,
      lastSeen: (0, _fp.getOr)(null, `lastSeen.value_as_string`, bucket),
      domain: (0, _fp.getOr)(null, `domain.hits.hits[0].fields['user.domain']`, bucket)
    }), {});
    const showMorePagesIndicator = totalCount > fakeTotalCount;
    return { ...response,
      inspect,
      totalCount,
      users: users.splice(cursorStart, querySize - cursorStart),
      pageInfo: {
        activePage: activePage !== null && activePage !== void 0 ? activePage : 0,
        fakeTotalCount,
        showMorePagesIndicator
      }
    };
  }
};
exports.allUsers = allUsers;