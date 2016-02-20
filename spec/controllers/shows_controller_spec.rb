describe ShowsController, type: :controller do
  describe "#create" do
    let(:show_params) do
      {show:
        {
          name: Faker::Company.buzzword,
          image_link: Faker::Internet.domain_name
        }
      }
    end

    it "increases the number of shows" do
      expect {
        post :create, show_params
      }.to change {
        Show.count
      }.by(+1)
    end
  end
end
