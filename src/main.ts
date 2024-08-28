import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {StudentDetailComponent} from "./app/student-detail/student-detail.component";
import {StudentListComponent} from "./app/student-list/student-list.component";
import {ModifyStudentComponent} from "./app/modify-student/modify-student.component";
import {PageNotFoundComponent} from "./app/page-not-found/page-not-found.component";
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryDataService} from "./app/Services/in-memory-data.service";
import {provideHttpClient, withInterceptorsFromDi} from "@angular/common/http";
import {importProvidersFrom} from "@angular/core";

const routes: Routes = [
  {path:'', redirectTo: '/students', pathMatch: 'full'}, //default route
  { path: 'students', component: StudentListComponent },
  { path: 'students/:id', component: StudentDetailComponent },
  {path:'modify-student', component: ModifyStudentComponent},
  {path: '**', component:PageNotFoundComponent}//Wildcard route for a 404 page
];
bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(), // Ensure that HTTP interceptors are properly configured
    provideRouter(routes),
    importProvidersFrom(HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 1000 })) // Import providers dynamically
  ],
}).catch((err) => console.error(err));
