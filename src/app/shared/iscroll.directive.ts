import { Directive, ElementRef, AfterViewInit, AfterViewChecked } from '@angular/core';
import * as IScroll from 'iscroll';

@Directive({
  selector: '[iscroll]'
})
export class Iscroll {
  iscroll: IScroll;
  
  constructor(
    private elementRef: ElementRef
  ) {}

  ngAfterViewInit() {
    let iscrollOptions: any = {
      mouseWheel: true,
      scrollbars: true,
      interactiveScrollbars: true
    };
    this.iscroll = new IScroll(this.elementRef.nativeElement, iscrollOptions);
    // console.log(this.iscroll);
  }
  
  ngAfterViewChecked() {
    if(this.elementRef.nativeElement.children[0].offsetHeight) {
      this.iscroll.refresh();
    }
    // console.log(this.elementRef.nativeElement.children[0].offsetHeight )
  }
}