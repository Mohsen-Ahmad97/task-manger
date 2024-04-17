import { put, takeLatest } from "redux-saga/effects";
import {
  DATA_EMPLOYEE,
  ERRO_EMPLOYEE,
  GET_DATA_EMPLOYEE,
} from "../Actions/Actions";
import { Employee } from "./../../services/Employees";

interface data {
  Id: number;
  FirstName: string;
  LastName: string;
  Email: string;
  EmployeeTeam: [];
  EmployeeMissions: [];
}
interface employee {
  Code: number;
  Message: string;
  Result: Boolean;
  Data: data[];
}

export function* informationgetEmployee() {
  try {
    const data: employee = yield Employee.getEmployee();
    yield put({ type: DATA_EMPLOYEE, data });
    console.log("d", data);
  } catch (err: any) {
    yield put({ type: ERRO_EMPLOYEE, err });
    console.log("error", err.response.data);
  }
}

export function* WatachgetEmployee() {
  yield takeLatest(GET_DATA_EMPLOYEE, informationgetEmployee);
}
