# frozen_string_literal: true

# Licensed to Elasticsearch B.V. under one or more contributor
# license agreements. See the NOTICE file distributed with
# this work for additional information regarding copyright
# ownership. Elasticsearch B.V. licenses this file to you under
# the Apache License, Version 2.0 (the "License"); you may
# not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#   http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing,
# software distributed under the License is distributed on an
# "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
# KIND, either express or implied.  See the License for the
# specific language governing permissions and limitations
# under the License.

module Elastic
  module EnterpriseSearch
    module AppSearch
      module Actions
        # Synonyms - Update a synonym set
        # Updates a synonym set by ID
        #
        # @param engine_name [String] Name of the engine (*Required*)
        # @param arguments [Hash] endpoint arguments
        # @option arguments [String] :synonym_set_id Synonym Set ID (*Required*)
        # @option arguments [Hash] :body  (Required: synonyms)
        # @option body [String] :id
        # @option body :synonyms  (*Required)
        # @option arguments [Hash] :headers optional HTTP headers to send with the request
        #
        # @see https://www.elastic.co/guide/en/app-search/current/synonyms.html#synonyms-update
        #
        def put_synonym_set(engine_name, arguments = {})
          raise ArgumentError, "Required parameter 'engine_name' missing" unless engine_name
          raise ArgumentError, "Required parameter 'synonym_set_id' missing" unless arguments[:synonym_set_id]
          raise ArgumentError, "Required parameter 'body (synonyms)' missing" unless arguments[:body] || arguments[:synonyms]

          synonym_set_id = arguments[:synonym_set_id]
          body = arguments.delete(:body) || {}
          headers = arguments.delete(:headers) || {}

          request(
            :put,
            "api/as/v1/engines/#{engine_name}/synonyms/#{synonym_set_id}/",
            arguments,
            body,
            headers
          )
        end
      end
    end
  end
end