def show_factory(options = {})
  Show.create({
    name: Faker::Company.buzzword,
    image_url: Faker::Internet.domain_name,
    description: Faker::Company.catch_phrase 
  }.merge(options))
end
def episode_factory(options = {})
  Episode.create({
    show_id: 1,
    name: Faker::Company.buzzword,
    file_url: Faker::Internet.domain_name
  }.merge(options))
end
