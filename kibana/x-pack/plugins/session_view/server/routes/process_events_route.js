"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerProcessEventsRoute = exports.fetchEventsAndScopedAlerts = void 0;

var _configSchema = require("@kbn/config-schema");

var _lodash = _interopRequireDefault(require("lodash"));

var _constants = require("../../common/constants");

var _alerts_route = require("./alerts_route");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const registerProcessEventsRoute = (router, ruleRegistry) => {
  router.get({
    path: _constants.PROCESS_EVENTS_ROUTE,
    validate: {
      query: _configSchema.schema.object({
        sessionEntityId: _configSchema.schema.string(),
        cursor: _configSchema.schema.maybe(_configSchema.schema.string()),
        forward: _configSchema.schema.maybe(_configSchema.schema.boolean())
      })
    }
  }, async (context, request, response) => {
    const client = (await context.core).elasticsearch.client.asCurrentUser;
    const alertsClient = await ruleRegistry.getRacClientWithRequest(request);
    const {
      sessionEntityId,
      cursor,
      forward = true
    } = request.query;
    const body = await fetchEventsAndScopedAlerts(client, alertsClient, sessionEntityId, cursor, forward);
    return response.ok({
      body
    });
  });
};

exports.registerProcessEventsRoute = registerProcessEventsRoute;

const fetchEventsAndScopedAlerts = async (client, alertsClient, sessionEntityId, cursor, forward = true) => {
  var _search$hits$total;

  const cursorMillis = cursor && new Date(cursor).getTime() + (forward ? -1 : 1);
  const search = await client.search({
    index: [_constants.PROCESS_EVENTS_INDEX],
    body: {
      query: {
        match: {
          [_constants.ENTRY_SESSION_ENTITY_ID_PROPERTY]: sessionEntityId
        }
      },
      size: _constants.PROCESS_EVENTS_PER_PAGE,
      sort: [{
        '@timestamp': forward ? 'asc' : 'desc'
      }],
      search_after: cursorMillis ? [cursorMillis] : undefined
    }
  });
  let events = search.hits.hits;

  if (!forward) {
    events.reverse();
  }

  const total = typeof search.hits.total === 'number' ? search.hits.total : (_search$hits$total = search.hits.total) === null || _search$hits$total === void 0 ? void 0 : _search$hits$total.value;

  if (events.length > 0) {
    var _$first, _$last; // go grab any alerts which happened in this page of events.


    const firstEvent = (_$first = _lodash.default.first(events)) === null || _$first === void 0 ? void 0 : _$first._source;
    const lastEvent = (_$last = _lodash.default.last(events)) === null || _$last === void 0 ? void 0 : _$last._source;
    let range;

    if (firstEvent !== null && firstEvent !== void 0 && firstEvent['@timestamp'] && lastEvent !== null && lastEvent !== void 0 && lastEvent['@timestamp']) {
      range = [firstEvent['@timestamp'], lastEvent['@timestamp']];
    }

    const alertsBody = await (0, _alerts_route.searchAlerts)(alertsClient, sessionEntityId, _constants.ALERTS_PER_PROCESS_EVENTS_PAGE, undefined, range);
    events = [...events, ...alertsBody.events];
  }

  return {
    total,
    events
  };
};

exports.fetchEventsAndScopedAlerts = fetchEventsAndScopedAlerts;