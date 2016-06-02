belAir.service('AudioPlayer', ['$http', function AudioPlayerService($http) {
  var self = this;
  self.stream_exists = true;

  var livestream = {
    file_url: BelAir.livestreamURL,
    name: "Live Stream",
    show: "Bel Air",
  };

  var player = new MediaElementPlayer('#audio-player', {success: function (mediaElement, dom) {
    mediaElement.setVolume(0.9);
    mediaElement.addEventListener('ended', self.loadNewMedia); // Load new media when an episode has ended
  }});

  this.play = function(){
    player.play();
    self.playing = true;
  };

  this.pause = function(){
    player.pause();
    self.playing = false;
  };

  this.loadNewMedia = function() {
    self.pause();
    self.checkForLivestream(self.onLivestreamError);
  };

  this.checkForLivestream = function(onError) {
    console.log(BelAir.livestreamURL)
    self.setSource(livestream);
    player.media.load();
    player.media.onerror = onError;
  };

  this.onLivestreamError = function(error) {
    self.stream_exists = false;
    self.getRandomEpisode(self.onRandomEpisodeLoad, self.onRandomEpisodeError);
  };

  this.getRandomEpisode = function(onLoad, onError) {
    $http.get('/api/episodes/random').then(onLoad, onError);
  };

  this.onRandomEpisodeLoad = function(response) {
    self.setSource(response.data.episode);
    self.pause();
  };

  this.onRandomEpisodeError = function(error) {
    console.log('Could not find a random episode.')
  };

  this.setSource = function(episode) {
    self.episode = episode;
    player.setSrc(episode.file_url);
  };

  this.playPause = function() {
    if (self.playing) {
      self.pause();
    } else {
      self.play();
    }
  };

  this.setEpisodeAndPlay = function(episode) {
    self.setSource(episode);
    self.play();
  };



  this.handlePlayerToggle = function(stream) {
    if (stream){
      self.checkForLivestream()
      self.pause();
    } else {
      self.getRandomEpisode(self.onRandomEpisodeLoad, self.onRandomEpisodeError);
    }
  };

}]);
