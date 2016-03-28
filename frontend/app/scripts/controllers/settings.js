'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:SettingsCtrl
 * @description
 * # SettingsCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('SettingsCtrl', function ($scope, publicHolidayService) {

  	/*
	$scope.publicHoliday = '';

  	$scope.addPublicHoliday = function () {
		publicHolidayService.addPublicHoliday($scope.publicHoliday).success(function(data){
			$scope.publicHoliday = '';
		});
	};

    var loadPublicHolidays = function(){
        publicHolidayService.getPublicHolidays().success(function(data){
            $scope.publicHolidayList = data;
        });
    };
    
    loadPublicHolidays();
    */

    publicHolidayService.query(function(response) {
      $scope.publicHolidayList = response ? response : [];
    });
    
    $scope.addPublicHoliday = function(publicHoliday) {
      new publicHolidayService(publicHoliday).$save(function(publicHoliday) {
        $scope.publicHolidayList.push(publicHoliday);
      });
      $scope.publicHoliday = "";
    };
    
    $scope.updatePublicHoliday = function(publicHoliday) {
      publicHoliday.$update();
    };
    
    $scope.deletePublicHoliday = function(publicHoliday) {
      publicHoliday.$remove(function() {
        $scope.publicHolidayList.splice($scope.publicHolidayList.indexOf(publicHoliday), 1);
      });
    };

  });