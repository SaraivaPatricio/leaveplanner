'use strict';

describe('Service: leaveRequestService', function () {

  // load the service's module
  beforeEach(module('frontendApp'));

  // instantiate service
  var leaveRequestService;
  beforeEach(inject(function (_leaveRequestService_) {
    leaveRequestService = _leaveRequestService_;
  }));

  it('should do something', function () {
    expect(!!leaveRequestService).toBe(true);
  });

});
