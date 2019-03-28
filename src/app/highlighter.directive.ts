import { Directive, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appHighlighter]'
})
export class HighlighterDirective {

  public backgroundColor: string;
  // public defaultColor:string ="white";
  // public highlightColor:string = "red";

  // @Input is used to apply the style runtime from html page
  @Input() defaultColor: string;
  @Input() highlightColor: string;

  constructor() {
    this.backgroundColor = this.defaultColor;
   }

   @HostListener('mouseenter') mouseover(){
    this.backgroundColor = this.highlightColor;
   }

   @HostListener('mouseleave') mouseleave(){
    this.backgroundColor = this.defaultColor;
   }

   @HostBinding('style.backgroundColor') get setColor(){
      return this.backgroundColor;
   }
}
