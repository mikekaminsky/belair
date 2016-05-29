belAir.controller('PlayerController', ['AudioPlayer', '$scope', function(AudioPlayer, $scope) {
  AudioPlayer.autoPlay();

  $scope.playPause = function playPause() {
    AudioPlayer.playPause();
  }

  $scope.showName = function showName() {
    return AudioPlayer.episode.show;
  }

  $scope.episodeName = function episodeName() {
    return AudioPlayer.episode.name;
  }

  $scope.isPlaying = function isPlaying() {
    return AudioPlayer.playing;
  }

  $scope.streamExists = function streamExists() {
    return AudioPlayer.stream_exists;
  }

  $scope.autoPlay = function autoPlay() {
    return AudioPlayer.autoPlay();
  }

}])
