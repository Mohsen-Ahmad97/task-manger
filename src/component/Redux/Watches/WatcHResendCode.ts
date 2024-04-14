import { put, takeEvery } from "redux-saga/effects";
import {
  DATA_RESENDCODE,
  ERRO_RESENDCODE,
  GET_DATA_RESENDCODE,
} from "../Actions/Actions";
import { Auth, IcomonResponse } from "../../services/Auth";



export function* WatchResendCode() {
  yield takeEvery(GET_DATA_RESENDCODE, informationResendCode);

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
}
