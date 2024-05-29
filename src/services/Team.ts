import { IcomonResponse, team } from "../models/General";
import api from "./Api";

export class Team {
  static async getteam(): Promise<IcomonResponse> {
    try {
      return await api

        .get(
          "https://task-follow-up.v2202305135856227727.ultrasrv.de/api/Team/Teams"
        )

        .then((response) => {
          const result: IcomonResponse = response.data;
          return result;
        });
    } catch (error: any) {
      console.log(error);
      return error;
    }
  }

  static async createteam(values: team): Promise<IcomonResponse> {
    console.log(values);
    try {
      return await api

        .post(
          "https://task-follow-up.v2202305135856227727.ultrasrv.de/api/Team/CreateTeam",
          {
            TeamName: values,
          }
        )
        .then((response) => {
          const result: IcomonResponse = response.data;
          console.log(response.data);
          return result;
        });
    } catch (error: any) {
      console.log(error);
      return error;
    }
  }
  static async deleteteam(id: number): Promise<IcomonResponse> {
    try {
      return await api

        .post(
          "https://task-follow-up.v2202305135856227727.ultrasrv.de/api/Team/DeleteTeam",
          {
            Id: id,
          }
        )
        .then((response) => {
          const result: IcomonResponse = response.data;
          console.log(response.data);
          return result;
        });
    } catch (error: any) {
      console.log(error);
      return error;
    }
  }
  static async updateteam(values: any): Promise<IcomonResponse> {
    try {
      return await api

        .post(
          "https://task-follow-up.v2202305135856227727.ultrasrv.de/api/Team/UpdateTeam",
          {
            Id: values.Id,
            TeamName: values.Name,
          }
        )
        .then((response) => {
          const result: IcomonResponse = response.data;
          console.log(response.data);
          return result;
        });
    } catch (error: any) {
      console.log(error);
      return error;
    }
  }
  static async addemployeetoteam(values: any): Promise<IcomonResponse> {
    console.log("v", values);
    try {
      return await api

        .post(
          "https://task-follow-up.v2202305135856227727.ultrasrv.de/api/Team/AddEmployeeToTeam",
          {
            TeamId: values.IdEmploe,
            IdsEmployee: [values.id],
          }
        )
        .then((response) => {
          const result: IcomonResponse = response.data;
          console.log(response.data);
          return result;
        });
    } catch (error: any) {
      console.log(error);
      return error;
    }
  }
  static async deleteemployeetoteam(values: any): Promise<IcomonResponse> {
    console.log("v", values);
    try {
      return await api

        .post(
          "https://task-follow-up.v2202305135856227727.ultrasrv.de/api/Team/RemoveEmployeeFromTeam",
          {
            TeamId: values.IdTeam,
            IdsEmployee: [values.IdEmploe],
          }
        )
        .then((response) => {
          const result: IcomonResponse = response.data;
          console.log(response.data);
          return result;
        });
    } catch (error: any) {
      console.log(error);
      return error;
    }
  }
}
