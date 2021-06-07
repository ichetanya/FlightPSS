import { Component, OnInit } from '@angular/core';
import { BookingService } from '../services/booking.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.scss']
})
export class BookingDetailsComponent implements OnInit {

  canEdit: boolean;
  canDelete: boolean;
  deletePassengers;
  selectedCopassengers: FormGroup;
  isCopassengerSelected: boolean;
  bookingDetails: any;
  constructor(
    private bookingService: BookingService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private matDialog: MatDialog
  ) { }

  ngOnInit(): void {
    // this.selectedCopassengers = this.formBuilder.group({
    //   id: this.formBuilder.array([])
    // });
    this.bookingDetails = this.bookingService.getBookingRecord();
    const id = this.route.snapshot.paramMap.get('id');
    if(id){
      this.canEdit = true;
      if(this.bookingDetails.status != "CHECKED IN"){
        this.canDelete = true;
      }
    } 

  }

  checkin(){
    this.router.navigate(['/checkin',this.bookingDetails.bookingId]);
  }

  deleteCopassengers(){
    console.log(this.deletePassengers);
    let arr = [];
    this.deletePassengers.forEach(id => {
      const obj = {
        "copassengerId" : id
      }
      arr.push(obj);
    });
    
  }

  // onChange(event) {
  //   const id = <FormArray>this.selectedCopassengers.get('id') as FormArray;
  //   if(event.checked) {
  //     id.push(new FormControl(event.source.value))
  //   } else {
  //     const i = id.controls.findIndex(x => x.value === event.source.value);
  //     id.removeAt(i);
  //   }
  //   this.deletePassengers = id.value;
  //   this.isCopassengerSelected = this.deletePassengers.length ? true : false;
  // }

  deleteBooking(){
      const dialogConfig = new MatDialogConfig();
      dialogConfig.data = {
        origin : this.bookingDetails.origin,
        destination: this.bookingDetails.destination,
        id : this.bookingDetails.bookingId
      }
      let dialogRef = this.matDialog.open(ConfirmationDialogComponent, dialogConfig);
      dialogRef.afterClosed().subscribe(value => {
        if(value) {
          this.bookingService.deleteBooking(this.bookingDetails.bookingId).subscribe(data => {
              this.router.navigate(['/searchFlight']);
            })
        }
      });
  }
}
