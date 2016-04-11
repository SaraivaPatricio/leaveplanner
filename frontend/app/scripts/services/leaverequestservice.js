'use strict';

/**
 * @ngdoc service
 * @name frontendApp.leaveRequestService
 * @description
 * # leaveRequestService
 * Factory in the frontendApp.
 */
angular.module('frontendApp')
  .factory('leaveRequestService', function ($resource) {
    return $resource('/api/leave-request/:id', {
      id: '@id'
    }, {
      update: {
        method: "PUT"
      },
      remove: {
        method: "DELETE"
      }
    });
  });
