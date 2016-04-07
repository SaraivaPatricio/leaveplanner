'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:CreateEmployeeCtrl
 * @description
 * # CreateEmployeeCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('CreateEmployeeCtrl', function ($scope, $routeParams, $location, userService) {

    $scope.employee = {};

    $scope.saveEmployee = function(employee) {
      new userService(employee).$save().then(
        function( value ){$location.path("/employees");},
        function( error ){}
      );
    };

  });
