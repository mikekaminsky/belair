belAir.controller('AdminEpisodeController', ['Attachments', 'Episodes', 'Shows', '$location', '$routeParams', '$scope',
  function(Attachments, Episodes, Shows, $location, $routeParams, $scope) {
    var showID = $routeParams.showID;
    var episodeID = $routeParams.episodeID;

    $scope.episode = {
      show_id: showID
    };

    Shows.show(showID).then(function (response) {
      if (response.data.show) {
        $scope.show = response.data.show;
      }
    });

    Episodes.show(episodeID).then(function (response) {
      if (response.data.episode) {
        $scope.episode = response.data.episode;
      }
    });

    $scope.saveEpisode = function saveEpisode() {
      Episodes.update(episodeID, $scope.episode).then(function (response) {
        if (response.data.errors) {
          $scope.errors = response.data.errors
        } else {
          $location.path('/admin/shows/' + showID).replace();
        }
      });
    }

    $scope.deleteEpisode = function deleteEpisode() {
      Episodes.delete(episodeID, $scope.episode).then(function (response) {
        if (response.data.errors) {
          $scope.errors = response.data.errors
        } else {
          $location.path('/admin/shows/' + showID).replace();
        }
      });
    }

    $scope.fileSelected = function fileSelected(file) {
        if (file) {
          $scope.fileUpload = {name: file.name, percentage: 0};

          Attachments.create(file, {
            progress: function (event) {
              var percentage = 100.0 * event.loaded / event.total;
              $scope.fileUpload.percentage = parseInt(percentage);
            },
            success: function(uploadPath, s3Config) {
              $scope.episode.file_url = s3Config.url + uploadPath;
              $scope.fileName = $scope.fileUpload.name;
              $scope.fileUpload = undefined;
            }
          });
        }
      }
}]);
