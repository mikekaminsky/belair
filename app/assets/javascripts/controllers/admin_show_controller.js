belAir.controller('AdminShowController', ['Shows', '$location', '$routeParams', '$scope',
  function(Shows, $location, $routeParams, $scope) {
    var id = $routeParams.id;
    Shows.show(id).then(function (response) {
      if (response.data.show) {
        $scope.show = response.data.show;
      } else {
        $location.path('/').replace();
      }
    });

    $scope.saveShow = function saveShow() {
      Shows.update(id, $scope.show);
    }
}]);
