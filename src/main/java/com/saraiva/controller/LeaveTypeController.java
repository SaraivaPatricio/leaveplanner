package com.saraiva.controller;

import com.saraiva.model.LeaveType;
import com.saraiva.repository.LeaveTypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/leave-type")
public class LeaveTypeController {
  @Autowired
  private LeaveTypeRepository repo;
  
  @RequestMapping(method = RequestMethod.GET)
  public List<LeaveType> findLeaveTypes() {
    return repo.findAll();
  }
  
  @RequestMapping(method = RequestMethod.POST)
  public LeaveType addLeaveType(@RequestBody LeaveType leaveType) {
    leaveType.setId(null);
    return repo.saveAndFlush(leaveType);
  }
  
  @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
  public LeaveType updateLeaveType(@RequestBody LeaveType updatedLeaveType, @PathVariable Integer id) {
    updatedLeaveType.setId(id);
    return repo.saveAndFlush(updatedLeaveType);
  }
  
  @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
  public void deleteLeaveType(@PathVariable Integer id) {
    repo.delete(id);
  }
}
