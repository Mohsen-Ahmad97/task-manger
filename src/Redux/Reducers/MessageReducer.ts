import { toast } from "react-toastify";
import { DELETE_TEAM_DATA, UPDATE_TEAM, UPDATE_TEAM_DATA } from "../Actions/Actions";

import {
  CREATE_DATA_TEAM,
  DATA_ADD_EMPLOYEE,
  DATA_COMPLETE_REGISTER,
  DATA_CONFIRMEMAIL,
  DATA_CREATE_MILESTONE,
  DATA_CREATE_MISSION,
  DATA_DELETE_EMPLOYEE,
  DATA_EMPLOYEE,
  DATA_FORGET_PASSWORD,
  DATA_LOGIN,
  DATA_MILISTONE,
  DATA_MISSION,
  DATA_REGISTER,
  DATA_RESENDCODE,
  DATA_RESET_PASSWORD,
  DATA_UPDATE_EMPLOYEE,
  DELETE_MILESTONE,
  DELETE_MISSION,
  UPDATE_MILESTONE,
  UPDATE_MISSION,
} from "../Actions/Actions";

interface state {
  message: string;
  isSuccess: boolean;
}

const initial: state = {
  message: "",
  isSuccess: false,
};

const MessageReducer = (state = initial, action: any) => {
  console.log(action);
  switch (action.type) {
    case DATA_REGISTER:
      return {
        ...state,
        message: action.data.Message,
        isSuccess: action.data.Code === 200,
      };
    case DATA_LOGIN:
      return {
        ...state,
        isSuccess: action.response.Code === 200,
      };
    case DATA_RESENDCODE:
      return {
        ...state,
        message: action.data.Message,
        isSuccess: action.data.Code === 200,
        
      };
    case DATA_COMPLETE_REGISTER:
      return { ...state, message: action.data.Message };
    case DATA_FORGET_PASSWORD:
      return {
        ...state,
        message: action.data.Message,
        isSuccess: action.data.Code === 200,
      
      };
    case DATA_RESET_PASSWORD:
      return {
        ...state,
        message: action.data.Message,
        isSuccess: action.data.Code === 200,
      };
    case DATA_CONFIRMEMAIL:
      return {
        ...state,
        message: action.data.Message,
        isSuccess: action.data.Code === 200,
      };
    case DATA_EMPLOYEE:
      return { ...state, isSuccess: action.data.Code === 200 };
    case DATA_ADD_EMPLOYEE:
      return {
        ...state,
        message: action.response.Message,
        isSuccess: action.response.Code === 200,
      };
    case DATA_UPDATE_EMPLOYEE:
      return {
        ...state,
        message: action.response.Message,
        isSuccess: action.response.Code === 200,
      };
    case DATA_DELETE_EMPLOYEE:
      return {
        ...state,
        message: action.response.Message,
        isSuccess: action.response.Code === 200,
      };
    case DATA_MISSION:
      return {
        ...state,
        isSuccess: action.response.Code === 200,
      };
    case UPDATE_MISSION:
      return {
        ...state,
        message: action.data.Message,
        isSuccess: action.data.Code === 200,
      };
    case DELETE_MISSION:
      return {
        ...state,
        message: action.data.Message,
        isSuccess: action.data.Code === 200,
      };
    case DATA_CREATE_MISSION:
      return {
        ...state,
        message: action.data.Message,
        isSuccess: action.data.Code === 200,
      };

    case DATA_CREATE_MILESTONE:
      return {
        ...state,
        payload: action.data.Data,
        message: action.data.Message,
        isSuccess: action.data.Code === 200,
      };

    case DATA_MILISTONE:
      return {
        ...state,
        isSuccess: action.response.Code === 200,
      };
    case UPDATE_MILESTONE:
      return {
        ...state,
        message: action.data.Message,
        isSuccess: action.data.Code === 200,
      };
    case DELETE_MILESTONE:
      return {
        ...state,
        message: action.data.Message,
        isSuccess: action.data.Code === 200,
      };
    case CREATE_DATA_TEAM:
      return {
        ...state,
        isLoading: false,
        message: action.data.Message,
        isSuccess: action.data.Code === 200,
      };
      case UPDATE_TEAM_DATA:
      return {
        ...state,
        isLoading: false,
        message: action.data.Message,
        isSuccess: action.data.Code === 200,
      };
      case DELETE_TEAM_DATA:
        return {
          ...state,
          isLoading: false,
          message: action.data.Message,
          isSuccess: action.data.Code === 200,
        };
  

    default:
      return state;
  }
};
export default MessageReducer;
