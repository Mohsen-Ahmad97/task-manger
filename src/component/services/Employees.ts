import axios from "axios";
import { FieldType } from "../5-Employees/AddEmployees";
import { FieldType1 } from "../5-Employees/UpdateEmployee";
import api from "./Api";
 interface data {
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
  Data: data[];
  response?:any
}
export class Employee {
  static async getEmployee(): Promise<employee> {
    return await api
      .get(
        "/api/Employee/Employees",
        // {
        //   headers: {
        //     "Content-Type": "application/json",
        //     Authorization: "Bearer " + localStorage.getItem("token"),
        //   },
        // }
      )
      .then(function (response) {
        let result: employee = response.data;
        console.log("responseemployee",result)
        return result;
      })
      .then((error) => {
      
        console.log("erroremployee",error.response.data);
        return error.response.data;
      });
  }

  static async addEmployee(mode: FieldType): Promise<employee> {
    return await api
      .post(
        "/api/Employee/AddEmployee",
        {
          FirstName: mode.firstName,
          LastName: mode.lastName,
          Email: mode.email,
        },
        // {
        //   headers: {
        //     "Content-Type": "application/json",
        //     Authorization: "Bearer " + localStorage.getItem("token"),
        //   },
        // }
      )
      .then(function (response) {
        let result: employee = response.data;
        return result;
      })
      .then((error) => {
        console.log(error);
        return error;
      });
  }
  static async updateEmployee(mode: FieldType1): Promise<employee> {
    return await axios
      .post(
        "/api/Employee/UpdateEmployee",
        {
          FirstName: mode.firstName,
          LastName: mode.lastName,
          id: mode.id,
        },
        // {
        //   headers: {
        //     "Content-Type": "application/json",
        //     Authorization: "Bearer " + localStorage.getItem("token"),
        //   },
        // }
      )
      .then(function (response) {
        let result: employee = response.data;
        return result;
      })
      .then((error) => {
        console.log(error);
        return error;
      });
  }
  static async deleteEmployee(id:number) {
    return await axios
      .post(
        "/api/Employee/DeleteEmployee",
        {
          Id:id
        },
        // {
        //   headers: {
        //     "Content-Type": "application/json",
        //     Authorization: "Bearer " + localStorage.getItem("token"),
        //   },
        // }
      )
      .then(function (response) {
        let result = response.data;
        return result;
      })
      .then((error) => {
        console.log(error);
        return error;
      });
  }
}
