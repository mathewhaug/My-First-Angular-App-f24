import {Component, Input} from '@angular/core';
import {User} from "../Shared/Models/user";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-student-detail',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './student-detail.component.html',
  styleUrl: './student-detail.component.scss'
})
export class StudentDetailComponent {
  //Input marks the property as an input property that can receive data from a parent
  @Input() student?:User;
  /*
  @Input is known as a decorator in Angular. It is a special kind of declaration that can be attached to a
  class declaration, method, accessor, property, or parameter. Decorators use the form @expression,
 where expression must evaluate to a function that will be called at runtime with information about the
 decorated declaration.

 In particular, this let's Angular know that the variable student is an input property that can be passed
  from the parent component. This is how we can pass data from the parent component to the child component.

  The ? indicates it is optional, and the User keyword is our interface that we created in the Models folder.
   */

}
