class ApplicationController < ActionController::Base
  #protect_from_forgery with: :exception
  LIVESTREAM_URL = ENV['LIVESTREAM_URL']

  def home
  end

  def old_site
    redirect_to "#{ENV['OLD_SITE_URL']}#{request.fullpath}"
  end

end
