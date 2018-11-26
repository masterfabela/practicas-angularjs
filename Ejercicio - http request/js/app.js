(function() {
  var app = angular.module('ejemplosApp', []);

  app.controller('mainCtrl', [
    '$scope',
    '$http',
    function($scope, $http) {
      $scope.profesores = {};
      $http
        .get('json/profesores.json')
        .then(function(profesores) {
          $scope.profesores = profesores;
        })
        .catch(function(err) {
          console.err('No se han podido encontrar profesores');
        });
    }
  ]);
})();
