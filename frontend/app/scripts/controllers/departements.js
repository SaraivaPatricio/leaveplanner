'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:DepartementsCtrl
 * @description
 * # DepartementsCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('DepartementsCtrl', function ($scope, departementService) {
    departementService.query(function(response) {
      $scope.departementList = response ? response : [];
    });

    $scope.addDepartement = function(departement) {
      new departementService(departement).$save(function(departement) {
        $scope.departementList.push(departement);
      });
      $scope.departement = "";
    };

    $scope.updateDepartement = function(departement) {
      departement.$update();
    };

    $scope.deleteDepartement = function(departement) {
      departement.$remove(function() {
        $scope.departementList.splice($scope.departementList.indexOf(departement), 1);
      });
    };
  });
