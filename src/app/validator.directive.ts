import { Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appValidator]'
})
export class ValidatorDirective {

  constructor(public control:ElementRef) {
    console.log('value:',this.control.nativeElement.value);
  }
  @HostBinding('style.border-color') borderColor='black';

  @HostListener('keyup') onchange(){
    console.log('onchange');
    this.borderColor=this.control.nativeElement.value.length>3?'black':'red'
  }

}
