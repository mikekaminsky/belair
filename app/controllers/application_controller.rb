class ApplicationController < ActionController::Base
  #protect_from_forgery with: :exception
  LIVESTREAM_URL = ENV['LIVESTREAM_URL']

  def home
  end

  def livestream
    begin
      HTTParty.get(LIVESTREAM_URL)

      render json: {
        streaming: true,
        episode: {
          file_url: LIVESTREAM_URL,
          name: "Live Stream"
        }
      }
    rescue
      random_episode = EpisodeSerializer.new(Episode.random, root: false)
      render json: {
        streaming: false,
        episode: random_episode
      }
    end
  end

end
