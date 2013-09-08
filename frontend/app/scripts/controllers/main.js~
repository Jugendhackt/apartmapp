'use strict';

angular.module('frontendApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.searchResults = [];
    $scope.error = false;
    $http.get('/-/search').success( function(data, status, headers, config) { $scope.searchResults = data.results; }
    ).error( function(data, status, headers, config) { $scope.error = true; }); })
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

<<<<<<< Updated upstream
=======
angular.module('frontendApp')
  .controller('SignupCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma',
      'Apartmapp'
    ];
  });

angular.module('frontendApp')
  .controller('LoginCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma',
      'Apartmapp'
    ];
  });
>>>>>>> Stashed changes
