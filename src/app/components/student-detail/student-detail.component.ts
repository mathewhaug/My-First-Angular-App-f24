import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../Shared/Models/user";
import {NgIf} from "@angular/common";
import {StudentService} from "../../Services/student.service";
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
export class StudentDetailComponent implements OnInit{

  //We need some vars to store and manage the state
  student: User | undefined //Undefined because if the button
  //is not pressed, the state will be undefined
  userList : User[] = [] //To store list of students
  currentIndex : number = 0 //Tracks which user to display

  //Lets use DI to prep the service AND the router
  constructor(private studentService : StudentService,
              private router: Router,
              private route: ActivatedRoute) {}
  //WE need to get out data from the service AND we need to
  //determine which user was clicked on from the URL bar
  ngOnInit() {
    //We need to subscribe to our service to get students
    this.studentService.getStudents().subscribe(users => {
      this.userList = users
      //Now we need to SUBSCRIBE to our "url" bar aka ParamMap
      //And we will listen for changes
      this.route.paramMap.subscribe(params =>{
        const id = Number(params.get('id'))
        if(id){
          this.currentIndex = this.userList.findIndex(user => user.id === id)
          this.student = this.userList[this.currentIndex]
        }
      })
    })
  }

}
