'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:EditEmployeeCtrl
 * @description
 * # EditEmployeeCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('EditEmployeeCtrl', function ($scope, $routeParams, userService) {

    $scope.employee = userService.get({ id: $routeParams.id });

    $scope.saveEmployee = function(employee) {
      employee.$update();
    };

  });