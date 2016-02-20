belAir.controller('HomeController', ['$http', '$scope',
  function($http, $scope) {
    $http.get('/shows').then(function (response) {
      $scope.shows = response.data;
    });
}]);
