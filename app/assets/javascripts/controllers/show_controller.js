belAir.controller('ShowController', ['$http', '$location', '$routeParams', '$scope',
  function($http, $location, $routeParams, $scope) {
    var url = '/api/shows/' + $routeParams.id;

    $http.get(url).then(function (response) {
      if (response.data) {
        $scope.show = response.data;
      } else {
        $location.path('/').replace();
      }
    })
}]);
