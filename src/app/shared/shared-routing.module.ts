import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { ContextMenuComponent } from './context-menu/context-menu.component';


const routes: Routes = [
  { path: 'context-menu', component: ContextMenuComponent } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})


export class SharedRoutingModule { }
