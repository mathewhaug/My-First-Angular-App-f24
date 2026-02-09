import {Component, OnInit} from '@angular/core';
import {User} from "../Shared/Models/user";
import {StudentService} from "../Services/student.service";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-modify-student',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    ReactiveFormsModule
  ],
  templateUrl: './modify-student.component.html',
  styleUrl: './modify-student.component.scss'
})
export class ModifyStudentComponent implements OnInit{

  //Create needed vars
  studentForm: FormGroup;
  student: User | undefined; //Diffrence between null and undefined
  error: string | null = null

  //Now we are going to DI all needed services
  constructor(private studentService: StudentService,
              private fb : FormBuilder,
              private router: Router,
              private route: ActivatedRoute) {
    //Build the form
    this.studentForm = this.fb.group({
      id: [Validators.required], //TODO auto gen ID
      firstName: ["", Validators.required],
      lastName: [""],
      department: [""],
      isAdmin: [false]
    })
  }
  /*
  We need to init the component by fetching the details of a
  specific student encoded in the route params

  IF the student exsits and the route exists, populat the fields
   */
  ngOnInit() {
    //first we need to retreive the ID in the URL bar if it exists
    const id =Number( this.route.snapshot.paramMap.get('id'))
    console.log(id)
    if(id){
      //iff the ID is valid - we will reach to the service to ask for data
      this.studentService.getStudentById(id).subscribe({
        next: student => {
          //I want to check to make sure the object I received
          //is in a valid state
          if(student){
            this.studentForm.patchValue(student)
          }
        },
        error: err => {
          this.error = "Error Fetching Students"
          console.error("Error Fetching: ", err)
        }
      })
    }
  }
  onSubmit() :void {
    if(this.studentForm.valid){
      //iff the studentForm is valid, we can extract the input
      const student : User = this.studentForm.value
      /*
      Logically deciding if the student.id exists in our current
      dataset - we must be updating

      if it does not exist, we must be adding
       */
      console.log("ID in the moddify component: ", Number(student.id))

      if(!isNaN(Number(student.id))  ){
        this.studentService.updateStudent(student).subscribe(() => this.router.navigate(["/students"]))
      } else {
        //Generate a new ID
        student.id = this.studentService.generateNewId()
        this.studentService.addStudent(student).subscribe(() => this.router.navigate(["/students"]))
      }
    }
  }

  onDelete(){
    const id = this.studentForm.value.id
    if(id){
      this.studentService.deleteStudent(id)
      this.router.navigate(['/students'])
    }
  }
  navBackToStudentList(){
    this.router.navigate(['/students'])
  }


}
