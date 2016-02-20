class EpisodesController < ApplicationController

  def create
    episode = Episode.new(episode_params)

    if episode.save
      render json: episode
    else
      render json: {errors: episode.errors.full_messages}
    end
  end


  private

  def episode_params
    params.require(:episode).permit(:name, :file_url, :show_id)
  end

end
