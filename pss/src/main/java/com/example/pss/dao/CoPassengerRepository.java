package com.example.pss.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.transaction.annotation.Transactional;

import com.example.pss.entity.CoPassenger;

@Transactional
public interface CoPassengerRepository extends JpaRepository<CoPassenger,Integer>{

	@Modifying
	public void deleteByCopassengerId(int copassengerId);
	
	public CoPassenger findByCopassengerId(int copassengerId);

}
