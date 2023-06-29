import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { CustomerInfoComponent } from '../Steps/customer-info/customer-info.component';
import { ReservationComponent } from '../Steps/reservation/reservation.component';

const homeRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'customer-info',
    loadChildren: () => import('../Steps/customer-info/customer-info.module').then(m => m.CustomerInfoModule)
  },
  {
    path: 'reservation',
    loadChildren: () => import('../Steps/reservation/reservation.module').then(m => m.ReservationModule)
  },
  {
    path: 'booking-confirmation',
    loadChildren: () => import('../Steps/booking-confirmation/booking-confirmation.module').then(m => m.BookingConfirmationModule)
  },
  { path: '**', redirectTo: '' }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(homeRoutes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
