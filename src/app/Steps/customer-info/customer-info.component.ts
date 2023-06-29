import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.sass']
})
export class CustomerInfoComponent implements OnInit {
  formGroup: FormGroup;

  constructor(
    public router: Router,
    private reservationService: ReservationService,
    private datePipe: DatePipe
    ) {
    this.formGroup = new FormGroup({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      address: new FormControl(null, Validators.required),
      phoneNumber: new FormControl(null, [Validators.required, Validators.pattern(/^\+?[1-9]\d{1,14}$/)]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      dateOfBirth: new FormControl(null, Validators.required)
    });
  }

  ngOnInit() {
  }

  onNext(){
    let customerData = this.formGroup.getRawValue();
    customerData.dateOfBirth = this.datePipe.transform(customerData.dateOfBirth, 'yyyy-MM-dd') + 'T12:00:00Z';
    this.reservationService.addCustomerData(customerData).subscribe(
      res => {
        if (res != null && res > 0) {
          this.router.navigate(['/home/reservation'])
        } else {
          alert('Error Saving Customer Info');
        }
      }
    );
  }
}
