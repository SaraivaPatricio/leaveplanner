'use strict';

describe('Controller: CreateleaveCtrl', function () {

  // load the controller's module
  beforeEach(module('frontendApp'));

  var CreateleaveCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CreateleaveCtrl = $controller('CreateleaveCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CreateleaveCtrl.awesomeThings.length).toBe(3);
  });
});
