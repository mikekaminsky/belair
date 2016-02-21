belAir.factory('S3', ['$http', 'Upload', function S3Factory($http, Upload) {
  return {

    newPolicy: function newPolicy(params, callback) {
      return $http({
        method: 'GET',
        params: params,
        url: '/api/s3_policies/new'
      }).success(callback);
    },

    upload: function create(file, options) {
      return Upload.upload({
        data: {
          acl: (options['acl'] || 'private'),
          key: options.filePath,
          policy: options.policy,
          signature: options.signature,
          AWSAccessKeyId: options.key,
          "Content-Type": (file.type != '' ? file.type : 'application/octet-stream')
        },
        method: 'POST',
        url: options.url,
        file: file
      });
    }

  };
}]);
