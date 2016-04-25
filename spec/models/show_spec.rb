describe Show, type: :model do
  describe "validations" do
    it { is_expected.to have_valid(:image_url).when('a') }
    it { is_expected.not_to have_valid(:image_url).when(nil, '') }

    it { is_expected.to have_valid(:description).when('a') }
    it { is_expected.not_to have_valid(:description).when(nil, '') }

    it { is_expected.to have_valid(:name).when('a') }
    it { is_expected.not_to have_valid(:name).when(nil, '') }
  end
end
