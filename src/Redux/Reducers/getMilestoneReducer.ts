import { milistone } from "../../models/General";
import {
  DATA_CREATE_MILESTONE,
  DATA_MILISTONE,
  DELETE_MILESTONE,
  ERRO_MILISTONE,
  GET_DATA_MILISTONE,
  UPDATE_MILESTONE,
} from "../Actions/Actions";

interface State {
  payload: milistone[];
  isloading: boolean;
  message: string;
  isSuccess: boolean;
}
const intialstate: State = {
  payload: [],
  isloading: false,
  message: "",
  isSuccess: false,
};

const getMilestoneReducer = (state = intialstate, action: any) => {
  switch (action.type) {
    case GET_DATA_MILISTONE:
      return { ...state, isloading: true };

    case DATA_MILISTONE:
      return {
        ...state,
        isloading: false,
        payload: action.response.Data,
      };
    case DATA_CREATE_MILESTONE:
      return {
        ...state,
        isloading: false,
      };
    case UPDATE_MILESTONE:
      return {
        ...state,
        isloading: false,
      };
    case DELETE_MILESTONE:
      return {
        ...state,
        isloading: false,
      };
    case ERRO_MILISTONE:
      return { ...state, isloading: false };
    default:
      return state;
  }
};
export default getMilestoneReducer;
