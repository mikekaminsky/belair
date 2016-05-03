belAir = angular.module('belAir', ['ngRoute', 'ngFileUpload']);

belAir.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
  $routeProvider.when('/', {
    controller: 'HomeController',
    templateUrl: 'home.html'
  }).when('/shows/:id', {
    controller: 'ShowController',
    templateUrl: 'show.html'
  }).when('/schedule', {
    controller: 'ScheduleController',
    templateUrl: 'schedule.html'
  }).when('/about', {
    controller: 'AboutController',
    templateUrl: 'about.html'
  }).when('/admin', {
    controller: 'AdminController',
    templateUrl: 'admin.html'
  }).when('/admin/show/:showID/episodes/new', {
    controller: 'AdminNewEpisodeController',
    templateUrl: 'admin_new_episode.html'
  }).when('/admin/show/new', {
    controller: 'AdminNewShowController',
    templateUrl: 'admin_new_show.html'
  }).when('/admin/show/:id', {
    controller: 'AdminShowController',
    templateUrl: 'admin_show.html'
  }).when('/admin/show/:showID/episodes/:episodeID', {
    controller: 'AdminEpisodeController',
    templateUrl: 'admin_episode.html'
  }).otherwise({ redirectTo: '/'});
}]);
