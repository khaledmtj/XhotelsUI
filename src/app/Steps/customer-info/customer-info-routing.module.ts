import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CustomerInfoComponent } from './customer-info.component';

const routes: Routes = [
  {
    path: '',
    component: CustomerInfoComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class CustomerInfoRoutingModule { }
