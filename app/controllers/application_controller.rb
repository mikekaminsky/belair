class ApplicationController < ActionController::Base
  #protect_from_forgery with: :exception
  LIVESTREAM_URL = ENV['LIVESTREAM_URL']

  def home
  end

end
