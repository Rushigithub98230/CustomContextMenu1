import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAppHighlight]'
})
export class AppHighlightDirective {
  @Input() index!: number;
  colors = ['lightgray', 'lightblue', 'lightgreen', 'lightyellow',  'lightcyan', 'lightpink', 'lightgoldenrodyellow', 'lightseagreen', 'lightsteelblue'];
  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') OnMouseEnter() {
    //this.highLight('#e7f3ff');
    this.highLight(this.colors[this.index % this.colors.length]);
  }

  @HostListener('mouseleave') OnMouseLeave() {
    this.highLight('transparent');
  }

  private highLight(color: string) {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', color);
  }
}
