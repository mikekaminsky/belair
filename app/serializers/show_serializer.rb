class ShowSerializer < ActiveModel::Serializer
  attributes :name, :image_url, :id, :background_image_url

  has_many :episodes

end
