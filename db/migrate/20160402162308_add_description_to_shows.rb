class AddDescriptionToShows < ActiveRecord::Migration
  def change
    add_column :shows, :description, :string
  end
end
