'use strict';

describe('Service: leaveTypeService', function () {

  // load the service's module
  beforeEach(module('frontendApp'));

  // instantiate service
  var leaveTypeService;
  beforeEach(inject(function (_leaveTypeService_) {
    leaveTypeService = _leaveTypeService_;
  }));

  it('should do something', function () {
    expect(!!leaveTypeService).toBe(true);
  });

});
