package com.saraiva.model;

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
}
