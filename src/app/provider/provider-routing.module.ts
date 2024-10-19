import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { DoctorAppointmentComponent } from './doctor-appointment/doctor-appointment.component';



const routes: Routes = [
  { path: 'doctor-appointment', component: DoctorAppointmentComponent } // Define route for the doctor-appointment component
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})


export class ProviderRoutingModule { }
