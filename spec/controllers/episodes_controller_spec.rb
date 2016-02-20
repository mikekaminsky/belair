describe EpisodesController, type: :controller do

  describe "#create" do
    let(:show) { show_factory }
    let(:episode_params) do
      {episode:
        {
          name: Faker::Company.buzzword,
          file_url: Faker::Internet.domain_name,
          show_id: show.id
        }
      }
    end

    it "increases the number of episodes" do
      expect {
        post :create, episode_params
      }.to change {
        Episode.count
      }.by(+1)
    end
  end

end
