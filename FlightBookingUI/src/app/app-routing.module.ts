import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchFlightComponent } from './search-flight/search-flight.component';
import { FlightListingComponent } from './flight-listing/flight-listing.component';
import { BookingComponent } from './booking/booking.component';

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

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
