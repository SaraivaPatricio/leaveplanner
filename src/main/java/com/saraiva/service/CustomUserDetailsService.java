package com.saraiva.service;

import com.saraiva.model.SecurityUser;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import com.saraiva.model.User;

@Service
public class CustomUserDetailsService implements UserDetailsService {

	private UserService userService;

	@Autowired
	public CustomUserDetailsService(UserService userService) {
		super();
		this.userService = userService;
	}
	
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		User user = userService.findUserByUsername(username);
		if (user == null) {
			throw new UsernameNotFoundException("UserName " + username + " not found");
		}

		return new SecurityUser(user);
	}
}
