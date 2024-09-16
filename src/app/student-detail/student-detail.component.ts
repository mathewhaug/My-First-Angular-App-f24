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
  //Input marks the property as an input property, that can receive data
  //from a parent

  //? says the property is optional, and allows for the state when
  //this property is null on startup
  @Input() student?: User;

}
