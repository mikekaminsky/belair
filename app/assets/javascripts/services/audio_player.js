belAir.service('AudioPlayer', [function AudioPlayerService() {
  function audio() {
    return $(audioJS.element);
  }

  this.play = function play(url) {
    audio().attr('src', url);
    audioJS.play();
  }

}]);
