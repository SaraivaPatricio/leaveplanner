package com.saraiva.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.saraiva.model.Item;

public interface ItemRepository extends JpaRepository<Item, Integer> {

}
