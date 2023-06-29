import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerInfoRoutingModule } from './customer-info-routing.module';
import { SharedModule } from 'src/app/modules/shared.module';
import { CustomerInfoComponent } from './customer-info.component';



@NgModule({
  declarations: [CustomerInfoComponent],
  imports: [
    CommonModule,
    SharedModule,
    CustomerInfoRoutingModule
  ]
})
export class CustomerInfoModule { }
