import {Component, OnInit} from '@angular/core';
import { User} from "../Shared/Models/user";
import {CurrencyPipe, NgForOf, NgIf, UpperCasePipe} from "@angular/common";
import {StudentDetailComponent} from "../student-detail/student-detail.component";
import {StudentService} from "../Services/student.service";
import {RouterLink} from "@angular/router";
import {FullNamePipe} from "../pipes/full-name.pipe";
import {HoverHighlightDirective} from "../directives/hover-highlight.directive";
import {
  MatCell,
  MatCellDef, MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef, MatHeaderRow,
  MatHeaderRowDef, MatRow,
  MatRowDef,
  MatTable
} from "@angular/material/table";
import { MatTableDataSource } from '@angular/material/table';



@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [


    RouterLink,
    NgIf,
    CurrencyPipe,
    FullNamePipe,

    HoverHighlightDirective,
    MatTable,
    MatHeaderCellDef,
    MatCellDef,
    MatRowDef,
    MatHeaderRowDef,
    MatHeaderCell,
    MatColumnDef,
    MatCell,
    MatHeaderRow,
    MatRow
  ],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.scss'
})
export class StudentListComponent implements OnInit {
  //Placeholder values for the table
  displayedColumns:string[]= ['id', 'fullName', 'department', 'budget','isAdmin'];

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

  dataSource = new MatTableDataSource(this.userList);


}
