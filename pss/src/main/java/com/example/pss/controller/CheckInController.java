package com.example.pss.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.pss.entity.CheckIn;
import com.example.pss.model.CheckInModel;
import com.example.pss.service.CheckInService;

@RestController
@RequestMapping("/api/pss/checkIn")
class CheckInController {
	
	@Autowired
	private CheckInService checkInService;
	
	@PostMapping
	private CheckIn checkIn(@RequestBody CheckInModel checkInModel) {
		return checkInService.checkIn(checkInModel);
	}
}
