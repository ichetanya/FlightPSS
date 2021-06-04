package com.example.pss.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.pss.entity.CheckIn;
import com.example.pss.service.CheckInService;

@RestController
@CrossOrigin
@RequestMapping("/api/pss/checkin")
class CheckInController {
	
	@Autowired
	private CheckInService checkInService;
	
	@PutMapping("/{id}")
	private ResponseEntity<Object> checkIn(@PathVariable int id) {
		return checkInService.checkIn(id);
	}
}
