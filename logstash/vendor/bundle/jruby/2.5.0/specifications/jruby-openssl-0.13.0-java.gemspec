# -*- encoding: utf-8 -*-
# stub: jruby-openssl 0.13.0 java lib

Gem::Specification.new do |s|
  s.name = "jruby-openssl".freeze
  s.version = "0.13.0"
  s.platform = "java".freeze

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["Karol Bucek".freeze, "Ola Bini".freeze, "JRuby contributors".freeze]
  s.date = "2022-05-13"
  s.description = "JRuby-OpenSSL is an add-on gem for JRuby that emulates the Ruby OpenSSL native library.".freeze
  s.email = "self+jruby-openssl@kares.org".freeze
  s.homepage = "https://github.com/jruby/jruby-openssl".freeze
  s.licenses = ["EPL-1.0".freeze, "GPL-2.0".freeze, "LGPL-2.1".freeze]
  s.required_ruby_version = Gem::Requirement.new(">= 2.3.0".freeze)
  s.requirements = ["jar org.bouncycastle:bcprov-jdk15on, 1.68".freeze, "jar org.bouncycastle:bcpkix-jdk15on, 1.68".freeze, "jar org.bouncycastle:bctls-jdk15on,  1.68".freeze]
  s.rubygems_version = "3.1.6".freeze
  s.summary = "JRuby OpenSSL".freeze

  s.installed_by_version = "3.1.6" if s.respond_to? :installed_by_version
end
