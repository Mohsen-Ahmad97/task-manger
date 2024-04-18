
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
    Data:any
    dateOfBirth?: null;
    data?: data;
  }
  