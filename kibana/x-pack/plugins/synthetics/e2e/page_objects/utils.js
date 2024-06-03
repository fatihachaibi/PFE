"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.utilsPageProvider = utilsPageProvider;

var _synthetics = require("@elastic/synthetics");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


function utilsPageProvider({
  page
}) {
  return {
    byTestId(testId) {
      return `[data-test-subj=${testId}]`;
    },

    async waitForLoadingToFinish() {
      while (true) {
        if ((await page.$(this.byTestId('kbnLoadingMessage'))) === null) break;
        await page.waitForTimeout(5 * 1000);
      }
    },

    async dismissSyntheticsCallout() {
      await page.click('[data-test-subj=uptimeDismissSyntheticsCallout]', {
        timeout: 60 * 1000
      });
    },

    async assertText({
      text
    }) {
      await page.waitForSelector(`text=${text}`);
      (0, _synthetics.expect)(await page.$(`text=${text}`)).toBeTruthy();
    },

    async fillByTestSubj(dataTestSubj, value) {
      await page.fill(`[data-test-subj=${dataTestSubj}]`, value);
    },

    async selectByTestSubj(dataTestSubj, value) {
      await page.selectOption(`[data-test-subj=${dataTestSubj}]`, value);
    },

    async checkByTestSubj(dataTestSubj, value) {
      await page.check(`[data-test-subj=${dataTestSubj}]`);
    },

    async clickByTestSubj(dataTestSubj) {
      await page.click(`[data-test-subj=${dataTestSubj}]`);
    },

    async findByTestSubj(dataTestSubj) {
      return await page.waitForSelector(`[data-test-subj=${dataTestSubj}]`);
    },

    async findByText(text) {
      return await page.waitForSelector(`text=${text}`);
    }

  };
}