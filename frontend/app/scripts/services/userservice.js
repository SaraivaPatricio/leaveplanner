'use strict';

/**
 * @ngdoc service
 * @name frontendApp.userService
 * @description
 * # userService
 * Factory in the frontendApp.
 */
angular.module('frontendApp')
  .factory('userService', function ($resource) {
    return $resource('/api/user/:id', {
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
