belAir = angular.module('belAir', ['ngRoute']);

belAir.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
  $routeProvider.when('/', {
    template: 'home',
    controller: 'HomeController',
    template: '<h1>Hello Radio</h1>'
  }).otherwise({ redirectTo: '/'});
}]);

belAir.run(function () {
});
