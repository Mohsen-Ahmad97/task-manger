import { put, takeLatest } from "redux-saga/effects";
import { Mission } from "../../services/Misson";
import {
  CREATE_DATA_MISSION,
  DATA_CREATE_MISSION,
  DATA_MISSION,
  ERRO_CREATE_MISSION,
} from "../Actions/Actions";
import { mission } from "../../models/General";

function* MissionCreate(action: any) {
  try {
    const data: mission = yield Mission.createMission(action.payload);

    yield put({ type: DATA_CREATE_MISSION, data });
    console.log("d", data);
    const response: mission = yield Mission.getMission();
    yield put({ type: DATA_MISSION, response });
  } catch (err) {
    yield put({ type: ERRO_CREATE_MISSION, err });
    console.log("error", err);
  }
}
export function* WatachCreateMission() {
  yield takeLatest(CREATE_DATA_MISSION, MissionCreate);
}
