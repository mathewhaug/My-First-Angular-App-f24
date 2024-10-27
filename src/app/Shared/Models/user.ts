export interface User {
  id: number,
  firstName: string,
  lastName: string,
  department: string,
  budget: number, //New property
  isAdmin?: boolean
}
