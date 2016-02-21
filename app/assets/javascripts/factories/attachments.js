belAir.factory('Attachments', ['S3', '$http', function AttachmentsFactory(S3, $http) {
  return {
    create: function create(file, options) {
      var publicOptions = {acl: 'public-read'};

      S3.newPolicy(publicOptions, function (uploadData) {
        uploadData.filePath = ("uploads/"+ uploadData.random +'/'+ file.name);
        uploadData = $.extend(uploadData, publicOptions);

        var upload = S3.upload(file, uploadData);

        upload.progress(options.progress)

        upload.success(function(s3Data, status, headers, config) {
          options.success(uploadData.filePath, config);
        });
      });
    },
  };
}]);
