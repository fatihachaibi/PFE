"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChromiumArchivePaths = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _path = _interopRequireDefault(require("path"));
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


var BaseUrl;

(function (BaseUrl) {
  BaseUrl["common"] = "https://commondatastorage.googleapis.com/chromium-browser-snapshots";
  BaseUrl["custom"] = "https://storage.googleapis.com/headless_shell";
})(BaseUrl || (BaseUrl = {}));

function isCommonPackage(p) {
  return p.location === 'common';
}

class ChromiumArchivePaths {
  constructor() {
    (0, _defineProperty2.default)(this, "packages", [{
      platform: 'darwin',
      architecture: 'x64',
      archiveFilename: 'chrome-mac.zip',
      archiveChecksum: '229fd88c73c5878940821875f77578e4',
      binaryChecksum: 'b0e5ca009306b14e41527000139852e5',
      binaryRelativePath: 'chrome-mac/Chromium.app/Contents/MacOS/Chromium',
      location: 'common',
      archivePath: 'Mac',
      revision: 901912,
      isPreInstalled: false
    }, {
      platform: 'darwin',
      architecture: 'arm64',
      archiveFilename: 'chrome-mac.zip',
      archiveChecksum: 'ecf7aa509c8e2545989ebb9711e35384',
      binaryChecksum: 'b5072b06ffd2d2af4fea7012914da09f',
      binaryRelativePath: 'chrome-mac/Chromium.app/Contents/MacOS/Chromium',
      location: 'common',
      archivePath: 'Mac_Arm',
      revision: 901913,
      // NOTE: 901912 is not available
      isPreInstalled: false
    }, {
      platform: 'linux',
      architecture: 'x64',
      archiveFilename: 'chromium-70f5d88-locales-linux_x64.zip',
      archiveChecksum: '759bda5e5d32533cb136a85e37c0d102',
      binaryChecksum: '82e80f9727a88ba3836ce230134bd126',
      binaryRelativePath: 'headless_shell-linux_x64/headless_shell',
      location: 'custom',
      revision: 901912,
      isPreInstalled: true
    }, {
      platform: 'linux',
      architecture: 'arm64',
      archiveFilename: 'chromium-70f5d88-locales-linux_arm64.zip',
      archiveChecksum: '33613b8dc5212c0457210d5a37ea4b43',
      binaryChecksum: '29e943fbee6d87a217abd6cb6747058e',
      binaryRelativePath: 'headless_shell-linux_arm64/headless_shell',
      location: 'custom',
      revision: 901912,
      isPreInstalled: true
    }, {
      platform: 'win32',
      architecture: 'x64',
      archiveFilename: 'chrome-win.zip',
      archiveChecksum: '861bb8b7b8406a6934a87d3cbbce61d9',
      binaryChecksum: 'ffa0949471e1b9a57bc8f8633fca9c7b',
      binaryRelativePath: _path.default.join('chrome-win', 'chrome.exe'),
      location: 'common',
      archivePath: 'Win',
      revision: 901912,
      isPreInstalled: true
    }]);
    (0, _defineProperty2.default)(this, "archivesPath", _path.default.resolve(__dirname, '../../../../../../.chromium'));
  }

  find(platform, architecture, packages = this.packages) {
    return packages.find(p => p.platform === platform && p.architecture === architecture);
  }

  resolvePath(p) {
    // adding architecture to the path allows it to download two binaries that have the same name, but are different architecture
    return _path.default.resolve(this.archivesPath, p.architecture, p.archiveFilename);
  }

  getAllArchiveFilenames() {
    return this.packages.map(p => this.resolvePath(p));
  }

  getDownloadUrl(p) {
    if (isCommonPackage(p)) {
      return `${BaseUrl.common}/${p.archivePath}/${p.revision}/${p.archiveFilename}`;
    }

    return BaseUrl.custom + '/' + p.archiveFilename; // revision is not used for URL if package is a custom build
  }

  getBinaryPath(p, chromiumPath) {
    return _path.default.join(chromiumPath, p.binaryRelativePath);
  }

}

exports.ChromiumArchivePaths = ChromiumArchivePaths;