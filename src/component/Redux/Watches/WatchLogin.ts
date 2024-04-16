import { put, takeLatest } from "redux-saga/effects";
import {
  DATA_LOGIN,
  ERRO_LOGIN,
  GET_DATA_LOGIN,
} from "../Actions/Actions";
import { Auth, IcomonResponse } from "./../../services/Auth";

export function* WatachLogin() {
  yield takeLatest(GET_DATA_LOGIN, informationLogin);

  function* informationLogin(action: any) {
    try {
      const response: IcomonResponse = yield Auth.login(action.payload);

      yield put({ type: DATA_LOGIN, response });

      console.log("responselogin", response);
    } catch (err) {
      yield put({ type: ERRO_LOGIN, err });
      console.log("errorlogin", err);
    }
  }
}
