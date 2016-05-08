belAir.service('AudioPlayer', ['$http', function AudioPlayerService($http) {
  var audio = this;
  var player = new MediaElementPlayer('#audio-player', {});
  var voscastError = "Failed to load because no supported source was found.";
  var livestream = {
    file_url: BelAir.livestreamURL,
    name: "Live Stream",
    show: "Bel Air",
  };

  this.play = function play(episode, errorCallback) {
    if (episode) {
      audio.episode = episode
      player.setSrc(episode.file_url);
    }
    if (errorCallback) {
      player.media.onerror = errorCallback;
    }

    player.play();

    this.playing = true;
  };

  this.autoPlay = function auotPlay(url) {
    audio.play(livestream, function () {
      $http.get('/api/episodes/random').then(function (response) {
        audio.play(response.data.episode);
      });
    });
  };

  this.pause = function pause() {
    player.pause();
    this.playing = false;
  }

  this.playPause = function playPause() {
    if (this.playing) {
      this.pause();
    } else {
      this.play();
    }
  };
}]);
