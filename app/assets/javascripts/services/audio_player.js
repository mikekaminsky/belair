belAir.service('AudioPlayer', ['$http', function AudioPlayerService($http) {
  var audio = this;
  var player = new MediaElementPlayer('#audio-player', {success: function (mediaElement, dom) {
    mediaElement.setVolume(0.9);
    mediaElement.addEventListener('ended', function () {
      audio.autoPlay();
    });
  }});

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

  this.randomEpisodeFallback = function randomEpisodeFallback() {
    $http.get('/api/episodes/random').then(function (response) {
      audio.play(response.data.episode);
      audio.pause();
    });
  };

  this.autoPlay = function autoPlay() {
    try{
      audio.play(livestream).then(function(){
        audio.currentTime = 0;
        audio.pause();
      });
    } catch (errorCallback){
      this.randomEpisodeFallback()
    }
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
