belAir.controller('PlayerController', ['AudioPlayer', '$scope', function(AudioPlayer, $scope) {
  AudioPlayer.autoPlay();

  $scope.play = function play() {
    var liveStreamUrl = "http://s2.voscast.com:9106/;stream.nsv";
    AudioPlayer.play(liveStreamUrl);
  }

  $scope.showName = function showName() {
    return AudioPlayer.episode.show;
  }

  $scope.episodeName = function episodeName() {
    return AudioPlayer.episode.name;
  }

}])
