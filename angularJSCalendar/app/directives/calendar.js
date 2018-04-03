angular.module('app').directive('calendar', function () {
  return {
    restrict: 'E',
    templateUrl: 'app/directives/calendar.html',
    controller: 'calendarCtrl'
  }
})