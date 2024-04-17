import { put, takeEvery } from "redux-saga/effects";
import { DATA_UPDATE_EMPLOYEE, ERRO_UPDATE_EMPLOYEE, GET_UPDATE_EMPLOYEE } from "../Actions/Actions";
import { Employee } from './../../services/Employees';

function* informationupdateEmployee(action:any) {
  try {

    const data: string = yield Employee.updateEmployee(action.payload)

    yield put({ type: DATA_UPDATE_EMPLOYEE, data });
    console.log("d", data);
  } catch (err) {
    yield put({ type: ERRO_UPDATE_EMPLOYEE, err });
    console.log("error", err);
  }
}
export function* WatachupdateEmployee() {
    yield takeEvery(GET_UPDATE_EMPLOYEE, informationupdateEmployee);
  
  
  }