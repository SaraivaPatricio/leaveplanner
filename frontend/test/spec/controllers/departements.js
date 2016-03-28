'use strict';

describe('Controller: DepartementsCtrl', function () {

  // load the controller's module
  beforeEach(module('frontendApp'));

  var DepartementsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DepartementsCtrl = $controller('DepartementsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(DepartementsCtrl.awesomeThings.length).toBe(3);
  });
});
