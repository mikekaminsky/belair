belAir.service('AudioPlayer', [function AudioPlayerService() {
  this.player = new MediaElementPlayer('#audio-player', {});

  this.play = function play(url) {
    this.player.setSrc(url);
    this.player.play();
  }

}]);
