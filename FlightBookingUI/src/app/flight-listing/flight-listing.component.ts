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
  noOfPassengers: number;
  flightDate : Date;
  displayedColumns: string[] = ['airline', 'origin', 'duration', 'fare'];

  dataSource =  [
    {airline: 1, origin: 'Hydrogen', duration: 1.0079, fare: 'H'},
    {airline: 1, origin: 'Hydrogen', duration: 1.0079, fare: 'H'},
    {airline: 1, origin: 'Hydrogen', duration: 1.0079, fare: 'H'},
    {airline: 1, origin: 'Hydrogen', duration: 1.0079, fare: 'H'},
    {airline: 1, origin: 'Hydrogen', duration: 1.0079, fare: 'H'},
    {airline: 1, origin: 'Hydrogen', duration: 1.0079, fare: 'H'},
  ];
  

  constructor(private router: Router, private route: ActivatedRoute,
    private location: Location, private bookingService: BookingService) { }

  ngOnInit(): void {
      this.route.queryParams.subscribe(params => {
          this.origin = params["origin"];
          this.destination = params["destination"];
          // this.noOfPassengers = params["noOfPassengers"];
          this.flightDate = params["flightDate"];
      });
      this.bookingService.searchFlightOnGivenDate(this.origin,this.destination,2,this.flightDate).subscribe((data)=>{
        this.dataSource = data;
      })
  }

  book(): void{
    const booking = {
      noOfPassengers : 2,
      origin : 'Delhi',
      startTime: '',
      duration : '2 hours 59 Minutes',
      destination : 'Chennai',
      endTime: '',
      fare:'',
      passengerId:12
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
