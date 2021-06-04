package com.example.pss.dao;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.pss.entity.Flight;

public interface FlightRepository extends JpaRepository<Flight, Integer>{

	List<Flight> findFlightByOriginAndDestinationAndFlightDate(String origin,String destination,LocalDate flightDate);
	
	Flight findByFlightNumberAndOriginAndDestinationAndFlightDate(String flightNumber,String origin,String destination,LocalDate flightDate);
	
	Flight findByFlightInfo_flightInfoid(int id);
}
