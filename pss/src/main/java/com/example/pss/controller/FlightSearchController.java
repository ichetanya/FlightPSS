package com.example.pss.controller;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.format.annotation.DateTimeFormat.ISO;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.pss.entity.Flight;
import com.example.pss.service.FlightSearchService;

@RestController
@CrossOrigin
@RequestMapping("/api/pss/search")
public class FlightSearchController {
	
	@Autowired 
	private FlightSearchService searchService;
	
	@GetMapping("/{origin}/{destination}/{flightDate}")
	public List<Flight> byOriginDestinationDate(@PathVariable String origin,@PathVariable String destination,
			@PathVariable @DateTimeFormat(iso = ISO.DATE) LocalDate flightDate){
		return searchService.listFlightsByOriginDestinationAndDate(origin, destination, flightDate);
	}
	
	@GetMapping("/flight/{flightNumber}/{origin}/{destination}/{flightDate}/{travellers}")
	public Flight byFlightNumberOriginDestinationDate(@PathVariable String flightNumber, @PathVariable String origin,
			@PathVariable String destination,@PathVariable @DateTimeFormat(iso = ISO.DATE) LocalDate flightDate,
			@PathVariable int travellers){
		return searchService.findFlightByFlightNumberOriginDestinationAndDate(flightNumber,origin, destination, flightDate,travellers);
	}

	@GetMapping("/{origin}/{destination}/{flightDate}/{travellers}")
	public List<Flight> byOriginDestinationDateTravellers(@PathVariable String origin,@PathVariable String destination,
			@PathVariable @DateTimeFormat(iso = ISO.DATE) LocalDate flightDate,@PathVariable int travellers){
		return searchService.listFlightsByOriginDestinationDateAndTravellers(origin, destination, flightDate,travellers);
	}
}
