package com.saraiva.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.saraiva.model.User;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
	public User findByUsername(String username);
	public User findByUsernameAndPassword(String username, String password);
	public User findByEmail(String email);
	public User findById(int id);

	@Query("select u from User u LEFT JOIN u.departement d where d.id != ?1 or u.departement is null")
	public List<User> notInDepartement(int id);
}
