import { put, takeEvery } from "redux-saga/effects";
import { DATA_ADD_EMPLOYEE, ERRO_ADD_EMPLOYEE, GET_ADD_EMPLOYEE } from "../Actions/Actions";
import { Employee } from './../../services/Employees';

export function* WatachaddEmployee() {
    yield takeEvery(GET_ADD_EMPLOYEE, informationaddEmployee);
  
    function* informationaddEmployee(action:any) {
      try {

        const data: string = yield Employee.addEmployee(action.payload)
  
        yield put({ type: DATA_ADD_EMPLOYEE, data });
        console.log("d", data);
      } catch (err) {
        yield put({ type: ERRO_ADD_EMPLOYEE, err });
        console.log("error", err);
      }
    }
  }