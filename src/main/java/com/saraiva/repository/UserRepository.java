package com.saraiva.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.saraiva.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
	public User findByUsername(String username);
	public User findByUsernameAndPassword(String username, String password);
	public User findByEmail(String email);
	public User findById(int id);
}
