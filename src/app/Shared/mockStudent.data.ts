//mockStudent.data.ts
//import the interface
import {User} from './Models/user';

//Create a mock data array of type User and export so it is
//available to other files

export const userList: User[] = [
  {id: 1, firstName: "Matt", lastName: "Haug", department: "Programming",budget:123456.78, isAdmin: false},
  {id: 2, firstName: "Darren", lastName: "Takakki", department: "Web Dev", budget:23456.78,isAdmin: true},
  {id: 3, firstName: "John", lastName: "Doe", department: "Programming", budget:3456.78,isAdmin: false},
  {id: 4, firstName: "Jane", lastName: "Doe", department: "Programming", budget:456.78, isAdmin:true}
  //Add more as needed
];
