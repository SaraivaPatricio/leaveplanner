'use strict';

/**
 * @ngdoc overview
 * @name frontendApp
 * @description
 * # frontendApp
 *
 * Main module of the application.
 */
angular
  .module('frontendApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider, $httpProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/settings', {
        templateUrl: 'views/settings.html',
        controller: 'SettingsCtrl',
        controllerAs: 'settings'
      })
      .when('/departements', {
        templateUrl: 'views/departements.html',
        controller: 'DepartementsCtrl',
        controllerAs: 'departements'
      })
      .when('/departement', {
        templateUrl: 'views/departement.html',
        controller: 'CreateDepartementCtrl',
        controllerAs: 'createdepartement'
      })
      .when('/departement/:id', {
        templateUrl: 'views/departement.html',
        controller: 'EditDepartementCtrl',
        controllerAs: 'editdepartement'
      })
      .when('/employees', {
        templateUrl: 'views/employees.html',
        controller: 'EmployeesCtrl',
        controllerAs: 'employees'
      })
      .when('/employee', {
        templateUrl: 'views/employee.html',
        controller: 'CreateEmployeeCtrl',
        controllerAs: 'createemployee'
      })
      .when('/employee/:id', {
        templateUrl: 'views/employee.html',
        controller: 'EditEmployeeCtrl',
        controllerAs: 'editemployee'
      })
      .when('/calendar', {
        templateUrl: 'views/calendar.html',
        controller: 'CalendarCtrl',
        controllerAs: 'calendar'
      })
      .when('/createleave', {
        templateUrl: 'views/createleave.html',
        controller: 'CreateleaveCtrl',
        controllerAs: 'createleave'
      })
      .otherwise({
        redirectTo: '/'
      });
    $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';

  }).run( function($rootScope, $location, $http) {
  // register listener to watch route changes
  $rootScope.$on( "$routeChangeStart", function(event, next, current) {
    if ( $rootScope.authenticated == null || $rootScope.authenticated == false) {
      // no logged user, we should be going to #login
      if ( next.templateUrl == "login.html" ) {
        // already going to #login, no redirect needed
      } else {
        // not going to #login, we should redirect now
        $location.path( "/login" );
      }
    }
  });
  $rootScope.logout = function() {
    $http.post('/api/logout', {}).success(function() {
      $rootScope.userConnected = {};
      $rootScope.authenticated = false;

      $location.path("/login");
    }).error(function(data) {
      $rootScope.userConnected = {};
      $rootScope.authenticated = false;
    });
  }
});
