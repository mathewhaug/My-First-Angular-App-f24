import { Injectable } from '@angular/core';
//import our mock data
import {userList} from "../Shared/mockStudent.data";
import { Observable, of } from 'rxjs';
import {User} from "../Shared/Models/user";
import {HttpClient} from "@angular/common/http";

//Notice the new Decorator
@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private apiUrl = 'api/students'; //url to web api
  private students: User[] = userList;//Local copy of student data for CRUD Operations
  constructor(private http: HttpClient) { }//DI http
  //CRUD operations using HTTP Requests
  //All operations we need are:
  // Get, post, put, delete
  getStudents(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  getStudentById(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${id}`); //return a single student
  }

  addStudent(student: User): Observable<User> {
    student.id = this.generateNewId();
    return this.http.post<User>(this.apiUrl, student);
  }

  updateStudent(student: User): Observable<User | undefined> {
    const url = `${this.apiUrl}/${student.id}`;
    return this.http.put<User>(url, student);
  }

  deleteStudent(id: number): Observable<{}> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url)
  }
  // New method to generate a new unique ID
  generateNewId(): number {
    return this.students.length > 0 ? Math.max(...this.students.map(student => student.id)) + 1 : 1;
  }
}

