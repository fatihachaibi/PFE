"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getEndpointAuthzInitialState = exports.calculateEndpointAuthz = void 0;
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

/**
 * Used by both the server and the UI to generate the Authorization for access to Endpoint related
 * functionality
 *
 * @param licenseService
 * @param fleetAuthz
 * @param userRoles
 */

const calculateEndpointAuthz = (licenseService, fleetAuthz, userRoles) => {
  const isPlatinumPlusLicense = licenseService.isPlatinumPlus();
  const hasAllAccessToFleet = userRoles.includes('superuser');
  return {
    canAccessFleet: hasAllAccessToFleet,
    canAccessEndpointManagement: hasAllAccessToFleet,
    canCreateArtifactsByPolicy: hasAllAccessToFleet && isPlatinumPlusLicense,
    canIsolateHost: isPlatinumPlusLicense && hasAllAccessToFleet,
    canUnIsolateHost: hasAllAccessToFleet
  };
};

exports.calculateEndpointAuthz = calculateEndpointAuthz;

const getEndpointAuthzInitialState = () => {
  return {
    canAccessFleet: false,
    canAccessEndpointManagement: false,
    canCreateArtifactsByPolicy: false,
    canIsolateHost: false,
    canUnIsolateHost: true
  };
};

exports.getEndpointAuthzInitialState = getEndpointAuthzInitialState;