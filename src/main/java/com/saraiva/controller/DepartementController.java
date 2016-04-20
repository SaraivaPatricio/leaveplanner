package com.saraiva.controller;

import com.saraiva.model.Departement;
import com.saraiva.model.User;
import com.saraiva.repository.DepartementRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/departement")
public class DepartementController {
  @Autowired
  private DepartementRepository repo;

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public Departement findDepartement(@PathVariable Integer id) {
        return repo.findOne(id);
    }

  @RequestMapping(value = "/{id}/users", method = RequestMethod.GET)
  public List<User> findDepartementUsers(@PathVariable Integer id) {
    return repo.findOne(id).getUsers();
  }

  @RequestMapping(method = RequestMethod.GET)
  public List<Departement> findDepartements() {
    return repo.findAll();
  }
  
  @RequestMapping(method = RequestMethod.POST)
  public Departement addDepartement(@RequestBody Departement departement) {
      departement.setId(null);
      return repo.saveAndFlush(departement);
  }
  
  @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
  public Departement updateDepartement(@RequestBody Departement updatedDepartement, @PathVariable Integer id) {

    /*
    for (User user: updatedDepartement.getUsers()) {
      user.setDepartement(updatedDepartement);
    }
    //*/
    updatedDepartement.setId(id);
    return repo.saveAndFlush(updatedDepartement);
  }
  
  @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
  public void deleteDepartement(@PathVariable Integer id) {
    repo.delete(id);
  }
}
