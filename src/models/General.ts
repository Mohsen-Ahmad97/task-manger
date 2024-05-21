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
