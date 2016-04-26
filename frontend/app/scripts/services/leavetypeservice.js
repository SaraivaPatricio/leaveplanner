'use strict';

/**
 * @ngdoc service
 * @name frontendApp.leaveTypeService
 * @description
 * # leaveTypeService
 * Factory in the frontendApp.
 */
angular.module('frontendApp')
  .factory('leaveTypeService', function ($resource) {
      return $resource('/api/leave-type/:id', {
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
