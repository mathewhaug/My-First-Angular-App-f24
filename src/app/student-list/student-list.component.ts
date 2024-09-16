import { Component } from '@angular/core';
import {User} from "../Shared/Models/user";
import {NgForOf} from "@angular/common";
import {StudentDetailComponent} from "../student-detail/student-detail.component";

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [
    NgForOf,
    StudentDetailComponent
  ],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.scss'
})
export class StudentListComponent {
  displayedColumns:string[]= ['id', 'firstName', 'lastName', 'department', 'isAdmin'];


  user1 : User = {id: 1, firstName: "Matt", lastName: "Haug", department: "Programming", isAdmin: false};
  user2 : User = {id: 2, firstName: "Darren", lastName: "Takakki", department: "Web Dev", isAdmin: true};
  //Can declare values either way
  userList: User[] = //any[] would have worked as well
    [this.user1,this.user2,
      {id: 3, firstName: "John", lastName: "Doe", department: "Programming", isAdmin: false},
      {id: 4, firstName: "Jane", lastName: "Doe", department: "Programming", isAdmin:true}
    ]

  //I need to catch my cick event
  selectedStudent?:User;

  selectStudent(student:User):void{
    this.selectedStudent=student
  }
}
