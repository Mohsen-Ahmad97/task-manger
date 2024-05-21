
import { mission } from "../../models/General";
import {
  CREATE_DATA_MISSION,
  DATA_CREATE_MISSION,
  DATA_MISSION,
  DELETE_MISSION,
  ERRO_MISSION,
  GET_DATA_MISSION,
  UPDATE_MISSION,
} from "../Actions/Actions";

interface State {
  payload: mission[];
  isloading: boolean;
  message: string;
  isSuccess:boolean,
}
const intialstate: State = {
  payload: [],
  isloading: false,
  message: "",
  isSuccess:false
};

const getMissionReducer = (state = intialstate, action: any) => {
  switch (action.type) {
    case GET_DATA_MISSION:
      return { ...state, isloading: true };
    case DATA_MISSION:
      return {
        ...state,
        isloading: false,
        payload: action.response.Data,
       
      };
    case UPDATE_MISSION:
      return {
        ...state,
        isloading: false,
    
      };
      case DATA_CREATE_MISSION:
        return {
          ...state,
          isloading: false,
      
        };
    case DELETE_MISSION:
      return {
        ...state,
        isloading: false,
     
      };
    case ERRO_MISSION:
      return { ...state, isloading: false };
    default:
      return state;
  }
};
export default getMissionReducer;
