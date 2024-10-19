import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { ContextMenuComponent } from './context-menu/context-menu.component';



@NgModule({
  declarations: [
    ContextMenuComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports:[
    ContextMenuComponent
  ]
})
export class SharedModule { }
