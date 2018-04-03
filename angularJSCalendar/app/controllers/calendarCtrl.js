angular.module('app').controller('calendarCtrl', function ($scope) {
  $scope.init = function () {
    const DAYS = _.range(1, 32).map((day) => `Oct ${day}`);
    $scope.days = DAYS;
    $scope.hours = _.range(24);
    $scope.isLoaded = false;
  }

  $scope.load = function () {
    $scope.isLoaded = true;
  }

  $scope.searchAll = function () {
    $scope.$broadcast('searchAll');
  }
});