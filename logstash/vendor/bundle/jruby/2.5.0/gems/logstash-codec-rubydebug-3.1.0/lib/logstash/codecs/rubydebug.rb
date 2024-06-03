# encoding: utf-8
require "logstash/codecs/base"

# The rubydebug codec will output your Logstash event data using
# the Ruby Amazing Print library.
#
class LogStash::Codecs::RubyDebug < LogStash::Codecs::Base
  config_name "rubydebug"

  # Should the event's metadata be included?
  config :metadata, :validate => :boolean, :default => false

  # AMAZING_OPTIONS = {:color => {:logstash_timestamp => :green}}
  AMAZING_OPTIONS = {}

  def register
    require "amazing_print"
    AmazingPrint.defaults = AMAZING_OPTIONS

    if @metadata
      @encoder = method(:encode_with_metadata)
    else
      @encoder = method(:encode_default)
    end
  end

  public
  def decode(data)
    raise "Not implemented"
  end # def decode

  public
  def encode(event)
    @encoder.call(event)
  end

  def encode_default(event)
    @on_event.call(event, event.to_hash.ai + NL)
  end # def encode_default

  def encode_with_metadata(event)
    @on_event.call(event, event.to_hash_with_metadata.ai + NL)
  end # def encode_with_metadata

end # class LogStash::Codecs::Dots
