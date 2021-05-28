import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras} from '@angular/router';
import { FormControl, FormGroup, FormBuilder, Validators  } from '@angular/forms';

@Component({
  selector: 'app-search-flight',
  templateUrl: './search-flight.component.html',
  styleUrls: ['./search-flight.component.scss']
})
export class SearchFlightComponent implements OnInit {

  passengerCount: number = 1;
  passengersArr = [1,2,3,4,5,,6,7,8,9,10];
  searchFlightForm: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.searchFlightForm = this.formBuilder.group({
      origin : ['',Validators.required],
      destination: ['',Validators.required],
      flightDate:['',Validators.required]
    })
  }

  searchFlights(): void{
    const obj = {
      origin : this.searchFlightForm.value.origin,
      destination : this.searchFlightForm.value.destination,
      flightDate : this.searchFlightForm.value.flightDate
    };
    const navigationExtras: NavigationExtras = {
      queryParams : obj
    };
    this.router.navigate(['/flights'],navigationExtras);
  }
}
