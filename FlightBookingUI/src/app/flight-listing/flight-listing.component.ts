import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { Location } from '@angular/common'
import { BookingService } from '../services/booking.service';

@Component({
  selector: 'app-flight-listing',
  templateUrl: './flight-listing.component.html',
  styleUrls: ['./flight-listing.component.scss']
})
export class FlightListingComponent implements OnInit {

  origin: string;
  destination: string;
  travellers: number;
  flightDate : Date;
  displayedColumns: string[] = ['airline', 'origin', 'duration', 'fare'];

  dataSource =  [
    // {airline: 1, origin: 'Hydrogen', duration: 1.0079, fare: 'H'},
    // {airline: 1, origin: 'Hydrogen', duration: 1.0079, fare: 'H'},
    // {airline: 1, origin: 'Hydrogen', duration: 1.0079, fare: 'H'},
    // {airline: 1, origin: 'Hydrogen', duration: 1.0079, fare: 'H'},
    // {airline: 1, origin: 'Hydrogen', duration: 1.0079, fare: 'H'},
    // {airline: 1, origin: 'Hydrogen', duration: 1.0079, fare: 'H'},
  ];
  

  constructor(private router: Router, private route: ActivatedRoute,
    private location: Location, private bookingService: BookingService) { }

  ngOnInit(): void {
      let obj = this.bookingService.getSearcObject();
      if(obj.flightNumber){
        this.bookingService.searchFlightWithFlightNumber(obj.origin,obj.destination,obj.flightDate,obj.travellers,obj.flightNumber).subscribe((data)=>{
          this.dataSource.push(data);
          this.travellers = obj.travellers;
        });
      } else {
        this.bookingService.searchFlightOnGivenDate(obj.origin,obj.destination,obj.flightDate,obj.travellers).subscribe((data)=>{
          console.log(obj.origin,obj.destination,obj.flightDate,obj.travellers)
          this.travellers = obj.travellers;
          this.dataSource = data;
        });
      }    
  }

  book(flight): void{
    console.log(flight);
    
    const booking = {
      travellers : this.travellers,
      origin : flight.origin,
      flightTime: flight.flightTime,
      duration : flight.duration,
      destination : flight.destination,
      fare: flight.fare,
      id: flight.id
    }
    const navigationExtras: NavigationExtras = {
      queryParams : booking
    }
    this.router.navigate(['/booking'],navigationExtras);
  }

  goBack(): void{
    this.location.back();
  }
}
