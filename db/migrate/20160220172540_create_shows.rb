class CreateShows < ActiveRecord::Migration
  def change
    create_table :shows do |t|
      t.string :name
      t.text :tagline
      t.string :image_link
      t.timestamps
    end
  end
end
