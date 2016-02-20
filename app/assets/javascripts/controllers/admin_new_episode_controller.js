belAir.controller('AdminNewEpisodeController', ['Episodes', 'Shows', '$location', '$routeParams', '$scope',
  function(Episodes, Shows, $location, $routeParams, $scope) {
    var showID = $routeParams.showID;
    $scope.episode = {
      show_id: showID
    };

    Shows.show(showID).then(function (response) {
      $scope.show = response.data.show;
    });

    $scope.saveEpisode = function saveEpisode() {
      Episodes.create($scope.episode).then(function (response) {
        if (response.data.errors) {
          $scope.errors = response.data.errors
        } else {
          $location.path('/admin/show/' + showID).replace();
        }
      });
    }
}]);
