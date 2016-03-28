package com.saraiva.controller;

import com.saraiva.model.Item;
import com.saraiva.model.PublicHoliday;
import com.saraiva.repository.PublicHolidayRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/public-holiday")
public class PublicHolidayController {
  @Autowired
  private PublicHolidayRepository repo;
  
  @RequestMapping(method = RequestMethod.GET)
  public List<PublicHoliday> findPublicHolidays() {
    return repo.findAll();
  }
  
  @RequestMapping(method = RequestMethod.POST)
  public PublicHoliday addPublicHoliday(@RequestBody PublicHoliday publicHoliday) {
    publicHoliday.setId(null);
    return repo.saveAndFlush(publicHoliday);
  }
  
  @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
  public PublicHoliday updatePublicHoliday(@RequestBody PublicHoliday updatedPublicHoliday, @PathVariable Integer id) {
    updatedPublicHoliday.setId(id);
    return repo.saveAndFlush(updatedPublicHoliday);
  }
  
  @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
  public void deletePublicHoliday(@PathVariable Integer id) {
    repo.delete(id);
  }
}
