package com.example.pss.service;

import java.time.LocalDate;
import java.util.List;

import com.example.pss.entity.Flight;

public interface FlightSearchService {
	
	List<Flight> listFlightsByOriginDestinationAndDate(String origin, String destination, LocalDate flightDate);
	
	Flight findFlightByFlightNumberOriginDestinationAndDate(String FlightNumber,String origin, String destination, LocalDate flightDate);
	
	
}
