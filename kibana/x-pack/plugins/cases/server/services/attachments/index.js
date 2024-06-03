"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AttachmentService = void 0;

var _api = require("../../../common/api");

var _constants = require("../../../common/constants");

var _utils = require("../../client/utils");

var _utils2 = require("../../common/utils");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


class AttachmentService {
  constructor(log) {
    this.log = log;
  }

  async countAlertsAttachedToCase(params) {
    try {
      var _res$alerts;

      this.log.debug(`Attempting to count alerts for case id ${params.caseId}`);
      const res = await this.executeCaseAggregations({ ...params,
        attachmentType: _api.CommentType.alert,
        aggregations: this.buildAlertsAggs('cardinality')
      });
      return res === null || res === void 0 ? void 0 : (_res$alerts = res.alerts) === null || _res$alerts === void 0 ? void 0 : _res$alerts.value;
    } catch (error) {
      this.log.error(`Error while counting alerts for case id ${params.caseId}: ${error}`);
      throw error;
    }
  }

  buildAlertsAggs(agg) {
    return {
      alerts: {
        [agg]: {
          field: `${_constants.CASE_COMMENT_SAVED_OBJECT}.attributes.alertId`
        }
      }
    };
  }

  async valueCountAlertsAttachedToCase(params) {
    try {
      var _res$alerts$value, _res$alerts2;

      this.log.debug(`Attempting to value count alerts for case id ${params.caseId}`);
      const res = await this.executeCaseAggregations({ ...params,
        attachmentType: _api.CommentType.alert,
        aggregations: this.buildAlertsAggs('value_count')
      });
      return (_res$alerts$value = res === null || res === void 0 ? void 0 : (_res$alerts2 = res.alerts) === null || _res$alerts2 === void 0 ? void 0 : _res$alerts2.value) !== null && _res$alerts$value !== void 0 ? _res$alerts$value : 0;
    } catch (error) {
      this.log.error(`Error while value counting alerts for case id ${params.caseId}: ${error}`);
      throw error;
    }
  }
  /**
   * Retrieves all the alerts attached to a case.
   */


  async getAllAlertsAttachToCase({
    unsecuredSavedObjectsClient,
    caseId,
    filter
  }) {
    try {
      this.log.debug(`Attempting to GET all alerts for case id ${caseId}`);
      const alertsFilter = (0, _utils.buildFilter)({
        filters: [_api.CommentType.alert],
        field: 'type',
        operator: 'or',
        type: _constants.CASE_COMMENT_SAVED_OBJECT
      });
      const combinedFilter = (0, _utils.combineFilters)([alertsFilter, filter]);
      const finder = unsecuredSavedObjectsClient.createPointInTimeFinder({
        type: _constants.CASE_COMMENT_SAVED_OBJECT,
        hasReference: {
          type: _constants.CASE_SAVED_OBJECT,
          id: caseId
        },
        sortField: 'created_at',
        sortOrder: 'asc',
        filter: combinedFilter,
        perPage: _constants.MAX_DOCS_PER_PAGE
      });
      let result = [];

      for await (const userActionSavedObject of finder.find()) {
        result = result.concat(userActionSavedObject.saved_objects);
      }

      return result;
    } catch (error) {
      this.log.error(`Error on GET all alerts for case id ${caseId}: ${error}`);
      throw error;
    }
  }
  /**
   * Executes the aggregations against a type of attachment attached to a case.
   */


  async executeCaseAggregations({
    unsecuredSavedObjectsClient,
    caseId,
    filter,
    aggregations,
    attachmentType
  }) {
    try {
      this.log.debug(`Attempting to aggregate for case id ${caseId}`);
      const attachmentFilter = (0, _utils.buildFilter)({
        filters: attachmentType,
        field: 'type',
        operator: 'or',
        type: _constants.CASE_COMMENT_SAVED_OBJECT
      });
      const combinedFilter = (0, _utils.combineFilters)([attachmentFilter, filter]);
      const response = await unsecuredSavedObjectsClient.find({
        type: _constants.CASE_COMMENT_SAVED_OBJECT,
        hasReference: {
          type: _constants.CASE_SAVED_OBJECT,
          id: caseId
        },
        page: 1,
        perPage: 1,
        sortField: _utils2.defaultSortField,
        aggs: aggregations,
        filter: combinedFilter
      });
      return response.aggregations;
    } catch (error) {
      this.log.error(`Error while executing aggregation for case id ${caseId}: ${error}`);
      throw error;
    }
  }
  /**
   * Executes the aggregations against the actions attached to a case.
   */


  async executeCaseActionsAggregations(params) {
    try {
      this.log.debug(`Attempting to count actions for case id ${params.caseId}`);
      return await this.executeCaseAggregations({ ...params,
        attachmentType: _api.CommentType.actions
      });
    } catch (error) {
      this.log.error(`Error while counting actions for case id ${params.caseId}: ${error}`);
      throw error;
    }
  }

  async get({
    unsecuredSavedObjectsClient,
    attachmentId
  }) {
    try {
      this.log.debug(`Attempting to GET attachment ${attachmentId}`);
      return await unsecuredSavedObjectsClient.get(_constants.CASE_COMMENT_SAVED_OBJECT, attachmentId);
    } catch (error) {
      this.log.error(`Error on GET attachment ${attachmentId}: ${error}`);
      throw error;
    }
  }

  async delete({
    unsecuredSavedObjectsClient,
    attachmentId
  }) {
    try {
      this.log.debug(`Attempting to DELETE attachment ${attachmentId}`);
      return await unsecuredSavedObjectsClient.delete(_constants.CASE_COMMENT_SAVED_OBJECT, attachmentId);
    } catch (error) {
      this.log.error(`Error on DELETE attachment ${attachmentId}: ${error}`);
      throw error;
    }
  }

  async create({
    unsecuredSavedObjectsClient,
    attributes,
    references,
    id
  }) {
    try {
      this.log.debug(`Attempting to POST a new comment`);
      return await unsecuredSavedObjectsClient.create(_constants.CASE_COMMENT_SAVED_OBJECT, attributes, {
        references,
        id
      });
    } catch (error) {
      this.log.error(`Error on POST a new comment: ${error}`);
      throw error;
    }
  }

  async bulkCreate({
    unsecuredSavedObjectsClient,
    attachments
  }) {
    try {
      this.log.debug(`Attempting to bulk create attachments`);
      return await unsecuredSavedObjectsClient.bulkCreate(attachments.map(attachment => ({
        type: _constants.CASE_COMMENT_SAVED_OBJECT,
        ...attachment
      })));
    } catch (error) {
      this.log.error(`Error on bulk create attachments: ${error}`);
      throw error;
    }
  }

  async update({
    unsecuredSavedObjectsClient,
    attachmentId,
    updatedAttributes,
    options
  }) {
    try {
      this.log.debug(`Attempting to UPDATE comment ${attachmentId}`);
      return await unsecuredSavedObjectsClient.update(_constants.CASE_COMMENT_SAVED_OBJECT, attachmentId, updatedAttributes, options);
    } catch (error) {
      this.log.error(`Error on UPDATE comment ${attachmentId}: ${error}`);
      throw error;
    }
  }

  async bulkUpdate({
    unsecuredSavedObjectsClient,
    comments
  }) {
    try {
      this.log.debug(`Attempting to UPDATE comments ${comments.map(c => c.attachmentId).join(', ')}`);
      return await unsecuredSavedObjectsClient.bulkUpdate(comments.map(c => ({
        type: _constants.CASE_COMMENT_SAVED_OBJECT,
        id: c.attachmentId,
        attributes: c.updatedAttributes,
        ...c.options
      })));
    } catch (error) {
      this.log.error(`Error on UPDATE comments ${comments.map(c => c.attachmentId).join(', ')}: ${error}`);
      throw error;
    }
  }

  async getCaseCommentStats({
    unsecuredSavedObjectsClient,
    caseIds
  }) {
    var _res$aggregations$ref, _res$aggregations;

    if (caseIds.length <= 0) {
      return new Map();
    }

    const res = await unsecuredSavedObjectsClient.find({
      hasReference: caseIds.map(id => ({
        type: _constants.CASE_SAVED_OBJECT,
        id
      })),
      hasReferenceOperator: 'OR',
      type: _constants.CASE_COMMENT_SAVED_OBJECT,
      perPage: 0,
      aggs: AttachmentService.buildCommentStatsAggs(caseIds)
    });
    return (_res$aggregations$ref = (_res$aggregations = res.aggregations) === null || _res$aggregations === void 0 ? void 0 : _res$aggregations.references.caseIds.buckets.reduce((acc, idBucket) => {
      acc.set(idBucket.key, {
        nonAlerts: idBucket.reverse.comments.doc_count,
        alerts: idBucket.reverse.alerts.value
      });
      return acc;
    }, new Map())) !== null && _res$aggregations$ref !== void 0 ? _res$aggregations$ref : new Map();
  }

  static buildCommentStatsAggs(ids) {
    return {
      references: {
        nested: {
          path: `${_constants.CASE_COMMENT_SAVED_OBJECT}.references`
        },
        aggregations: {
          caseIds: {
            terms: {
              field: `${_constants.CASE_COMMENT_SAVED_OBJECT}.references.id`,
              size: ids.length
            },
            aggregations: {
              reverse: {
                reverse_nested: {},
                aggregations: {
                  alerts: {
                    cardinality: {
                      field: `${_constants.CASE_COMMENT_SAVED_OBJECT}.attributes.alertId`
                    }
                  },
                  comments: {
                    filter: {
                      term: {
                        [`${_constants.CASE_COMMENT_SAVED_OBJECT}.attributes.type`]: _api.CommentType.user
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    };
  }

}

exports.AttachmentService = AttachmentService;