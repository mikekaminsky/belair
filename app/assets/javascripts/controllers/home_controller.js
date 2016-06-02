belAir.controller('HomeController', ['Shows', '$scope', function(Shows, $scope) {
    Shows.index().then(function (response) {
      $scope.shows = response.data.shows;

      $scope.smallSize = function clientWidth() {
      	return window.innerWidth < 768;
      }
    });
}]);