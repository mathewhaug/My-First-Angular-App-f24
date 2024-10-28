import { Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appTextColor]',
  standalone: true,
})
//ngOnChanges Lifecycle Hoo will detect changes in the appTextColor input and applies the appropriate styling
export class TextColorDirective implements OnChanges {
  //Take in the grade as an input
  @Input() appTextColor: number | null = null;
//Renderer2: Used to safely apply styles to the element, especially in scenarios where direct DOM manipulation might not be that safe
  constructor(private el: ElementRef, private renderer: Renderer2) {}
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['appTextColor'] && this.appTextColor !== null) {
      this.applyTextColor(this.appTextColor);
    }
  }
  private applyTextColor(mark: number): void {
    let color = '';
    let fontWeight = 'normal';
    if (mark < 50) {
      color = 'darkred';
      fontWeight = 'bold';
    } else if (mark >= 50 && mark <= 59) {
      color = 'lightcoral';
    } else if (mark >= 60 && mark <= 69) {
      color = 'darkorange';
    } else if (mark >= 70) {
      color = 'green';
    }
    this.renderer.setStyle(this.el.nativeElement, 'color', color);
    this.renderer.setStyle(this.el.nativeElement, 'fontWeight', fontWeight);
  }
}
