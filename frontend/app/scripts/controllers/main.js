'use strict';

angular.module('frontendApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.center = {
        lat: 51.5,
        lng: 10.5,
        zoom: 5
    },
    $scope.markers = []
    $scope.searchResults = [];
    $scope.error = false;
    $http.get('/-/search').success( function(data) {
      $scope.searchResults = data.results;
      for (var i=0;i<$scope.searchResults.length;i++) {
        //console.log($scope.searchResults[i])
        if ($scope.searchResults[i]['wgs84Coordinate'])
        {
          $scope.markers.push({
            lat : $scope.searchResults[i]['wgs84Coordinate']['latitude'],
            lng : $scope.searchResults[i]['wgs84Coordinate']['longitude'],
            message : "<a href=http://www.immobilienscout24.de/expose/" + $scope.searchResults[i]["information"] + ">" + $scope.searchResults[i]['description'] + "</a>"
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
      for (var i=0;i<$scope.otherResults.length;i++) {
        //console.log($scope.otherResults[i])
   $scope.markers.push({
          lat : $scope.otherResults[i][4],
          lng : $scope.otherResults[i][5],
          message : $scope.otherResults[i][4] + $scope.otherResults[i][5]
        });
        //var marker1 = L.marker([$scope.searchResults[i]["wgs84Coordinate"]['latitude'], $scope.searchResults[i]['wgs84Coordinate']['longitude']]).addTo(leaflet);
        //var marker1 = L.marker([entry['wgs84Coordinate']['latitude'], entry['wgs84Coordinate']['longitude']]).addTo(map);
      }
    }
    ).error(function() {
      $scope.error = true;
    });
    $scope.$on('leafletDirectiveMap.zoomstart', function () { 
        $scope.markers = []
    $scope.searchResults = [];
    $scope.error = false;
    /*$http.get('/-/search').success( function(data) {
      $scope.searchResults = data.results;
      for (var i=0;i<$scope.searchResults.length;i++) {
        //console.log($scope.searchResults[i])
        if ($scope.searchResults[i]['wgs84Coordinate'])
        {
          $scope.markers.push({
            lat : $scope.searchResults[i]['wgs84Coordinate']['latitude'],
            lng : $scope.searchResults[i]['wgs84Coordinate']['longitude'],
            message : "<a href=http://www.immobilienscout24.de/expose/" + $scope.searchResults[i]["information"] + ">" + $scope.searchResults[i]['description'] + "</a>"
          });
        }
        //var marker1 = L.marker([$scope.searchResults[i]["wgs84Coordinate"]['latitude'], $scope.searchResults[i]['wgs84Coordinate']['longitude']]).addTo(leaflet);
        //var marker1 = L.marker([entry['wgs84Coordinate']['latitude'], entry['wgs84Coordinate']['longitude']]).addTo(map);
      }
    }
    ).error(function() {
      $scope.error = true;
    });
    */
    $http.get('/-/others').success( function(data) {
      $scope.otherResults = data.results;
      for (var i=0;i<$scope.otherResults.length;i++) {
        //console.log($scope.otherResults[i])
        $scope.markers.push({
          lat : $scope.otherResults[i][4],
          lng : $scope.otherResults[i][5],
          message : $scope.otherResults[i][4] + $scope.otherResults[i][5]
        });
        //var marker1 = L.marker([$scope.searchResults[i]["wgs84Coordinate"]['latitude'], $scope.searchResults[i]['wgs84Coordinate']['longitude']]).addTo(leaflet);
        //var marker1 = L.marker([entry['wgs84Coordinate']['latitude'], entry['wgs84Coordinate']['longitude']]).addTo(map);
      }
    }
    ).error(function() {
      $scope.error = true;
    });});

    $scope.$on('leafletDirectiveMap.dragend', function () { 
    $scope.markers = []
    $scope.searchResults = [];
    $scope.otherResults = [];
    $scope.error = false;
    $http.get('/-/search', {
      params: {lng : $scope.center.lng,
               lat : $scope.center.lat,
               dist : 5000}}).success( function(data) {
      $scope.searchResults = data.results;
      for (var i=0;i<$scope.searchResults.length;i++) {
        //console.log($scope.searchResults[i])
        if ($scope.searchResults[i]['wgs84Coordinate'])
        {
          $scope.markers.push({
            lat : $scope.searchResults[i]['wgs84Coordinate']['latitude'],
            lng : $scope.searchResults[i]['wgs84Coordinate']['longitude'],
            message : '<li><img src="' + $scope.searchResults[i]["image_url"] + '"><p></p>' + $scope.searchResults[i]["description"] + '<p>' + $scope.searchResults[i]["street"] + " " + $scope.searchResults[i]["houseNumber"] + ', ' + $scope.searchResults[i]["postcode"]  + " " + $scope.searchResults[i]["city"] + '</p><p><a href="http://www.immobilienscout24.de/expose/' + $scope.searchResults[i]["information"] + '"><img height=75 width=163 src="images/informationen.png"></a></p></li>'
          });
        }
        //var marker1 = L.marker([$scope.searchResults[i]["wgs84Coordinate"]['latitude'], $scope.searchResults[i]['wgs84Coordinate']['longitude']]).addTo(leaflet);
        //var marker1 = L.marker([entry['wgs84Coordinate']['latitude'], entry['wgs84Coordinate']['longitude']]).addTo(map);
      }
    }
    ).error(function() {
      $scope.error = true;
    });
    
    $http.get('/-/others', {
      params: {lng : $scope.center.lng,
               lat : $scope.center.lat,
               dist : 0.5}}).success( function(data) {
      $scope.otherResults = data.results;
      for (var i=0;i<$scope.otherResults.length;i++) {
        console.log($scope.otherResults[i])
        $scope.markers.push({
          lat : $scope.otherResults[i][4],
          lng : $scope.otherResults[i][5],
          message : $scope.otherResults[i][4] + $scope.otherResults[i][5],
          icon: L.icon({
                    iconUrl: 'images/' + $scope.otherResults[i][3],
                    iconSize: [80, 80],
                    iconAnchor: [40, 80],
                    popupAnchor: [0, 0],
                    shadowSize: [0, 0],
                    shadowAnchor: [0, 0]
                })
        });
        //var marker1 = L.marker([$scope.searchResults[i]["wgs84Coordinate"]['latitude'], $scope.searchResults[i]['wgs84Coordinate']['longitude']]).addTo(leaflet);
        //var marker1 = L.marker([entry['wgs84Coordinate']['latitude'], entry['wgs84Coordinate']['longitude']]).addTo(map);
      }
    }
    ).error(function() {
      $scope.error = true;
    });
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
