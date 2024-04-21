import createSagaMiddleware from "@redux-saga/core";
import {
  applyMiddleware,
  combineReducers,
  createStore,
} from "@reduxjs/toolkit";
import Saga from "./Saga";

import registerReducer from "./Reducers/registerReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import confirmReducer from "./Reducers/CnfirmEmailReducer";
import ResendCodeReducer from "./Reducers/ResendCodeReducer";
import completeRegisterReducer from "./Reducers/CompleteRegisterReducer";
import loginReducer from "./Reducers/LoginReducer";
import forgetPasswordReducer from "./Reducers/ForgetPasswordReducer";
import ResetPassordReducer from "./Reducers/ResetPasswordReducer";
import getEmployeeReducer from "./Reducers/getEmployeeReducer";
import MessageReducer from "./Reducers/MessageReducer";
const sagaMiddleware = createSagaMiddleware();
let middleware = [sagaMiddleware];

const rootreducer = combineReducers({
  re: registerReducer,
  conf:confirmReducer,
  rese:ResendCodeReducer,
  comp:completeRegisterReducer,
  log:loginReducer,
  forg:forgetPasswordReducer,
  reset:ResetPassordReducer,
  getempl:getEmployeeReducer,
  message:MessageReducer
});
const store = createStore(
  rootreducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

sagaMiddleware.run(Saga);
export default store;
