belAir.controller('ShowController', ['Shows', '$location', '$routeParams', '$sce', '$scope',
  function(Shows, $location, $routeParams, $sce, $scope) {

  Shows.show($routeParams.id).then(function (response) {
    if (response.data.show) {
      $scope.show = response.data.show;
    } else {
      $location.path('/').replace();
    }
  });

  $scope.encoded = function encoded(url) {
    return $sce.trustAsResourceUrl(encodeURI(url));
  };

  $scope.play = function play(episode) {
    var audio = $(audioJS.element);
    audio.attr('src', episode.file_url);
    audioJS.play();
  };

}]);
