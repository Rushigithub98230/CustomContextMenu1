import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { ContextMenuComponent } from './context-menu/context-menu.component';
import { AppHighlightDirective } from './app-highlight.directive';



@NgModule({
  declarations: [
    ContextMenuComponent,
    AppHighlightDirective
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports:[
    ContextMenuComponent,
    AppHighlightDirective
  ]
})
export class SharedModule { }
