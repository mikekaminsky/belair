belAir.service('AudioPlayer', ['$http', function AudioPlayerService($http) {
  var audio = this;
  var player = new MediaElementPlayer('#audio-player', {});
  var voscastError = "Failed to load because no supported source was found.";
  var livestream = {
    file_url: BelAir.livestreamURL,
    name: "Live Stream",
    show: "Bel Air",
  }

  this.play = function play(episode, callback) {
    audio.episode = episode
    player.setSrc(episode.file_url);
    player.load();

    player.media.play().catch(function (error) {
      if (callback) {
        callback();
      } else {
        console.log("Error playing audio: " + url);
        if (error.message != voscastError) {
          console.error(error.message);
        }
      }
    })
  }

  this.autoPlay = function auotPlay(url) {
    audio.play(livestream, function () {
      $http.get('/api/episodes/random').then(function (response) {
        audio.play(response.data.episode);
      });
    });
  }
}]);
