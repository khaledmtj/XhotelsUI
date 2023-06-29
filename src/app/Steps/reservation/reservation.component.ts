import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.sass']
})
export class ReservationComponent implements OnInit {
  formGroup: FormGroup;
  roomTypes: any;
  minDate: Date = new Date();

  constructor(
    public router: Router,
    private reservationService: ReservationService,
    private datePipe: DatePipe
  ) {
    this.formGroup = new FormGroup({
      roomTypeId: new FormControl(null, Validators.required),
      reservationDate: new FormControl(null ,Validators.required),
      numberOfNights: new FormControl(null, [Validators.required, Validators.min(1)])
    })
  }

  ngOnInit() {
    this.reservationService.getAllRoomTypes().subscribe( res => {
      this.roomTypes = res;
    })
  }

  onNext() {
    let reservationDetails = this.formGroup.getRawValue();
    reservationDetails.reservationDate = this.datePipe.transform(reservationDetails.reservationDate, 'yyyy-MM-dd') + 'T12:00:00Z';

    let addReservationObservable = this.reservationService.AddReservation(reservationDetails);
    if (addReservationObservable != null && addReservationObservable != undefined) {
      addReservationObservable.subscribe(val => {
        this.router.navigate(['/home/booking-confirmation'])
      });
    }
  }
}
