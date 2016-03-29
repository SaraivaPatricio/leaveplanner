'use strict';

describe('Controller: DepartementCtrl', function () {

  // load the controller's module
  beforeEach(module('frontendApp'));

  var DepartementCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DepartementCtrl = $controller('DepartementCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(DepartementCtrl.awesomeThings.length).toBe(3);
  });
});
