import { employee } from "../../5-Employees/Employees";
import {
  DATA_ADD_EMPLOYEE,
  DATA_EMPLOYEE,
  DATA_UPDATE_EMPLOYEE,
  ERRO_EMPLOYEE,
  GET_DATA_EMPLOYEE,
} from "../Actions/Actions";

interface State {
  payload: employee[];
  MessageUpdate: string;
  Message: string;
  isLoading: boolean;
}

const initial: State = {
  payload: [],
  MessageUpdate: "",
  Message: "",
  isLoading: false,
};

const getEmployeeReducer = (state = initial, action: any) => {
  switch (action.type) {
    case GET_DATA_EMPLOYEE:
      return { ...state, isLoading: true };
    case DATA_EMPLOYEE:
      return { ...state, payload: action.data.Data, isLoading: false };
    case ERRO_EMPLOYEE:
      return { ...state, err: action.err };
    case DATA_ADD_EMPLOYEE:
      return { ...state, Message: action.data.Message };
    case DATA_UPDATE_EMPLOYEE:
      return { ...state, MessageUpdate: action.data.Message };
    default:
      return state;
  }
};
export default getEmployeeReducer;
