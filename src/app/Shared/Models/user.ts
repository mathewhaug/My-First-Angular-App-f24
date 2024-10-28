//Lecture 8 - Adding more Fields to the User Model
export interface User {
  id: number,
  firstName: string,
  lastName: string,
  department: string,
  budget: number, //New property
  classList: string[]
  grades: number[]
  isAdmin?: boolean
}
