import {Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges} from '@angular/core';

@Directive({
  selector: '[appTextColor]',
  standalone: true
})
export class TextColorDirective implements OnChanges{
  //I need to take in input to receive the grade to process
  @Input() appTextColor: number | null = null;
//render2 is used to safely apply styles incase render1 (default) is busy
  constructor(private el: ElementRef,
              private renderer: Renderer2) { }


  ngOnChanges(changes:SimpleChanges){
    if(changes['appTextColor'] && this.appTextColor !== null){
      this.applyTextColor(this.appTextColor);
    }
  }

  private applyTextColor(mark:number):void{
    let color = '';
    let fontWeight = 'normal';

    if(mark < 50){
      color='darkred'
      fontWeight='bold'
    }else if (mark >= 50 && mark <= 59){
      color='lightcoral'
    } else if(mark >= 60 && mark <= 70 ){
      color='darkorange'
    }else if(mark >= 70){
      color='green';
    }
    this.renderer.setStyle(this.el.nativeElement, 'color', color);
    this.renderer.setStyle(this.el.nativeElement, 'fontWeight', fontWeight);
  }
}
