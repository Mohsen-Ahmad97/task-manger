import { put, takeEvery } from "redux-saga/effects";
import { DATA_DELETE_EMPLOYEE, ERRO_DELETE_EMPLOYEE, GET_DELETE_EMPLOYEE } from "../Actions/Actions";
import { Employee } from './../../services/Employees';

function* informationdeleteEmployee(action:any) {
  try {
    const data: string = yield Employee.deleteEmployee(action.payload)

    yield put({ type: DATA_DELETE_EMPLOYEE, data });
    console.log("d", data);
  } catch (err) {
    yield put({ type: ERRO_DELETE_EMPLOYEE, err });
    console.log("error", err);
  }
}
export function* WatachdeleteEmployee() {
    yield takeEvery(GET_DELETE_EMPLOYEE, informationdeleteEmployee);
  

    
  }