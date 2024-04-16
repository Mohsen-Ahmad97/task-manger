import { employee } from "../../5-Employees/Employees";
import {
  DATA_ADD_EMPLOYEE,
  DATA_EMPLOYEE,
  DATA_UPDATE_EMPLOYEE,
  ERRO_EMPLOYEE,
  GET_DATA_EMPLOYEE,
} from "../Actions/Actions";

interface State {
  employee : employee[];
  MessageUpdate: string;
  Message: string;
  isLoading: boolean;
}

const initial: State = {
  employee : [],
  MessageUpdate: "",
  Message: "",
  isLoading: false,
};

const getEmployeeReducer = (state = initial, action: any) => {
  switch (action.type) {
    case GET_DATA_EMPLOYEE:
      return { ...state, isLoading: true };
    case DATA_EMPLOYEE:
      return { ...state, employee : action.data.Data, isLoading: false };
    case ERRO_EMPLOYEE:
      return { ...state, err: action.err,isLoading: false };
    case DATA_ADD_EMPLOYEE:
      return { ...state, Message: action.data.Message,isLoading: false };
    case DATA_UPDATE_EMPLOYEE:
      return { ...state, MessageUpdate: action.data.Message,isLoading: false };
    default:
      return state;
  }
};
export default getEmployeeReducer;
