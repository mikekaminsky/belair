belAir.service('AudioPlayer', [function AudioPlayerService() {
  var nicecastError = "Failed to load because no supported source was found.";

  this.player = new MediaElementPlayer('#audio-player', {});

  this.play = function play(url) {
    this.player.setSrc(url);
    this.player.load();

    this.player.media.play().catch(function (error) {
      if (error.message != nicecastError) {
        console.error(error.message);
      }
    })
  }

}]);
