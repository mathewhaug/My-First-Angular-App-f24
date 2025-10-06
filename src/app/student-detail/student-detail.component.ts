import {Component, Input, OnInit} from '@angular/core';
import {User} from "../Shared/Models/user";
import {NgIf} from "@angular/common";
import {StudentService} from "../Services/student.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-student-detail',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './student-detail.component.html',
  styleUrl: './student-detail.component.scss'
})
export class StudentDetailComponent implements OnInit {
  //We need some variables to store and manage are state
  student :User | undefined //Undefined because if the button isnt pressed, it has no value
  userList : User[] = [] // To store the list of students
  currentIndex:number = 0; //Track which user to display

  //Using my service to get the students
  constructor(private studentService : StudentService,
              private router : Router,
              private route: ActivatedRoute
              ) {}
  ngOnInit():void {
    //Need to subscribe to our of
    this.studentService.getStudents().subscribe(users => {
      this.userList = users
      //Now we need to subscribe to the paramMap Changes
      this.route.paramMap.subscribe(params => {
        const id = Number(params.get("id"))
        if (id) {
          this.currentIndex = this.userList.findIndex(user => user.id === id)
          this.student = this.userList[this.currentIndex]
        }
      })
    })
  }

  goBack(){
    this.router.navigate(['/students'])
  }
  goForward(){
    if(this.currentIndex < this.userList.length-1){
      this.currentIndex++
      this.router.navigate(['/students',this.userList[this.currentIndex].id])
    }
  }

  goBackward(){
    if(this.currentIndex > 0){
      this.currentIndex--
      this.router.navigate(['/students',this.userList[this.currentIndex].id])
    }
  }

}
