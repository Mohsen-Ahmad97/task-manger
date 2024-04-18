import api from "./Api";
import { IcomonResponse } from "../Models/General";
import { AddEmployeeType, UpdateEmployeeType } from "../Models/Modules";

export class Employee {
  static async getEmployee(): Promise<IcomonResponse> {
    return await api
      .get("/api/Employee/Employees")
      .then(function (response) {
        let result: IcomonResponse = response?.data;
        console.log("responseemployee", result);
        return result;
      })
      .catch((error) => {
        console.log("erroremployee");
        return error;
      });
  }

  static async addEmployee(mode: AddEmployeeType): Promise<IcomonResponse> {
    return await api
      .post("/api/Employee/AddEmployee", {
        FirstName: mode.firstName,
        LastName: mode.lastName,
        Email: mode.email,
      })
      .then(function (response) {
        let result: IcomonResponse = response?.data;
        return result;
      })
      .catch((error) => {
        console.log(error);
        return error;
      });
  }
  static async updateEmployee(
    mode: UpdateEmployeeType
  ): Promise<IcomonResponse> {
    return await api
      .post("/api/Employee/UpdateEmployee", {
        FirstName: mode.firstName,
        LastName: mode.lastName,
        id: mode.id,
      })
      .then(function (response) {
        let result: IcomonResponse = response?.data;
        return result;
      })
      .catch((error) => {
        console.log(error.response.data);
        return error?.response?.data;
      });
  }
  static async deleteEmployee(id: number): Promise<IcomonResponse> {
    return await api
      .post("/api/Employee/DeleteEmployee", {
        Id: id,
      })
      .then(function (response) {
        let result: IcomonResponse = response?.data;
        return result;
      })
      .catch((error) => {
        console.log(error);
        return error;
      });
  }
}
