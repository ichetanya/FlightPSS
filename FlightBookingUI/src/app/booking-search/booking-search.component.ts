import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookingService } from '../services/booking.service';

@Component({
  selector: 'app-booking-search',
  templateUrl: './booking-search.component.html',
  styleUrls: ['./booking-search.component.scss']
})
export class BookingSearchComponent implements OnInit {

  bookingIdForm: FormGroup;
  noBooking: boolean;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private bookingService: BookingService
  ) { }

  ngOnInit(): void {
    this.bookingIdForm = this.formBuilder.group({
      bookingId : [null,Validators.required]
    });
  }

  search(){
  const id = this.bookingIdForm.controls['bookingId'].value;
  this.bookingService.getBookingData(id).subscribe(data => {
    let bookingDetails = data;
    this.bookingService.setBookingRecord(bookingDetails);
    if(!data){
      this.noBooking = true;
    }else{
      this.router.navigate(['/booking-details',id]);
    }
  }); 
  }

}
