class S3PoliciesController < ApplicationController

  def new
    policy = S3Policy.new(acl: acl)

    render json: {
      key: s3_key,
      policy: policy.base64_body,
      random: SecureRandom.hex,
      signature: policy.signature,
      url: S3Policy::BASE_URL
    }
  end


  private

  def acl
    (params[:acl] == 'public-read') ? 'public-read' : 'private'
  end

  def s3_key
    ENV['S3_ACCESS_KEY']
  end

end

