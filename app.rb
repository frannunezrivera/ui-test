#!/usr/bin/env ruby -I ../lib -I lib
require 'rubygems'
require 'sinatra'
require 'sinatra/base'

get '/' do
  haml :index, :layout => :layout
end

