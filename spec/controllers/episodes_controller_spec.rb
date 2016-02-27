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


  describe "#update" do
    let(:episode) { episode_factory }
    let(:episode_params) { {id: episode.id, episode: {name: 'Show the First'}} }

    it "changes the name of a show" do
      expect {
        patch :update, episode_params
      }.to change {
        episode.reload.name
      }.to('Show the First')
    end
  end


end
