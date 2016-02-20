belAir = angular.module('belAir', ['ngRoute']);

belAir.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
  $routeProvider.when('/', {
    controller: 'HomeController',
    templateUrl: 'home.html'
  }).when('/shows/:id', {
    controller: 'ShowController',
    templateUrl: 'show.html'
  }).otherwise({ redirectTo: '/'});
}]);

belAir.run(function () {
});
