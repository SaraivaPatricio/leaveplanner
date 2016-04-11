'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:CreateleaveCtrl
 * @description
 * # CreateleaveCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('CreateleaveCtrl', function ($scope, leaveRequestService) {
    leaveRequestService.query(function(response) {
      $scope.leaveRequestList = response ? response : [];
    });

    $scope.addLeaveRequest = function(leaveRequest) {
      new leaveRequestService(leaveRequest).$save(function(leaveRequest) {
        $scope.leaveRequestList.push(leaveRequest);
      });
      $scope.leaveRequest = "";
    };

    $scope.updateLeaveRequest = function(leaveRequest) {
      leaveRequest.$update();
    };

    $scope.deleteLeaveRequest = function(leaveRequest) {
      leaveRequest.$remove(function() {
        $scope.leaveRequestList.splice($scope.leaveRequestList.indexOf(leaveRequest), 1);
      });
    };
  });
