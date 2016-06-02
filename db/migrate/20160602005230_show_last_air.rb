class ShowLastAir < ActiveRecord::Migration
  def change
    add_column :shows, :last_air_date, :datetime
  end
end
