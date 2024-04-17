import {
  DATA_FORGET_PASSWORD,
  ERRO_FORGET_PASSWORD,
  GET_DATA_FORGET_PASSWORD,
} from "../Actions/Actions";
import { takeEvery } from "redux-saga/effects";
import { put } from "redux-saga/effects";
import { Auth } from "./../../services/Auth";

function* informationForgetPassword() {
  try {
    const data: string = yield Auth.forgetPassword();

    yield put({ type: DATA_FORGET_PASSWORD, data });
    console.log("d", data);
  } catch (err) {
    yield put({ type: ERRO_FORGET_PASSWORD, err });
    console.log("error", err);
  }
}

export function* WatachForgetPassword() {
  yield takeEvery(GET_DATA_FORGET_PASSWORD, informationForgetPassword);
}
