package com.example.pss.service;

import java.time.LocalDateTime;
import java.util.Collections;
import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.pss.dao.BookingRepository;
import com.example.pss.dao.CheckInRepository;
import com.example.pss.entity.BookingRecord;
import com.example.pss.entity.CheckIn;

@Service
public class CheckInServiceImpl implements CheckInService {
	
	@Autowired
	private BookingService bookingService;
	
	@Autowired
	private CheckInRepository checkindao;
	
	@Autowired
	private BookingRepository bookingdao;
	

	@Override
	public ResponseEntity<Object> checkIn(int bookingId) {
		if(checkindao.existsBybookingRecord_bookingId(bookingId)) {
//			return new ResponseEntity<Object>("ALREADY CHECKED IN",HttpStatus.OK);
			CheckIn checkin = checkindao.findBybookingRecord_bookingId(bookingId);
			HashMap<Object, Object> map = new HashMap<>();
	        map.put("message", "ALREADY CHECKED IN");
	        map.put("data", checkin);
			 return ResponseEntity.status(HttpStatus.CREATED).body(map);
		}
		BookingRecord br = bookingdao.findByBookingId(bookingId);
		if(br == null) {
			return  ResponseEntity.status(HttpStatus.CREATED).body(
		            Collections.singletonMap("message","NO BOOKING EXIST"));
		}
		br.setStatus("CHECKED IN");
		CheckIn checkIn = new CheckIn();
		checkIn.setSeatNumber("A5");
		checkIn.setCheckinTime(LocalDateTime.now());
		checkIn.setBookingRecord(br);
		checkindao.save(checkIn);
		return new ResponseEntity<Object>(checkIn,HttpStatus.OK);
	}

	@Override
	public BookingRecord getBookingStatus(int id) {
		return bookingService.getBookingRecord(id);
	}

}
