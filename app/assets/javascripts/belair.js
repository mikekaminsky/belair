belAir = angular.module('belAir', [
  'ngRoute',
  'ngFileUpload',
  'ui.bootstrap',
  'ngAside',
  'dibari.angular-ellipsis'
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

_gCalFlow_debug = true;

var $ = jQuery;

$(function() {
  $('#gcf-simple').gCalFlow({
    calid: 'du6vkpb0vsoob2vht324jlqikk@group.calendar.google.com',
    maxitem: 50,
    globalize_fmt_monthday: 'M',
    date_formatter: function(d, allday_p) { return (d.getMonth()+1) + "/" + d.getDate() + "/" + d.getYear().toString().substr(-2) }
    })
});