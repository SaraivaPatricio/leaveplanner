'use strict';

describe('Service: publicHolidayService', function () {

  // load the service's module
  beforeEach(module('frontendApp'));

  // instantiate service
  var publicHolidayService;
  beforeEach(inject(function (_publicHolidayService_) {
    publicHolidayService = _publicHolidayService_;
  }));

  it('should do something', function () {
    expect(!!publicHolidayService).toBe(true);
  });

});
