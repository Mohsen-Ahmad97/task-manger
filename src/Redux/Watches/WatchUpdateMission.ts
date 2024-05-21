import { put, takeLatest } from "redux-saga/effects";

import { Mission } from "../../services/Misson";
import {
  DATA_MISSION,
  ERRO_UPDATE_MISSION,
  UPDATE_DATA_MISSION,
  UPDATE_MISSION,
} from "../Actions/Actions";
import { mission } from "../../models/General";

function* MissionUpdate(action: any) {
  try {
    const data: mission = yield Mission.updateMission(action.payload);

    yield put({ type: UPDATE_MISSION, data });
    console.log("d", data);
    const response: mission = yield Mission.getMission();
    yield put({ type: DATA_MISSION, response });
  } catch (err) {
    yield put({ type: ERRO_UPDATE_MISSION, err });
    console.log("error", err);
  }
}
export function* WatachUpdateMission() {
  yield takeLatest(UPDATE_DATA_MISSION, MissionUpdate);
}
