'use strict';

angular.module('frontendApp')
  .controller('MainCtrl', function ($scope) {
    $scope.searchResults = [{city: "Eichsfeld (Kreis)", description: "3-R-Whg. mit Balkon, Laminat - mit Weitblick \u00fcbers Tal", preciseHouseNumber: "true", street: "Stra\u00dfe des Aufbaus", image_url: "http://picture.immobilienscout24.de/pic/orig04/N/1/51/455/1051455-0.jpg/ORIG/resize/60x60%3E/extent/60x60/format/jpg?3091713215", postcode: "37345", wgs84Coordinate: {latitude: 51.474296184543235, longitude: 10.487635936473437}, quarter: "Gro\u00dfbodungen", houseNumber: "14-18"}, {city: "Eichsfeld (Kreis)", description: "1-R-Whg. mit Balkon, Laminat - mit Weitblick \u00fcbers Tal", preciseHouseNumber: "true", street: "Stra\u00dfe des Aufbaus", image_url: "http://picture.immobilienscout24.de/pic/orig03/N/177/883/494/177883494-0.jpg/ORIG/resize/60x60%3E/extent/60x60/format/jpg?3091713215", postcode: "37345", wgs84Coordinate: {latitude: 51.473689813304084, longitude: 10.486402115693128}, quarter: "Gro\u00dfbodungen", houseNumber: "14-18"}
    ];
  });
