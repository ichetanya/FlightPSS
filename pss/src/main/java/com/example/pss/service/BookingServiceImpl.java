package com.example.pss.service;

import java.time.LocalDateTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.pss.dao.BookingRepository;
import com.example.pss.dao.FlightRepository;
import com.example.pss.dao.InventoryRepository;
import com.example.pss.entity.BookingRecord;
import com.example.pss.entity.Fare;
import com.example.pss.entity.Flight;
import com.example.pss.entity.Inventory;
import com.example.pss.entity.Passenger;


@Service
public class BookingServiceImpl implements BookingService {
	
	@Autowired
	private BookingRepository bookingdao;
	
	@Autowired
	private FlightRepository flightdao;
	
	@Autowired
	private InventoryRepository inventorydao;
	

	@Override
	public BookingRecord bookFlight(int id,int travellers, Passenger passenger) {
	 Flight flight = flightdao.findById(id).orElse(null);
	 Fare fare = flight.getFare();
	 
	 if(flight.getInventory().getCount() < travellers) {
		 System.out.print("seats not available");
	 }else {
		 BookingRecord bookingRecord = new BookingRecord(flight.getOrigin(),flight.getDestination(),
				 LocalDateTime.now(),  fare.getFare(), flight.getFlightDate(), flight.getFlightTime(),
				 "CONFIRMED",flight.getFlightNumber(),flight.getFlightInfo(),passenger);
		 bookingdao.save(bookingRecord); 
		 Inventory inventory = flight.getInventory();
		 inventory.setCount(inventory.getCount() - travellers);
		 inventorydao.save(inventory);
		 return bookingRecord;
		 
	 }
		return null;
	
	}
	
	@Override
	public BookingRecord changeStatus(int id, String status) {
		BookingRecord bookingRecord = bookingdao.findByBookingId(id);
		bookingRecord.setStatus(status);
		return bookingRecord;
	}


}
