'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:DepartementCtrl
 * @description
 * # DepartementCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('DepartementCtrl', function ($scope, departementService) {

    $scope.id = 1;

    $scope.addDepartement = function(departement) {
      new departementService(departement).$save();
    };

    $scope.updateDepartement = function(departement) {
      departement.$update();
    };

  });
