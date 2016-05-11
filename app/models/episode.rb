class Episode < ActiveRecord::Base

  belongs_to :show, inverse_of: :episodes, touch: true

  validates :file_url, presence: true
  validates :show_id, presence: true

  def self.random
    all.sample
  end

end
