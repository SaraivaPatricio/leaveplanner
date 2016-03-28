'use strict';

/**
 * @ngdoc service
 * @name frontendApp.publicHolidayService
 * @description
 * # publicHolidayService
 * Factory in the frontendApp.
 */
angular.module('frontendApp')
  .factory('publicHolidayService', 
/*
    function publicHolidayService($http) {
    // Service logic

    // Public API here
    return {
      getPublicHolidays: function () {
        return $http.get('/api/public-holiday');
      }
    };

    return {
      addPublicHoliday: function (data) {
        return $http.post('/api/public-holiday', data);
      }
    };
  }
  */
  function($resource) {
    return $resource('/api/public-holiday/:id', {
      id: '@id'
    }, {
      update: {
        method: "PUT"
      },
      remove: {
        method: "DELETE"
      }
    });
  }

  
);

/*
  (function(angular) {
  var ItemFactory = function($resource) {
    return $resource('/items/:id', {
      id: '@id'
    }, {
      update: {
        method: "PUT"
      },
      remove: {
        method: "DELETE"
      }
    });
  };
  
  ItemFactory.$inject = ['$resource'];
  angular.module("myApp.services").factory("Item", ItemFactory);
}(angular));

//*/