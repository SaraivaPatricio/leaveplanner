'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:LoginCtrl
 * @description
 * # AboutCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('LoginCtrl', function($rootScope, $scope, $http, $location) {

    var authenticate = function(credentials, callback) {

      var headers = credentials ? {authorization : "Basic "
      + btoa(credentials.username + ":" + credentials.password)
      } : {};

      $http.get('/api/user/connected', {headers : headers}).success(function(data) {
        if (data.principal.id) {
          $rootScope.userConnected = data;
          $rootScope.authenticated = true;
        } else {
          $rootScope.authenticated = false;
        }
        callback && callback();
      }).error(function() {
        $rootScope.authenticated = false;
        callback && callback();
      });

    }

    authenticate();
    $scope.credentials = {};
    $scope.authentification = function() {
      authenticate($scope.credentials, function() {
        if ($rootScope.authenticated) {
          $location.path("/");
          $scope.error = false;
        } else {
          $location.path("/login");
          $scope.error = true;
        }
      });
    };
  });
