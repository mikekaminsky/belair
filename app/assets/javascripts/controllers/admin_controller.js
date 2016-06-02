belAir.controller('AdminController', ['Shows', '$scope', function(Shows, $scope) {
  Shows.adminIndex().then(function (response) {
    $scope.shows = response.data.shows;
  });
}]);
