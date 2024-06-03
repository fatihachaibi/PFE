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
        # Crawler - Create a crawl rule
        # Creates a crawl rule for a given engine and domain
        #
        # @param engine_name [String] Name of the engine (*Required*)
        # @param arguments [Hash] endpoint arguments
        # @option arguments [String] :domain_id Crawler Domain ID (*Required*)
        # @option arguments [Hash] :body  (Required: order, policy, rule, pattern)
        # @option body [String] :id
        # @option body [Integer] :order  (*Required)
        # @option body [String] :policy  (*Required)
        # @option body [String] :rule  (*Required)
        # @option body [String] :pattern  (*Required)
        # @option body [String] :created_at
        # @option arguments [Hash] :headers optional HTTP headers to send with the request
        #
        # @see https://www.elastic.co/guide/en/app-search/current/web-crawler-api-reference.html#web-crawler-apis-post-crawl-rules
        #
        def create_crawler_crawl_rule(engine_name, arguments = {})
          raise ArgumentError, "Required parameter 'engine_name' missing" unless engine_name
          raise ArgumentError, "Required parameter 'domain_id' missing" unless arguments[:domain_id]

          domain_id = arguments[:domain_id]
          body = arguments.delete(:body) || {}
          headers = arguments.delete(:headers) || {}

          request(
            :post,
            "api/as/v0/engines/#{engine_name}/crawler/domains/#{domain_id}/crawl_rules/",
            arguments,
            body,
            headers
          )
        end
      end
    end
  end
end