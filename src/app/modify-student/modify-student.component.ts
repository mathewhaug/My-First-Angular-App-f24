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
  studentForm: FormGroup;
  student: User | undefined;


  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private studentService: StudentService,
    private router: Router
  ) {
    this.studentForm = this.fb.group({
      //Auto filling the ID field with a new ID
      id: [studentService.generateNewId()], //ID is NOT required
      firstName: ['', Validators.required],//First name is required
      lastName: ['', Validators.required],
      department: [''],
      isAdmin: [false]
    });
  }
/*
This code initializes the component by fetching the details of a specific student based on the ID provided
 in the route parameters. It then populates the reactive form with the student's data, allowing the user
  to view or modify the student's details.
 */
  ngOnInit(): void {
    // first we retreive the student ID from the route parameters using the ActivatedRoute service
    //the paramMap.get('id') method extracts the 'id' parameter from the route, and Number()
    // converts it to a numeric value. This ID is then used to fetch the student's details.
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      //if the ID is valid, the StudentService is used to fetch the student's details by calling the getStudentById method
      this.studentService.getStudentById(id).subscribe(student => {
        if (student) {
          //If the student object is valid, the patchValue method of the reactive form
          // (studentForm) is called to populate the form with the student's data The patchValue method updates the form controls with the
          // values from the student object without resetting the entire form
          this.studentForm.patchValue(student);
        }
      });
    }
  }
/*
onSubmit method in the ModifyStudentComponent class is responsible for handling
 the form submission when the user attempts to save the students details.
  This method first checks if the form is valid by using the valid property of the reactive form
 */
  onSubmit(): void {
    if (this.studentForm.valid) {
      //Iff the form is valid, it extracts the form values into a student object of type User
      const student: User = this.studentForm.value;
      /*
      Here we have a little bit of logic, first iff the student.id
      and just being updated

      if it does not exist, we know that the student is new and we need to add it to the list
       */
      if (student.id) {
        this.studentService.updateStudent(student).subscribe(() => this.router.navigate(['/students']));
      } else {
        student.id = this.studentService.generateNewId();
        this.studentService.addStudent(student).subscribe(() => this.router.navigate(['/students']));
      }
    }
  }
  onDelete(): void {
    const id = this.studentForm.value.id;
    if (id) {
      this.studentService.deleteStudent(id).subscribe(() => this.router.navigate(['/students']));
    }
  }

  navigateToStudentList(): void {
    this.router.navigate(['/students']);
  }
}
