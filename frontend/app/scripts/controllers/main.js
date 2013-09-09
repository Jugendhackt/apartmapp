'use strict';

angular.module('frontendApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.searchResults = [];
    $scope.error = false;
    $http.get('/-/search').success( function(data) {
      $scope.searchResults = data.results;
    }
    ).error(function() {
      $scope.error = true;
    });
  })
  .controller('LoginCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma',
      'Apartmapp'
    ];
  })
 .controller('SignupCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma',
      'Apartmapp'
    ];
  });