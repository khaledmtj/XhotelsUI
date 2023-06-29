import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingConfirmationRoutingModule } from './booking-confirmation-routing.module';
import { BookingConfirmationComponent } from './booking-confirmation.component';
import { SharedModule } from 'src/app/modules/shared.module';



@NgModule({
  declarations: [BookingConfirmationComponent],
  imports: [
    CommonModule,
    SharedModule,
    BookingConfirmationRoutingModule
  ]
})
export class BookingConfirmationModule { }
