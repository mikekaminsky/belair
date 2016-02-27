describe ShowsController, type: :controller do
  before do
    request.env['HTTP_AUTHORIZATION'] = ActionController::HttpAuthentication::Basic.encode_credentials(ENV['ADMIN_USER'], ENV['ADMIN_PASSWORD'])
  end

  describe "#create" do
    let(:show_params) do
      {show:
        {
          name: Faker::Company.buzzword,
          image_url: Faker::Internet.domain_name
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

  describe "#update" do
    let(:show) { show_factory }
    let(:show_params) { {id: show.id, show: {name: 'Crazy Stallions'}} }

    it "changes the name of a show" do
      expect {
        patch :update, show_params
      }.to change {
        show.reload.name
      }.to('Crazy Stallions')
    end
  end
end
