def show_factory(options = {})
  Show.create({
    name: Faker::Company.buzzword,
    image_url: Faker::Internet.domain_name
  }.merge(options))
end
