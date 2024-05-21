import { put, takeLatest } from "redux-saga/effects";
import {
  DATA_MILISTONE,
  ERRO_MILISTONE,
  GET_DATA_MILISTONE,
} from "../Actions/Actions";
import { Milistone } from "../../services/mIlistone";
import { milistone } from "../../models/General";

function* MilistoneGet(action: any) {
  try {
    const response: milistone = yield Milistone.getMilistone(action.payload);
    yield put({ type: DATA_MILISTONE, response });
    console.log("d", response);
  } catch (err) {
    yield put({ type: ERRO_MILISTONE, err });
    console.log("error", err);
  }
}
export function* WatachGetMilistone() {
  yield takeLatest(GET_DATA_MILISTONE, MilistoneGet);
}
