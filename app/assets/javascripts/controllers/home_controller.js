belAir.controller('HomeController', ['Shows', '$scope', function(Shows, $scope) {
    Shows.index().then(function (response) {
      $scope.shows = response.data.shows.slice(0, 6);
    });
}]);