import { Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';


interface ContextMenuItem {
  key: string;
  label: string;
}

@Component({
  selector: 'app-context-menu',
  templateUrl: './context-menu.component.html',
  styleUrls: ['./context-menu.component.css']
})
export class ContextMenuComponent {

  @Input() menuItems: ContextMenuItem[] = [];
  @Input() appointment: any;
  @Input() position: { x: number, y: number } | null = null;
  @Output() menuItemSelected = new EventEmitter<{ key: string, contextData: any }>();

  constructor(private elementRef: ElementRef) {}

  @HostListener('document:click', ['$event'])
  clickOutside(event: Event) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.close();
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.close();
  }

  close() {
    this.position = null;
  }

  isVisible(): boolean {
    return this.position !== null;
  }

  selectItem(key: string) {
    this.menuItemSelected.emit({ key, contextData: this.appointment });
    this.close();
  }

}
