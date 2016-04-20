package com.saraiva.model;

import com.fasterxml.jackson.annotation.*;

import javax.persistence.*;
import java.util.List;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.CascadeType;

@Entity
@Table(name = "USER")
@JsonIdentityInfo(generator = ObjectIdGenerators.None.class, property = "id", scope = User.class)
public class User {

	private Integer id;
	private String username;
	private String password;
	private String email;
	private boolean enabled;
	private boolean accountNonLocked;
	private boolean credentialsNonExpired;
	private boolean accountNonExpired;


    private Departement departement;

	private List<LeaveRequest> leaveRequests;

	public User() {
		super();
	}

	public User(Integer id, String username, String password, String email) {
		super();
		this.id = id;
		this.username = username;
		this.password = password;
		this.email = email;
	}

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column
	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	@Column(name = "USERNAME")
	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	@Column(name = "PASSWORD")
	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Column(name = "EMAIL")
	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	@Column(name = "ENABLED", nullable = false, columnDefinition = "boolean default false")
	public boolean isEnabled() {
		return enabled;
	}

	public void setEnabled(boolean enabled) {
		this.enabled = enabled;
	}

	@Column(name = "NON_LOCKED", nullable = false, columnDefinition = "boolean default false")
	public boolean isAccountNonLocked() {
		return accountNonLocked;
	}

	public void setAccountNonLocked(boolean accountNonLocked) {
		this.accountNonLocked = accountNonLocked;
	}

	@Column(name = "CREDENTIALS_EXPIRED", nullable = false, columnDefinition = "boolean default false")
	public boolean isCredentialsNonExpired() {
		return credentialsNonExpired;
	}

	public void setCredentialsNonExpired(boolean credentialsNonExpired) {
		this.credentialsNonExpired = credentialsNonExpired;
	}

	@Column(name = "ACCOUNT_EXPIRED", nullable = false, columnDefinition = "boolean default false")
	public boolean isAccountNonExpired() {
		return accountNonExpired;
	}

	public void setAccountNonExpired(boolean accountNonExpired) {
		this.accountNonExpired = accountNonExpired;
	}

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "departement_id")
	public Departement getDepartement() {
		return departement;
	}

	public void setDepartement(Departement departement) {
		this.departement = departement;
	}

	@OneToMany(mappedBy="employee")
	@JsonManagedReference
	public List<LeaveRequest> getLeaveRequests() {
		return leaveRequests;
	}

	public void setLeaveRequests(List<LeaveRequest> leaveRequests) {
		this.leaveRequests = leaveRequests;
	}
}
