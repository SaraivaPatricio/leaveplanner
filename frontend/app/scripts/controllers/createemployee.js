'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:CreateEmployeeCtrl
 * @description
 * # CreateEmployeeCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('CreateEmployeeCtrl', function ($scope, $routeParams, userService) {

    $scope.employee = {};

    $scope.saveEmployee = function(employee) {
      new userService(employee).$save();
    };

  });
