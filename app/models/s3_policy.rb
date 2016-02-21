class S3Policy
  BASE_URL = "https://" + ENV['S3_DIRECTORY'] + ".s3.amazonaws.com/"

  def initialize(options = {})
    acl = options.with_indifferent_access['acl'] || 'private'

    @body = {
      'conditions' => [
        {'acl' => acl},
        {'bucket' => directory},
        ['starts-with', '$key', ''],
        ['starts-with', '$Content-Type', ''],
      ],
      'expiration' => 15.minutes.from_now.utc.xmlschema
    }
  end

  def base64_body
    @base64_body ||= Base64.encode64(body.to_json).gsub(/\n/,'')
  end

  def signature
    hmac_digest = OpenSSL::HMAC.digest(
      OpenSSL::Digest::Digest.new('sha1'),
      secret,
      base64_body
    )

    Base64.encode64(hmac_digest).gsub("\n","")
  end


  private

  attr_reader :body

  def directory
    ENV['S3_DIRECTORY']
  end

  def secret
    ENV['S3_ACCESS_SECRET']
  end

end
