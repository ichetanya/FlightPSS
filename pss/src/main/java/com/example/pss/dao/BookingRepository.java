package com.example.pss.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.pss.entity.BookingRecord;

public interface BookingRepository extends JpaRepository<BookingRecord,Integer>{

	BookingRecord findByBookingId(int id);
	
}
