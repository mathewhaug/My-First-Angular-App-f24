import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from '../Shared/Models/user';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const students: User[] = [
      {id: 1, firstName: "Matt", lastName: "Haug", department: "Programming", isAdmin: false},
      {id: 2, firstName: "Darren", lastName: "Takakki", department: "Web Dev", isAdmin: true},
      {id: 3, firstName: "John", lastName: "Doe", department: "Programming", isAdmin: false},
      {id: 4, firstName: "Jane", lastName: "Doe", department: "Programming", isAdmin:true}
    ];
    return { students };
  }
}
