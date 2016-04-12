package com.saraiva.controller;

import com.saraiva.model.LeaveRequest;
import com.saraiva.model.User;
import com.saraiva.repository.LeaveRequestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;


import java.util.*;

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

  @RequestMapping(value = "/findLeaveInYear/{year}", method = RequestMethod.GET)
  public ArrayList<ArrayList> findLeaveInYear(@PathVariable Integer year) {
      
      User user = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
      List<LeaveRequest> leaveRequests = repo.findByUserId(user.getId());

      Calendar cal = Calendar.getInstance();
      cal.set(Calendar.YEAR, (year + 1));
      cal.set(Calendar.DAY_OF_YEAR, 1);
      Date end = cal.getTime();

      cal.set(Calendar.YEAR, year);
      cal.set(Calendar.DAY_OF_YEAR, 1);

      ArrayList<ArrayList> result = new ArrayList<>();

      result.add(new ArrayList<HashMap>());
      result.add(new ArrayList<HashMap>());
      result.add(new ArrayList<HashMap>());
      result.add(new ArrayList<HashMap>());
      result.add(new ArrayList<HashMap>());
      result.add(new ArrayList<HashMap>());
      result.add(new ArrayList<HashMap>());
      result.add(new ArrayList<HashMap>());
      result.add(new ArrayList<HashMap>());
      result.add(new ArrayList<HashMap>());
      result.add(new ArrayList<HashMap>());
      result.add(new ArrayList<HashMap>());

      while (cal.getTime().before(end)) {
          HashMap<String, Object> map = new HashMap<>();
          map.put("date", cal.getTime());
          map.put("dayofweek", cal.get(Calendar.DAY_OF_WEEK));
          map.put("dayofyear", cal.get(Calendar.DAY_OF_YEAR));
          map.put("day", cal.get(Calendar.DAY_OF_MONTH));
          map.put("month", cal.get(Calendar.MONTH));
          map.put("year", cal.get(Calendar.YEAR));
          if(cal.get(Calendar.DAY_OF_WEEK) != Calendar.SUNDAY && cal.get(Calendar.DAY_OF_WEEK) != Calendar.SATURDAY) {
              map.put("dayoff", false);
          }else{
              map.put("dayoff", true);
          }
          boolean isLeave = false;
          for (LeaveRequest leaveRequest : leaveRequests) {
              if(cal.getTime().before(leaveRequest.getEndDate()) && cal.getTime().after(leaveRequest.getBeginDate())) {
                  isLeave = true;
              }
          }
          map.put("leave", isLeave);
          result.get(cal.get(Calendar.MONTH)).add(map);
          cal.add(Calendar.DAY_OF_YEAR, 1);
      }
      return result;

  }
  
  @RequestMapping(method = RequestMethod.POST)
  public LeaveRequest addLeaveRequest(@RequestBody LeaveRequest leaveRequest) {
      leaveRequest.setId(null);
      //User user = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
      //leaveRequest.setEmployee(user);
      return repo.saveAndFlush(leaveRequest);
  }
  
  @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
  public LeaveRequest updateLeaveRequest(@RequestBody LeaveRequest updatedLeaveRequest, @PathVariable Integer id) {
    updatedLeaveRequest.setId(id);
      //User user = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
      //updatedLeaveRequest.setEmployee(user);
    return repo.saveAndFlush(updatedLeaveRequest);
  }
  
  @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
  public void deleteLeaveRequest(@PathVariable Integer id) {
    repo.delete(id);
  }
}