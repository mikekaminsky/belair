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

  this.setPlaying = function(){
    self.playing = true;
  };

  this.setPaused = function(){
    self.playing = false;
  };

  this.loadNewMedia = function() {
    console.log('load New Meida')
    self.checkForLivestream(self.onLivestreamError);
  };

  this.checkForLivestream = function(onError) {
    console.log('check For Livestream')
    self.setSource(livestream);
    player.media.load();
    player.media.onerror = onError;
  };

  this.onLivestreamError = function(error) {
    console.log('on Live Stream Error')
    self.stream_exists = false;
    self.getRandomEpisode(self.onRandomEpisodeLoad, self.onRandomEpisodeError);
  };

  this.getRandomEpisode = function(onLoad, onError) {
    $http.get('/api/episodes/random').then(onLoad, onError);
  };

  this.onRandomEpisodeLoad = function(episode) {
    self.setSource(episode);
  };

  this.onRandomEpisodeError = function(error) {
    console.log('Could not find a random episode.')
  };

  this.setSource = function(episode) {
    self.episode = episode;
    player.setSrc(episode.file_url);
  };

  this.playPause = function playPause() {
    if (self.playing) {
      player.pause();
      self.setPaused()
    } else {
      player.play();
      self.setPlaying()
    }
  };

  this.setEpisodeAndPlay = function(episode) {
    self.setSource(episode);
    player.play();
    self.setPlaying();
  };

  //this.setSource = function setSource(episode){
      //this.episode = episode
      //player.setSrc(episode.file_url);
  //}

  //this.play = function play(episode, successCallback, errorCallback) {
    //if (episode) {
      //audio.setSource(episode)
    //}
    //if (errorCallback) {
      //player.media.onerror = errorCallback;
    //}
    //if (successCallback) {
      //player.media.onsuccess = successCallback;
    //}

    //player.play();

    //this.playing = true;
  //};

  //this.getRandomEpisode = function(onRandomEpisodeLoad) {
    //$http.get('/api/episodes/random').then(onRandomEpisodeLoad);
    //$http.get('/api/episodes/random').then(function (response) {
      //audio.setSource(response.data.episode);
    //});
  //};

  //this.pauseAudioAndSetValueOfThing = function() {
    //audio.pause();
    //audio.stream_exists = true;
  //};

  //this.autoPlay = function autoPlay() {
    //audio.play(livestream, this.pauseAudio, this.getAndPlayAndPauseRandomEpisode);
  //};

  //this.pause = function pause() {
    //player.pause();
    //this.playing = false;
  //}


}]);
