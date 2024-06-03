"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.settingsPageProvider = settingsPageProvider;

var _synthetics = require("@elastic/synthetics");

var _login = require("./login");

var _utils = require("./utils");

var _utils2 = require("../journeys/utils");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


function settingsPageProvider({
  page
}) {
  return { ...(0, _login.loginPageProvider)({
      page
    }),
    ...(0, _utils.utilsPageProvider)({
      page
    }),

    async fillToEmail(text) {
      await page.fill('[data-test-subj=toEmailAddressInput] >> [data-test-subj=comboBoxSearchInput]', text);
      await page.click((0, _utils2.byTestId)('uptimeSettingsPage'));
    },

    async saveSettings() {
      await page.click((0, _utils2.byTestId)('apply-settings-button'));
      await this.waitForLoadingToFinish();
      await this.assertText({
        text: 'Settings saved!'
      });
    },

    async assertApplyEnabled() {
      (0, _synthetics.expect)(await page.isEnabled((0, _utils2.byTestId)('apply-settings-button'))).toBeTruthy();
    },

    async assertApplyDisabled() {
      (0, _synthetics.expect)(await page.isEnabled((0, _utils2.byTestId)('apply-settings-button'))).toBeFalsy();
    },

    async removeInvalidEmail(invalidEmail) {
      await page.click(`[title="Remove ${invalidEmail} from selection in this group"]`);
    }

  };
}