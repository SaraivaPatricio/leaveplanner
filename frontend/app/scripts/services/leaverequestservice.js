'use strict';

/**
 * @ngdoc service
 * @name frontendApp.leaveRequestService
 * @description
 * # leaveRequestService
 * Factory in the frontendApp.
 */
angular.module('frontendApp')
  .factory('leaveRequestService', function ($resource, $http) {
    var leaveRequestService = $resource('/api/leave-request/:id', {
      id: '@id'
    }, {
      update: {
        method: "PUT"
      },
      remove: {
        method: "DELETE"
      }
    });

    leaveRequestService.calendar = function(year){
      return $http.get("/api/leave-request/findLeaveInYear/"+year);
    };

    return leaveRequestService;
  });
