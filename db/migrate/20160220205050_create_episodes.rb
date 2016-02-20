class CreateEpisodes < ActiveRecord::Migration
  def change
    create_table :episodes do |t|
      t.integer :show_id
      t.string :name
      t.string :file_url
      t.timestamps
    end
  end
end
