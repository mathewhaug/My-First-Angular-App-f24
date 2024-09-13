import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {User} from "./Shared/Models/user";
import {JsonPipe, NgForOf} from "@angular/common";
import {StudentListComponent} from "./student-list/student-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, JsonPipe, StudentListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title= 'User Generation';





}
