import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from '../Shared/Models/user';

export class InMemoryDataService implements InMemoryDbService {
  //returns an object with a students property,
  // which is an array of User objects
  createDb():{students: User[]} {
    /*
    Inside the method, a constant array named students is defined,
    containing several User objects. Each User object represents a
    student with properties such as id, firstName, lastName,
     department, and isAdmin. For example, one of the User objects is
     */
    const students: User[] = [
      {
        id: 1,
        firstName: "Matt",
        lastName: "Haug",
        department: "Programming",
        budget: 123456.78,
        classList: ["JavaScript Basics", "Angular Development", "HTML & CSS", "Data Structures", "Algorithms"],
        grades: [8, -10, 50, 61, 81],
        isAdmin: false,
      },
      {
        id: 2,
        firstName: "Darren",
        lastName: "Takakki",
        department: "Web Dev",
        budget: 23456.78,
        classList: ["React Fundamentals", "Node.js Essentials", "APIs & Web Services", "Responsive Design", "Version Control"],
        grades: [95, 58, 84, 9, 87],
        isAdmin: true,
      },
      {
        id: 3,
        firstName: "John",
        lastName: "Doe",
        department: "Programming",
        budget: 3456.78,
        classList: ["Python Programming", "Machine Learning", "Databases", "Cybersecurity", "Software Engineering"],
        grades: [75, 8, 78, 85, 80],
        isAdmin: false,
      },
      {
        id: 4,
        firstName: "Jane",
        lastName: "Doe",
        department: "Programming",
        budget: 456.78,
        classList: ["Java Programming", "Mobile App Development", "Game Design", "UI/UX Design", "Cloud Computing"],
        grades: [90, 92, 88, 5, 89],
        isAdmin: true,
      },
      {
        id: 5,
        firstName: "Alice",
        lastName: "Smith",
        department: "Programming",
        budget: 1234.56,
        classList: ["C++ Programming", "Data Science", "DevOps Basics", "Web Security", "Network Fundamentals"],
        grades: [85, 87, 91, 89, 86],
        isAdmin: false,
      },
      {
        id: 6,
        firstName: "Bob",
        lastName: "Johnson",
        department: "Web Development",
        budget: 9876.54,
        classList: ["HTML5 & CSS3", "JavaScript for Beginners", "Git and GitHub", "Mobile Web Development", "Progressive Web Apps"],
        grades: [88, 90, 60, 84, 91],
        isAdmin: true,
      },
      {
        id: 7,
        firstName: "Charlie",
        lastName: "Brown",
        department: "Programming",
        budget: 6543.21,
        classList: ["Introduction to AI", "Computer Vision", "Data Analytics", "SQL Databases", "Cloud Services"],
        grades: [82, 80, 89, 75, 90],
        isAdmin: false,
      },
      {
        id: 8,
        firstName: "David",
        lastName: "Wilson",
        department: "Software Engineering",
        budget: 4321.09,
        classList: ["Agile Methodologies", "Software Testing", "Object-Oriented Programming", "Systems Design", "Microservices"],
        grades: [93, 85, 90, 88, 94],
        isAdmin: true,
      },
      {
        id: 9,
        firstName: "Eva",
        lastName: "Martinez",
        department: "Programming",
        budget: 210.56,
        classList: ["PHP Development", "Laravel Basics", "API Design", "JavaScript Frameworks", "Responsive Web Design"],
        grades: [76, 80, 79, 84, 78],
        isAdmin: false,
      },
      {
        id: 10,
        firstName: "Frank",
        lastName: "Garcia",
        department: "Computer Science",
        budget: 3456.78,
        classList: ["Intro to Cybersecurity", "Digital Forensics", "Ethical Hacking", "Network Security", "Information Security"],
        grades: [85, 88, 90, 87, 82],
        isAdmin: false,
      },
      {
        id: 11,
        firstName: "Grace",
        lastName: "Lee",
        department: "Programming",
        budget: 5678.90,
        classList: ["Software Development Lifecycle", "Data Structures and Algorithms", "Operating Systems", "Web Development Basics", "Introduction to Programming"],
        grades: [91, 93, 89, 90, 88],
        isAdmin: true,
      },
      {
        id: 12,
        firstName: "Henry",
        lastName: "King",
        department: "Web Development",
        budget: 6789.01,
        classList: ["Introduction to React", "CSS Flexbox", "API Integration", "Building RESTful Services", "Frontend Frameworks"],
        grades: [79, 81, 77, 83, 80],
        isAdmin: false,
      },
      {
        id: 13,
        firstName: "Ivy",
        lastName: "Young",
        department: "Programming",
        budget: 8901.23,
        classList: ["Kotlin for Android", "Swift for iOS", "Cross-Platform Development", "Introduction to Game Development", "Blockchain Basics"],
        grades: [95, 94, 90, 92, 93],
        isAdmin: true,
      },
      {
        id: 14,
        firstName: "Jack",
        lastName: "Wong",
        department: "Software Engineering",
        budget: 1234.56,
        classList: ["Software Design Patterns", "DevOps Practices", "Continuous Integration/Deployment", "API Development", "Agile Software Development"],
        grades: [88, 85, 87, 89, 90],
        isAdmin: false,
      },
      {
        id: 15,
        firstName: "Kim",
        lastName: "Clark",
        department: "Computer Science",
        budget: 5678.90,
        classList: ["Intro to Cloud Computing", "NoSQL Databases", "Data Visualization", "Big Data Technologies", "R Programming"],
        grades: [78, 82, 80, 75, 83],
        isAdmin: false,
      },
      {
        id: 16,
        firstName: "Liam",
        lastName: "Rodriguez",
        department: "Programming",
        budget: 345.67,
        classList: ["Computer Graphics", "Animation Basics", "Game Physics", "Virtual Reality", "Augmented Reality"],
        grades: [92, 90, 93, 91, 94],
        isAdmin: true,
      },
      {
        id: 17,
        firstName: "Mia",
        lastName: "Hall",
        department: "Web Development",
        budget: 4321.09,
        classList: ["Introduction to TypeScript", "Angular Advanced", "React Native", "Frontend Performance", "User Interface Testing"],
        grades: [80, 84, 82, 78, 76],
        isAdmin: false,
      },
      {
        id: 18,
        firstName: "Noah",
        lastName: "Hernandez",
        department: "Programming",
        budget: 2345.67,
        classList: ["Introduction to Machine Learning", "Data Mining", "Statistical Analysis", "Deep Learning", "AI Ethics"],
        grades: [88, 85, 87, 89, 90],
        isAdmin: false,
      },
      {
        id: 19,
        firstName: "Olivia",
        lastName: "Lopez",
        department: "Software Engineering",
        budget: 5432.10,
        classList: ["Distributed Systems", "Microservices Architecture", "Enterprise Application Development", "Performance Tuning", "Testing Frameworks"],
        grades: [91, 90, 92, 93, 89],
        isAdmin: true,
      },
      {
        id: 20,
        firstName: "Paul",
        lastName: "Scott",
        department: "Computer Science",
        budget: 3210.12,
        classList: ["Computer Networks", "Operating System Concepts", "Information Theory", "Compiler Design", "Software Project Management"],
        grades: [84, 81, 79, 85, 82],
        isAdmin: false,
      },
      {
        id: 21,
        firstName: "Quinn",
        lastName: "Adams",
        department: "Programming",
        budget: 9876.54,
        classList: ["Software Engineering Principles", "Requirements Engineering", "Software Maintenance", "Software Quality Assurance", "Human-Computer Interaction"],
        grades: [90, 89, 91, 94, 88],
        isAdmin: true,
      },
      {
        id: 22,
        firstName: "Ryan",
        lastName: "Harris",
        department: "Web Development",
        budget: 1234.56,
        classList: ["Backend Development", "JavaScript Libraries", "Data Protection", "Web Accessibility", "Web Performance Optimization"],
        grades: [82, 80, 78, 83, 81],
        isAdmin: false,
      },
      {
        id: 23,
        firstName: "Sophie",
        lastName: "Nelson",
        department: "Programming",
        budget: 1234.56,
        classList: ["Functional Programming", "Reactive Programming", "Concurrency", "Software Craftsmanship", "Programming Paradigms"],
        grades: [79, 77, 78, 80, 82],
        isAdmin: false,
      },
      {
        id: 24,
        firstName: "Tom",
        lastName: "Mitchell",
        department: "Computer Science",
        budget: 3456.78,
        classList: ["Theory of Computation", "Automata Theory", "Graph Theory", "Numerical Methods", "Computational Complexity"],
        grades: [91, 90, 88, 87, 89],
        isAdmin: true,
      },
      {
        id: 25,
        firstName: "Uma",
        lastName: "Rivera",
        department: "Software Engineering",
        budget: 4567.89,
        classList: ["Software Architecture", "Cloud Application Development", "Service-Oriented Architecture", "Software Integration", "Agile Practices"],
        grades: [85, 84, 83, 89, 88],
        isAdmin: false,
      },
      {
        id: 26,
        firstName: "Victor",
        lastName: "Foster",
        department: "Web Development",
        budget: 5678.90,
        classList: ["Modern Web Development", "JavaScript Frameworks", "Server-Side Rendering", "Responsive Web Applications", "Single Page Applications"],
        grades: [90, 91, 89, 88, 92],
        isAdmin: true,
      },
      {
        id: 27,
        firstName: "Wendy",
        lastName: "Simmons",
        department: "Programming",
        budget: 6789.01,
        classList: ["Intro to Programming with C#", "Web Development with ASP.NET", "Database Design", "Software Testing and Debugging", "Mobile Development with Xamarin"],
        grades: [86, 85, 88, 87, 84],
        isAdmin: false,
      },
      {
        id: 28,
        firstName: "Xander",
        lastName: "Davis",
        department: "Computer Science",
        budget: 7890.12,
        classList: ["Artificial Intelligence", "Machine Learning with R", "Data Analysis with Python", "Natural Language Processing", "Robotics"],
        grades: [87, 89, 85, 88, 90],
        isAdmin: false,
      },
      {
        id: 29,
        firstName: "Yara",
        lastName: "Bryant",
        department: "Web Development",
        budget: 8901.23,
        classList: ["Frontend Development with Vue.js", "Web APIs", "CSS Grid Layout", "Website Deployment", "Cross-Browser Compatibility"],
        grades: [94, 92, 90, 91, 93],
        isAdmin: true,
      },
      {
        id: 30,
        firstName: "Zoe",
        lastName: "Harris",
        department: "Programming",
        budget: 9012.34,
        classList: ["Introduction to Cloud Services", "Web Application Security", "Data Science Basics", "Statistical Modeling", "Data Warehousing"],
        grades: [81, 82, 84, 83, 80],
        isAdmin: false,
      }
    ];
    //function to generate additional users based on existing ones
    const generateAdditionalUsers = (count: number, baseUsers: User[]): User[] => {
      let users: User[] = [];
      let id = baseUsers.length + 1; // Start with the next id number
      const departments = ["Programming", "Web Development", "Software Engineering", "Computer Science"];
      const classLists = [
        ["JavaScript Basics", "Angular Development", "HTML & CSS", "Data Structures", "Algorithms"],
        ["React Fundamentals", "Node.js Essentials", "APIs & Web Services", "Responsive Design", "Version Control"],
        ["Python Programming", "Machine Learning", "Databases", "Cybersecurity", "Software Engineering"],

      ];

      for (let i = 0; i < count; i++) {
        const randomBaseUser = baseUsers[i % baseUsers.length]; // Recycle the base users names
        const newUser: User = {
          id: id++, // Increment the id for each new user
          firstName: `${randomBaseUser.firstName} `,
          lastName: `${randomBaseUser.lastName}`,
          department: departments[i % departments.length], // Assign a random department
          budget: Math.floor(Math.random() * 100000000 + 1000), //Random budget between 1000 and 100 000 000
          classList: classLists[i % classLists.length], //asssign a random class list
          grades: Array.from({ length: 5 }, () => Math.floor(Math.random() * 100)), // Random grades between 0 and 100
          isAdmin: i % 2 === 0, // Alternate between admin and non-admin
        };
        users.push(newUser);
      }
      return users;
    };

    // Generate 1000 users by reusing existing users
    const allUsers = [...students, ...generateAdditionalUsers(10 - students.length, students)];

    return { students: allUsers };
  }
}
