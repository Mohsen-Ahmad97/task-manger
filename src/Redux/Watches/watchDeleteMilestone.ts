import { put, takeLatest } from "redux-saga/effects";
import { milistone } from "../../models/General";
import { Milistone } from "../../services/mIlistone";
import {
    DATA_MILISTONE,
  DELETE_DATA_MILESTONE,
  DELETE_MILESTONE,
  ERRO_DELETE_MILESTONE,
} from "../Actions/Actions";

function* MilestoneDelete(action: any) {
  try {
    const data: milistone = yield Milistone.deleteMilistone(action.payload)
    yield put({ type: DELETE_MILESTONE, data });
    console.log("d", data);
    const response:milistone = yield Milistone.getMilistone(action.payload)
      yield put({ type: DATA_MILISTONE, response});
  } catch (err) {
    yield put({ type: ERRO_DELETE_MILESTONE, err });
    console.log("error", err);
  }
}
export function* WatachDeleteMilestone() {
  yield takeLatest(DELETE_DATA_MILESTONE, MilestoneDelete);
}
