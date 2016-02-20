belAir.controller('AdminShowController', ['Shows', '$location', '$routeParams', '$scope',
  function(Shows, $location, $routeParams, $scope) {
    Shows.show($routeParams.id).then(function (response) {
      if (response.data.show) {
        $scope.show = response.data.show;
      } else {
        $location.path('/').replace();
      }
    });
}]);
