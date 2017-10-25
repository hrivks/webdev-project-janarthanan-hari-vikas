import { Directive, ElementRef } from '@angular/core';
import { HostListener } from '@angular/core';
declare var $;
@Directive({
  selector: '[appAutoHeight]'
})
export class AutoHeightDirective {

  constructor(private el: ElementRef) {
  }

  @HostListener('input', ['$event'])
  keyEvent(e: KeyboardEvent) {
    this.el.nativeElement.style.height = (this.el.nativeElement.scrollHeight) + 'px';
  }

}
