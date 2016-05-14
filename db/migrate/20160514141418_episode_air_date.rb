class EpisodeAirDate < ActiveRecord::Migration
  def change
    add_column :episodes, :air_date, :date
  end
end
