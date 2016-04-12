package com.saraiva.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.util.Date;


@Entity
public class LeaveRequest {
  @Id
  @GeneratedValue(strategy=GenerationType.IDENTITY)
  private Integer id;

  @Column
  private Date beginDate;

    @Column
    private Date endDate;

    @Column
    private String comment;

    @ManyToOne(fetch=FetchType.LAZY)
    @JoinColumn(name="employee_id", updatable=false, insertable=false)
    @JsonBackReference
    private User employee;

  @Column(name="employee_id", updatable=true, insertable=true)
  private Integer employee_id;

  public Integer getId() {
    return id;
  }

  public void setId(Integer id) {
    this.id = id;
  }

  public Date getBeginDate() {
    return beginDate;
  }

  public void setBeginDate(Date beginDate) {
    this.beginDate = beginDate;
  }

  public Date getEndDate() {
    return endDate;
  }

  public void setEndDate(Date endDate) {
    this.endDate = endDate;
  }

  public String getComment() {
    return comment;
  }

  public void setComment(String comment) {
    this.comment = comment;
  }

    public User getEmployee() {
        return employee;
    }

    public void setEmployee(User employee) {
        this.employee = employee;
    }

  public Integer getEmployee_id() {
    return employee_id;
  }

  public void setEmployee_id(Integer employee_id) {
    this.employee_id = employee_id;
  }
}
