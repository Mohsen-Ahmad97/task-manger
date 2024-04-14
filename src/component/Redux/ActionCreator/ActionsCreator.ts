import { FieldType } from "../../5-Employees/AddEmployees";
import { Values } from "../../3-Register/Register";
import { FieldTyp } from "../../3-Register/ConfirmEmail";
import { FieldTy } from "../../3-Register/completeRegister";
import { FieldValue } from "../../4-Login/Login";
import { FieldT } from "../../4-Login/ResetPassword";
import { FieldType1 } from "./../../5-Employees/UpdateEmployee";
import {
  GET_ADD_EMPLOYEE,
  GET_DATA_COMPLETE_REGISTER,
  GET_DATA_CONFIRMEMAIL,
  GET_DATA_EMPLOYEE,
  GET_DATA_FORGET_PASSWORD,
  GET_DATA_LOGIN,
  GET_DATA_REGISTER,
  GET_DATA_RESENDCODE,
  GET_DATA_RESET_PASSWORD,
  GET_DELETE_EMPLOYEE,
  GET_UPDATE_EMPLOYEE,
} from "../Actions/Actions";

export function takeInformationRegister(data: Values) {
  return {
    type: GET_DATA_REGISTER,
    payload: data,
  };
}
export function takeInformationConfirmEmail(data: FieldTyp) {
  return {
    type: GET_DATA_CONFIRMEMAIL,
    payload: data,
  };
}

export function takeInformationResendCode() {
  return {
    type: GET_DATA_RESENDCODE,
  };
}

export function takeInformationCompleteRegister(data: FieldTy) {
  return {
    type: GET_DATA_COMPLETE_REGISTER,
    payload: data,
  };
}

export function takeInformationLogin(data: FieldValue) {
  return {
    type: GET_DATA_LOGIN,
    payload: data,
  };
}

export function takeInformationFrogetPassword() {
  return {
    type: GET_DATA_FORGET_PASSWORD,
  };
}
export function takeInformationResetPassword(data: FieldT) {
  return {
    type: GET_DATA_RESET_PASSWORD,
    payload: data,
  };
}
export function takegetEmployee() {
  return {
    type: GET_DATA_EMPLOYEE,
  };
}
export function takeAddEmployees(data: FieldType) {
  return {
    type: GET_ADD_EMPLOYEE,
    payload: data,
  };
}
export function takeUpdateEmployees(data: FieldType1) {
  return {
    type: GET_UPDATE_EMPLOYEE,
    payload: data,
  };
}
export function takeDeleteEmployees(data: number) {
  return {
    type: GET_DELETE_EMPLOYEE,
    payload: data,
  };
}
