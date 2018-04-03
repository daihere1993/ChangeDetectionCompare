angular.module('app').directive('calendarCell', function () {
  return {
    templateUrl: 'app/directives/calendarCell.html',
    controller: 'calendarCellCtrl',
    scope: {
      hour: '=',
      day: '='
    }
  }
})