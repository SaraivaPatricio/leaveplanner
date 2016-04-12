'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:CalendarCtrl
 * @description
 * # CalendarCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('CalendarCtrl', function ($scope, leaveRequestService) {

    $scope.currentYear = new Date().getFullYear();

    $scope.months = {};
    var loadCalendar = function(year){
      leaveRequestService.calendar(year).success(function(data){
        $scope.months = data;
      });
    };

    $scope.getCssClass = function(day){
      if(day.dayoff){
        return "day-off";
      }
      if(day.leave){
        return "leave";
      }
      return "";
    };

    $scope.getMonthLabel = function(month){

      if(month[0].month == 0){return "January";}
      if(month[0].month == 1){return "February";}
      if(month[0].month == 2){return "March";}
      if(month[0].month == 3){return "April";}
      if(month[0].month == 4){return "May";}
      if(month[0].month == 5){return "June";}
      if(month[0].month == 6){return "July";}
      if(month[0].month == 7){return "August";}
      if(month[0].month == 8){return "September";}
      if(month[0].month == 9){return "October";}
      if(month[0].month == 10){return "November";}
      if(month[0].month == 11){return "December";}

      return "";

    };

    loadCalendar($scope.currentYear);

    $scope.next = function(){
      $scope.currentYear = $scope.currentYear + 1;
      loadCalendar($scope.currentYear);
    };

    $scope.last = function(){
      $scope.currentYear = $scope.currentYear - 1;
      loadCalendar($scope.currentYear);
    };

  });
