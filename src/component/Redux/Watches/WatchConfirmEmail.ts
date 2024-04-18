import { put, takeEvery } from "redux-saga/effects";
import {
  DATA_CONFIRMEMAIL,
  ERRO_CONFIRMEMAIL,
  FAILD_CONFIRM,
  GET_DATA_CONFIRMEMAIL,
} from "../Actions/Actions";

import { Auth} from "../../services/Auth";
import { IcomonResponse } from "../../Models/General";
function* informationConfirmEmail(action: any) {
  try {
    const data: IcomonResponse= yield Auth.confirmEmail(action.payload);

    yield put({ type: DATA_CONFIRMEMAIL, data });

    yield put({ type: FAILD_CONFIRM, data });
    console.log("d", data);
  } catch (err) {
    yield put({ type: ERRO_CONFIRMEMAIL, err });
    console.log("error", err);
  }
}
export function* WatachConfirmEmail() {
  yield takeEvery(GET_DATA_CONFIRMEMAIL, informationConfirmEmail);
}
