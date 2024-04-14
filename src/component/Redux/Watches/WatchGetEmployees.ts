import { put, takeEvery } from "redux-saga/effects";
import { DATA_EMPLOYEE, ERRO_EMPLOYEE, GET_DATA_EMPLOYEE } from "../Actions/Actions";
import { Employee } from './../../services/Employees';



export function* WatachgetEmployee() {
    yield takeEvery(GET_DATA_EMPLOYEE, informationgetEmployee);
  
    function* informationgetEmployee() {
      try {
        const data: string = yield Employee.getEmployee()
  
        yield put({ type: DATA_EMPLOYEE, data });
        console.log("d", data);
      } catch (err) {
        yield put({ type: ERRO_EMPLOYEE, err });
        console.log("error", err);
      }
    }
  }
  