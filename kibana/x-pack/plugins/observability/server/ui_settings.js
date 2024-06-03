"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uiSettings = void 0;

var _configSchema = require("@kbn/config-schema");

var _i18n = require("@kbn/i18n");

var _common = require("../common");

var _ui_settings_keys = require("../common/ui_settings_keys");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const technicalPreviewLabel = _i18n.i18n.translate('xpack.observability.uiSettings.technicalPreviewLabel', {
  defaultMessage: 'technical preview'
});
/**
 * uiSettings definitions for Observability.
 */


const uiSettings = {
  [_ui_settings_keys.enableInspectEsQueries]: {
    category: [_common.observabilityFeatureId],
    name: _i18n.i18n.translate('xpack.observability.enableInspectEsQueriesExperimentName', {
      defaultMessage: 'Inspect ES queries'
    }),
    value: false,
    description: _i18n.i18n.translate('xpack.observability.enableInspectEsQueriesExperimentDescription', {
      defaultMessage: 'Inspect Elasticsearch queries in API responses.'
    }),
    schema: _configSchema.schema.boolean()
  },
  [_ui_settings_keys.maxSuggestions]: {
    category: [_common.observabilityFeatureId],
    name: _i18n.i18n.translate('xpack.observability.maxSuggestionsUiSettingName', {
      defaultMessage: 'Maximum suggestions'
    }),
    value: 100,
    description: _i18n.i18n.translate('xpack.observability.maxSuggestionsUiSettingDescription', {
      defaultMessage: 'Maximum number of suggestions fetched in autocomplete selection boxes.'
    }),
    schema: _configSchema.schema.number()
  },
  [_ui_settings_keys.enableComparisonByDefault]: {
    category: [_common.observabilityFeatureId],
    name: _i18n.i18n.translate('xpack.observability.enableComparisonByDefault', {
      defaultMessage: 'Comparison feature'
    }),
    value: true,
    description: _i18n.i18n.translate('xpack.observability.enableComparisonByDefaultDescription', {
      defaultMessage: 'Enable the comparison feature in APM app'
    }),
    schema: _configSchema.schema.boolean()
  },
  [_ui_settings_keys.enableInfrastructureView]: {
    category: [_common.observabilityFeatureId],
    name: _i18n.i18n.translate('xpack.observability.enableInfrastructureView', {
      defaultMessage: 'Infrastructure feature'
    }),
    value: false,
    description: _i18n.i18n.translate('xpack.observability.enableInfrastructureViewDescription', {
      defaultMessage: 'Enable the Infrastructure view feature in APM app'
    }),
    schema: _configSchema.schema.boolean()
  },
  [_ui_settings_keys.defaultApmServiceEnvironment]: {
    category: [_common.observabilityFeatureId],
    name: _i18n.i18n.translate('xpack.observability.defaultApmServiceEnvironment', {
      defaultMessage: 'Default service environment'
    }),
    description: _i18n.i18n.translate('xpack.observability.defaultApmServiceEnvironmentDescription', {
      defaultMessage: 'Set the default environment for the APM app. When left empty, data from all environments will be displayed by default.'
    }),
    value: '',
    schema: _configSchema.schema.string()
  },
  [_ui_settings_keys.apmProgressiveLoading]: {
    category: [_common.observabilityFeatureId],
    name: _i18n.i18n.translate('xpack.observability.apmProgressiveLoading', {
      defaultMessage: 'Use progressive loading of selected APM views'
    }),
    description: _i18n.i18n.translate('xpack.observability.apmProgressiveLoadingDescription', {
      defaultMessage: '{technicalPreviewLabel} Whether to load data progressively for APM views. Data may be requested with a lower sampling rate first, with lower accuracy but faster response times, while the unsampled data loads in the background',
      values: {
        technicalPreviewLabel: `<em>[${technicalPreviewLabel}]</em>`
      }
    }),
    value: _common.ProgressiveLoadingQuality.off,
    schema: _configSchema.schema.oneOf([_configSchema.schema.literal(_common.ProgressiveLoadingQuality.off), _configSchema.schema.literal(_common.ProgressiveLoadingQuality.low), _configSchema.schema.literal(_common.ProgressiveLoadingQuality.medium), _configSchema.schema.literal(_common.ProgressiveLoadingQuality.high)]),
    requiresPageReload: false,
    type: 'select',
    options: [_common.ProgressiveLoadingQuality.off, _common.ProgressiveLoadingQuality.low, _common.ProgressiveLoadingQuality.medium, _common.ProgressiveLoadingQuality.high],
    optionLabels: {
      [_common.ProgressiveLoadingQuality.off]: _i18n.i18n.translate('xpack.observability.apmProgressiveLoadingQualityOff', {
        defaultMessage: 'Off'
      }),
      [_common.ProgressiveLoadingQuality.low]: _i18n.i18n.translate('xpack.observability.apmProgressiveLoadingQualityLow', {
        defaultMessage: 'Low sampling rate (fastest, least accurate)'
      }),
      [_common.ProgressiveLoadingQuality.medium]: _i18n.i18n.translate('xpack.observability.apmProgressiveLoadingQualityMedium', {
        defaultMessage: 'Medium sampling rate'
      }),
      [_common.ProgressiveLoadingQuality.high]: _i18n.i18n.translate('xpack.observability.apmProgressiveLoadingQualityHigh', {
        defaultMessage: 'High sampling rate (slower, most accurate)'
      })
    }
  },
  [_ui_settings_keys.enableServiceGroups]: {
    category: [_common.observabilityFeatureId],
    name: _i18n.i18n.translate('xpack.observability.enableServiceGroups', {
      defaultMessage: 'Service groups feature'
    }),
    value: false,
    description: _i18n.i18n.translate('xpack.observability.enableServiceGroupsDescription', {
      defaultMessage: '{technicalPreviewLabel} Enable the Service groups feature on APM UI',
      values: {
        technicalPreviewLabel: `<em>[${technicalPreviewLabel}]</em>`
      }
    }),
    schema: _configSchema.schema.boolean(),
    requiresPageReload: true
  },
  [_ui_settings_keys.apmServiceInventoryOptimizedSorting]: {
    category: [_common.observabilityFeatureId],
    name: _i18n.i18n.translate('xpack.observability.apmServiceInventoryOptimizedSorting', {
      defaultMessage: 'Optimize APM Service Inventory page load performance'
    }),
    description: _i18n.i18n.translate('xpack.observability.apmServiceInventoryOptimizedSortingDescription', {
      defaultMessage: '{technicalPreviewLabel} Default APM Service Inventory page sort (for Services without Machine Learning applied) to sort by Service Name',
      values: {
        technicalPreviewLabel: `<em>[${technicalPreviewLabel}]</em>`
      }
    }),
    schema: _configSchema.schema.boolean(),
    value: false,
    requiresPageReload: false,
    type: 'boolean'
  },
  [_ui_settings_keys.apmTraceExplorerTab]: {
    category: [_common.observabilityFeatureId],
    name: _i18n.i18n.translate('xpack.observability.apmTraceExplorerTab', {
      defaultMessage: 'APM Trace Explorer'
    }),
    description: _i18n.i18n.translate('xpack.observability.apmTraceExplorerTabDescription', {
      defaultMessage: '{technicalPreviewLabel} Enable the APM Trace Explorer feature, that allows you to search and inspect traces with KQL or EQL',
      values: {
        technicalPreviewLabel: `<em>[${technicalPreviewLabel}]</em>`
      }
    }),
    schema: _configSchema.schema.boolean(),
    value: false,
    requiresPageReload: true,
    type: 'boolean'
  }
};
exports.uiSettings = uiSettings;