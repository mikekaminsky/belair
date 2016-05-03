class EpisodeSerializer < ActiveModel::Serializer
  attributes :id, :name, :file_url

  def file_url
    URI.encode(object.file_url)
  end

end
