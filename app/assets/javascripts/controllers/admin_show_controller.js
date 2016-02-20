belAir.controller('AdminShowController', ['Shows', '$location', '$routeParams', '$scope',
  function(Shows, $location, $routeParams, $scope) {
    var id = $routeParams.id;
    Shows.show(id).then(function (response) {
      if (response.data.show) {
        $scope.show = response.data.show;
      } else {
        $location.path('/admin').replace();
      }
    });

    $scope.saveShow = function saveShow() {
      Shows.update(id, $scope.show).then(function (response) {
        if (response.data.errors) {
          $scope.errors = response.data.errors
        } else {
          $location.path('/admin').replace();
        }
      });
    }
}]);
