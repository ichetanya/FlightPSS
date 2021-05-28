package com.example.pss.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.pss.entity.BookingRecord;
import com.example.pss.entity.Passenger;
import com.example.pss.service.BookingService;

@RestController
@RequestMapping("/api/pss/booking")
public class BookingController {

	@Autowired
	private BookingService bookingService;
	
	@PostMapping("/{id}/{travellers}")
	private BookingRecord bookFlight(@PathVariable int id,@PathVariable int travellers, @RequestBody Passenger passenger ) {
		return bookingService.bookFlight(id,travellers, passenger);
	}
}
