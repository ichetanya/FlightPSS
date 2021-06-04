import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FlightBookingUI';

  constructor(private router: Router) { }

  goToSearchScreen(){
    this.router.navigate(['/searchFlight']);
  }

  goToBookingDetails(){
    this.router.navigate(['/searchBooking']);
  }

  goToCheckin(){
    this.router.navigate(['/checkin']);
  }
}
