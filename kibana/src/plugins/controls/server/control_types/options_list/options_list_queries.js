"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getValidationAggregationBuilder = exports.getSuggestionAggregationBuilder = void 0;

var _lodash = require("lodash");

var _common = require("../../../../data_views/common");

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

/**
 * Validation aggregations
 */
const getValidationAggregationBuilder = () => ({
  buildAggregation: ({
    selectedOptions,
    fieldName
  }) => {
    const selectedOptionsFilters = selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.reduce((acc, currentOption) => {
      acc[currentOption] = {
        match: {
          [fieldName]: currentOption
        }
      };
      return acc;
    }, {});
    return selectedOptionsFilters && !(0, _lodash.isEmpty)(selectedOptionsFilters) ? {
      filters: {
        filters: selectedOptionsFilters
      }
    } : undefined;
  },
  parse: rawEsResult => {
    var _Object$entries, _Object$entries$filte;

    const rawInvalidSuggestions = (0, _lodash.get)(rawEsResult, 'aggregations.validation.buckets');
    return rawInvalidSuggestions && !(0, _lodash.isEmpty)(rawInvalidSuggestions) ? (_Object$entries = Object.entries(rawInvalidSuggestions)) === null || _Object$entries === void 0 ? void 0 : (_Object$entries$filte = _Object$entries.filter(([, value]) => (value === null || value === void 0 ? void 0 : value.doc_count) === 0)) === null || _Object$entries$filte === void 0 ? void 0 : _Object$entries$filte.map(([key]) => key) : [];
  }
});
/**
 * Suggestion aggregations
 */


exports.getValidationAggregationBuilder = getValidationAggregationBuilder;

const getSuggestionAggregationBuilder = ({
  fieldSpec,
  textFieldName,
  searchString
}) => {
  if (textFieldName && fieldSpec !== null && fieldSpec !== void 0 && fieldSpec.aggregatable && searchString) {
    return suggestionAggSubtypes.keywordAndText;
  }

  if ((fieldSpec === null || fieldSpec === void 0 ? void 0 : fieldSpec.type) === 'boolean') {
    return suggestionAggSubtypes.boolean;
  }

  if (fieldSpec && (0, _common.getFieldSubtypeNested)(fieldSpec)) {
    return suggestionAggSubtypes.subtypeNested;
  }

  return suggestionAggSubtypes.keywordOnly;
};

exports.getSuggestionAggregationBuilder = getSuggestionAggregationBuilder;

const getEscapedQuery = (q = '') => q.replace(/[.?+*|{}[\]()"\\#@&<>~]/g, match => `\\${match}`);

const suggestionAggSubtypes = {
  /**
   * the "Keyword only" query / parser should be used when the options list is built on a field which has only keyword mappings.
   */
  keywordOnly: {
    buildAggregation: ({
      fieldName,
      searchString
    }) => ({
      terms: {
        field: fieldName,
        include: `${getEscapedQuery(searchString)}.*`,
        execution_hint: 'map',
        shard_size: 10
      }
    }),
    parse: rawEsResult => {
      var _get;

      return (_get = (0, _lodash.get)(rawEsResult, 'aggregations.suggestions.buckets')) === null || _get === void 0 ? void 0 : _get.map(suggestion => suggestion.key);
    }
  },

  /**
   * the "Keyword and text" query / parser should be used when the options list is built on a multi-field which has both keyword and text mappings. It supports case-insensitive searching
   */
  keywordAndText: {
    buildAggregation: req => {
      if (!req.textFieldName) {
        // if there is no textFieldName specified, or if there is no search string yet fall back to keywordOnly
        return suggestionAggSubtypes.keywordOnly.buildAggregation(req);
      }

      const {
        fieldName,
        searchString,
        textFieldName
      } = req;
      return {
        filter: {
          match_phrase_prefix: {
            [textFieldName]: getEscapedQuery(searchString)
          }
        },
        aggs: {
          keywordSuggestions: {
            terms: {
              field: fieldName,
              shard_size: 10
            }
          }
        }
      };
    },
    parse: rawEsResult => {
      var _get2;

      return (_get2 = (0, _lodash.get)(rawEsResult, 'aggregations.suggestions.keywordSuggestions.buckets')) === null || _get2 === void 0 ? void 0 : _get2.map(suggestion => suggestion.key);
    }
  },

  /**
   * the "Boolean" query / parser should be used when the options list is built on a field of type boolean. The query is slightly different than a keyword query.
   */
  boolean: {
    buildAggregation: ({
      fieldName
    }) => ({
      terms: {
        field: fieldName,
        execution_hint: 'map',
        shard_size: 10
      }
    }),
    parse: rawEsResult => {
      var _get3;

      return (_get3 = (0, _lodash.get)(rawEsResult, 'aggregations.suggestions.buckets')) === null || _get3 === void 0 ? void 0 : _get3.map(suggestion => suggestion.key_as_string);
    }
  },

  /**
   * the "Subtype Nested" query / parser should be used when the options list is built on a field with subtype nested.
   */
  subtypeNested: {
    buildAggregation: req => {
      const {
        fieldSpec,
        fieldName,
        searchString
      } = req;
      const subTypeNested = fieldSpec && (0, _common.getFieldSubtypeNested)(fieldSpec);

      if (!subTypeNested) {
        // if this field is not subtype nested, fall back to keywordOnly
        return suggestionAggSubtypes.keywordOnly.buildAggregation(req);
      }

      return {
        nested: {
          path: subTypeNested.nested.path
        },
        aggs: {
          nestedSuggestions: {
            terms: {
              field: fieldName,
              include: `${getEscapedQuery(searchString)}.*`,
              execution_hint: 'map',
              shard_size: 10
            }
          }
        }
      };
    },
    parse: rawEsResult => {
      var _get4;

      return (_get4 = (0, _lodash.get)(rawEsResult, 'aggregations.suggestions.nestedSuggestions.buckets')) === null || _get4 === void 0 ? void 0 : _get4.map(suggestion => suggestion.key);
    }
  }
};