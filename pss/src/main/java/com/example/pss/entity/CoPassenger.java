package com.example.pss.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class CoPassenger {

	@Id
	@GeneratedValue
	private int copassengerId;
	private String firstName;
	private String lastName;
	private String gender;

	public int getCopassengerId() {
		return copassengerId;
	}

	public void setCopassengerId(int copassengerId) {
		this.copassengerId = copassengerId;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public CoPassenger(String firstName, String lastName, String gender) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.gender = gender;
	}

	public CoPassenger() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	

}
