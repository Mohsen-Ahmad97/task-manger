import { put, takeEvery } from "redux-saga/effects";
import {
  DATA_EMPLOYEE,
  DATA_UPDATE_EMPLOYEE,
  ERRO_UPDATE_EMPLOYEE,
  GET_UPDATE_EMPLOYEE,
} from "../Actions/Actions";
import { IcomonResponse } from "../../models/General";
import { Employee } from "../../services/Employees";
import { employee } from "../../models/Modules";

function* informationupdateEmployee(action: any) {
  try {
    const response: IcomonResponse = yield Employee.updateEmployee(action.payload);

    yield put({ type: DATA_UPDATE_EMPLOYEE, response });
    const data: IcomonResponse = yield Employee.getEmployee();
    console.log("d", data);
    yield put({ type: DATA_EMPLOYEE, data });
  } catch (err) {
    yield put({ type: ERRO_UPDATE_EMPLOYEE, err });
    console.log("error", err);
  }
}
export function* WatachupdateEmployee() {
  yield takeEvery(GET_UPDATE_EMPLOYEE, informationupdateEmployee);
}
