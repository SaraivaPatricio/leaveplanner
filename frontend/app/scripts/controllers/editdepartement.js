'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:EditDepartementCtrl
 * @description
 * # EditDepartementCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('EditDepartementCtrl', function ($scope, $routeParams, $location, departementService) {

    //$scope.departement.id = $routeParams.id;
    //$scope.departement = {};

    $scope.departement = departementService.get({ id: $routeParams.id });

    $scope.saveDepartement = function(departement) {
      departement.$update().then(
        function( value ){$location.path("/departements");},
        function( error ){}
        )
    };

  });
