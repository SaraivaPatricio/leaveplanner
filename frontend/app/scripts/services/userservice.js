'use strict';

/**
 * @ngdoc service
 * @name frontendApp.userService
 * @description
 * # userService
 * Factory in the frontendApp.
 */
angular.module('frontendApp')
  .factory('userService', function ($resource, $http) {
    var resource = $resource('/api/user/:id/', {
      id: '@id'
    }, {
      update: {
        method: "PUT"
      },
      remove: {
        method: "DELETE"
      },
      notInDepartement: {
        method: "GET",
        isArray:true,
        params:{departementId: '@departementId'},
        url: 'api/user/userNotInDepartement/:departementId'
      }
    });

    return resource;
  });
