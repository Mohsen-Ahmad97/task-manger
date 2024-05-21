import { put, takeLatest } from "redux-saga/effects";
import { milistone } from "../../models/General";
import { Milistone } from "../../services/mIlistone";
import {
  DATA_MILISTONE,
  ERRO_UPDATE_MILESTONE,
  UPDATE_DATA_MILESTONE,
  UPDATE_MILESTONE,
} from "../Actions/Actions";

function* MilestonenUpdate(action: any) {
  try {
    const data: milistone = yield Milistone.updateMilistone(action.payload.values);

    yield put({ type: UPDATE_MILESTONE, data });
    console.log("d", data);
    const response: milistone = yield Milistone.getMilistone(action.payload.Id);
    yield put({ type: DATA_MILISTONE, response });
    console.log("d", response);
  } catch (err) {
    yield put({ type: ERRO_UPDATE_MILESTONE, err });
    console.log("error", err);
  }
}
export function* WatachUpdateMilestone() {
  yield takeLatest(UPDATE_DATA_MILESTONE, MilestonenUpdate);
}
