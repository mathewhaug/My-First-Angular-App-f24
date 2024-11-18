import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';

import { AppComponent } from './app/app.component';
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryDataService} from "./app/Services/in-memory-data.service";
import {provideHttpClient} from "@angular/common/http";
import {importProvidersFrom} from "@angular/core";
import {StudentListComponent} from "./app/student-list/student-list.component";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";

//main.ts
//define the routes and specify their child routes
const routes: Routes = [
  { path: '', redirectTo: '/students', pathMatch: 'full' }, //Default route
  { path: 'students', component: StudentListComponent },     //eagerly loaded
  { path: 'students/:id',
    loadComponent: () =>
      import('./app/student-detail/student-detail.component').then(m => m.StudentDetailComponent) }, //Lazy Loaded
  { path: 'modify-student',
    loadComponent: () =>
      import('./app/modify-student/modify-student.component').then(m => m.ModifyStudentComponent) },
  { path: '**',
    loadComponent: () =>
      import('./app/page-not-found/page-not-found.component').then(m => m.PageNotFoundComponent) },
];
bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(), // Ensure that HTTP interceptors are properly configured
    provideRouter(routes),
    importProvidersFrom(HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 1 })),
    provideAnimationsAsync(), // Import providers dynamically
    MatTableModule,
    MatButtonModule,
    MatIconModule,
  ],
}).catch((err) => console.error(err));
