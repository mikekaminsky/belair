belAir.controller('PlayerController', ['AudioPlayer', '$scope', function(AudioPlayer, $scope) {
	$scope.play = function play() {
		var liveStreamUrl = "http://s2.voscast.com:9106/;stream.nsv";
		AudioPlayer.play(liveStreamUrl);
	}
}])