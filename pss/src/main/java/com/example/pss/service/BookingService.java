package com.example.pss.service;

import java.util.List;

import com.example.pss.entity.BookingRecord;
import com.example.pss.entity.CoPassenger;
import com.example.pss.entity.Passenger;

public interface BookingService {
	
	public BookingRecord bookFlight(int id,int travellers, Passenger passenger);
	
	public BookingRecord changeStatus(int id, String status);
	
	public BookingRecord getBookingRecord(int id);
	
	public void deleteBooking(int id);
	
	public BookingRecord deleteCopassenger(int id,List<CoPassenger> coPassengers);
	
	public BookingRecord getBooking(int id);
}
