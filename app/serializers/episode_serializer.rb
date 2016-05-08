class EpisodeSerializer < ActiveModel::Serializer
  attributes :id, :name, :file_url, :show, :show_id

  def file_url
    URI.encode(object.file_url)
  end

  def show
    object.show.name
  end

  def name
    object.name || object.created_at.strftime("%B %e, %Y")
  end

end
