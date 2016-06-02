class ShowsController < ApplicationController
  http_basic_authenticate_with name: ENV['ADMIN_USER'], password: ENV['ADMIN_PASSWORD'], only: ['update', 'create', 'delete']

  def create
    show = Show.new allowed_show_params

    if show.save
      render json: show
    else
      render json: {errors: show.errors.full_messages}
    end
  end

  def index
    render json: Show.search(params[:query])
      .where("last_air_date IS NOT NULL")
      .order("last_air_date DESC")
  end

  def admin_index
    render json: Show.search(params[:query])
      .order("last_air_date DESC")
  end

  def show
    render json: Show.find_by(id: params[:id])
  end

  def update
    show = Show.find_by(id: params[:id])

    if show.update_attributes(allowed_show_params)
      render json: show
    else
      render json: {errors: show.errors.full_messages}
    end
  end

  def destroy
    Show.find_by(id: params[:id]).destroy
    render json: {success: true}
  end

  private

  def allowed_show_params
    params.require(:show).permit(:name, :image_url, :background_image_url, :description)
  end

end
