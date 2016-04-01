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
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
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
      .otherwise({
        redirectTo: '/'
      });
  });
