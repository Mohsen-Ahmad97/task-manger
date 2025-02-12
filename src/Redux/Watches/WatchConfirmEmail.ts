import { put, takeEvery } from "redux-saga/effects";
import {
  DATA_CONFIRMEMAIL,
  ERRO_CONFIRMEMAIL,
  
  GET_DATA_CONFIRMEMAIL,
} from "../Actions/Actions";
import { IcomonResponse } from "../../models/General";
import { Auth } from "../../services/Auth";


function* informationConfirmEmail(action: any) {
  try {
    const data: IcomonResponse= yield Auth.confirmEmail(action.payload);

    yield put({ type: DATA_CONFIRMEMAIL, data });
    console.log("d", data);
  } catch (err:any) {
    yield put({ type: ERRO_CONFIRMEMAIL, err });
    console.log("error", err);
  }
}
export function* WatachConfirmEmail() {
  yield takeEvery(GET_DATA_CONFIRMEMAIL, informationConfirmEmail);
}
