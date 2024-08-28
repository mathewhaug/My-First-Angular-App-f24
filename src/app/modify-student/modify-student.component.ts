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
      id: ['', Validators.required], //ID is required
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
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.studentService.getStudentById(id).subscribe(student => {
        if (student) {
          this.studentForm.patchValue(student);
        }
      });
    }
  }

  onSubmit(): void {
    if (this.studentForm.valid) {
      const student: User = this.studentForm.value;
      if (student.id) {
        this.studentService.updateStudent(student).subscribe(() => this.router.navigate(['/students']));
      } else {
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
