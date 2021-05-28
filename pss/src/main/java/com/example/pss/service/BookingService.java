package com.example.pss.service;

import com.example.pss.entity.BookingRecord;
import com.example.pss.entity.Passenger;

public interface BookingService {
	
	public BookingRecord bookFlight(int id,int travellers, Passenger passenger);
	
	public BookingRecord changeStatus(int id, String status);

}
