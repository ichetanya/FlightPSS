package com.example.pss.service;

import java.time.LocalDateTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.pss.dao.CheckInRepository;
import com.example.pss.entity.BookingRecord;
import com.example.pss.entity.CheckIn;
import com.example.pss.model.CheckInModel;

@Service
public class CheckInServiceImpl implements CheckInService {
	
	@Autowired
	private BookingService bookingService;
	
	@Autowired
	private CheckInRepository checkindao;

	@Override
	public CheckIn checkIn(CheckInModel checkInModel) {
		BookingRecord br = bookingService.changeStatus(checkInModel.getBookingId(), "CHECKED IN");
		CheckIn checkIn = new CheckIn();
		checkIn.setSeatNumber("A5");
		checkIn.setCheckinTime(LocalDateTime.now());
		return checkIn;
	}

}
