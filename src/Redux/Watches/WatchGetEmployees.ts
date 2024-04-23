import { put, takeLatest } from "redux-saga/effects";
import {
  DATA_EMPLOYEE,
  ERRO_EMPLOYEE,
  GET_DATA_EMPLOYEE,
} from "../Actions/Actions";
import { IcomonResponse } from "../../models/General";
import { Employee } from "../../services/Employees";




export function* informationgetEmployee() {
  try {
    const data: IcomonResponse = yield Employee.getEmployee();
     
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
