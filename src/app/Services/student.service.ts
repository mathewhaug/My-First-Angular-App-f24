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

  getStudents(): Observable<User[]> {
    return of(this.students);
  }

  getStudentById(id: number): Observable<User | undefined> {
    return of(this.students.find(student => student.id === id));
  }

  addStudent(student: User): Observable<User> {
    this.students.push(student);
    return of(student);
  }

  updateStudent(updatedStudent: User): Observable<User | undefined> {
    const index = this.students.findIndex(student => student.id === updatedStudent.id);
    if (index > -1) {
      this.students[index] = updatedStudent;
      return of(updatedStudent);
    }
    return of(undefined);
  }

  deleteStudent(id: number): void {
    this.students = this.students.filter(student => student.id !== id);
  }
  // New method to generate a new unique ID
  generateNewId(): number {
    return this.students.length > 0 ? Math.max(...this.students.map(student => student.id)) + 1 : 1;
  }
}

