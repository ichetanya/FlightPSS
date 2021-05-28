import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {

  constructor(private router: Router,private route: ActivatedRoute,
    private location: Location) { }

  origin: string;
  destination: string;
  flightDate: Date;
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.origin = params["origin"];
      this.destination = params["destination"];
      this.flightDate = params["flightDate"];
  });
  }

  goBack(): void{
    this.location.back();
  }
  
}
