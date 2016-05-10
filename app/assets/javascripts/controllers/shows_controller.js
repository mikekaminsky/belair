belAir.controller('ShowsController', ['Shows', '$scope', function(Shows, $scope) {
    Shows.index().then(function (response) {
      $scope.shows = response.data.shows;
    });

    $scope.search = function search() {
      Shows.index({query: $scope.query}).then(function (response) {
        $scope.shows = response.data.shows;
      });
    }
}]);
