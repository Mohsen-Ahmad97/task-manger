import { milistone } from "../models/General";
import api from "./Api";

export class Milistone {
  static async getMilistone(id: number): Promise<milistone> {
    console.log("id is", id);
    return await api
      .post(
        "https://task-follow-up.v2202305135856227727.ultrasrv.de/api/Milestone",
        {
          TaskId: id,
        }
      )
      .then(function (response) {
        let result: milistone = response.data;
        console.log("responsegetmilistone", result);
        return result;
      })
      .catch(function (error) {
        console.log("errormilistone", error.response);
        return error.response;
      });
  }
  static async createMilistone(vlaues: milistone): Promise<milistone> {
    console.log("v id", vlaues);
    return await api
      .post(
        "https://task-follow-up.v2202305135856227727.ultrasrv.de/api/Milestone/Create",
        {
          description: vlaues.description,
          startTime: vlaues.StartTime,
          endTime: vlaues.EndTime,
          taskId: vlaues.taskId,
        }
      )
      .then(function (response) {
        let result: milistone = response.data;
        console.log("responsecreatemilistone", result);
        return result;
      })
      .catch(function (error) {
        console.log("errormilistone", error.response);
        return error.response;
      });
  }
  static async updateMilistone(vlaues: milistone): Promise<milistone> {
    return await api
      .post(
        "https://task-follow-up.v2202305135856227727.ultrasrv.de/api/Milestone/Update",
        {
          Id: vlaues.Id,
          Description: vlaues.description,
          StartTime: vlaues.StartTime,
          EndTime: vlaues.EndTime,
        }
      )
      .then(function (response) {
        let result: milistone = response.data;
        console.log("responseupdatemilistone", result);
        return result;
      })
      .catch(function (error) {
        console.log("errormilistone", error.response);
        return error.response;
      });
  }
  static async deleteMilistone(id:number): Promise<milistone> {
    return await api
      .post(
        "https://task-follow-up.v2202305135856227727.ultrasrv.de/api/Milestone/Delete",
        {
          Id: id
         
        }
      )
      .then(function (response) {
        let result: milistone = response.data;
        console.log("responsedeletemilistone", result);
        return result;
      })
      .catch(function (error) {
        console.log("errormilistone", error.response);
        return error.response;
      });
  }
}
