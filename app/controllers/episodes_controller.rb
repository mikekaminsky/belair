class EpisodesController < ApplicationController
  http_basic_authenticate_with name: ENV['ADMIN_USER'], password: ENV['ADMIN_PASSWORD'], only: ['update', 'create', 'delete']

  def create
    episode = Episode.new(episode_params)

    if episode.save
      render json: episode
    else
      render json: {errors: episode.errors.full_messages}
    end
  end

  def show
    render json: Episode.find_by(id: params[:id])
  end

  def update
    episode = Episode.find_by(id: params[:id])

    if episode.update_attributes(episode_params)
      render json: episode
    else
      render json: {errors: episode.errors.full_messages}
    end
  end

  def destroy
    Episode.find_by(id: params[:id]).destroy
    render json: {success: true}
  end

  def random
    render json: Episode.random
  end


  private

  def episode_params
    params.require(:episode).permit(:id, :name, :file_url, :show_id)
  end

end
