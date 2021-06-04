import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking-search',
  templateUrl: './booking-search.component.html',
  styleUrls: ['./booking-search.component.scss']
})
export class BookingSearchComponent implements OnInit {

  bookingIdForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.bookingIdForm = this.formBuilder.group({
      bookingId : [null,Validators.required]
    });
  }

  search(){
  const id = this.bookingIdForm.controls['bookingId'].value;
  console.log(id);
  this.router.navigate(['/booking-details',id]);
  }

}
