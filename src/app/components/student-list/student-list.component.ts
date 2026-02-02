import {Component, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";
import {User} from "../../Shared/Models/user";
import {StudentDetailComponent} from "../student-detail/student-detail.component";
import {StudentService} from "../../Services/student.service";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [
    NgForOf,
    StudentDetailComponent,
    RouterLink
  ],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.scss'
})
export class StudentListComponent implements OnInit{
  //var creation
  selectedStudent? : User
  //Placeholder var to hold data
  userList : User[] =[]

  //We need to init the service using DEPENDENCY INJECTION
  constructor(private studentService: StudentService) {
    //Right now the constructor is primarily used for
    //DI
  }

  ngOnInit() {
    //This is the lifecyclehook which will be used to fetch
    //our data
    this.studentService.getStudents().subscribe({
      next: (data : User[]) => this.userList = data,
      error: err => console.error("Error Fetching Students: ",err),
      complete:() => console.log("Data Fetch Complete!")
    })
  }

  //Function to select the student and PREPARE to send data
  selectStudent(student:User){
    console.log(this.selectedStudent)
    this.selectedStudent = student
    console.log("After Set",this.selectedStudent)
  }




}
