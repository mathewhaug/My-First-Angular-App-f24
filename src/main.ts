import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {provideRouter, Routes} from "@angular/router";
import {StudentListComponent} from "./app/student-list/student-list.component";
import {StudentDetailComponent} from "./app/student-detail/student-detail.component";
import {ModifyStudentComponent} from "./app/components/modify-student/modify-student.component";
import {PageNotFoundComponent} from "./app/components/page-not-found/page-not-found.component";
//This will define our routes in our application
const routes:Routes = [
  {path: '', redirectTo:'/students', pathMatch:"full"},
  {path: 'students', component: StudentListComponent},
  {path: 'students/:id', component:StudentDetailComponent},
  {path: 'modify-student', component:ModifyStudentComponent},




  {path:"**" ,component:PageNotFoundComponent} // <- Wild card
  //WILD CARD MUST BE THE LAST COMPONENT LISTED
]

bootstrapApplication(AppComponent, {
    providers:[provideRouter(routes)]
  })
  .catch((err) => console.error(err));
