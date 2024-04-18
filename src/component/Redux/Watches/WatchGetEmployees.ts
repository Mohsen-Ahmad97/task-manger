import { put, takeLatest } from "redux-saga/effects";
import {
  DATA_EMPLOYEE,
  ERRO_EMPLOYEE,
  GET_DATA_EMPLOYEE,
} from "../Actions/Actions";
import { Employee } from "./../../services/Employees";
import { IcomonResponse} from "../../Models/General";



export function* informationgetEmployee() {
  try {
    const data: IcomonResponse = yield Employee.getEmployee();
      console.log("d", data);
    yield put({ type: DATA_EMPLOYEE, data });
  
  } catch (err: any) {
    yield put({ type: ERRO_EMPLOYEE, err });
    console.log("error", err.response.data);
  }
}

export function* WatachgetEmployee() {
  yield takeLatest(GET_DATA_EMPLOYEE, informationgetEmployee);
}
