belAir.controller('AdminController', ['$http', '$scope', function($http, $scope) {
  $http.get('/api/shows').then(function (response) {
    $scope.shows = response.data.shows;
  });
}]);
