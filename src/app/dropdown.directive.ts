import { Directive , HostBinding , HostListener } from '@angular/core';

@Directive({
  selector: '[rbDropdown]'
})
export class DropdownDirective {
  //opened can be named anything
  @HostBinding('class.open') get opened() {
    return this.isOpen;
  }
  @HostListener('mouseover') open() {
    this.isOpen = true;
  }
  @HostListener('mouseleave') close(){
    this.isOpen = false;
  }
  private isOpen = false;
}
