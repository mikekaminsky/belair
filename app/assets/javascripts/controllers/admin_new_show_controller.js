belAir.controller('AdminNewShowController', ['Shows', '$location', '$routeParams', '$scope',
  function(Shows, $location, $routeParams, $scope) {
    $scope.show = {};
    $scope.saveShow = function saveShow() {
      Shows.create($scope.show).then(function (response) {
        if (response.data.errors) {
          $scope.errors = response.data.errors
        } else {
          $location.path('/admin').replace();
        }
      });
    }
}]);
