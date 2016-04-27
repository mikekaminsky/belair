belAir.controller('HomeController', ['Shows', 'AudioPlayer', '$scope', function(Shows, AudioPlayer, $scope) {
    Shows.index().then(function (response) {
      $scope.shows = response.data.shows;
    });

  $scope.play = function play() {
		var liveStreamUrl = "http://s2.voscast.com:9106/;stream.nsv";
		AudioPlayer.play(liveStreamUrl);
	}
}]);