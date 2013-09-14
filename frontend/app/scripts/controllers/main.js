'use strict';

angular.module('frontendApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.center = {
        lat: 51.5,
        lng: 10.5,
        zoom: 4
    },
    $scope.markers = []
    $scope.searchResults = [];
    $scope.error = false;
    $http.get('/-/search').success( function(data) {
      $scope.searchResults = data.results;
      for (var i=0;i<$scope.searchResults.length;i++) {
        console.log($scope.searchResults[i])
        if ($scope.searchResults[i]['wgs84Coordinate'])
        {
          $scope.markers.push({
            lat : $scope.searchResults[i]['wgs84Coordinate']['latitude'],
            lng : $scope.searchResults[i]['wgs84Coordinate']['longitude'],
          });
        }
        //var marker1 = L.marker([$scope.searchResults[i]["wgs84Coordinate"]['latitude'], $scope.searchResults[i]['wgs84Coordinate']['longitude']]).addTo(leaflet);
        //var marker1 = L.marker([entry['wgs84Coordinate']['latitude'], entry['wgs84Coordinate']['longitude']]).addTo(map);
      }
    }
    ).error(function() {
      $scope.error = true;
    });
    
    $http.get('/-/others').success( function(data) {
      $scope.otherResults = data.results;
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
  })
  .controller('NavCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma',
      'Apartmapp'
    ];
  });
