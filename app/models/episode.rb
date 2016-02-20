class Episode < ActiveRecord::Base

  validates :file_url, presence: true
  validates :show_id, presence: true

end
