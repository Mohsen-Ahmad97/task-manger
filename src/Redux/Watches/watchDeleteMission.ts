import { put, takeLatest } from "redux-saga/effects";
import { Mission } from "../../services/Misson";
import {
  DATA_MISSION,
  DELETE_DATA_MISSION,
  DELETE_MISSION,
  ERRO_DELETE_MISSION,
} from "../Actions/Actions";
import { mission } from "../../models/General";

function* MissionDelete(action: any) {
  try {
    const data: mission = yield Mission.deleteMission(action.payload);
    yield put({ type: DELETE_MISSION, data });
    console.log("d", data);
    const response: mission = yield Mission.getMission();
    yield put({ type: DATA_MISSION, response });
  } catch (err) {
    yield put({ type: ERRO_DELETE_MISSION, err });
    console.log("error", err);
  }
}
export function* WatachDeleteMission() {
  yield takeLatest(DELETE_DATA_MISSION, MissionDelete);
}
