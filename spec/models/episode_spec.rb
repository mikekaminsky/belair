describe Episode, type: :model do
  describe "validations" do
    it { is_expected.to have_valid(:file_url).when('a') }
    it { is_expected.not_to have_valid(:file_url).when(nil, '') }

    it { is_expected.to have_valid(:name).when('a', nil, '') }

    it { is_expected.to have_valid(:show_id).when(1) }
    it { is_expected.not_to have_valid(:show_id).when(nil, '') }
  end

  describe "on save" do
    let(:show) { Show.create(name: 'blah', image_url: 'a', description: 'a') }
    let(:episode) { show.episodes.create(file_url: 'a') }

    it "updates the show's updated at time" do
      expect {
        show.episodes.create!(file_url: 'a')
      }.to change {
        show.reload.updated_at
      }
    end
  end
end
