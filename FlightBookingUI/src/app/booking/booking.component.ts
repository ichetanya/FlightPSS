import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { BookingService } from '../services/booking.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  bookingForm: FormGroup;
  coPassengers: FormArray;
  travellers : number;
  flightId: number;

  constructor(private router: Router,private route: ActivatedRoute,
    private location: Location,
    private formBuilder: FormBuilder,
    private bookingService: BookingService
    ) { }

  origin: string;
  destination: string;
  flightDate: Date;
  flightTime: any;
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.origin = params["origin"];
      this.destination = params["destination"];
      this.flightDate = params["flightDate"];
      this.flightTime = params["flightTime"];
      this.travellers = params["travellers"];
      this.flightId = params["id"];
  });
  this.bookingForm = this.formBuilder.group({
    firstName : ['',Validators.required],
    lastName: ['',Validators.required],
    gender:['',Validators.required],
    emailAddress:[null,Validators.required],
    mobileNumber:[null,Validators.required],
    coPassengers: this.formBuilder.array([])
    });
    if(this.travellers > 1){
      this.addCopassengersForm();
    }
   
  }

  addCopassengersForm(){
    let arr = this.bookingForm.controls['coPassengers']  as FormArray;
    let i = 1;
    while(i < this.travellers){
       arr.push(this.createCopassengerForm());
       i++;
    }
  }

  createCopassengerForm(): FormGroup {
    return this.formBuilder.group({
      firstName:  ['',Validators.required],
      lastName:  ['',Validators.required],
      gender:  ['',Validators.required]
    });
  }

  goBack(): void{
    this.location.back();
  }

  book(){
  let coPassengers = this.bookingForm.controls['coPassengers'].value;
  const obj =  {
      'firstName' : this.bookingForm.controls['firstName'].value,
      'lastName' : this.bookingForm.controls['lastName'].value,
      'gender' : this.bookingForm.controls['gender'].value,
      'emailAddress' : this.bookingForm.controls['emailAddress'].value,
      'mobileNumber' : this.bookingForm.controls['mobileNumber'].value,
      'coPassengers' : coPassengers
    }    
   this.bookingService.bookFlight(this.flightId,this.travellers,obj).subscribe(data => {
     this.bookingService.setBookingRecord(data);
     this.router.navigate(['/booking-details']);
   })
  }
  
}
