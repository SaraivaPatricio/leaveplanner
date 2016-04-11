package com.saraiva.repository;

import com.saraiva.model.LeaveRequest;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LeaveRequestRepository extends JpaRepository<LeaveRequest, Integer> {

}
