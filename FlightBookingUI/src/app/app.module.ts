import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchFlightComponent } from './search-flight/search-flight.component';
import { FlightListingComponent } from './flight-listing/flight-listing.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { BookingService } from './services/booking.service';
import { BookingComponent } from './booking/booking.component';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { BookingDetailsComponent } from './booking-details/booking-details.component';
import { CheckinComponent } from './checkin/checkin.component';
import { BookingSearchComponent } from './booking-search/booking-search.component';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchFlightComponent,
    FlightListingComponent,
    BookingComponent,
    BookingDetailsComponent,
    CheckinComponent,
    BookingSearchComponent,
    ConfirmationDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    BookingService,
    HttpClient,
  ],
  bootstrap: [AppComponent],
  entryComponents: [ConfirmationDialogComponent]
})
export class AppModule { }
