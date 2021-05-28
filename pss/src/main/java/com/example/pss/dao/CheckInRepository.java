package com.example.pss.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.pss.entity.CheckIn;

public interface CheckInRepository extends JpaRepository<CheckIn, Integer> {

}
