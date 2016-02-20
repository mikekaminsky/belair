class ShowsController < ApplicationController

  def create
    show = Show.new allowed_show_params

    if show.save
      render json: show
    else
      render json: {errors: show.errors.full_messages}
    end
  end

  def index
    render json: Show.all
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


  private

  def allowed_show_params
    params.require(:show).permit(:name, :image_url)
  end

end
