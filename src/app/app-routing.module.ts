import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'shared', loadChildren: () => import('./shared/shared.module').then(m => m.SharedModule) },
  { path: 'provider', loadChildren: () => import('./provider/provider.module').then(m => m.ProviderModule) }, 
  { path: '', redirectTo: '/provider/doctor-appointment', pathMatch: 'full' },  
  { path: '**', redirectTo: '/provider/doctor-appointment' }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
