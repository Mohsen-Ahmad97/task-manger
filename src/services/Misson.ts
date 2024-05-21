import { mission } from "../models/General";
import api from "./Api";

export class Mission {
  static async getMission(): Promise<mission> {
    return await api
      .get(
        "https://task-follow-up.v2202305135856227727.ultrasrv.de/api/Mission"
      )
      .then(function (response) {
        let result: mission = response.data;
        console.log("responsegetmission", result);
        return result;
      })
      .catch(function (error) {
        console.log("errormission", error);
        return error;
      });
  }
  static async createMission(values: mission): Promise<mission> {
    return await api
      .post(
        "https://task-follow-up.v2202305135856227727.ultrasrv.de/api/Mission/Create",
        {
          MissionName: values.Name,
          StartTime: values.StartTime,
          EndTime: values.EndTime,
          EmployeeIds: [values.EmployeeIds],
        }
      )
      .then(function (response) {
        let result: mission = response.data;
        console.log("responsegetmission", result);
        return result;
      })
      .catch(function (error) {
        console.log("errormission", error.response.data);
        return error.response.data;
      });
  }
  static async updateMission(values: mission): Promise<mission> {
    return await api
      .post(
        "https://task-follow-up.v2202305135856227727.ultrasrv.de/api/Mission/Update",
        {
          id: values.Id,
          MissionName: values.Name,
          StartTime: values.StartTime,
          EndTime: values.EndTime,
          EmployeeIds: [values.EmployeeIds],
        }
      )
      .then(function (response) {
        let result: mission = response.data;
        console.log("responseupdatetmission", result);
        return result;
      })
      .catch(function (error) {
        console.log("errormission", error.response.data);
        return error.response.data;
      });
  }
  static async deleteMission(id: number): Promise<mission> {
    return await api
      .post(
        "https://task-follow-up.v2202305135856227727.ultrasrv.de/api/Mission/Delete",
        {
          id: id,
        }
      )
      .then(function (response) {
        let result: mission = response.data;
        console.log("responsedeletetmission", result);
        return result;
      })
      .catch(function (error) {
        console.log("errormission", error.response.data);
        return error.response.data;
      });
  }
}
