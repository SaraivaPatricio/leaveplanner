'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:EmployeesCtrl
 * @description
 * # EmployeesCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('EmployeesCtrl', function ($scope, userService) {
    userService.query(function(response) {
      $scope.employeeList = response ? response : [];
    });

    $scope.addEmployee = function(employee) {
      new userService(employee).$save(function(employee) {
        $scope.employeeList.push(employee);
      });
      $scope.employee = "";
    };

    $scope.updateEmployee = function(employee) {
      employee.$update();
    };

    $scope.deleteEmployee = function(employee) {
      employee.$remove(function() {
        $scope.employeeList.splice($scope.employeeList.indexOf(employee), 1);
      });
    };
  });
