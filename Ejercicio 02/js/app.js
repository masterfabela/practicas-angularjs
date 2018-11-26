var app = angular.module('universidadApp', []);
app.controller('profesorCtrl', function($scope) {
  $scope.profesor = profesorData;
  $scope.editando = {};
  $scope.mostrandoCaja = false;
  $scope.editarProfesor = function() {
    angular.copy($scope.profesor, $scope.editando);
    $scope.mostrandoCaja = true;
  };
  $scope.guardar = function() {
    angular.copy($scope.editando, $scope.profesor);
    $scope.mostrandoCaja = false;
  };
  $scope.cancelar = function() {
    $scope.editando = {};
    $scope.mostrandoCaja = false;
  };
});

var profesorData = {
  nombre: 'Juan Carlos Pineda',
  bio:
    'Saludos estudiante, mi nombre es Juan Carlos, encantado de conocerte, soy una apasionado instructor de matemáticas aplicadas cuánticas, más orientado a la física termonuclear. Mi vocación es ser maestro y lograr transmitir mis conocimientos a todos mis estudiantes!.',
  edad: 47,
  foto: 'img/juancarlos.jpg'
};
