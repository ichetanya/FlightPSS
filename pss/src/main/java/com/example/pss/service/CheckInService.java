package com.example.pss.service;

import org.springframework.http.ResponseEntity;

import com.example.pss.entity.BookingRecord;
import com.example.pss.entity.CheckIn;
import com.example.pss.model.CheckInModel;

public interface CheckInService {

	public BookingRecord getBookingStatus(int id);
	
	public ResponseEntity<Object> checkIn(int bookingId);
}
