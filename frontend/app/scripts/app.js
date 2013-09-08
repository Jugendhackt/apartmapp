'use strict';

angular.module('frontendApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
<<<<<<< Updated upstream
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
=======
>>>>>>> Stashed changes
      .when('/signup', {
        templateUrl: 'views/signup.html',
        controller: 'SignupCtrl'
      })
<<<<<<< Updated upstream
      .when('/impressum', {
        templateUrl: 'views/impressum.html',
        controller: 'LinksCtrl'
      })
      .when('/links', {
        templateUrl: 'views/links.html',
        controller: 'LinksCtrl'
=======
       .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
>>>>>>> Stashed changes
      })
      .otherwise({
        redirectTo: '/'
      });
  });
