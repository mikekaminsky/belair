class Show < ActiveRecord::Base
  
  validates :image_url, presence: true
  validates :name, presence: true

end
