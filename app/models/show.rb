class Show < ActiveRecord::Base
  
  validates :name, presence: true
  validates :image_link, presence: true

end
