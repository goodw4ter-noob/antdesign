import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appParallax]'
})
export class ParallaxDirective {

  @Input('ratio') parallaxRatio: number = 1
  initialTop: number = 0

  constructor(private eleRef: ElementRef) {

  }

  @HostListener("mousemove", ["$event"])
  onMousemove(e: MouseEvent) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;
    this.eleRef.nativeElement.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
  }

}
