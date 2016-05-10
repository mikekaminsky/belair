class AddBackgroundImageUrlToShows < ActiveRecord::Migration
  def change
    add_column :shows, :background_image_url, :text
  end
end
