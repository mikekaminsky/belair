belAir.controller('HomeController', ['Shows', '$scope', '$http', 'AudioPlayer', function(Shows, $scope, $http, AudioPlayer) {
    Shows.index().then(function (response) {
      $scope.shows = response.data.shows;

      console.log($scope.shows);
    });

  $scope.play = function play() {
		var liveStreamUrl = "http://s2.voscast.com:9106/;stream.nsv";
		AudioPlayer.play(liveStreamUrl);
	}
}]);