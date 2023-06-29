import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-booking-confirmation',
  templateUrl: './booking-confirmation.component.html',
  styleUrls: ['./booking-confirmation.component.sass']
})
export class BookingConfirmationComponent implements OnInit {
  reservationInformation: any;
  defaultInfoForTest: any = {
    "reservationDate": "2023-07-07T21:00:00Z",
    "numberOfNights": 3,
    "totalPrice": 241.50,
    "room": {
        "id": 2,
        "number": 102,
        "roomTypeId": 2,
        "pricePerNight": 80.50,
        "floor": 1,
        "numberOfBeds": 2,
        "roomType": null
    },
    "customer": null
  };

  constructor(
    public router: Router,
    private reservationService: ReservationService
  ) {}

  ngOnInit() {
    this.reservationInformation = this.reservationService.getFinalReservation() ?? this.defaultInfoForTest;
  }

  onNext() {
    this.router.navigate(['/home'])
  }
}
