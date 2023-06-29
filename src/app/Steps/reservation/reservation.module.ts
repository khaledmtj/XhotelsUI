import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationRoutingModule } from './reservation-routing.module';
import { SharedModule } from 'src/app/modules/shared.module';
import { ReservationComponent } from './reservation.component';



@NgModule({
  declarations: [ReservationComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReservationRoutingModule
  ]
})
export class ReservationModule { }
