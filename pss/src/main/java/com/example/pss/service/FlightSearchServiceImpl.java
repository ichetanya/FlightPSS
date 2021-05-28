package com.example.pss.service;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.format.annotation.DateTimeFormat.ISO;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import com.example.pss.entity.Flight;
import com.example.pss.dao.FlightRepository;


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
			String destination, LocalDate flightDate) {
		return  flightDao.findByFlightNumberAndOriginAndDestinationAndFlightDate(flightNumber, origin, destination, flightDate);
	}

}
