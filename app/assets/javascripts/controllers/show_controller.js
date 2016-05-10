belAir.controller('ShowController', ['AudioPlayer', 'Shows', '$location', '$routeParams', '$sce', '$scope',
  function(AudioPlayer, Shows, $location, $routeParams, $sce, $scope) {

  Shows.show($routeParams.id).then(function (response) {
    if (response.data.show) {
      $scope.show = response.data.show;
      $scope.containerStyle = {
        'background-image': 'url('+ ($scope.show.background_image_url || BelAir.defaultBackgroundImage) + ')'
      }
    } else {
      $location.path('/').replace();
    }
  });

  $scope.play = function play(episode) {
    AudioPlayer.play(episode);
  };

}]);
