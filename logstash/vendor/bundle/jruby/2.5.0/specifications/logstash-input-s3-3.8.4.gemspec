# -*- encoding: utf-8 -*-
# stub: logstash-input-s3 3.8.4 ruby lib

Gem::Specification.new do |s|
  s.name = "logstash-input-s3".freeze
  s.version = "3.8.4"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.metadata = { "logstash_group" => "input", "logstash_plugin" => "true" } if s.respond_to? :metadata=
  s.require_paths = ["lib".freeze]
  s.authors = ["Elastic".freeze]
  s.date = "2022-02-16"
  s.description = "This gem is a Logstash plugin required to be installed on top of the Logstash core pipeline using $LS_HOME/bin/logstash-plugin install gemname. This gem is not a stand-alone program".freeze
  s.email = "info@elastic.co".freeze
  s.homepage = "http://www.elastic.co/guide/en/logstash/current/index.html".freeze
  s.licenses = ["Apache-2.0".freeze]
  s.rubygems_version = "3.1.6".freeze
  s.summary = "Streams events from files in a S3 bucket".freeze

  s.installed_by_version = "3.1.6" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4
  end

  if s.respond_to? :add_runtime_dependency then
    s.add_runtime_dependency(%q<logstash-core-plugin-api>.freeze, [">= 2.1.12", "<= 2.99"])
    s.add_runtime_dependency(%q<logstash-mixin-aws>.freeze, [">= 5.1.0"])
    s.add_runtime_dependency(%q<stud>.freeze, ["~> 0.0.18"])
    s.add_development_dependency(%q<logstash-devutils>.freeze, [">= 0"])
    s.add_development_dependency(%q<logstash-codec-json>.freeze, [">= 0"])
    s.add_development_dependency(%q<logstash-codec-multiline>.freeze, [">= 0"])
    s.add_runtime_dependency(%q<logstash-mixin-ecs_compatibility_support>.freeze, ["~> 1.2"])
  else
    s.add_dependency(%q<logstash-core-plugin-api>.freeze, [">= 2.1.12", "<= 2.99"])
    s.add_dependency(%q<logstash-mixin-aws>.freeze, [">= 5.1.0"])
    s.add_dependency(%q<stud>.freeze, ["~> 0.0.18"])
    s.add_dependency(%q<logstash-devutils>.freeze, [">= 0"])
    s.add_dependency(%q<logstash-codec-json>.freeze, [">= 0"])
    s.add_dependency(%q<logstash-codec-multiline>.freeze, [">= 0"])
    s.add_dependency(%q<logstash-mixin-ecs_compatibility_support>.freeze, ["~> 1.2"])
  end
end
