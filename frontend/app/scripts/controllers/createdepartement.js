'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:CreateDepartementCtrl
 * @description
 * # CreateDepartementCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('CreateDepartementCtrl', function ($scope, $routeParams, departementService) {

    $scope.departement = {};

    $scope.saveDepartement = function(departement) {
      new departementService(departement).$save();
    };

  });
