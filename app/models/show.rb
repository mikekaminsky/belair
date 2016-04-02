class Show < ActiveRecord::Base
  
  has_many :episodes, inverse_of: :show

  validates :image_url, presence: true
  validates :name, presence: true
  validates :description, presence: true

end
