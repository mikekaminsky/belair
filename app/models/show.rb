class Show < ActiveRecord::Base
  
  has_many :episodes, inverse_of: :show

  validates :image_url, presence: true
  validates :name, presence: true
  validates :description, presence: true

  def self.search(search_string)
    if search_string
      where('name ilike ?', "%#{search_string}%")
    else
      Show.all
    end
  end

  def calculate_last_air_date
    self.last_air_date = episodes.pluck(:air_date).select(&:present?).max
    save
  end

end
