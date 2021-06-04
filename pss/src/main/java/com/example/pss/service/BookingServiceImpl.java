package com.example.pss.service;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.pss.dao.BookingRepository;
import com.example.pss.dao.CoPassengerRepository;
import com.example.pss.dao.FlightRepository;
import com.example.pss.dao.InventoryRepository;
import com.example.pss.entity.BookingRecord;
import com.example.pss.entity.CoPassenger;
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
	
	@Autowired
	private CoPassengerRepository copassengerdao;
	

	@Override
	public BookingRecord bookFlight(int id,int travellers, Passenger passenger) {
	 Flight flight = flightdao.findById(id).orElse(null);
	 Fare fare = flight.getFare();
	 
	 if(flight.getInventory().getCount() < travellers) {
		 System.out.print("seats not available");
	 }else {
		 BookingRecord bookingRecord = new BookingRecord(flight.getOrigin(),flight.getDestination(),
				 LocalDateTime.now(),  fare.getFare(), flight.getFlightDate(), flight.getFlightTime(),
				 "CONFIRMED",flight.getFlightNumber(),flight.getFlightInfo(),passenger,travellers);
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

	@Override
	public BookingRecord getBookingRecord(int id) {
		// TODO Auto-generated method stub
		return bookingdao.findByBookingId(id);
	}

	@Override
	public void deleteBooking(int id) {
		BookingRecord bookingRecord = bookingdao.findByBookingId(id);
		if(bookingRecord.getStatus().equals("CHECKED IN")) {
			System.out.print("Cannot delete as the user is checked in");
		}else {
			Inventory inventory = flightdao.findByFlightInfo_flightInfoid(bookingRecord.getFlightInfo().getFlightInfoid())
					.getInventory();
			inventory.setCount(inventory.getCount() + bookingRecord.getTravellers());
			inventorydao.save(inventory);
			bookingdao.delete(bookingRecord);
		}
	}

	@Override
	public BookingRecord deleteCopassenger(int id, List<CoPassenger> coPassengers) {
		BookingRecord booking = bookingdao.findByBookingId(id);
		Flight flight = flightdao.findByFlightInfo_flightInfoid(booking.getFlightInfo().getFlightInfoid());
		for(CoPassenger cp : coPassengers) {
//			CoPassenger entity = copassengerdao.findByCopassengerId(cp.getCopassengerId());
			copassengerdao.deleteByCopassengerId(cp.getCopassengerId());
			
		}
		Inventory inventory = flight.getInventory();
		inventory.setCount(inventory.getCount() + coPassengers.size());
		inventorydao.save(inventory);
		booking.setTravellers(booking.getTravellers() - coPassengers.size());
		bookingdao.save(booking);
		return booking;
	}

	@Override
	public BookingRecord getBooking(int id) {
		// TODO Auto-generated method stub
		BookingRecord br = bookingdao.findById(id).orElse(null);
		return br;
	}

}
