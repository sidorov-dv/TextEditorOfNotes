import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appHightlight]'
})
export class HightlightDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  searchInput: string = this.elementRef.nativeElement.value;

  @HostListener('focus') onFocus() {
    this.setHightLightColor('blue');
  }

  @HostListener('blur') onBlur() {
    this.setHightLightColor('');
  }

  private setHightLightColor(color: string) {
    const regExpTag = /#\w{1,}/g;
    this.searchInput = this.elementRef.nativeElement.value;
    let matchArr = this.searchInput.match(regExpTag) || [];
    if (matchArr.length) {
      this.renderer.setStyle(this.elementRef.nativeElement, 'color', color);
    } else {
      this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'black');
    }
  }

}
