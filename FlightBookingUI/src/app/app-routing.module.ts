import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchFlightComponent } from './search-flight/search-flight.component';
import { FlightListingComponent } from './flight-listing/flight-listing.component';
import { BookingComponent } from './booking/booking.component';
import { BookingDetailsComponent } from './booking-details/booking-details.component';
import { CheckinComponent } from './checkin/checkin.component';
import { BookingSearchComponent } from './booking-search/booking-search.component';

const routes: Routes = [
  {
    path : '',
    pathMatch:'full',
    redirectTo:'searchFlight'
  },
  {
    path : 'searchFlight',
    component: SearchFlightComponent
  },
  {
    path : 'flights',
    component: FlightListingComponent
  },
  {
    path : 'booking',
    component: BookingComponent
  },
  {
    path : 'booking-details',
    component: BookingDetailsComponent
  },
  {
    path : 'booking-details/:id',
    component: BookingDetailsComponent
  },
  {
    path : 'checkin',
    component: CheckinComponent
  },
  {
    path : 'checkin/:id',
    component: CheckinComponent
  },
  {
    path : 'searchBooking',
    component: BookingSearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
