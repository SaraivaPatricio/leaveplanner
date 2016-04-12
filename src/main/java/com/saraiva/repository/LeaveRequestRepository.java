package com.saraiva.repository;

import com.saraiva.model.LeaveRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface LeaveRequestRepository extends JpaRepository<LeaveRequest, Integer> {

    @Query("select l from LeaveRequest l JOIN l.employee u where u.id = ?1")
    List<LeaveRequest> findByUserId(Integer id);

}
