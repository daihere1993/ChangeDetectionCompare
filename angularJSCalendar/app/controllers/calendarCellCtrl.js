angular.module('app').controller('calendarCellCtrl', function ($scope, $timeout) {
  $scope.status = {};

  $scope.cellClicked = function () {
    delete $scope.status.searchResults;
    $scope.status.isSearching = true;
    // simulate AJAX request
    $timeout(function () {
      $scope.status.isSearching = false;
      $scope.status.searchResults = {
        options: Math.floor(Math.random() * 5)
      };
    }, 0);
  }

  $scope.$on('searchAll', function () {
    $scope.cellClicked();
  });

  $scope.showSpinner = function() {
    return $scope.status.isSearching;
  }
  $scope.showHour = function() {
    return !$scope.status.isSearching && !$scope.status.searchResults;
  }
  $scope.showSearchResults = function() {
    return $scope.status.searchResults;
  }
})