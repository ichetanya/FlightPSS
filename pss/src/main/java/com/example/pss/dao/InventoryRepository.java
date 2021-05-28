package com.example.pss.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.pss.entity.Inventory;

public interface InventoryRepository extends JpaRepository<Inventory,Integer> {

}
