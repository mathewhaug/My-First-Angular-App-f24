import {Component, OnInit} from '@angular/core';
import { User} from "../Shared/Models/user";
import {NgForOf} from "@angular/common";
import {StudentDetailComponent} from "../student-detail/student-detail.component";
import {StudentService} from "../Services/student.service";
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
export class StudentListComponent implements OnInit {
  //Placeholder values for the table
  displayedColumns:string[]= ['id', 'firstName', 'lastName', 'department', 'isAdmin'];
  userList: User[] = [];

  constructor (private studentService: StudentService){
    //this constructor is primarily used for dependency injection
  }


  ngOnInit(){
    //This lifecycle hook is a good place to fetch and init our data
   this.studentService.getStudents().subscribe({
     next: (data: User[]) => this.userList = data,
     error:err => console.error("Error fetching Students", err),
     complete:() => console.log("Student data fetch complete!")
   })

  }
  selectedStudent?: User;
  selectStudent(student: User): void {
    this.selectedStudent = student;
  }

}
