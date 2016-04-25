'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:CreateEmployeeCtrl
 * @description
 * # CreateEmployeeCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('CreateEmployeeCtrl', function ($scope, $routeParams, $location, userService, departementService) {

    $scope.employee = {};
    $scope.departements = departementService.query();

    $scope.saveEmployee = function(employee) {
      $scope.employee.departement = $scope.departementSelected;
      new userService(employee).$save().then(
        function( value ){$location.path("/employees");},
        function( error ){}
      );
    };

  });
