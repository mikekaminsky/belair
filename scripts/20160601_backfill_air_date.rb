Show.all.reject(&:valid?).each do |show|
  next if show.episodes.empty?
  puts show.id
  show.description = 'Live on Bel-Air!'
  show.episodes.where("air_date IS NULL").each do |episode|
    episode.air_date = episode.created_at
    episode.save!
  end
  show.calculate_last_air_date
end
