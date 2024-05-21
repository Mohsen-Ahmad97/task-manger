import { put, takeEvery } from "redux-saga/effects";
import {
  ADD_EMPLOYEE_TEAM,
  ADD_EMPLOYEE_TEAM_DATA,
  CREATE_DATA_TEAM,
  DATA_EMPLOYEE,
  DELETE_EMPLOYEE_TEAM,
  DELETE_EMPLOYEE_TEAM_DATA,
  DELETE_TEAM,
  DELETE_TEAM_DATA,
  ERRO_ADD_EMPLOEE_TEAM,
  ERRO_DELETE_TAEAM,
  ERRO_SEARCH_TEAM,
  ERRO_TAEM,
  ERRO_TAEM_CREATE,
  ERRO_UPDATE_TAEAM,
  GET_DATA_TEAM,
  SEARCH_DATA_TEAM,
  SEARCH_TEAM,
  TAEM_CREATE,
  TAEM_DATA,
  UPDATE_TEAM_DATA,
} from "../Actions/Actions";
import { IcomonResponse } from "../../models/General";
import { Team } from "../../services/Team";
import { UPDATE_TEAM } from "./../Actions/Actions";
import { Employee } from "../../services/Employees";

function* geteam() {
  try {
    const response: IcomonResponse = yield Team.getteam();

    console.log("d", response);
    yield put({ type: GET_DATA_TEAM, response });
    const data: IcomonResponse = yield Employee.getEmployee();

    yield put({ type: DATA_EMPLOYEE, data });
  } catch (err) {
    yield put({ type: ERRO_TAEM, err });
    console.log("error", err);
  }
}
export function* Watachgettaeam() {
  yield takeEvery(TAEM_DATA, geteam);
}

function* createteam(action: any) {
  try {
    const data: IcomonResponse = yield Team.createteam(action.data);
    yield put({ type: CREATE_DATA_TEAM, data });
    console.log("ddd", data);

    const response: IcomonResponse = yield Team.getteam();
    yield put({ type: GET_DATA_TEAM, response });
  } catch (err) {
    yield put({ type: ERRO_TAEM_CREATE, err });
    console.log("error", err);
  }
}
export function* Watachcreatetaeam() {
  yield takeEvery(TAEM_CREATE, createteam);
}
function* deleteteteam(action: any) {
  try {
    const data: IcomonResponse = yield Team.deleteteam(action.data);
    yield put({ type: DELETE_TEAM_DATA, data });
    console.log("ddd", data);

    const response: IcomonResponse = yield Team.getteam();
    yield put({ type: GET_DATA_TEAM, response });
  } catch (err) {
    yield put({ type: ERRO_DELETE_TAEAM, err });
    console.log("error", err);
  }
}
export function* Watachdeleteteam() {
  yield takeEvery(DELETE_TEAM, deleteteteam);
}
function* updateteam(action: any) {
  try {
    const data: IcomonResponse = yield Team.updateteam(action.data);
    console.log("action is", action);
    yield put({ type: UPDATE_TEAM_DATA, data });
    console.log("update", data);

    const response: IcomonResponse = yield Team.getteam();
    yield put({ type: GET_DATA_TEAM, response });
  } catch (err) {
    yield put({ type: ERRO_UPDATE_TAEAM, err });
    console.log("error", err);
  }
}
export function* Watachupdateteam() {
  yield takeEvery(UPDATE_TEAM, updateteam);
}

function* addemployeetoteam(action: any) {
  try {
    const data: IcomonResponse = yield Team.addemployeetoteam(
      action.data.values
    );

    yield put({ type: ADD_EMPLOYEE_TEAM, data });
    console.log("add", data);

    const response: IcomonResponse = yield Team.getteam();
    console.log("response", response);
    yield put({ type: GET_DATA_TEAM, response });
  } catch (err) {
    yield put({ type: ERRO_ADD_EMPLOEE_TEAM, err });
    console.log("error", err);
  }
}
export function* Watachaddemployeetoteam() {
  yield takeEvery(ADD_EMPLOYEE_TEAM_DATA, addemployeetoteam);
}
function* deleteemployeetoteam(action: any) {
  try {
    const data: IcomonResponse = yield Team.deleteemployeetoteam(
      action.data.values
    );

    yield put({ type: DELETE_EMPLOYEE_TEAM, data });
    console.log("add", data);

    const response: IcomonResponse = yield Team.getteam();
    console.log("response", response);
    yield put({ type: GET_DATA_TEAM, response });
  } catch (err) {
    yield put({ type: ERRO_ADD_EMPLOEE_TEAM, err });
    console.log("error", err);
  }
}
export function* Watachdeleteemployeetoteam() {
  yield takeEvery(DELETE_EMPLOYEE_TEAM_DATA, deleteemployeetoteam);
}

function* serachteam(action: any) {
  try {
    const data: IcomonResponse = yield Team.getteam();
    console.log("data is ", data);
    const search = data.Data.filter((item: any) => {
      console.log("data is ", item.Name);
      return item.Name.includes(action.data);
    });
    console.log("data is ", search);
    yield put({ type: SEARCH_DATA_TEAM, search });
  } catch (err) {
    yield put({ type: ERRO_SEARCH_TEAM, err });
    console.log("error", err);
  }
}
export function* Watachsearchteam() {
  yield takeEvery(SEARCH_TEAM, serachteam);
}



// function* switchteam(action: any) {
//   try {
//     const data: IcomonResponse = yield Team.getteam();
//     if(action.data==="true"){
//       console.log(action.data)
//     const search: string = data.Data.sort((a: any, b: any) => {
//       console.log(a);
//       return a.Id < b.Id ? 1 : a.Id === b.Id ? 0 : -1;
//     });
//     yield put({ type: SWITCH_DATA_TEAM, search });
//   }
// // else if(action.data==="")
   
//   } catch (err) {
//     yield put({ type: ERRO_SEARCH_TEAM, err });
//     console.log("error", err);
//   }
// }
// export function* Watachswitchteam() {
//   yield takeEvery(SWITCH_TEAM, switchteam);
// }
