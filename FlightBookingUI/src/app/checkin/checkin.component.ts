import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookingService } from '../services/booking.service';

@Component({
  selector: 'app-checkin',
  templateUrl: './checkin.component.html',
  styleUrls: ['./checkin.component.scss']
})
export class CheckinComponent implements OnInit {

  checkinForm: FormGroup;
  isCheckedIn: boolean;
  checkinDetails: any;
  checkinHeading: string;
  isAlreadyCheckedIn: boolean;
  errorMessage: string;
  constructor(
    private formBuilder: FormBuilder,
    private bookingService: BookingService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.checkinHeading = 'Check In';
    this.checkinForm = this.formBuilder.group({
      bookingId : [this.route.snapshot.paramMap.get('id'),Validators.required]
    });
  }

  checkIn(){
    const bookingId = this.checkinForm.controls['bookingId'].value;
    this.bookingService.checkIn(bookingId).subscribe(data => {
     this.checkinHeading = 'Check-in Details';
     console.log(data);
     
     if(data.message == "ALREADY CHECKED IN"){
       this.isAlreadyCheckedIn = true
       this.checkinDetails = data.data;
       this.errorMessage = 'You have already checked-in !!';
     } else  if(data.message === "NO BOOKING EXIST"){
      this.isAlreadyCheckedIn = true
      this.checkinDetails = null;
      this.errorMessage = 'Invalid booking id !!';
    } else{
     this.checkinDetails = data;
     this.isCheckedIn = true;
     this.isAlreadyCheckedIn = false;
     }
     console.log(this.checkinDetails);
    })
  }
}
