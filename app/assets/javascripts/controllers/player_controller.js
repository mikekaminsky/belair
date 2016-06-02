belAir.controller('PlayerController', ['AudioPlayer', '$scope', function(AudioPlayer, $scope) {
  AudioPlayer.loadNewMedia();

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

  $scope.handlePlayerToggle = function handlePlayerToggle() {
    AudioPlayer.handlePlayerToggle();
  }

}])
