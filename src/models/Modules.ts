//type Register
export interface RegisterType {
  email: string;
  password: string;
  confirmPassword: string;
}
//type ConfirmEmail
export interface ConfirmType {
  email: string;
  verficationCode: string;
}
//type Complete Register
export interface CompleteType {
  firstName: string;
  lastName: string;
  dateOfBirth: null;
}
//type Complete Login
export interface LoginType {
  password: string;
  email: string;
}
//type Reset Password
export interface ResetType {
  email: string;
  verficationCode: string;
  password: string;
  confirmPassword: string;
}
//type for employee
export interface dataEmployee {
  Id: number;
  FirstName: string;
  LastName: string;
  Email: string;
  EmployeeTeam: [];
  EmployeeMissions: [];
}
export interface employee {
  Code: number;
  Message: string;
  Result: Boolean;
  Data: dataEmployee[];
  response?: any;
}
//type Employee Data
export interface employees {
  ID: string;
  FirstName: string;
  LastName: string;
  Email: string;
}

//type Add Employee
export interface AddEmployeeType {
  firstName: string;
  lastName: string;
  email: string;
}
export interface UpdateEmployeeType {
  firstName: string;
  lastName: string;
  id: number;
}export interface Employeeteam {
  Id: number;
  FirstName: string;
  LastName: string;
}

