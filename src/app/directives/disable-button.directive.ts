import { Directive, Input, ElementRef, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';
@Directive({
  selector: '[appDisableButton]',
  standalone: true,
})
export class DisableButtonDirective implements OnInit {
  @Input() appDisableButton!: AbstractControl;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.updateButtonState();
    this.appDisableButton.valueChanges.subscribe(() => {
      this.updateButtonState();
    });
  }

  private updateButtonState(): void {
    const firstNameControl = this.appDisableButton.get('firstName');
    const lastNameControl = this.appDisableButton.get('lastName');
    const isDisabled = !firstNameControl?.value || !lastNameControl?.value;

    if (isDisabled) {
      this.el.nativeElement.disabled = true;
      this.el.nativeElement.classList.add('custom-disabled'); //Add custom class when disabled so we dont have to change existing styles
    } else {
      this.el.nativeElement.disabled = false;
      this.el.nativeElement.classList.remove('custom-disabled'); // Remove custom class when enabled
    }
  }
}
