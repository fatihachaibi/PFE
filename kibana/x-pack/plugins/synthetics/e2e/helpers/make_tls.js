"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeTls = exports.getSha256 = void 0;

var _moment = _interopRequireDefault(require("moment"));

var _crypto = _interopRequireDefault(require("crypto"));
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */
// Note This is just a mock sha256 value, this doesn't actually generate actually sha 256 val


const getSha256 = () => {
  return _crypto.default.randomBytes(64).toString('hex').toUpperCase();
};

exports.getSha256 = getSha256;

const makeTls = ({
  valid = true,
  commonName = '*.elastic.co',
  expiry,
  sha256
}) => {
  const expiryDate = expiry !== null && expiry !== void 0 ? expiry : (0, _moment.default)().add(valid ? 2 : -2, 'months').toISOString();
  return {
    version: '1.3',
    cipher: 'TLS-AES-128-GCM-SHA256',
    certificate_not_valid_before: '2020-03-01T00:00:00.000Z',
    certificate_not_valid_after: expiryDate,
    server: {
      x509: {
        not_before: '2020-03-01T00:00:00.000Z',
        not_after: expiryDate,
        issuer: {
          distinguished_name: 'CN=DigiCert SHA2 High Assurance Server CA,OU=www.digicert.com,O=DigiCert Inc,C=US',
          common_name: 'DigiCert SHA2 High Assurance Server CA'
        },
        subject: {
          common_name: commonName,
          distinguished_name: 'CN=*.facebook.com,O=Facebook Inc.,L=Menlo Park,ST=California,C=US'
        },
        serial_number: '10043199409725537507026285099403602396',
        signature_algorithm: 'SHA256-RSA',
        public_key_algorithm: 'ECDSA',
        public_key_curve: 'P-256'
      },
      hash: {
        sha256: sha256 !== null && sha256 !== void 0 ? sha256 : '1a48f1db13c3bd1482ba1073441e74a1bb1308dc445c88749e0dc4f1889a88a4',
        sha1: '23291c758d925b9f4bb3584de3763317e94c6ce9'
      }
    },
    established: true,
    rtt: {
      handshake: {
        us: 33103
      }
    },
    version_protocol: 'tls'
  };
};

exports.makeTls = makeTls;