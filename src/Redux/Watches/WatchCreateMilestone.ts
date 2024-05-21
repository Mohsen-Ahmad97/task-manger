import { put, takeLatest } from "redux-saga/effects";
import { milistone } from "../../models/General";
import { Milistone } from "../../services/mIlistone";
import {
  CREATE_DATA_MILESTONE,
  DATA_CREATE_MILESTONE,
  DATA_MILISTONE,
  ERRO_CREATE_MILESTONE,
} from "../Actions/Actions";

function* MilestoneCreate(action: any) {
  try {
    const data: milistone = yield Milistone.createMilistone(
      action.payload.values
    );

    yield put({ type: DATA_CREATE_MILESTONE, data });
    console.log("d", data);
    const response: milistone = yield Milistone.getMilistone(action.payload.Id);
    yield put({ type: DATA_MILISTONE, response });
    console.log("res", response);
  } catch (err) {
    yield put({ type: ERRO_CREATE_MILESTONE, err });
    console.log("error", err);
  }
}
export function* WatachCreateMilestone() {
  yield takeLatest(CREATE_DATA_MILESTONE, MilestoneCreate);
}
