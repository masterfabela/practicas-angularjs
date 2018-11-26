(function() {
  var app = angular.module('ejemplosApp', []);

  app.controller('mainCtrl', [
    '$scope',
    '$http',
    function($scope, $http) {
      //http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&callback=JSON_CALLBACK
      $scope.clima = {};
      $scope.kelvinCelsius = function(kelvins) {
        var celsius;
        celsius = kelvins - 273.15;
        celsius = Math.round(celsius * 100) / 100;
        return celsius;
      };
      $http
        .jsonp(
          'http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&callback=JSON_CALLBACK&appid=9f50a805aa0089a1edd1829a5db029f0'
        )
        .then(function(data) {
          $scope.clima = data.data;
        });
    }
  ]);
})();
