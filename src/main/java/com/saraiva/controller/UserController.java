package com.saraiva.controller;

import com.saraiva.model.Item;
import com.saraiva.model.User;
import com.saraiva.repository.ItemRepository;
import com.saraiva.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/user")
public class UserController {
  @Autowired
  private UserRepository repo;

  @RequestMapping(value = "/{id}", method = RequestMethod.GET)
  public User findUser(@PathVariable Long id) {
    return repo.findOne(id);
  }

  @RequestMapping(method = RequestMethod.GET)
  public List<User> findUsers() {
    return repo.findAll();
  }

  @RequestMapping(method = RequestMethod.POST)
  public User addUser(@RequestBody User user) {
    user.setId(null);
    return repo.saveAndFlush(user);
  }

  @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
  public User updateUser(@RequestBody User updatedUser, @PathVariable Long id) {
    updatedUser.setId(id);
    return repo.saveAndFlush(updatedUser);
  }

  @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
  public void deleteUser(@PathVariable Long id) {
    repo.delete(id);
  }



}
