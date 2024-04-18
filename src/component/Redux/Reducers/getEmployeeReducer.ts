import { employee } from "../../Models/Modules";
import {
  DATA_ADD_EMPLOYEE,
  DATA_DELETE_EMPLOYEE,
  DATA_EMPLOYEE,
  DATA_UPDATE_EMPLOYEE,
  ERRO_ADD_EMPLOYEE,
  ERRO_EMPLOYEE,
  GET_DATA_EMPLOYEE,
} from "../Actions/Actions";

interface State {
  employee : employee[];
  MessageUpdate: string;
  MessageAdd: string;
  MessageDelete:string,
  isLoading: boolean;
}

const initial: State = {
  employee : [],
  MessageUpdate: "",
  MessageAdd: "",
  MessageDelete:"",
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
      return { ...state, MessageAdd: action.response.Message,isLoading: false };
      case ERRO_ADD_EMPLOYEE:
        return{...state,isLoading: false}
    case DATA_UPDATE_EMPLOYEE:
      return { ...state, MessageUpdate: action.response.Message,isLoading: false };
      case DATA_DELETE_EMPLOYEE:
      return { ...state, MessageDelete: action.response.Message,isLoading: false };
    default:
      return state;
  }
};
export default getEmployeeReducer;
