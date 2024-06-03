"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.serviceGroupRouteRepository = void 0;

var t = _interopRequireWildcard(require("io-ts"));

var _setup_request = require("../../lib/helpers/setup_request");

var _create_apm_server_route = require("../apm_routes/create_apm_server_route");

var _default_api_types = require("../default_api_types");

var _get_service_groups = require("./get_service_groups");

var _get_service_group = require("./get_service_group");

var _save_service_group = require("./save_service_group");

var _delete_service_group = require("./delete_service_group");

var _lookup_services = require("./lookup_services");

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


const serviceGroupsRoute = (0, _create_apm_server_route.createApmServerRoute)({
  endpoint: 'GET /internal/apm/service-groups',
  options: {
    tags: ['access:apm']
  },
  handler: async resources => {
    const {
      context
    } = resources;
    const savedObjectsClient = (await context.core).savedObjects.client;
    const serviceGroups = await (0, _get_service_groups.getServiceGroups)({
      savedObjectsClient
    });
    return {
      serviceGroups
    };
  }
});
const serviceGroupRoute = (0, _create_apm_server_route.createApmServerRoute)({
  endpoint: 'GET /internal/apm/service-group',
  params: t.type({
    query: t.type({
      serviceGroup: t.string
    })
  }),
  options: {
    tags: ['access:apm']
  },
  handler: async resources => {
    const {
      context,
      params
    } = resources;
    const savedObjectsClient = (await context.core).savedObjects.client;
    const serviceGroup = await (0, _get_service_group.getServiceGroup)({
      savedObjectsClient,
      serviceGroupId: params.query.serviceGroup
    });
    return {
      serviceGroup
    };
  }
});
const serviceGroupSaveRoute = (0, _create_apm_server_route.createApmServerRoute)({
  endpoint: 'POST /internal/apm/service-group',
  params: t.type({
    query: t.intersection([_default_api_types.rangeRt, t.partial({
      serviceGroupId: t.string
    })]),
    body: t.type({
      groupName: t.string,
      kuery: t.string,
      description: t.union([t.string, t.undefined]),
      color: t.union([t.string, t.undefined])
    })
  }),
  options: {
    tags: ['access:apm', 'access:apm_write']
  },
  handler: async resources => {
    const {
      context,
      params
    } = resources;
    const {
      start,
      end,
      serviceGroupId
    } = params.query;
    const savedObjectsClient = (await context.core).savedObjects.client;
    const setup = await (0, _setup_request.setupRequest)(resources);
    const items = await (0, _lookup_services.lookupServices)({
      setup,
      kuery: params.body.kuery,
      start,
      end
    });
    const serviceNames = items.map(({
      serviceName
    }) => serviceName);
    const serviceGroup = { ...params.body,
      serviceNames
    };
    await (0, _save_service_group.saveServiceGroup)({
      savedObjectsClient,
      serviceGroupId,
      serviceGroup
    });
  }
});
const serviceGroupDeleteRoute = (0, _create_apm_server_route.createApmServerRoute)({
  endpoint: 'DELETE /internal/apm/service-group',
  params: t.type({
    query: t.type({
      serviceGroupId: t.string
    })
  }),
  options: {
    tags: ['access:apm', 'access:apm_write']
  },
  handler: async resources => {
    const {
      context,
      params
    } = resources;
    const {
      serviceGroupId
    } = params.query;
    const savedObjectsClient = (await context.core).savedObjects.client;
    await (0, _delete_service_group.deleteServiceGroup)({
      savedObjectsClient,
      serviceGroupId
    });
  }
});
const serviceGroupServicesRoute = (0, _create_apm_server_route.createApmServerRoute)({
  endpoint: 'GET /internal/apm/service-group/services',
  params: t.type({
    query: t.intersection([_default_api_types.rangeRt, t.partial(_default_api_types.kueryRt.props)])
  }),
  options: {
    tags: ['access:apm']
  },
  handler: async resources => {
    const {
      params
    } = resources;
    const {
      kuery = '',
      start,
      end
    } = params.query;
    const setup = await (0, _setup_request.setupRequest)(resources);
    const items = await (0, _lookup_services.lookupServices)({
      setup,
      kuery,
      start,
      end
    });
    return {
      items
    };
  }
});
const serviceGroupRouteRepository = { ...serviceGroupsRoute,
  ...serviceGroupRoute,
  ...serviceGroupSaveRoute,
  ...serviceGroupDeleteRoute,
  ...serviceGroupServicesRoute
};
exports.serviceGroupRouteRepository = serviceGroupRouteRepository;