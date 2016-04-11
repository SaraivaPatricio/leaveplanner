package com.saraiva.controller;

import com.saraiva.model.LeaveRequest;
import com.saraiva.repository.LeaveRequestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/leave-request")
public class LeaveRequestController {
  @Autowired
  private LeaveRequestRepository repo;

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public LeaveRequest findLeaveRequest(@PathVariable Integer id) {
        return repo.findOne(id);
    }

  @RequestMapping(method = RequestMethod.GET)
  public List<LeaveRequest> findLeaveRequests() {
    return repo.findAll();
  }
  
  @RequestMapping(method = RequestMethod.POST)
  public LeaveRequest addLeaveRequest(@RequestBody LeaveRequest leaveRequest) {
      leaveRequest.setId(null);
      return repo.saveAndFlush(leaveRequest);
  }
  
  @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
  public LeaveRequest updateLeaveRequest(@RequestBody LeaveRequest updatedLeaveRequest, @PathVariable Integer id) {
    updatedLeaveRequest.setId(id);
    return repo.saveAndFlush(updatedLeaveRequest);
  }
  
  @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
  public void deleteLeaveRequest(@PathVariable Integer id) {
    repo.delete(id);
  }
}