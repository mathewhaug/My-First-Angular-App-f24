import {Component, OnInit} from '@angular/core';
import {User} from "../Shared/Models/user";
import {StudentService} from "../Services/student.service";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {NgIf} from "@angular/common";
import {catchError, map, of, switchMap} from "rxjs";

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

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.studentService.getStudentById(+id).subscribe(student => {
        if(student) {
          this.student = student;

          this.studentForm.patchValue(student);
        }
      });
    }
  }

  onSubmit(): void {
    const student: User = this.studentForm.value;

    // Check if we're updating an existing student
    if (student.id) {
      this.studentService.updateStudent(student);
    } else {
      // For adding a new student, generate a new ID
      const newId = this.studentService.generateNewId(); // This method will create a new ID
      student.id = newId;
      this.studentService.addStudent(student);
    }

    this.router.navigate(['/students']);
  }

  onDelete(): void {
    const id = this.studentForm.get('id')?.value;
    if (id) {
      this.studentService.deleteStudent(id);
      this.router.navigate(['/students']);
    }
  }

  navigateToStudentList(): void {
    this.router.navigate(['/students']);
  }
}
