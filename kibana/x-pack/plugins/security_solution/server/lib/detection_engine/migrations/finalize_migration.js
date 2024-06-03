"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.finalizeMigration = void 0;

var _securitysolutionEsUtils = require("@kbn/securitysolution-es-utils");

var _helpers = require("./helpers");

var _migration_cleanup = require("./migration_cleanup");

var _replace_signals_index_alias = require("./replace_signals_index_alias");

var _update_migration_saved_object = require("./update_migration_saved_object");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

/**
 * Finalizes a given migration:
 *   * validates that the migration has completed successfully
 *   * deletes the reindex task document
 *   * applies the deletion policy to the old index
 *   * swaps aliases on the old/new index
 *
 * @param esClient An {@link ElasticsearchClient}
 * @param soClient An {@link SavedObjectsClientContract}
 * @param migration the migration to be finalized {@link SignalsMigrationSO}
 * @param signalsAlias the alias for signals indices
 * @param username name of the user initiating the finalization
 *
 * @returns the migration SavedObject {@link SignalsMigrationSO}
 * @throws if the migration is invalid or a client throws
 */


const finalizeMigration = async ({
  esClient,
  migration,
  signalsAlias,
  soClient,
  username
}) => {
  if (!(0, _helpers.isMigrationPending)(migration)) {
    return migration;
  }

  const {
    destinationIndex,
    sourceIndex,
    taskId
  } = migration.attributes;
  const task = await esClient.tasks.get({
    task_id: taskId
  });

  if (!task.completed) {
    return migration;
  }

  const sourceCount = await (0, _securitysolutionEsUtils.getIndexCount)({
    esClient,
    index: sourceIndex
  });
  const destinationCount = await (0, _securitysolutionEsUtils.getIndexCount)({
    esClient,
    index: destinationIndex
  });

  if (sourceCount !== destinationCount) {
    const updatedMigration = await (0, _update_migration_saved_object.updateMigrationSavedObject)({
      username,
      soClient,
      id: migration.id,
      attributes: {
        status: 'failure',
        error: `The source and destination indexes have different document counts. Source [${sourceIndex}] has [${sourceCount}] documents, while destination [${destinationIndex}] has [${destinationCount}] documents.`
      }
    });
    await (0, _migration_cleanup.applyMigrationCleanupPolicy)({
      alias: signalsAlias,
      esClient,
      index: destinationIndex
    });
    return { ...migration,
      attributes: { ...migration.attributes,
        ...updatedMigration.attributes
      }
    };
  }

  await (0, _replace_signals_index_alias.replaceSignalsIndexAlias)({
    alias: signalsAlias,
    esClient,
    newIndex: destinationIndex,
    oldIndex: sourceIndex
  });
  const updatedMigration = await (0, _update_migration_saved_object.updateMigrationSavedObject)({
    username,
    soClient,
    id: migration.id,
    attributes: {
      status: 'success'
    }
  });
  return { ...migration,
    attributes: { ...migration.attributes,
      ...updatedMigration.attributes
    }
  };
};

exports.finalizeMigration = finalizeMigration;