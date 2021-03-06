'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:CreateDepartementCtrl
 * @description
 * # CreateDepartementCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('CreateDepartementCtrl', function ($scope, $routeParams, $location, departementService, userService) {

    $scope.departement = {};

    userService.query(function(response) {
      $scope.employeeList = response ? response : {};
    });

    $scope.saveDepartement = function(departement) {
      new departementService(departement).$save().then(
        function( value ){$location.path("/departements");},
        function( error ){}
      );
    };

  });
