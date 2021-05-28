import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  url: string = 'http://localhost:8080/api/pss';

  constructor(private http: HttpClient) { }

  

  public findAllFlights(): Observable<any>{
    return this.http.get(this.url);
  }

  public searchFlightOnGivenDate(origin , destination, flighDate, noOfPassengers): Observable<any>{
    let url = this.url + '/' + origin + '/' + destination + '/' + flighDate + '/' + noOfPassengers;
    return this.http.get(url);
  }

}