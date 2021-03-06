package com.saraiva.service;

import java.util.List;
import com.saraiva.model.User;
import com.saraiva.repository.UserRepository;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class UserService {
	private UserRepository userRepository;

	@Autowired
	public UserService(UserRepository userRepository) {
		super();
		this.userRepository = userRepository;
	}

	public User findUserByUsername(String username) {
		return userRepository.findByUsername(username);
	}

	public User login(String username, String password) {
		return userRepository.findByUsernameAndPassword(username, password);
	}

	public void add(User user) {
		userRepository.save(user);
	}

	public List<User> findAll() {
		return userRepository.findAll();
	}

	public boolean delete(User user) {
		if (userRepository.findById(user.getId()) != null) {
			userRepository.delete(user);
			return true;
		} else {
			return false;
		}
	}

	public User findById(int id) {
		return userRepository.findById(id);
	}
}
