belAir.controller('ShowController', ['AudioPlayer', 'Shows', '$location', '$routeParams', '$sce', '$scope',
  function(AudioPlayer, Shows, $location, $routeParams, $sce, $scope) {

  Shows.show($routeParams.id).then(function (response) {
    if (response.data.show) {
      $scope.show = response.data.show;
    } else {
      $location.path('/').replace();
    }
  });

  $scope.play = function play(episode) {
    AudioPlayer.play(episode);
  };

}]);
