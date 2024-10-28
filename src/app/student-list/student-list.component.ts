import {Component, OnInit} from '@angular/core';
import { User} from "../Shared/Models/user";
import {CurrencyPipe, NgForOf, NgIf, UpperCasePipe} from "@angular/common";
import {StudentDetailComponent} from "../student-detail/student-detail.component";
import {StudentService} from "../Services/student.service";
import {RouterLink} from "@angular/router";
import {FullNamePipe} from "../pipes/full-name.pipe";
import {HoverHighlightDirective} from "../directives/hover-highlight.directive";


@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [
    NgForOf,
    StudentDetailComponent,
    RouterLink,
    NgIf,
    CurrencyPipe,
    FullNamePipe,
    UpperCasePipe,
    HoverHighlightDirective
  ],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.scss'
})
export class StudentListComponent implements OnInit {
  //Placeholder values for the table
  displayedColumns:string[]= ['id', 'firstName', 'lastName', 'department', 'isAdmin'];
  userList: User[] = [];
  error: string | null = null; //Var to hold an error message

  constructor (private studentService: StudentService){
    //this constructor is primarily used for dependency injection
  }



  ngOnInit(){
    // This lifecycle hook is a good place to fetch and init our data
    this.studentService.getStudents().subscribe({
      next: (data: User[]) => {
        this.userList = data;
        this.error = null; // Clear any previous errors
      },
      error: err => {
        this.error = 'Error fetching students'; // Set an error message
        console.error("Error fetching Students", err);
      },
      complete: () => console.log("Student data fetch complete!")
    });
  }
  selectedStudent?: User;
  selectStudent(student: User): void {
    this.selectedStudent = student;
  }



}
