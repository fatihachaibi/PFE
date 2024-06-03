"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buildEventsSearchQuery = exports.buildEqlSearchRequest = void 0;

var _securitysolutionListUtils = require("@kbn/securitysolution-list-utils");

var _lodash = require("lodash");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const buildTimeRangeFilter = ({
  to,
  from,
  timestampOverride
}) => {
  // If the timestampOverride is provided, documents must either populate timestampOverride with a timestamp in the range
  // or must NOT populate the timestampOverride field at all and `@timestamp` must fall in the range.
  // If timestampOverride is not provided, we simply use `@timestamp`
  return timestampOverride != null ? {
    bool: {
      minimum_should_match: 1,
      should: [{
        range: {
          [timestampOverride]: {
            lte: to,
            gte: from,
            format: 'strict_date_optional_time'
          }
        }
      }, {
        bool: {
          filter: [{
            range: {
              '@timestamp': {
                lte: to,
                gte: from,
                format: 'strict_date_optional_time'
              }
            }
          }, {
            bool: {
              must_not: {
                exists: {
                  field: timestampOverride
                }
              }
            }
          }]
        }
      }]
    }
  } : {
    range: {
      '@timestamp': {
        lte: to,
        gte: from,
        format: 'strict_date_optional_time'
      }
    }
  };
};

const buildEventsSearchQuery = ({
  aggregations,
  index,
  from,
  to,
  filter,
  size,
  searchAfterSortIds,
  sortOrder,
  timestampOverride,
  trackTotalHits
}) => {
  const defaultTimeFields = ['@timestamp'];
  const timestamps = timestampOverride != null ? [timestampOverride, ...defaultTimeFields] : defaultTimeFields;
  const docFields = timestamps.map(tstamp => ({
    field: tstamp,
    format: 'strict_date_optional_time'
  }));
  const rangeFilter = buildTimeRangeFilter({
    to,
    from,
    timestampOverride
  });
  const filterWithTime = [filter, rangeFilter];
  const sort = [];

  if (timestampOverride) {
    sort.push({
      [timestampOverride]: {
        order: sortOrder !== null && sortOrder !== void 0 ? sortOrder : 'asc',
        unmapped_type: 'date'
      }
    });
  }

  sort.push({
    '@timestamp': {
      order: sortOrder !== null && sortOrder !== void 0 ? sortOrder : 'asc',
      unmapped_type: 'date'
    }
  });
  const searchQuery = {
    allow_no_indices: true,
    index,
    size,
    ignore_unavailable: true,
    track_total_hits: trackTotalHits,
    body: {
      query: {
        bool: {
          filter: [...filterWithTime, {
            match_all: {}
          }]
        }
      },
      fields: [{
        field: '*',
        include_unmapped: true
      }, ...docFields],
      ...(aggregations ? {
        aggregations
      } : {}),
      sort
    }
  };

  if (searchAfterSortIds != null && !(0, _lodash.isEmpty)(searchAfterSortIds)) {
    return { ...searchQuery,
      body: { ...searchQuery.body,
        search_after: searchAfterSortIds
      }
    };
  }

  return searchQuery;
};

exports.buildEventsSearchQuery = buildEventsSearchQuery;

const buildEqlSearchRequest = (query, index, from, to, size, timestampOverride, exceptionLists, eventCategoryOverride, timestampField, tiebreakerField) => {
  const defaultTimeFields = ['@timestamp'];
  const timestamps = timestampOverride != null ? [timestampOverride, ...defaultTimeFields] : defaultTimeFields;
  const docFields = timestamps.map(tstamp => ({
    field: tstamp,
    format: 'strict_date_optional_time'
  })); // Assume that `indices.query.bool.max_clause_count` is at least 1024 (the default value),
  // allowing us to make 1024-item chunks of exception list items.
  // Discussion at https://issues.apache.org/jira/browse/LUCENE-4835 indicates that 1024 is a
  // very conservative value.

  const exceptionFilter = (0, _securitysolutionListUtils.buildExceptionFilter)({
    lists: exceptionLists,
    excludeExceptions: true,
    chunkSize: 1024,
    alias: null
  });
  const rangeFilter = buildTimeRangeFilter({
    to,
    from,
    timestampOverride
  });
  const requestFilter = [rangeFilter];

  if (exceptionFilter !== undefined) {
    var _exceptionFilter$quer;

    requestFilter.push({
      bool: {
        must_not: {
          bool: (_exceptionFilter$quer = exceptionFilter.query) === null || _exceptionFilter$quer === void 0 ? void 0 : _exceptionFilter$quer.bool
        }
      }
    });
  }

  const fields = [{
    field: '*',
    include_unmapped: true
  }, ...docFields];
  return {
    index,
    allow_no_indices: true,
    body: {
      size,
      query,
      filter: {
        bool: {
          filter: requestFilter
        }
      },
      timestamp_field: timestampField,
      event_category_field: eventCategoryOverride,
      tiebreaker_field: tiebreakerField,
      fields
    }
  };
};

exports.buildEqlSearchRequest = buildEqlSearchRequest;