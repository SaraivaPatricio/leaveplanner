'use strict';

describe('Service: departementService', function () {

  // load the service's module
  beforeEach(module('frontendApp'));

  // instantiate service
  var departementService;
  beforeEach(inject(function (_departementService_) {
    departementService = _departementService_;
  }));

  it('should do something', function () {
    expect(!!departementService).toBe(true);
  });

});
