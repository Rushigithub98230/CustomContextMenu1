import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProviderRoutingModule } from './provider-routing.module';
import { DoctorAppointmentComponent } from './doctor-appointment/doctor-appointment.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    DoctorAppointmentComponent
  ],
  imports: [
    CommonModule,
    ProviderRoutingModule,
    SharedModule
  ]
})
export class ProviderModule { }
