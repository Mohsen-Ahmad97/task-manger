import { AddEmployeeType, CompleteType, ConfirmType, LoginType, RegisterType, ResetType, UpdateEmployeeType } from "../../models/Modules";
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

;

export function takeInformationRegister(data: RegisterType) {
  return {
    type: GET_DATA_REGISTER,
    payload: data,
  };
}
export function takeInformationConfirmEmail(data: ConfirmType) {
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

export function takeInformationCompleteRegister(data: CompleteType) {
  return {
    type: GET_DATA_COMPLETE_REGISTER,
    payload: data,
  };
}

export function takeInformationLogin(data: LoginType) {
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
export function takeInformationResetPassword(data: ResetType) {
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
export function takeAddEmployees(data: AddEmployeeType) {
  return {
    type: GET_ADD_EMPLOYEE,
    payload: data,
  };
}
export function takeUpdateEmployees(data: UpdateEmployeeType) {
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
