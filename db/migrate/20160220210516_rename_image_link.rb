class RenameImageLink < ActiveRecord::Migration
  def change
    rename_column :shows, :image_link, :image_url
  end
end
