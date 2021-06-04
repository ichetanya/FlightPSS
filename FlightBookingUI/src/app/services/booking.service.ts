import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  url: string = 'http://localhost:8080/api/pss'; 
  searchObject : any;
  bookingRecord : any;

  constructor(private http: HttpClient) { }

  public findAllFlights(): Observable<any>{
    return this.http.get(this.url);
  }

  public searchFlightOnGivenDate(origin , destination, flighDate, noOfPassengers): Observable<any>{
    let url = `${this.url}/search/${origin}/${destination}/${flighDate}/${noOfPassengers}`;
    return this.http.get(url);
  }

  public searchFlightWithFlightNumber(origin , destination, flighDate, noOfPassengers,flightNumber): Observable<any>{
    let url = `${this.url}/search/flight/${flightNumber}/${origin}/${destination}/${flighDate}/${noOfPassengers}`;
    return this.http.get(url);
  }


  public bookFlight(flightId, noOfTravellers, bookingModel): Observable<any>{
    let url = `${this.url}/booking/${flightId}/${noOfTravellers}`;
    return this.http.post(url,bookingModel);
  }

  public getBookingData(id):Observable<any>{
    let url = `${this.url}/booking/${id}`;
    return this.http.get(url);
  }

  deleteBooking(bookingId){
    let url = `${this.url}/booking/${bookingId}`;
    return this.http.delete(url);
  }

  public checkIn(bookingId): Observable<any>{
    let url = `${this.url}/checkin/${bookingId}`;
    return this.http.put(url,null);
  }

 
  setSearchObject(obj){
    this.searchObject = obj;
  }

  getSearcObject(){
    return this.searchObject;
  }

  setBookingRecord(obj){
    this.bookingRecord = obj;
  }

  getBookingRecord(){
    return this.bookingRecord;
  }
}