import { put, takeLatest } from "redux-saga/effects";
import { Mission } from "../../services/Misson";
import {
  ERRO_FILTER,
  FILTER_DATA,
  FILTER_DATA_LIST,
  SEARCH_DATA,
  SEARCH_DATA_LIST,
} from "../Actions/Actions";
import { ERRO_SEARCH } from "./../Actions/Actions";
import { mission } from "../../models/General";

function* searchGet(action: any) {
  try {
    const respons: mission = yield Mission.getMission();
    const data: string = respons.Data.filter((item: any) => {
      return item.Name.toLowerCase().includes(action.data.toLowerCase());
    });

    yield put({ type: SEARCH_DATA, data });
  } catch (err) {
    yield put({ type: ERRO_SEARCH, err });
    console.log("error", err);
  }
}
export function* Watachgetsearch() {
  yield takeLatest(SEARCH_DATA_LIST, searchGet);
}
function* filterMission(action: any) {
  try {
    const respons: mission = yield Mission.getMission();
    if (action.data === "name") {
      const data: string = respons.Data.sort((a: any, b: any) => {
        console.log(a)
        return a.Name < b.Name ? 1 : a.Name === b.Name ? 0 : -1;
      });
      yield put({ type: FILTER_DATA, data });
    }

    if (action.data === "date") {
      const data: string = respons.Data.sort((a: any, b: any) => {
        return a.StartTime < b.StartTime
          ? 1
          : a.StartTime === b.StartTime
          ? 0
          : -1;
      });
      yield put({ type: FILTER_DATA, data });
    }
  } catch (err) {
    yield put({ type: ERRO_FILTER, err });
    console.log("error", err);
  }
}
export function* WatachFiltermission() {
  yield takeLatest(FILTER_DATA_LIST, filterMission);
}
