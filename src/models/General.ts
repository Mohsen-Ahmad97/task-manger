import { Employeeteam } from "./Modules";

//type for Auth
export interface data {
  Token: string;
  RefreshToken: string;
  Success: Boolean;
  errors: any[];
  CompleteRegister: Boolean;
}
export interface IcomonResponse {
  Code: Number;
  Message: string;
  Result: Boolean;
  Data: any;
  dateOfBirth?: null;
  data?: data;
}
//type Mission
export interface mission {
  Code?: number;
  Message?: string;
  Result?: boolean;
  Data?: any;
  Id?: number;
  Name: string;
  StartTime: any;
  EndTime: any;
  Milestones?: milistone[];
  EmployeesMissions?: any[];
  EmployeeIds?: number[];
}
export interface milistone {
  description: string;
  StartTime: any;
  EndTime:any;
  Id: number;
  taskId?: number,
}
export interface teamdata {
  

Id: number,
Name: string,
EmployeeTeam:Employeeteam []
}
//type Team 
export interface team {
  Code?: number;
  Message?: string;
  Result?: boolean;
  Data?:teamdata;
  Id?: number;
  Name?:string;
  values:values
  Milestones?: milistone[];
  EmployeesMissions?: any[];
  EmployeeIds?: number[];
}
export interface values {
  IdTeam?: string, 
  IdEmploe?:string,
  id?:string
}