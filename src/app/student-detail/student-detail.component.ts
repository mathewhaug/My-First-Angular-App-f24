import {Component, Input, OnInit} from '@angular/core';
import {User} from "../Shared/Models/user";
import {NgIf} from "@angular/common";
import {ActivatedRoute, Router} from "@angular/router";
import {StudentService} from "../Services/student.service";

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
  //Needs to be | undef because there wont always be a student thats clicked on
  student: User | undefined; //The student to display
  userList: User[] = [];// to store the list of students
  currentIndex: number = 0;//to track the current index

  constructor(
    private route: ActivatedRoute,
    private studentService: StudentService,
    private router: Router
  ) {}
//rewrite onInit to get the list of students and the current student
  ngOnInit(): void {
    this.studentService.getStudents().subscribe(users => {
      this.userList = users;

      // Subscribe to paramMap changes to actually see the page changing
      //If we dont do this, the URL will change but the view will not
      this.route.paramMap.subscribe(params => {
        const id = Number(params.get('id'));
        if (id) {
          this.currentIndex = this.userList.findIndex(user => user.id === id);
          this.student = this.userList[this.currentIndex];
        }
      });
    });
  }

//function to go back to student-list view
  goBack(): void {
    this.router.navigate(['/students']);
  }

//function to move foward through array with overflow protection
  goForward(): void {
    if (this.currentIndex < this.userList.length - 1) {
      this.currentIndex++;
      this.router.navigate(['/students', this.userList[this.currentIndex].id]);
    }
  }
//function to move backward through array with overflow protection
  goBackward(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.router.navigate(['/students', this.userList[this.currentIndex].id]);
    }
  }


}
