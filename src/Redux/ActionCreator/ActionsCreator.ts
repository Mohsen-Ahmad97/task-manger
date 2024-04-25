import { Type } from "react-toastify/dist/utils";
import {
  AddEmployeeType,
  CompleteType,
  ConfirmType,
  LoginType,
  RegisterType,
  ResetType,
  UpdateEmployeeType,
} from "../../models/Modules";
import {
  CREATE_DATA_MILESTONE,
  CREATE_DATA_MISSION,
  DELETE_DATA_MILESTONE,
  DELETE_DATA_MISSION,
  GET_ADD_EMPLOYEE,
  GET_DATA_COMPLETE_REGISTER,
  GET_DATA_CONFIRMEMAIL,
  GET_DATA_EMPLOYEE,
  GET_DATA_FORGET_PASSWORD,
  GET_DATA_LOGIN,
  GET_DATA_MILISTONE,
  GET_DATA_MISSION,
  GET_DATA_REGISTER,
  GET_DATA_RESENDCODE,
  GET_DATA_RESET_PASSWORD,
  GET_DELETE_EMPLOYEE,
  GET_UPDATE_EMPLOYEE,
  UPDATE_DATA_MILESTONE,
  UPDATE_DATA_MISSION,
} from "../Actions/Actions";
import { milistone, mission } from "../../models/General";

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
export function takeMission() {
  return {
    type: GET_DATA_MISSION,
  };
}
export function takeAddmission(values: mission) {
  return {
    type: CREATE_DATA_MISSION,
    payload: values,
  };
}
export function takeUpdatemission(values: mission) {
  return {
    type: UPDATE_DATA_MISSION,
    payload: values,
  };
}
export function takeDeleteMission(ID: number) {
  return {
    type: DELETE_DATA_MISSION,
    payload: ID,
  };
}
export function takeGetMilistone(id: number) {
  console.log(id);
  return {
    type: GET_DATA_MILISTONE,
    payload: id,
  };
}
export function takeAddmilestone(values: milistone) {
  return {
    type: CREATE_DATA_MILESTONE,
    payload: values,
  };
}
export function takeUpdatemilestone(values: milistone) {
  return {
    type: UPDATE_DATA_MILESTONE,
    payload: values,
  };
}
export function takeDeletemilestone(Id:number) {
  return {
    type: DELETE_DATA_MILESTONE,
    payload: Id
  };
}
