class ShowLastAir < ActiveRecord::Migration
  def change
    add_column :shows, :last_air_date, :date, default: { expr: "('now'::text)::date" }
  end
end
