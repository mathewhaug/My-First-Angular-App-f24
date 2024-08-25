import { Injectable } from '@angular/core';
//import our mock data
import {userList} from "../Shared/mockStudent.data";
import { Observable, of } from 'rxjs';
import {User} from "../Shared/Models/user";

//Notice the new Decorator
@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private students: User[] = userList;//Local copy of student data for CRUD Operations
  constructor() { }
  //Returns all students
  getStudents(): Observable<User[]>{
    return of(userList); //Return and observable that emits mock student data
  }
  //Adding basic CRUD methods
  //Create: Add USer
  addStudent(newStudent:User) : Observable<User[]>{
    this.students.push(newStudent)
    return of(this.students);
  }

  //Update an Existing user
  updateStudent(updatedStudent: User): Observable<User[]> {
    const index = this.students.findIndex(user => user.id === updatedStudent.id);
    if (index !== -1) {
      this.students[index] = updatedStudent;
    }
    return of(this.students);
  }
  //Delete: Remove a user by ID
  deleteStudent(studentId: number): Observable<User[]> {
    this.students = this.students.filter(user => user.id !== studentId);
    return of(this.students);
  }
  getStudentById(studentId: number): Observable<User | undefined> {
    const student = this.students.find(user => user.id === studentId);
    return of(student);
  }
}

