app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templareUrl: 'parciales/home.html'
    })
    .when('/profesores', {
      templareUrl: 'parciales/profesores.html'
    })
    .when('/alumnos', {
      templareUrl: 'parciales/alumnos.html'
    })
    .otherwise({
      redirectTo: '/'
    });
});
