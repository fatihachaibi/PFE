"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UsageCollector = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


class UsageCollector {
  static registerUsageCollector(usageCollection) {
    const collector = UsageCollector.getUsageCollector(usageCollection);
    usageCollection.registerCollector(collector);
  }

  static getUsageCollector(usageCollection) {
    return usageCollection.makeUsageCollector({
      type: 'infraops',
      isReady: () => true,
      fetch: async () => {
        return this.getReport();
      },
      schema: {
        last_24_hours: {
          hits: {
            infraops_hosts: {
              type: 'long'
            },
            infraops_docker: {
              type: 'long'
            },
            infraops_kubernetes: {
              type: 'long'
            },
            logs: {
              type: 'long'
            }
          }
        }
      }
    });
  }

  static countNode(nodeType) {
    const bucket = this.getBucket();
    this.maybeInitializeBucket(bucket);

    switch (nodeType) {
      case 'pod':
        this.counters[bucket].infraopsKubernetes += 1;
        break;

      case 'container':
        this.counters[bucket].infraopsDocker += 1;
        break;

      default:
        this.counters[bucket].infraopsHosts += 1;
    }
  }

  static countLogs() {
    const bucket = this.getBucket();
    this.maybeInitializeBucket(bucket);
    this.counters[bucket].logs += 1;
  } // report the last 24 hours


  static getBucket() {
    const now = Math.floor(Date.now() / 1000);
    return now - now % this.BUCKET_SIZE;
  }

  static maybeInitializeBucket(bucket) {
    if (!this.counters[bucket]) {
      this.counters[bucket] = {
        infraopsHosts: 0,
        infraopsDocker: 0,
        infraopsKubernetes: 0,
        logs: 0
      };
    }
  }

  static getReport() {
    const keys = Object.keys(this.counters); // only keep the newest BUCKET_NUMBER buckets

    const cutoff = this.getBucket() - this.BUCKET_SIZE * (this.BUCKET_NUMBER - 1);
    keys.forEach(key => {
      if (parseInt(key, 10) < cutoff) {
        delete this.counters[key];
      }
    }); // all remaining buckets are current

    const sums = Object.keys(this.counters).reduce((a, b) => {
      const key = parseInt(b, 10);
      return {
        infraopsHosts: a.infraopsHosts + this.counters[key].infraopsHosts,
        infraopsDocker: a.infraopsDocker + this.counters[key].infraopsDocker,
        infraopsKubernetes: a.infraopsKubernetes + this.counters[key].infraopsKubernetes,
        logs: a.logs + this.counters[key].logs
      };
    }, {
      infraopsHosts: 0,
      infraopsDocker: 0,
      infraopsKubernetes: 0,
      logs: 0
    });
    return {
      last_24_hours: {
        hits: {
          infraops_hosts: sums.infraopsHosts,
          infraops_docker: sums.infraopsDocker,
          infraops_kubernetes: sums.infraopsKubernetes,
          logs: sums.logs
        }
      }
    };
  }

}

exports.UsageCollector = UsageCollector;
(0, _defineProperty2.default)(UsageCollector, "counters", {});
(0, _defineProperty2.default)(UsageCollector, "BUCKET_SIZE", 3600);
(0, _defineProperty2.default)(UsageCollector, "BUCKET_NUMBER", 24);