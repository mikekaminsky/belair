belAir = angular.module('belAir', [
  'ngRoute',
  'ngFileUpload',
  'ui.bootstrap',
  'ngAside'
]);

belAir.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
  $routeProvider.when('/', {
    controller: 'HomeController',
    templateUrl: 'home.html'
  }).when('/shows/:id', {
    controller: 'ShowController',
    templateUrl: 'show.html'
  }).when('/about', {
    controller: 'AboutController',
    templateUrl: 'about.html'
  }).when('/schedule', {
    controller: 'ScheduleController',
    templateUrl: 'schedule.html'
  }).when('/admin', {
    controller: 'AdminController',
    templateUrl: 'admin.html'
  }).when('/admin/shows/:showID/episodes/new', {
    controller: 'AdminNewEpisodeController',
    templateUrl: 'admin_new_episode.html'
  }).when('/admin/shows/new', {
    controller: 'AdminNewShowController',
    templateUrl: 'admin_new_show.html'
  }).when('/admin/shows/:id', {
    controller: 'AdminShowController',
    templateUrl: 'admin_show.html'
  }).when('/admin/shows/:showID/episodes/:episodeID', {
    controller: 'AdminEpisodeController',
    templateUrl: 'admin_episode.html'
  }).when('/shows', {
    controller: 'ShowsController',
    templateUrl: 'shows.html'
  }).otherwise({ redirectTo: '/'});
}]);
