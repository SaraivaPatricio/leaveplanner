'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:CreateleaveCtrl
 * @description
 * # CreateleaveCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('CreateleaveCtrl', function ($scope, $location,$rootScope, leaveRequestService) {
    leaveRequestService.query(function(response) {
      $scope.leaveRequestList = response ? response : [];
    });

    $scope.addLeaveRequest = function(leaveRequest) {
      leaveRequest.employee_id = $rootScope.userConnected.principal.id;
      new leaveRequestService(leaveRequest).$save(function(leaveRequest) {
        $scope.leaveRequestList.push(leaveRequest);
      }).then(
        function( value ){$location.path("/calendar");},
        function( error ){}
      );
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
