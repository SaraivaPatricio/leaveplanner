'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:EditEmployeeCtrl
 * @description
 * # EditEmployeeCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('EditEmployeeCtrl', function ($scope, $routeParams, $location, departementService, userService) {

    $scope.employee = userService.get({ id: $routeParams.id }, function() {
      $scope.departements = departementService.query(function() {
        angular.forEach($scope.departements, function(value, key){
          if($scope.employee.departement && value.id == $scope.employee.departement.id)
            $scope.departementSelected = value;
        });
      });
    });

    $scope.saveEmployee = function(employee) {
      $scope.employee.departement = $scope.departementSelected;
      employee.$update().then(
        function( value ){$location.path("/employees");},
        function( error ){}
      );
    };

  });
