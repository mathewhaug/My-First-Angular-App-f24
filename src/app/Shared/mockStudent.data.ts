//mockStudent.data.ts
//import the interface
import {User} from './Models/user';

//Create a mock data array of type User and export so it is
//available to other files

export const userList: User[] = [
  {id: 1, firstName: "Matt", lastName: "Haug", department: "Programming", isAdmin: false},
  {id: 2, firstName: "Darren", lastName: "Takakki", department: "Web Dev", isAdmin: true},
  {id: 3, firstName: "John", lastName: "Doe", department: "Programming", isAdmin: false},
  {id: 4, firstName: "Jane", lastName: "Doe", department: "Programming", isAdmin:true}
  //Add more as needed
];
