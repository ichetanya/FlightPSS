package com.example.pss.service;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.pss.dao.FlightRepository;
import com.example.pss.dao.InventoryRepository;
import com.example.pss.entity.Flight;


@Service
public class FlightSearchServiceImpl implements FlightSearchService {
	
	@Autowired
	private FlightRepository flightDao;
	
	@Override
	public List<Flight> listFlightsByOriginDestinationAndDate(String origin,  String destination,
			LocalDate flightDate){
		return  flightDao.findFlightByOriginAndDestinationAndFlightDate(origin, destination, flightDate);
	}
	
	@Override
	public Flight findFlightByFlightNumberOriginDestinationAndDate(String flightNumber,String origin,
			String destination, LocalDate flightDate, int travellers) {
		Flight flight = flightDao.findByFlightNumberAndOriginAndDestinationAndFlightDate(flightNumber, origin, destination, flightDate);
		if(flight.getInventory().getCount() >= travellers) {
			return flight;
		}
		else return null;		  
	}

	@Override
	public List<Flight> listFlightsByOriginDestinationDateAndTravellers(String origin, String destination,
			LocalDate flightDate, int travellers) {
		return  flightDao.findFlightByOriginAndDestinationAndFlightDate(origin, destination, flightDate).stream().filter(flight -> flight.getInventory().getCount() >= travellers)
				.collect(Collectors.toList());
	}

	@Override
	public Flight findByFlightInfo(int id) {
		return flightDao.findByFlightInfo_flightInfoid(id);
	}

}
