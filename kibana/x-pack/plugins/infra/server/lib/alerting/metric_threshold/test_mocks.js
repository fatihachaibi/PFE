"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.emptyRateResponse = exports.emptyMetricResponse = exports.compositeEndResponse = exports.changedSourceIdResponse = exports.basicMetricResponse = exports.basicCompositeResponse = exports.alternateMetricResponse = exports.alternateCompositeResponse = void 0;

var utils = _interopRequireWildcard(require("../common/utils"));

function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== "function") return null;
  var cacheBabelInterop = new WeakMap();
  var cacheNodeInterop = new WeakMap();
  return (_getRequireWildcardCache = function (nodeInterop) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}

function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache(nodeInterop);

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


jest.spyOn(utils, 'getViewInAppUrl').mockReturnValue('http://localhost:5601/eyg/app/metrics/explorer');

const bucketsA = from => [{
  doc_count: null,
  aggregatedValue: {
    value: null,
    values: [{
      key: 95.0,
      value: null
    }]
  },
  from_as_string: new Date(from).toISOString()
}, {
  doc_count: 2,
  aggregatedValue: {
    value: 0.5,
    values: [{
      key: 95.0,
      value: 0.5
    }]
  },
  from_as_string: new Date(from + 60000).toISOString()
}, {
  doc_count: 2,
  aggregatedValue: {
    value: 0.5,
    values: [{
      key: 95.0,
      value: 0.5
    }]
  },
  from_as_string: new Date(from + 120000).toISOString()
}, {
  doc_count: 2,
  aggregatedValue: {
    value: 0.5,
    values: [{
      key: 95.0,
      value: 0.5
    }]
  },
  from_as_string: new Date(from + 180000).toISOString()
}, {
  doc_count: 3,
  aggregatedValue: {
    value: 1.0,
    values: [{
      key: 95.0,
      value: 1.0
    }]
  },
  from_as_string: new Date(from + 240000).toISOString()
}, {
  doc_count: 1,
  aggregatedValue: {
    value: 1.0,
    values: [{
      key: 95.0,
      value: 1.0
    }]
  },
  from_as_string: new Date(from + 300000).toISOString()
}];

const bucketsB = from => [{
  doc_count: 0,
  aggregatedValue: {
    value: null,
    values: [{
      key: 99.0,
      value: null
    }]
  },
  from_as_string: new Date(from).toISOString()
}, {
  doc_count: 4,
  aggregatedValue: {
    value: 2.5,
    values: [{
      key: 99.0,
      value: 2.5
    }]
  },
  from_as_string: new Date(from + 60000).toISOString()
}, {
  doc_count: 4,
  aggregatedValue: {
    value: 2.5,
    values: [{
      key: 99.0,
      value: 2.5
    }]
  },
  from_as_string: new Date(from + 120000).toISOString()
}, {
  doc_count: 4,
  aggregatedValue: {
    value: 2.5,
    values: [{
      key: 99.0,
      value: 2.5
    }]
  },
  from_as_string: new Date(from + 180000).toISOString()
}, {
  doc_count: 5,
  aggregatedValue: {
    value: 3.5,
    values: [{
      key: 99.0,
      value: 3.5
    }]
  },
  from_as_string: new Date(from + 240000).toISOString()
}, {
  doc_count: 1,
  aggregatedValue: {
    value: 3,
    values: [{
      key: 99.0,
      value: 3
    }]
  },
  from_as_string: new Date(from + 300000).toISOString()
}];

const bucketsC = from => [{
  doc_count: 0,
  aggregatedValue: {
    value: null
  },
  from_as_string: new Date(from).toISOString()
}, {
  doc_count: 2,
  aggregatedValue: {
    value: 0.5
  },
  from_as_string: new Date(from + 60000).toISOString()
}, {
  doc_count: 2,
  aggregatedValue: {
    value: 0.5
  },
  from_as_string: new Date(from + 120000).toISOString()
}, {
  doc_count: 2,
  aggregatedValue: {
    value: 0.5
  },
  from_as_string: new Date(from + 180000).toISOString()
}, {
  doc_count: 3,
  aggregatedValue: {
    value: 16
  },
  from_as_string: new Date(from + 240000).toISOString()
}, {
  doc_count: 1,
  aggregatedValue: {
    value: 3
  },
  from_as_string: new Date(from + 300000).toISOString()
}];

const basicMetricResponse = () => ({
  hits: {
    total: {
      value: 1
    }
  },
  aggregations: {
    aggregatedValue: {
      value: 1.0,
      values: [{
        key: 95.0,
        value: 1.0
      }]
    }
  }
});

exports.basicMetricResponse = basicMetricResponse;

const alternateMetricResponse = () => ({
  hits: {
    total: {
      value: 1
    }
  },
  aggregations: {
    aggregatedValue: {
      value: 3,
      values: [{
        key: 99.0,
        value: 3
      }]
    }
  }
});

exports.alternateMetricResponse = alternateMetricResponse;
const emptyMetricResponse = {
  aggregations: {
    aggregatedIntervals: {
      buckets: []
    }
  }
};
exports.emptyMetricResponse = emptyMetricResponse;

const emptyRateResponse = from => ({
  aggregations: {
    aggregatedIntervals: {
      buckets: [{
        doc_count: 2,
        aggregatedValueMax: {
          value: null
        },
        from_as_string: new Date(from).toISOString()
      }]
    }
  }
});

exports.emptyRateResponse = emptyRateResponse;

const basicCompositeResponse = from => ({
  aggregations: {
    groupings: {
      after_key: {
        groupBy0: 'foo'
      },
      buckets: [{
        key: {
          groupBy0: 'a'
        },
        aggregatedIntervals: {
          buckets: bucketsA(from)
        },
        doc_count: 1
      }, {
        key: {
          groupBy0: 'b'
        },
        aggregatedIntervals: {
          buckets: bucketsB(from)
        },
        doc_count: 1
      }]
    }
  },
  hits: {
    total: {
      value: 2
    }
  }
});

exports.basicCompositeResponse = basicCompositeResponse;

const alternateCompositeResponse = from => ({
  aggregations: {
    groupings: {
      after_key: {
        groupBy0: 'foo'
      },
      buckets: [{
        key: {
          groupBy0: 'a'
        },
        aggregatedIntervals: {
          buckets: bucketsB(from)
        },
        doc_count: 1
      }, {
        key: {
          groupBy0: 'b'
        },
        aggregatedIntervals: {
          buckets: bucketsA(from)
        },
        doc_count: 1
      }, {
        key: {
          groupBy0: 'c'
        },
        aggregatedIntervals: {
          buckets: bucketsC(from)
        },
        doc_count: 1
      }]
    }
  },
  hits: {
    total: {
      value: 3
    }
  }
});

exports.alternateCompositeResponse = alternateCompositeResponse;
const compositeEndResponse = {
  aggregations: {},
  hits: {
    total: {
      value: 0
    }
  }
};
exports.compositeEndResponse = compositeEndResponse;

const changedSourceIdResponse = from => ({
  aggregations: {
    aggregatedIntervals: {
      buckets: bucketsC(from)
    }
  }
});

exports.changedSourceIdResponse = changedSourceIdResponse;