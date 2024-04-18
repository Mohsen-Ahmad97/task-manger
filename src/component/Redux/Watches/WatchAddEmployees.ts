import { put, takeEvery } from "redux-saga/effects";
import {
  DATA_ADD_EMPLOYEE,
  DATA_EMPLOYEE,
  ERRO_ADD_EMPLOYEE,
  GET_ADD_EMPLOYEE,
} from "../Actions/Actions";
import { Employee } from "./../../services/Employees";
import { IcomonResponse } from "../../Models/General";
import { employee } from "../../Models/Modules";
function* informationaddEmployee(action: any) {
  try {
    const response: employee = yield Employee.addEmployee(action.payload);
     
    yield put({ type: DATA_ADD_EMPLOYEE, response });
    console.log("d", response);
    const data: IcomonResponse = yield Employee.getEmployee();
    yield put({ type: DATA_EMPLOYEE, data });
  } catch (err) {
    yield put({ type: ERRO_ADD_EMPLOYEE, err });
    console.log("error", err);
  }
}
export function* WatachaddEmployee() {
  yield takeEvery(GET_ADD_EMPLOYEE, informationaddEmployee);
}
