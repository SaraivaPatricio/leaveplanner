'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:EditDepartementCtrl
 * @description
 * # EditDepartementCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('EditDepartementCtrl', function ($scope, $routeParams, $location, departementService, userService) {

    $scope.departement = departementService.get({ id: $routeParams.id });

    //$scope.employeeList = userService.notInDepartement({ departementId: $routeParams.id });
    $scope.employeeList = userService.query();


    $scope.saveDepartement = function(departement) {
      departement.$update().then(
        function( value ){$location.path("/departements");},
        function( error ){}
        )
    };

    $scope.addEmployee = function(employee) {

      employee.departement = $scope.departement;
      employee.$update().then(
        function( value ){},
        function( error ){}
      )

    };

     $scope.removeEmployee = function (employee) {
      employee.departement = null;
       employee.$update().then(
         function( value ){},
         function( error ){}
       );
     };

    $scope.inDepartement = function(employee) {
      if(employee.departement && employee.departement.id === $scope.departement.id){
        return false;
      }
      return true;
    }

    $scope.notInDepartement = function(employee) {
      return !$scope.inDepartement(employee);
    }

  });
