import { put, takeEvery } from "redux-saga/effects";
import {
  DATA_DELETE_EMPLOYEE,
  DATA_EMPLOYEE,
  ERRO_DELETE_EMPLOYEE,
  GET_DELETE_EMPLOYEE,
} from "../Actions/Actions";

import { Employee } from "../../services/Employees";
import { IcomonResponse } from "../../models/General";
import { employee } from "../../models/Modules";


function* informationdeleteEmployee(action: any) {
  try {
    const response: employee = yield Employee.deleteEmployee(action.payload);

    yield put({ type: DATA_DELETE_EMPLOYEE, response });
    console.log("d", response);
    const data: IcomonResponse = yield Employee.getEmployee();

    yield put({ type: DATA_EMPLOYEE, data });
  } catch (err) {
    yield put({ type: ERRO_DELETE_EMPLOYEE, err });
    console.log("error", err);
  }
}
export function* WatachdeleteEmployee() {
  yield takeEvery(GET_DELETE_EMPLOYEE, informationdeleteEmployee);
}
