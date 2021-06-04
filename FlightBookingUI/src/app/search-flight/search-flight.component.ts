import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras} from '@angular/router';
import { FormControl, FormGroup, FormBuilder, Validators  } from '@angular/forms';
import { BookingService } from '../services/booking.service';
import * as moment from 'moment';
@Component({
  selector: 'app-search-flight',
  templateUrl: './search-flight.component.html',
  styleUrls: ['./search-flight.component.scss']
})
export class SearchFlightComponent implements OnInit {

  passengerCount: number = 1;
  numbers = [1,2,3,4,5,,6,7,8,9,10];
  searchFlightForm: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private bookingService: BookingService) { }

  ngOnInit(): void {
    this.searchFlightForm = this.formBuilder.group({
      origin : ['',Validators.required],
      destination: ['',Validators.required],
      flightDate:['',Validators.required],
      travellers:[1,Validators.required],
      flightNumber:['']
    });
  }

  // le,

  searchFlights(): void{
    const momentDate = new Date(this.searchFlightForm.value.flightDate); // Replace event.value with your date value
   const flightDate = moment(momentDate).format("YYYY-MM-DD");
    const obj = {
      origin : this.searchFlightForm.value.origin,
      destination : this.searchFlightForm.value.destination,
      flightDate : flightDate,
      travellers : this.searchFlightForm.value.travellers,
      flightNumber: this.searchFlightForm.value.flightNumber
    };
    // const navigationExtras: NavigationExtras = {
    //   queryParams : obj
    // };
    this.bookingService.setSearchObject(obj);
    this.router.navigate(['/flights']);
  }
}
