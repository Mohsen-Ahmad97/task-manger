import { put, takeLatest } from "redux-saga/effects";

import { Mission } from "../../services/Misson";
import {
  DATA_EMPLOYEE,
  DATA_MISSION,
  ERRO_MISSION,
  GET_DATA_MISSION,
} from "../Actions/Actions";
import { IcomonResponse, mission } from "../../models/General";
import { Employee } from "../../services/Employees";


function* MissionGet(action: any) {
  try {
    const response: mission = yield Mission.getMission();

    yield put({ type: DATA_MISSION, response });
    const data: IcomonResponse = yield Employee.getEmployee();
    yield put({ type: DATA_EMPLOYEE, data });
    console.log("d", response);
  } catch (err) {
    yield put({ type: ERRO_MISSION, err });
    console.log("error", err);
  }
}
export function* WatachGetMission() {
  yield takeLatest(GET_DATA_MISSION, MissionGet);
}
