'use strict';

/**
 * @ngdoc service
 * @name frontendApp.departementService
 * @description
 * # departementService
 * Factory in the frontendApp.
 */
angular.module('frontendApp')
  .factory('departementService', function ($resource) {
    return $resource('/api/departement/:id', {
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
