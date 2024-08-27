import {Component, OnInit} from '@angular/core';
import {User} from "../Shared/Models/user";
import {StudentService} from "../Services/student.service";
import {FormsModule} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-modify-student',
  standalone: true,
  imports: [
    FormsModule,
    NgIf
  ],
  templateUrl: './modify-student.component.html',
  styleUrl: './modify-student.component.scss'
})
export class ModifyStudentComponent implements OnInit{
  //init an empty instance of a student:User
  student:User = {
    id: 0,
    firstName: '',
    lastName: '',
    department: '',
    isAdmin: false
  };
  //inject our service
  constructor(private studentService:StudentService,
              private route: ActivatedRoute) { }
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.studentService.getStudentById(+id).subscribe((student: User | undefined) => {
        if (student) {
          this.student = student; // Set student if not undefined
        } else {
          console.error('Student not found');
          // Handle the case where student is undefined
        }
      });
    }
  }
  //method to add new student
  addStudent(){
    //get data from form fields and add to student object
    this.studentService.addStudent(this.student);
    //reset Form after adding student
    this.student = {
      id: 0,
      firstName: '',
      lastName: '',
      department: '',
      isAdmin: false
    };
  }
  //method to update student
  updateStudent(){
    //iff student exists
    if(this.student.id){
      this.studentService.updateStudent(this.student);//update with details provided
    }
  }
  //delete student
  deleteStudent(){
    //if student exists
    if(this.student.id){
      this.studentService.deleteStudent(this.student.id);
    }
  }
  //fetch student details
  fetchStudent(id:number){//we must say user|undefined as thats what out service may emit
    this.studentService.getStudentById(id).subscribe((student:User | undefined)=>{
      if(student){
        this.student = student;
      }
    });
  }

}
