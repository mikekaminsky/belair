class Episode < ActiveRecord::Base

  belongs_to :show, inverse_of: :episodes

  validates :file_url, presence: true
  validates :show_id, presence: true

  after_save :set_show_last_air_date

  def self.random
    all.sample
  end


  private 

  def set_show_last_air_date
    show.calculate_last_air_date
  end

end
