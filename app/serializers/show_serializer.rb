class ShowSerializer < ActiveModel::Serializer
  attributes :background_image_url, :description, :image_url, :id, :name

  has_many :episodes

end
