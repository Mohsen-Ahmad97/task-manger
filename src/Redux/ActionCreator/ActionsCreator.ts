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
  ADD_EMPLOYEE_TEAM,
  ADD_EMPLOYEE_TEAM_DATA,
  CREATE_DATA_MILESTONE,
  CREATE_DATA_MISSION,
  DELETE_DATA_MILESTONE,
  DELETE_DATA_MISSION,
  DELETE_EMPLOYEE_TEAM_DATA,
  DELETE_TEAM,
  FILTER_DATA_LIST,
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
  SEARCH_DATA_LIST,
  SEARCH_TEAM,
  TAEM_CREATE,
  TAEM_DATA,
  UPDATE_DATA_MILESTONE,
  UPDATE_DATA_MISSION,
  UPDATE_TEAM,

} from "../Actions/Actions";
import { mission, team, values  } from "../../models/General";

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
  return {
    type: GET_DATA_MILISTONE,
    payload: id,
  };
}
export function takeAddmilestone(data: any) {
  return {
    type: CREATE_DATA_MILESTONE,
    payload: data,
  };
}

export function takeUpdatemilestone(values: any) {
  return {
    type: UPDATE_DATA_MILESTONE,
    payload: values,
  };
}
export function takeDeletemilestone(data: any) {
  return {
    type: DELETE_DATA_MILESTONE,
    payload: data,
  };
}
export function changelist(values: any) {
  return {
    type: SEARCH_DATA_LIST,
    data: values,
  };
}
export function filtermission(values: any) {
  return {
    type: FILTER_DATA_LIST,
    data: values,
  };
}
export function getteam() {
  return {
    type: TAEM_DATA,
  };
}
export function addteam(values: team) {
  return {
    type: TAEM_CREATE,
    data: values,
  };
}
export function Deleteteam(id: number) {
  return {
    type: DELETE_TEAM,
    data: id,
  };
}

export function UpdateTeam(values: team) {
  return {
    type: UPDATE_TEAM,
    data: values,
  };
}
export function addemployeetoteam(values: team) {

  return {
    type: ADD_EMPLOYEE_TEAM_DATA,
    data: values,
  };
}

export function Deleteemployeeteam(values:team) {

  return {
    type: DELETE_EMPLOYEE_TEAM_DATA,
    data: values,
  };
}
export function searchByname(values: team) {

  return {
    type: SEARCH_TEAM,
    data: values,
  };
}
// export function switchByname(values: any) {

//   return {
//     type: SWITCH_TEAM,
//     data: values,
//   };
// }
