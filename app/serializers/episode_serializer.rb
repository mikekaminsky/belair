class EpisodeSerializer < ActiveModel::Serializer
  attributes :id, :name, :file_url, :show, :show_id, :air_date

  def file_url
    URI.encode(object.file_url)
  end

  def air_date
    object.air_date
  end

  def show
    object.show.name
  end

  def name
    object.name || object.created_at.strftime("%B %e, %Y")
  end

end
