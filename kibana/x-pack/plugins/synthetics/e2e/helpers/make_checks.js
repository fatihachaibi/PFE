"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeChecksWithStatus = exports.makeChecks = exports.makeCheck = exports.getChecksDateRange = void 0;

var _uuid = _interopRequireDefault(require("uuid"));

var _lodash = require("lodash");

var _make_ping = require("./make_ping");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const getRandomMonitorId = () => {
  return 'monitor-' + Math.random().toString(36).substring(7);
};

const makeCheck = async ({
  es,
  monitorId = getRandomMonitorId(),
  numIps = 1,
  fields = {},
  mogrify = d => d,
  refresh = true,
  tls = false,
  isFleetManaged = false
}) => {
  const cgFields = {
    monitor: {
      check_group: _uuid.default.v4()
    }
  };
  const docs = [];
  const summary = {
    up: 0,
    down: 0
  };

  for (let i = 0; i < numIps; i++) {
    const pingFields = (0, _lodash.merge)(fields, cgFields, {
      monitor: {
        ip: `127.0.0.${i}`
      }
    });

    if (i === numIps - 1) {
      pingFields.summary = summary;
    }

    const doc = await (0, _make_ping.makePing)(es, monitorId, pingFields, mogrify, false, tls, isFleetManaged);
    docs.push(doc); // @ts-ignore

    summary[doc.monitor.status]++;
  }

  if (refresh) {
    await es.indices.refresh();
  }

  return {
    monitorId,
    docs
  };
};

exports.makeCheck = makeCheck;

const makeChecks = async (es, monitorId, numChecks = 1, numIps = 1, every = 10000, // number of millis between checks
fields = {}, mogrify = d => d, refresh = true, isFleetManaged = false) => {
  const checks = [];
  const oldestTime = new Date().getTime() - numChecks * every;
  let newestTime = oldestTime;

  for (let li = 0; li < numChecks; li++) {
    const checkDate = new Date(newestTime + every);
    newestTime = checkDate.getTime() + every;
    fields = (0, _lodash.merge)(fields, {
      '@timestamp': checkDate.toISOString(),
      monitor: {
        timespan: {
          gte: checkDate.toISOString(),
          lt: new Date(newestTime).toISOString()
        }
      }
    });
    const {
      docs
    } = await makeCheck({
      es,
      monitorId,
      numIps,
      fields,
      mogrify,
      refresh: false,
      isFleetManaged
    });
    checks.push(docs);
  }

  if (refresh) {
    await es.indices.refresh();
  }

  return checks;
};

exports.makeChecks = makeChecks;

const makeChecksWithStatus = async (es, monitorId, numChecks, numIps, every, fields = {}, status, mogrify = d => d, refresh = true, isFleetManaged = false) => {
  const oppositeStatus = status === 'up' ? 'down' : 'up';
  return await makeChecks(es, monitorId, numChecks, numIps, every, fields, d => {
    d.monitor.status = status;

    if (d.summary) {
      d.summary[status] += d.summary[oppositeStatus];
      d.summary[oppositeStatus] = 0;
    }

    return mogrify(d);
  }, refresh, isFleetManaged);
}; // Helper for processing a list of checks to find the time picker bounds.


exports.makeChecksWithStatus = makeChecksWithStatus;

const getChecksDateRange = checks => {
  // Flatten 2d arrays
  const flattened = (0, _lodash.flattenDeep)(checks);
  let startTime = 1 / 0;
  let endTime = -1 / 0;
  flattened.forEach(c => {
    const ts = Date.parse(c['@timestamp']);

    if (ts < startTime) {
      startTime = ts;
    }

    if (ts > endTime) {
      endTime = ts;
    }
  });
  return {
    start: new Date(startTime).toISOString(),
    end: new Date(endTime).toISOString()
  };
};

exports.getChecksDateRange = getChecksDateRange;