class Episode < ActiveRecord::Base

  belongs_to :show, inverse_of: :episodes

  validates :file_url, presence: true
  validates :show_id, presence: true
  validates :air_date, presence: true

  after_save :set_show_last_air_date

  before_validation :set_air_date_if_missing, on: :create

  def self.random
    all.sample
  end


  private 

  def set_show_last_air_date
    show.calculate_last_air_date
  end

  def set_air_date_if_missing
    self.air_date ||= Time.now
  end

end
