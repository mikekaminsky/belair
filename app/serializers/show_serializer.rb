class ShowSerializer < ActiveModel::Serializer
  attributes :name, :image_url, :id
  has_many :episodes
end
