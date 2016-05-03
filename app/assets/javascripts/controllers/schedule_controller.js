belAir.controller('ScheduleController', ['$sce', '$scope', function($sce, $scope) {

  $scope.calendarURL = $sce.trustAsResourceUrl("https://calendar.google.com/calendar/embed?src=" +
    BelAir.googleCalendarID +
    "@group.calendar.google.com&ctz=America/New_York");

}]);
