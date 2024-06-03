"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.expandDottedObject = exports.expandDottedEntries = void 0;
exports.generatePackageInfoFromArchiveBuffer = generatePackageInfoFromArchiveBuffer;
exports.parseAndVerifyDataStreams = parseAndVerifyDataStreams;
exports.parseAndVerifyInputs = parseAndVerifyInputs;
exports.parseAndVerifyPolicyTemplates = parseAndVerifyPolicyTemplates;
exports.parseAndVerifyStreams = parseAndVerifyStreams;
exports.parseAndVerifyVars = parseAndVerifyVars;

var _std = require("@kbn/std");

var _jsYaml = _interopRequireDefault(require("js-yaml"));

var _lodash = require("lodash");

var _major = _interopRequireDefault(require("semver/functions/major"));

var _prerelease = _interopRequireDefault(require("semver/functions/prerelease"));

var _types = require("../../../../common/types");

var _errors = require("../../../errors");

var _registry = require("../registry");

var _ = require(".");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const MANIFESTS = {};
const MANIFEST_NAME = 'manifest.yml';
const DEFAULT_RELEASE_VALUE = 'ga'; // Ingest pipelines are specified in a `data_stream/<name>/elasticsearch/ingest_pipeline/` directory where a `default`
// ingest pipeline should be specified by one of these filenames.

const DEFAULT_INGEST_PIPELINE_VALUE = 'default';
const DEFAULT_INGEST_PIPELINE_FILE_NAME_YML = 'default.yml';
const DEFAULT_INGEST_PIPELINE_FILE_NAME_JSON = 'default.json'; // Borrowed from https://github.com/elastic/kibana/blob/main/x-pack/plugins/security_solution/common/utils/expand_dotted.ts
// with some alterations around non-object values. The package registry service expands some dotted fields from manifest files,
// so we need to do the same here.

const expandDottedField = (dottedFieldName, val) => {
  const parts = dottedFieldName.split('.');

  if (parts.length === 1) {
    return {
      [parts[0]]: val
    };
  } else {
    return {
      [parts[0]]: expandDottedField(parts.slice(1).join('.'), val)
    };
  }
};

const expandDottedObject = dottedObj => {
  if (typeof dottedObj !== 'object' || Array.isArray(dottedObj)) {
    return dottedObj;
  }

  return Object.entries(dottedObj).reduce((acc, [key, val]) => (0, _std.merge)(acc, expandDottedField(key, val)), {});
};

exports.expandDottedObject = expandDottedObject;

const expandDottedEntries = obj => {
  return Object.entries(obj).reduce((acc, [key, value]) => {
    acc[key] = expandDottedObject(value);
    return acc;
  }, {});
}; // not sure these are 100% correct but they do the job here
// keeping them local until others need them


exports.expandDottedEntries = expandDottedEntries; // pro: guarantee only supplying known values. these keys must be in ArchivePackage. no typos or new values
// pro: any values added to these lists will be passed through by default
// pro & con: values do need to be shadowed / repeated from ArchivePackage, but perhaps we want to limit values

const requiredArchivePackageProps = ['name', 'version', 'description', 'title', 'format_version', 'owner'];
const optionalArchivePackageProps = ['readme', 'assets', 'data_streams', 'license', 'type', 'categories', 'conditions', 'screenshots', 'icons', 'policy_templates', 'release'];
const registryInputProps = Object.values(_types.RegistryInputKeys);
const registryVarsProps = Object.values(_types.RegistryVarsEntryKeys);
const registryPolicyTemplateProps = Object.values(_types.RegistryPolicyTemplateKeys);
const registryStreamProps = Object.values(_types.RegistryStreamKeys);
const registryDataStreamProps = Object.values(_types.RegistryDataStreamKeys);
/*
  This function generates a package info object (see type `ArchivePackage`) by parsing and verifying the `manifest.yml` file as well
  as the directory structure for the given package archive and other files adhering to the package spec: https://github.com/elastic/package-spec.

  Currently, this process is duplicative of logic that's already implemented in the Package Registry codebase,
  e.g. https://github.com/elastic/package-registry/blob/main/packages/package.go. Because of this duplication, it's likely for our parsing/verification
  logic to fall out of sync with the registry codebase's implementation.

  This should be addressed in https://github.com/elastic/kibana/issues/115032
  where we'll no longer use the package registry endpoint as a source of truth for package info objects, and instead Fleet will _always_ generate
  them in the manner implemented below.
*/

async function generatePackageInfoFromArchiveBuffer(archiveBuffer, contentType) {
  const entries = await (0, _.unpackBufferEntries)(archiveBuffer, contentType);
  const paths = [];
  entries.forEach(({
    path,
    buffer
  }) => {
    paths.push(path);
    if (path.endsWith(MANIFEST_NAME) && buffer) MANIFESTS[path] = buffer;
  });
  return {
    packageInfo: parseAndVerifyArchive(paths),
    paths
  };
}

function parseAndVerifyArchive(paths) {
  // The top-level directory must match pkgName-pkgVersion, and no other top-level files or directories may be present
  const toplevelDir = paths[0].split('/')[0];
  paths.forEach(path => {
    if (path.split('/')[0] !== toplevelDir) {
      throw new _errors.PackageInvalidArchiveError('Package contains more than one top-level directory.');
    }
  }); // The package must contain a manifest file ...

  const manifestFile = `${toplevelDir}/${MANIFEST_NAME}`;
  const manifestBuffer = MANIFESTS[manifestFile];

  if (!paths.includes(manifestFile) || !manifestBuffer) {
    throw new _errors.PackageInvalidArchiveError(`Package must contain a top-level ${MANIFEST_NAME} file.`);
  } // ... which must be valid YAML


  let manifest;

  try {
    manifest = _jsYaml.default.safeLoad(manifestBuffer.toString());
  } catch (error) {
    throw new _errors.PackageInvalidArchiveError(`Could not parse top-level package manifest: ${error}.`);
  } // must have mandatory fields


  const reqGiven = (0, _lodash.pick)(manifest, requiredArchivePackageProps);
  const requiredKeysMatch = Object.keys(reqGiven).toString() === requiredArchivePackageProps.toString();

  if (!requiredKeysMatch) {
    const list = requiredArchivePackageProps.join(', ');
    throw new _errors.PackageInvalidArchiveError(`Invalid top-level package manifest: one or more fields missing of ${list}`);
  } // at least have all required properties
  // get optional values and combine into one object for the remaining operations


  const optGiven = (0, _lodash.pick)(manifest, optionalArchivePackageProps);
  const parsed = { ...reqGiven,
    ...optGiven
  }; // Package name and version from the manifest must match those from the toplevel directory

  const pkgKey = (0, _registry.pkgToPkgKey)({
    name: parsed.name,
    version: parsed.version
  });

  if (toplevelDir !== pkgKey) {
    throw new _errors.PackageInvalidArchiveError(`Name ${parsed.name} and version ${parsed.version} do not match top-level directory ${toplevelDir}`);
  }

  const parsedDataStreams = parseAndVerifyDataStreams(paths, parsed.name, parsed.version);

  if (parsedDataStreams.length) {
    parsed.data_streams = parsedDataStreams;
  }

  parsed.policy_templates = parseAndVerifyPolicyTemplates(manifest); // add readme if exists

  const readme = parseAndVerifyReadme(paths, parsed.name, parsed.version);

  if (readme) {
    parsed.readme = readme;
  } // If no `release` is specified, fall back to a value based on the `version` of the integration
  // to maintain backwards comptability. This is a temporary measure until the `release` field is
  // completely deprecated elsewhere in Fleet/Agent. See https://github.com/elastic/package-spec/issues/225


  if (!parsed.release) {
    parsed.release = (0, _prerelease.default)(parsed.version) || (0, _major.default)(parsed.version) < 1 ? 'beta' : 'ga';
  }

  return parsed;
}

function parseAndVerifyReadme(paths, pkgName, pkgVersion) {
  const readmeRelPath = `/docs/README.md`;
  const readmePath = `${pkgName}-${pkgVersion}${readmeRelPath}`;
  return paths.includes(readmePath) ? `/package/${pkgName}/${pkgVersion}${readmeRelPath}` : null;
}

function parseAndVerifyDataStreams(paths, pkgName, pkgVersion) {
  // A data stream is made up of a subdirectory of name-version/data_stream/, containing a manifest.yml
  let dataStreamPaths = [];
  const dataStreams = [];
  const pkgKey = (0, _registry.pkgToPkgKey)({
    name: pkgName,
    version: pkgVersion
  }); // pick all paths matching name-version/data_stream/DATASTREAM_PATH/...
  // from those, pick all unique data stream paths

  paths.filter(path => path.startsWith(`${pkgKey}/data_stream/`)).forEach(path => {
    const parts = path.split('/');
    if (parts.length > 2 && parts[2]) dataStreamPaths.push(parts[2]);
  });
  dataStreamPaths = (0, _lodash.uniq)(dataStreamPaths);
  dataStreamPaths.forEach(dataStreamPath => {
    var _elasticsearch$index_, _elasticsearch$index_2;

    const manifestFile = `${pkgKey}/data_stream/${dataStreamPath}/${MANIFEST_NAME}`;
    const manifestBuffer = MANIFESTS[manifestFile];

    if (!paths.includes(manifestFile) || !manifestBuffer) {
      throw new _errors.PackageInvalidArchiveError(`No manifest.yml file found for data stream '${dataStreamPath}'`);
    }

    let manifest;

    try {
      manifest = _jsYaml.default.safeLoad(manifestBuffer.toString());
    } catch (error) {
      throw new _errors.PackageInvalidArchiveError(`Could not parse package manifest for data stream '${dataStreamPath}': ${error}.`);
    }

    const {
      title: dataStreamTitle,
      release = DEFAULT_RELEASE_VALUE,
      type,
      dataset,
      streams: manifestStreams,
      elasticsearch,
      ...restOfProps
    } = manifest;

    if (!(dataStreamTitle && type)) {
      throw new _errors.PackageInvalidArchiveError(`Invalid manifest for data stream '${dataStreamPath}': one or more fields missing of 'title', 'type'`);
    }

    let ingestPipeline;
    const ingestPipelinePaths = paths.filter(path => path.startsWith(`${pkgKey}/data_stream/${dataStreamPath}/elasticsearch/ingest_pipeline`));

    if (ingestPipelinePaths.length && (ingestPipelinePaths.some(ingestPipelinePath => ingestPipelinePath.endsWith(DEFAULT_INGEST_PIPELINE_FILE_NAME_YML)) || ingestPipelinePaths.some(ingestPipelinePath => ingestPipelinePath.endsWith(DEFAULT_INGEST_PIPELINE_FILE_NAME_JSON)))) {
      ingestPipeline = DEFAULT_INGEST_PIPELINE_VALUE;
    }

    const streams = parseAndVerifyStreams(manifestStreams, dataStreamPath);
    const parsedElasticsearchEntry = {};

    if (ingestPipeline) {
      parsedElasticsearchEntry['ingest_pipeline.name'] = DEFAULT_INGEST_PIPELINE_VALUE;
    }

    if (elasticsearch !== null && elasticsearch !== void 0 && elasticsearch.privileges) {
      parsedElasticsearchEntry.privileges = elasticsearch.privileges;
    }

    if (elasticsearch !== null && elasticsearch !== void 0 && (_elasticsearch$index_ = elasticsearch.index_template) !== null && _elasticsearch$index_ !== void 0 && _elasticsearch$index_.mappings) {
      parsedElasticsearchEntry['index_template.mappings'] = expandDottedEntries(elasticsearch.index_template.mappings);
    }

    if (elasticsearch !== null && elasticsearch !== void 0 && (_elasticsearch$index_2 = elasticsearch.index_template) !== null && _elasticsearch$index_2 !== void 0 && _elasticsearch$index_2.settings) {
      parsedElasticsearchEntry['index_template.settings'] = expandDottedEntries(elasticsearch.index_template.settings);
    } // Build up the stream object here so we can conditionally insert nullable fields. The package registry omits undefined
    // fields, so we're mimicking that behavior here.


    const dataStreamObject = {
      title: dataStreamTitle,
      release,
      type,
      package: pkgName,
      dataset: dataset || `${pkgName}.${dataStreamPath}`,
      path: dataStreamPath,
      elasticsearch: parsedElasticsearchEntry
    };

    if (ingestPipeline) {
      dataStreamObject.ingest_pipeline = ingestPipeline;
    }

    if (streams.length) {
      dataStreamObject.streams = streams;
    }

    dataStreams.push(Object.entries(restOfProps).reduce((validatedDataStream, [key, value]) => {
      if (registryDataStreamProps.includes(key)) {
        validatedDataStream[key] = value;
      }

      return validatedDataStream;
    }, dataStreamObject));
  });
  return dataStreams;
}

function parseAndVerifyStreams(manifestStreams, dataStreamPath) {
  const streams = [];

  if (manifestStreams && manifestStreams.length > 0) {
    manifestStreams.forEach(manifestStream => {
      const {
        input,
        title: streamTitle,
        vars: manifestVars,
        template_path: templatePath,
        ...restOfProps
      } = manifestStream;

      if (!(input && streamTitle)) {
        throw new _errors.PackageInvalidArchiveError(`Invalid manifest for data stream ${dataStreamPath}: stream is missing one or more fields of: input, title`);
      }

      const vars = parseAndVerifyVars(manifestVars, `data stream ${dataStreamPath}`);
      const streamObject = {
        input,
        title: streamTitle,
        template_path: templatePath || 'stream.yml.hbs'
      };

      if (vars.length) {
        streamObject.vars = vars;
      }

      streams.push(Object.entries(restOfProps).reduce((validatedStream, [key, value]) => {
        if (registryStreamProps.includes(key)) {
          // @ts-expect-error
          validatedStream[key] = value;
        }

        return validatedStream;
      }, streamObject));
    });
  }

  return streams;
}

function parseAndVerifyVars(manifestVars, location) {
  const vars = [];

  if (manifestVars && manifestVars.length > 0) {
    manifestVars.forEach(manifestVar => {
      const {
        name,
        type,
        ...restOfProps
      } = manifestVar;

      if (!(name && type)) {
        throw new _errors.PackageInvalidArchiveError(`Invalid var definition for ${location}: one of mandatory fields 'name' and 'type' missing in var: ${manifestVar}`);
      }

      vars.push(Object.entries(restOfProps).reduce((validatedVarEntry, [key, value]) => {
        if (registryVarsProps.includes(key)) {
          // @ts-expect-error
          validatedVarEntry[key] = value;
        }

        return validatedVarEntry;
      }, {
        name,
        type
      }));
    });
  }

  return vars;
}

function parseAndVerifyPolicyTemplates(manifest) {
  const policyTemplates = [];
  const manifestPolicyTemplates = manifest.policy_templates;

  if (manifestPolicyTemplates && manifestPolicyTemplates.length > 0) {
    manifestPolicyTemplates.forEach(policyTemplate => {
      const {
        name,
        title: policyTemplateTitle,
        description,
        inputs,
        multiple,
        ...restOfProps
      } = policyTemplate;

      if (!(name && policyTemplateTitle && description)) {
        throw new _errors.PackageInvalidArchiveError(`Invalid top-level manifest: one of mandatory fields 'name', 'title', 'description' is missing in policy template: ${policyTemplate}`);
      }

      let parsedInputs = [];

      if (inputs) {
        parsedInputs = parseAndVerifyInputs(inputs, `config template ${name}`);
      } // defaults to true if undefined, but may be explicitly set to false.


      let parsedMultiple = true;
      if (typeof multiple === 'boolean' && multiple === false) parsedMultiple = false;
      policyTemplates.push(Object.entries(restOfProps).reduce((validatedPolicyTemplate, [key, value]) => {
        if (registryPolicyTemplateProps.includes(key)) {
          // @ts-expect-error
          validatedPolicyTemplate[key] = value;
        }

        return validatedPolicyTemplate;
      }, {
        name,
        title: policyTemplateTitle,
        description,
        inputs: parsedInputs,
        multiple: parsedMultiple
      }));
    });
  }

  return policyTemplates;
}

function parseAndVerifyInputs(manifestInputs, location) {
  const inputs = [];

  if (manifestInputs && manifestInputs.length > 0) {
    manifestInputs.forEach(input => {
      const {
        title: inputTitle,
        vars,
        ...restOfProps
      } = input;

      if (!(input.type && inputTitle)) {
        throw new _errors.PackageInvalidArchiveError(`Invalid top-level manifest: one of mandatory fields 'type', 'title' missing in input: ${input}`);
      }

      const parsedVars = parseAndVerifyVars(vars, location);
      inputs.push(Object.entries(restOfProps).reduce((validatedInput, [key, value]) => {
        if (registryInputProps.includes(key)) {
          // @ts-expect-error
          validatedInput[key] = value;
        }

        return validatedInput;
      }, {
        title: inputTitle,
        vars: parsedVars
      }));
    });
  }

  return inputs;
}