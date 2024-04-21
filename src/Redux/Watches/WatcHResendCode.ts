import { put, takeEvery } from "redux-saga/effects";
import {
  DATA_RESENDCODE,
  ERRO_RESENDCODE,
  GET_DATA_RESENDCODE,
} from "../Actions/Actions";
import { IcomonResponse } from "../../models/General";
import { Auth } from "../../services/Auth";



function* informationResendCode() {
  try {
    const data: IcomonResponse = yield Auth.resendCode();

    yield put({ type: DATA_RESENDCODE, data });
    console.log("d", data);
  } catch (err) {
    yield put({ type: ERRO_RESENDCODE, err });
    console.log("error", err);
  }
}
export function* WatchResendCode() {
  yield takeEvery(GET_DATA_RESENDCODE, informationResendCode);

 
}
