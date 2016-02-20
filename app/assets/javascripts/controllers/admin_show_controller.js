belAir.controller('AdminShowController', ['$http', '$location', '$routeParams', '$scope',
  function($http, $location, $routeParams, $scope) {
    var url = '/api/shows/' + $routeParams.id;

    $http.get(url).then(function (response) {
      if (response.data.show) {
        $scope.show = response.data.show;
      } else {
        $location.path('/').replace();
      }
    });
}]);
