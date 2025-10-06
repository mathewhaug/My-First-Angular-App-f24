//main .ts file
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
//Import Router
import {provideRouter, Routes} from "@angular/router";
import {StudentListComponent} from "./app/student-list/student-list.component";
import {StudentDetailComponent} from "./app/student-detail/student-detail.component";
import {ModifyStudentComponent} from "./app/modify-student/modify-student.component";
import {PageNotFoundComponent} from "./app/page-not-found/page-not-found.component";
//This will store where our application can go
const routes:Routes =[
  {path:'',redirectTo:'/students', pathMatch:'full'}, //Default Route
  {path: 'students', component: StudentListComponent},
  {path: 'students/:id', component:StudentDetailComponent}, //<-- Dynamic route
  {path: 'modify-student',component:ModifyStudentComponent},
  {path: '**', component:PageNotFoundComponent} // <-- Wild Card
  //WILD CARD SHOULD BE LAST TO BE LISTED
]
//We need to adjust the bootstrap to import the router
bootstrapApplication(AppComponent, {
  providers:[provideRouter(routes)]
}).then(r =>console.log("Bootstrapped Sucessfully"))
