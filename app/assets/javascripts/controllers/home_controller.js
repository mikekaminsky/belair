belAir.controller('HomeController', ['Shows', 'AudioPlayer', '$scope', function(Shows, AudioPlayer, $scope) {

  Shows.index().then(function (response) {
    $scope.shows = response.data.shows;
  });

  AudioPlayer.autoPlay();

}]);
