angular.module('app', ['ngRoute']).config(function ($routeProvider) {
  $routeProvider.otherwise({
    redirectTo: '/'
  });
});