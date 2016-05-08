var baPlayer = function() {
  var directive = {
    restrict: 'EA',
    templateUrl: 'player.html',
    controller: 'PlayerController',
    bindToController: true
  };

  return directive;
}

belAir.directive('baPlayer', baPlayer);
