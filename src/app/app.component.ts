import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {User} from "./Shared/Models/user";
import {NgForOf} from "@angular/common";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title:string = 'Matt';


  user1: User = {id:1,firstName:'Matt',lastName:'Haug',department:'programming',isAdmin:false};
  user2 : User = {id: 2, firstName: "Darren", lastName:"Takakki", department: "Web Dev", isAdmin: true};
  //Can declare values either way
  userList: User[] = //any[] would have worked as well
    [this.user1,this.user2,
      {id: 3, firstName: "John", lastName: "Doe", department:"Programming", isAdmin: false},
      {id: 4, firstName: "Jane", lastName: "Doe", department:"Programming", isAdmin:true}
    ]
toggleAdminStatus(user:User):void{
    user.isAdmin = !user.isAdmin;
}



}
