'use strict';

angular.module('frontendApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })

      .when('/signup', {
        templateUrl: 'views/signup.html',
        controller: 'SignupCtrl'
      })
      .when('/impressum', {
        templateUrl: 'views/impressum.html',
      })
      .when('/links', {
        templateUrl: 'views/links.html',
      })
      .otherwise({
        redirectTo: '/'
      });
  });
