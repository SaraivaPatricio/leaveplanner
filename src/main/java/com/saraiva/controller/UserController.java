package com.saraiva.controller;

import com.saraiva.model.Item;
import com.saraiva.model.User;
import com.saraiva.repository.ItemRepository;
import com.saraiva.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/employee")
public class UserController {
  @Autowired
  private UserRepository repo;
  
  @RequestMapping(method = RequestMethod.GET)
  public List<User> findUsers() {
    return repo.findAll();
  }

}
